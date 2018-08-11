export function startStatusTap(win, queue) {
    queue.read(async () => {
        const width = win.innerWidth;
        const height = win.innerWidth;
        const el = win.document.elementFromPoint(width / 2, height / 2);
        if (!el) {
            return;
        }
        const contentEl = el.closest('ion-content');
        if (contentEl) {
            await contentEl.componentOnReady();
            queue.write(() => {
                contentEl.getScrollElement().scrollToTop(300);
            });
        }
    });
}
