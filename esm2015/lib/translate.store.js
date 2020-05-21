/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter } from "@angular/core";
export class TranslateStore {
    constructor() {
        /**
         * The lang currently used
         */
        this.currentLang = this.defaultLang;
        /**
         * a list of translations per lang
         */
        this.translations = {};
        /**
         * an array of langs
         */
        this.langs = [];
        /**
         * An EventEmitter to listen to translation change events
         * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
         *     // do something
         * });
         */
        this.onTranslationChange = new EventEmitter();
        /**
         * An EventEmitter to listen to lang change events
         * onLangChange.subscribe((params: LangChangeEvent) => {
         *     // do something
         * });
         */
        this.onLangChange = new EventEmitter();
        /**
         * An EventEmitter to listen to default lang change events
         * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
         *     // do something
         * });
         */
        this.onDefaultLangChange = new EventEmitter();
    }
}
if (false) {
    /**
     * The default lang to fallback when translations are missing on the current lang
     * @type {?}
     */
    TranslateStore.prototype.defaultLang;
    /**
     * The lang currently used
     * @type {?}
     */
    TranslateStore.prototype.currentLang;
    /**
     * a list of translations per lang
     * @type {?}
     */
    TranslateStore.prototype.translations;
    /**
     * an array of langs
     * @type {?}
     */
    TranslateStore.prototype.langs;
    /**
     * An EventEmitter to listen to translation change events
     * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
     *     // do something
     * });
     * @type {?}
     */
    TranslateStore.prototype.onTranslationChange;
    /**
     * An EventEmitter to listen to lang change events
     * onLangChange.subscribe((params: LangChangeEvent) => {
     *     // do something
     * });
     * @type {?}
     */
    TranslateStore.prototype.onLangChange;
    /**
     * An EventEmitter to listen to default lang change events
     * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
     *     // do something
     * });
     * @type {?}
     */
    TranslateStore.prototype.onDefaultLangChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnN0b3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC10cmFuc2xhdGUvY29yZS8iLCJzb3VyY2VzIjpbImxpYi90cmFuc2xhdGUuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFHM0MsTUFBTSxPQUFPLGNBQWM7SUFBM0I7Ozs7UUFTUyxnQkFBVyxHQUFXLElBQUksQ0FBQyxXQUFXLENBQUM7Ozs7UUFLdkMsaUJBQVksR0FBUSxFQUFFLENBQUM7Ozs7UUFLdkIsVUFBSyxHQUFrQixFQUFFLENBQUM7Ozs7Ozs7UUFRMUIsd0JBQW1CLEdBQXlDLElBQUksWUFBWSxFQUEwQixDQUFDOzs7Ozs7O1FBUXZHLGlCQUFZLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDOzs7Ozs7O1FBUWxGLHdCQUFtQixHQUF5QyxJQUFJLFlBQVksRUFBMEIsQ0FBQztJQUNoSCxDQUFDO0NBQUE7Ozs7OztJQXhDQyxxQ0FBMkI7Ozs7O0lBSzNCLHFDQUE4Qzs7Ozs7SUFLOUMsc0NBQThCOzs7OztJQUs5QiwrQkFBaUM7Ozs7Ozs7O0lBUWpDLDZDQUE4Rzs7Ozs7Ozs7SUFROUcsc0NBQXlGOzs7Ozs7OztJQVF6Riw2Q0FBOEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtEZWZhdWx0TGFuZ0NoYW5nZUV2ZW50LCBMYW5nQ2hhbmdlRXZlbnQsIFRyYW5zbGF0aW9uQ2hhbmdlRXZlbnR9IGZyb20gXCIuL3RyYW5zbGF0ZS5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlU3RvcmUge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkZWZhdWx0IGxhbmcgdG8gZmFsbGJhY2sgd2hlbiB0cmFuc2xhdGlvbnMgYXJlIG1pc3Npbmcgb24gdGhlIGN1cnJlbnQgbGFuZ1xyXG4gICAqL1xyXG4gIHB1YmxpYyBkZWZhdWx0TGFuZzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgbGFuZyBjdXJyZW50bHkgdXNlZFxyXG4gICAqL1xyXG4gIHB1YmxpYyBjdXJyZW50TGFuZzogc3RyaW5nID0gdGhpcy5kZWZhdWx0TGFuZztcclxuXHJcbiAgLyoqXHJcbiAgICogYSBsaXN0IG9mIHRyYW5zbGF0aW9ucyBwZXIgbGFuZ1xyXG4gICAqL1xyXG4gIHB1YmxpYyB0cmFuc2xhdGlvbnM6IGFueSA9IHt9O1xyXG5cclxuICAvKipcclxuICAgKiBhbiBhcnJheSBvZiBsYW5nc1xyXG4gICAqL1xyXG4gIHB1YmxpYyBsYW5nczogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG5cclxuICAvKipcclxuICAgKiBBbiBFdmVudEVtaXR0ZXIgdG8gbGlzdGVuIHRvIHRyYW5zbGF0aW9uIGNoYW5nZSBldmVudHNcclxuICAgKiBvblRyYW5zbGF0aW9uQ2hhbmdlLnN1YnNjcmliZSgocGFyYW1zOiBUcmFuc2xhdGlvbkNoYW5nZUV2ZW50KSA9PiB7XHJcbiAgICAgKiAgICAgLy8gZG8gc29tZXRoaW5nXHJcbiAgICAgKiB9KTtcclxuICAgKi9cclxuICBwdWJsaWMgb25UcmFuc2xhdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPFRyYW5zbGF0aW9uQ2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGlvbkNoYW5nZUV2ZW50PigpO1xyXG5cclxuICAvKipcclxuICAgKiBBbiBFdmVudEVtaXR0ZXIgdG8gbGlzdGVuIHRvIGxhbmcgY2hhbmdlIGV2ZW50c1xyXG4gICAqIG9uTGFuZ0NoYW5nZS5zdWJzY3JpYmUoKHBhcmFtczogTGFuZ0NoYW5nZUV2ZW50KSA9PiB7XHJcbiAgICAgKiAgICAgLy8gZG8gc29tZXRoaW5nXHJcbiAgICAgKiB9KTtcclxuICAgKi9cclxuICBwdWJsaWMgb25MYW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TGFuZ0NoYW5nZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TGFuZ0NoYW5nZUV2ZW50PigpO1xyXG5cclxuICAvKipcclxuICAgKiBBbiBFdmVudEVtaXR0ZXIgdG8gbGlzdGVuIHRvIGRlZmF1bHQgbGFuZyBjaGFuZ2UgZXZlbnRzXHJcbiAgICogb25EZWZhdWx0TGFuZ0NoYW5nZS5zdWJzY3JpYmUoKHBhcmFtczogRGVmYXVsdExhbmdDaGFuZ2VFdmVudCkgPT4ge1xyXG4gICAgICogICAgIC8vIGRvIHNvbWV0aGluZ1xyXG4gICAgICogfSk7XHJcbiAgICovXHJcbiAgcHVibGljIG9uRGVmYXVsdExhbmdDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEZWZhdWx0TGFuZ0NoYW5nZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8RGVmYXVsdExhbmdDaGFuZ2VFdmVudD4oKTtcclxufVxyXG4iXX0=