const iosTransitionAnimation = () => import('./animations/ios.transition');
const mdTransitionAnimation = () => import('./animations/md.transition');
export function transition(opts) {
    return new Promise(resolve => {
        opts.queue.write(async () => {
            beforeTransition(opts);
            const animationBuilder = await getAnimationBuilder(opts);
            const ani = (animationBuilder)
                ? animation(animationBuilder, opts)
                : noAnimation(opts); // fast path for no animation
            resolve(ani);
        });
    });
}
async function getAnimationBuilder(opts) {
    if (!opts.leavingEl || opts.animated === false || opts.duration === 0) {
        return undefined;
    }
    if (opts.animationBuilder) {
        return opts.animationBuilder;
    }
    const builder = (opts.mode === 'ios')
        ? (await iosTransitionAnimation()).iosTransitionAnimation
        : (await mdTransitionAnimation()).mdTransitionAnimation;
    return builder;
}
function beforeTransition(opts) {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    setZIndex(enteringEl, leavingEl, opts.direction);
    if (opts.showGoBack) {
        enteringEl.classList.add('can-go-back');
    }
    else {
        enteringEl.classList.remove('can-go-back');
    }
    setPageHidden(enteringEl, false);
    if (leavingEl) {
        setPageHidden(leavingEl, false);
    }
}
export function setPageHidden(el, hidden) {
    if (hidden) {
        el.setAttribute('aria-hidden', 'true');
        el.classList.add('ion-page-hidden');
    }
    else {
        el.hidden = false;
        el.removeAttribute('aria-hidden');
        el.classList.remove('ion-page-hidden');
    }
}
async function animation(animationBuilder, opts) {
    await waitForReady(opts, true);
    const trns = await opts.animationCtrl.create(animationBuilder, opts.baseEl, opts);
    fireWillEvents(opts.window, opts.enteringEl, opts.leavingEl);
    await playTransition(trns, opts);
    if (trns.hasCompleted) {
        fireDidEvents(opts.window, opts.enteringEl, opts.leavingEl);
    }
    return trns;
}
async function noAnimation(opts) {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    if (enteringEl) {
        enteringEl.classList.remove('ion-page-invisible');
    }
    if (leavingEl) {
        leavingEl.classList.remove('ion-page-invisible');
    }
    await waitForReady(opts, false);
    fireWillEvents(opts.window, enteringEl, leavingEl);
    fireDidEvents(opts.window, enteringEl, leavingEl);
    return null;
}
async function waitForReady(opts, defaultDeep) {
    const deep = opts.deepWait != null ? opts.deepWait : defaultDeep;
    const promises = deep ? [
        deepReady(opts.enteringEl),
        deepReady(opts.leavingEl),
    ] : [
        shallowReady(opts.enteringEl),
        shallowReady(opts.leavingEl),
    ];
    await Promise.all(promises);
    await notifyViewReady(opts.viewIsReady, opts.enteringEl);
}
async function notifyViewReady(viewIsReady, enteringEl) {
    if (viewIsReady) {
        await viewIsReady(enteringEl);
    }
}
function playTransition(trans, opts) {
    const progressCallback = opts.progressCallback;
    const promise = new Promise(resolve => trans.onFinish(resolve));
    // cool, let's do this, start the transition
    if (progressCallback) {
        // this is a swipe to go back, just get the transition progress ready
        // kick off the swipe animation start
        trans.progressStart();
        progressCallback(trans);
    }
    else {
        // only the top level transition should actually start "play"
        // kick it off and let it play through
        // ******** DOM WRITE ****************
        trans.play();
    }
    // create a callback for when the animation is done
    return promise;
}
function fireWillEvents(win, enteringEl, leavingEl) {
    lifecycle(win, leavingEl, "ionViewWillLeave" /* WillLeave */);
    lifecycle(win, enteringEl, "ionViewWillEnter" /* WillEnter */);
}
function fireDidEvents(win, enteringEl, leavingEl) {
    lifecycle(win, enteringEl, "ionViewDidEnter" /* DidEnter */);
    lifecycle(win, leavingEl, "ionViewDidLeave" /* DidLeave */);
}
export function lifecycle(win, el, eventName) {
    if (el) {
        const CEvent = win.CustomEvent;
        const event = new CEvent(eventName, {
            bubbles: false,
            cancelable: false,
        });
        el.dispatchEvent(event);
    }
}
function shallowReady(el) {
    if (el && el.componentOnReady) {
        return el.componentOnReady();
    }
    return Promise.resolve();
}
async function deepReady(el) {
    const element = el;
    if (element) {
        if (element.componentOnReady) {
            const stencilEl = await element.componentOnReady();
            if (stencilEl) {
                return;
            }
        }
        await Promise.all(Array.from(element.children).map(deepReady));
    }
}
function setZIndex(enteringEl, leavingEl, direction) {
    if (enteringEl) {
        enteringEl.style.zIndex = (direction === 'back')
            ? '99'
            : '101';
    }
    if (leavingEl) {
        leavingEl.style.zIndex = '100';
    }
}
