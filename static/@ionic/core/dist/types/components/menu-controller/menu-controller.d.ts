import { Animation, AnimationBuilder, Menu } from '../../interface';
import { menuOverlayAnimation } from './animations/overlay';
import { menuPushAnimation } from './animations/push';
import { menuRevealAnimation } from './animations/reveal';
export declare class MenuController {
    private menus;
    private menuAnimations;
    animationCtrl: HTMLIonAnimationControllerElement;
    constructor();
    /**
     * Open the menu.
     */
    open(menuId?: string): Promise<boolean>;
    /**
     * Close the menu. If no menu is specified, then it will close any menu
     * that is open. If a menu is specified, it will close that menu.
     */
    close(menuId?: string): Promise<boolean>;
    /**
     * Toggle the menu. If it's closed, it will open, and if opened, it
     * will close.
     */
    toggle(menuId?: string): Promise<boolean>;
    /**
     * Used to enable or disable a menu. For example, there could be multiple
     * left menus, but only one of them should be able to be opened at the same
     * time. If there are multiple menus on the same side, then enabling one menu
     * will also automatically disable all the others that are on the same side.
     */
    enable(shouldEnable: boolean, menuId?: string): HTMLIonMenuElement | null;
    /**
     * Used to enable or disable the ability to swipe open the menu.
     */
    swipeEnable(shouldEnable: boolean, menuId?: string): HTMLIonMenuElement | null;
    /**
     * Returns true if the specified menu is open. If the menu is not specified, it
     * will return true if any menu is currently open.
     */
    isOpen(menuId?: string): boolean;
    /**
     * Returns true if the specified menu is enabled.
     */
    isEnabled(menuId?: string): boolean;
    /**
     * Used to get a menu instance. If a menu is not provided then it will
     * return the first menu found. If the specified menu is `left` or `right`, then
     * it will return the enabled menu on that side. Otherwise, it will try to find
     * the menu using the menu's `id` property. If a menu is not found then it will
     * return `null`.
     */
    get(menuId?: string): HTMLIonMenuElement | null;
    /**
     * Returns the instance of the menu already opened, otherwise `null`.
     */
    getOpen(): HTMLIonMenuElement | null;
    /**
     * Returns an array of all menu instances.
     */
    getMenus(): HTMLIonMenuElement[];
    /**
     * Returns true if any menu is currently animating.
     */
    isAnimating(): boolean;
    _register(menu: Menu): void;
    _unregister(menu: Menu): void;
    _setActiveMenu(menu: Menu): void;
    _setOpen(menu: Menu, shouldOpen: boolean, animated: boolean): Promise<boolean>;
    createAnimation(type: string, menuCmp: Menu): Promise<Animation>;
    registerAnimation(name: string, animation: AnimationBuilder): void;
    private find;
}
export { menuOverlayAnimation, menuPushAnimation, menuRevealAnimation };
