/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter } from "@angular/core";
var TranslateStore = /** @class */ (function () {
    function TranslateStore() {
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
    return TranslateStore;
}());
export { TranslateStore };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnN0b3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC10cmFuc2xhdGUvY29yZS8iLCJzb3VyY2VzIjpbImxpYi90cmFuc2xhdGUuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFHM0M7SUFBQTs7OztRQVNTLGdCQUFXLEdBQVcsSUFBSSxDQUFDLFdBQVcsQ0FBQzs7OztRQUt2QyxpQkFBWSxHQUFRLEVBQUUsQ0FBQzs7OztRQUt2QixVQUFLLEdBQWtCLEVBQUUsQ0FBQzs7Ozs7OztRQVExQix3QkFBbUIsR0FBeUMsSUFBSSxZQUFZLEVBQTBCLENBQUM7Ozs7Ozs7UUFRdkcsaUJBQVksR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7Ozs7Ozs7UUFRbEYsd0JBQW1CLEdBQXlDLElBQUksWUFBWSxFQUEwQixDQUFDO0lBQ2hILENBQUM7SUFBRCxxQkFBQztBQUFELENBQUMsQUE1Q0QsSUE0Q0M7Ozs7Ozs7SUF4Q0MscUNBQTJCOzs7OztJQUszQixxQ0FBOEM7Ozs7O0lBSzlDLHNDQUE4Qjs7Ozs7SUFLOUIsK0JBQWlDOzs7Ozs7OztJQVFqQyw2Q0FBOEc7Ozs7Ozs7O0lBUTlHLHNDQUF5Rjs7Ozs7Ozs7SUFRekYsNkNBQThHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFdmVudEVtaXR0ZXJ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7RGVmYXVsdExhbmdDaGFuZ2VFdmVudCwgTGFuZ0NoYW5nZUV2ZW50LCBUcmFuc2xhdGlvbkNoYW5nZUV2ZW50fSBmcm9tIFwiLi90cmFuc2xhdGUuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVN0b3JlIHtcclxuICAvKipcclxuICAgKiBUaGUgZGVmYXVsdCBsYW5nIHRvIGZhbGxiYWNrIHdoZW4gdHJhbnNsYXRpb25zIGFyZSBtaXNzaW5nIG9uIHRoZSBjdXJyZW50IGxhbmdcclxuICAgKi9cclxuICBwdWJsaWMgZGVmYXVsdExhbmc6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGxhbmcgY3VycmVudGx5IHVzZWRcclxuICAgKi9cclxuICBwdWJsaWMgY3VycmVudExhbmc6IHN0cmluZyA9IHRoaXMuZGVmYXVsdExhbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIGEgbGlzdCBvZiB0cmFuc2xhdGlvbnMgcGVyIGxhbmdcclxuICAgKi9cclxuICBwdWJsaWMgdHJhbnNsYXRpb25zOiBhbnkgPSB7fTtcclxuXHJcbiAgLyoqXHJcbiAgICogYW4gYXJyYXkgb2YgbGFuZ3NcclxuICAgKi9cclxuICBwdWJsaWMgbGFuZ3M6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogQW4gRXZlbnRFbWl0dGVyIHRvIGxpc3RlbiB0byB0cmFuc2xhdGlvbiBjaGFuZ2UgZXZlbnRzXHJcbiAgICogb25UcmFuc2xhdGlvbkNoYW5nZS5zdWJzY3JpYmUoKHBhcmFtczogVHJhbnNsYXRpb25DaGFuZ2VFdmVudCkgPT4ge1xyXG4gICAgICogICAgIC8vIGRvIHNvbWV0aGluZ1xyXG4gICAgICogfSk7XHJcbiAgICovXHJcbiAgcHVibGljIG9uVHJhbnNsYXRpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGlvbkNoYW5nZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VHJhbnNsYXRpb25DaGFuZ2VFdmVudD4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQW4gRXZlbnRFbWl0dGVyIHRvIGxpc3RlbiB0byBsYW5nIGNoYW5nZSBldmVudHNcclxuICAgKiBvbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKChwYXJhbXM6IExhbmdDaGFuZ2VFdmVudCkgPT4ge1xyXG4gICAgICogICAgIC8vIGRvIHNvbWV0aGluZ1xyXG4gICAgICogfSk7XHJcbiAgICovXHJcbiAgcHVibGljIG9uTGFuZ0NoYW5nZTogRXZlbnRFbWl0dGVyPExhbmdDaGFuZ2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPExhbmdDaGFuZ2VFdmVudD4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQW4gRXZlbnRFbWl0dGVyIHRvIGxpc3RlbiB0byBkZWZhdWx0IGxhbmcgY2hhbmdlIGV2ZW50c1xyXG4gICAqIG9uRGVmYXVsdExhbmdDaGFuZ2Uuc3Vic2NyaWJlKChwYXJhbXM6IERlZmF1bHRMYW5nQ2hhbmdlRXZlbnQpID0+IHtcclxuICAgICAqICAgICAvLyBkbyBzb21ldGhpbmdcclxuICAgICAqIH0pO1xyXG4gICAqL1xyXG4gIHB1YmxpYyBvbkRlZmF1bHRMYW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGVmYXVsdExhbmdDaGFuZ2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPERlZmF1bHRMYW5nQ2hhbmdlRXZlbnQ+KCk7XHJcbn1cclxuIl19