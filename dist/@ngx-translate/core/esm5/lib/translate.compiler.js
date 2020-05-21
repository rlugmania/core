/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends } from "tslib";
import { Injectable } from "@angular/core";
/**
 * @abstract
 */
var /**
 * @abstract
 */
TranslateCompiler = /** @class */ (function () {
    function TranslateCompiler() {
    }
    return TranslateCompiler;
}());
/**
 * @abstract
 */
export { TranslateCompiler };
if (false) {
    /**
     * @abstract
     * @param {?} value
     * @param {?} lang
     * @return {?}
     */
    TranslateCompiler.prototype.compile = function (value, lang) { };
    /**
     * @abstract
     * @param {?} translations
     * @param {?} lang
     * @return {?}
     */
    TranslateCompiler.prototype.compileTranslations = function (translations, lang) { };
}
/**
 * This compiler is just a placeholder that does nothing, in case you don't need a compiler at all
 */
var TranslateFakeCompiler = /** @class */ (function (_super) {
    __extends(TranslateFakeCompiler, _super);
    function TranslateFakeCompiler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} value
     * @param {?} lang
     * @return {?}
     */
    TranslateFakeCompiler.prototype.compile = /**
     * @param {?} value
     * @param {?} lang
     * @return {?}
     */
    function (value, lang) {
        return value;
    };
    /**
     * @param {?} translations
     * @param {?} lang
     * @return {?}
     */
    TranslateFakeCompiler.prototype.compileTranslations = /**
     * @param {?} translations
     * @param {?} lang
     * @return {?}
     */
    function (translations, lang) {
        return translations;
    };
    TranslateFakeCompiler.decorators = [
        { type: Injectable }
    ];
    return TranslateFakeCompiler;
}(TranslateCompiler));
export { TranslateFakeCompiler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLmNvbXBpbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC10cmFuc2xhdGUvY29yZS8iLCJzb3VyY2VzIjpbImxpYi90cmFuc2xhdGUuY29tcGlsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXpDOzs7O0lBQUE7SUFJQSxDQUFDO0lBQUQsd0JBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7Ozs7Ozs7Ozs7O0lBSEMsaUVBQWlFOzs7Ozs7O0lBRWpFLG9GQUFtRTs7Ozs7QUFNckU7SUFDMkMseUNBQWlCO0lBRDVEOztJQVNBLENBQUM7Ozs7OztJQVBDLHVDQUFPOzs7OztJQUFQLFVBQVEsS0FBYSxFQUFFLElBQVk7UUFDakMsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7Ozs7SUFFRCxtREFBbUI7Ozs7O0lBQW5CLFVBQW9CLFlBQWlCLEVBQUUsSUFBWTtRQUNqRCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDOztnQkFSRixVQUFVOztJQVNYLDRCQUFDO0NBQUEsQUFURCxDQUMyQyxpQkFBaUIsR0FRM0Q7U0FSWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVHJhbnNsYXRlQ29tcGlsZXIge1xyXG4gIGFic3RyYWN0IGNvbXBpbGUodmFsdWU6IHN0cmluZywgbGFuZzogc3RyaW5nKTogc3RyaW5nIHwgRnVuY3Rpb247XHJcblxyXG4gIGFic3RyYWN0IGNvbXBpbGVUcmFuc2xhdGlvbnModHJhbnNsYXRpb25zOiBhbnksIGxhbmc6IHN0cmluZyk6IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgY29tcGlsZXIgaXMganVzdCBhIHBsYWNlaG9sZGVyIHRoYXQgZG9lcyBub3RoaW5nLCBpbiBjYXNlIHlvdSBkb24ndCBuZWVkIGEgY29tcGlsZXIgYXQgYWxsXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVGYWtlQ29tcGlsZXIgZXh0ZW5kcyBUcmFuc2xhdGVDb21waWxlciB7XHJcbiAgY29tcGlsZSh2YWx1ZTogc3RyaW5nLCBsYW5nOiBzdHJpbmcpOiBzdHJpbmcgfCBGdW5jdGlvbiB7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBjb21waWxlVHJhbnNsYXRpb25zKHRyYW5zbGF0aW9uczogYW55LCBsYW5nOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRyYW5zbGF0aW9ucztcclxuICB9XHJcbn1cclxuIl19