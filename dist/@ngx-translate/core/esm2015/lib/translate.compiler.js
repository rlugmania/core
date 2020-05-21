/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
/**
 * @abstract
 */
export class TranslateCompiler {
}
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
export class TranslateFakeCompiler extends TranslateCompiler {
    /**
     * @param {?} value
     * @param {?} lang
     * @return {?}
     */
    compile(value, lang) {
        return value;
    }
    /**
     * @param {?} translations
     * @param {?} lang
     * @return {?}
     */
    compileTranslations(translations, lang) {
        return translations;
    }
}
TranslateFakeCompiler.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLmNvbXBpbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC10cmFuc2xhdGUvY29yZS8iLCJzb3VyY2VzIjpbImxpYi90cmFuc2xhdGUuY29tcGlsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFFekMsTUFBTSxPQUFnQixpQkFBaUI7Q0FJdEM7Ozs7Ozs7O0lBSEMsaUVBQWlFOzs7Ozs7O0lBRWpFLG9GQUFtRTs7Ozs7QUFPckUsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGlCQUFpQjs7Ozs7O0lBQzFELE9BQU8sQ0FBQyxLQUFhLEVBQUUsSUFBWTtRQUNqQyxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7OztJQUVELG1CQUFtQixDQUFDLFlBQWlCLEVBQUUsSUFBWTtRQUNqRCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDOzs7WUFSRixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRyYW5zbGF0ZUNvbXBpbGVyIHtcclxuICBhYnN0cmFjdCBjb21waWxlKHZhbHVlOiBzdHJpbmcsIGxhbmc6IHN0cmluZyk6IHN0cmluZyB8IEZ1bmN0aW9uO1xyXG5cclxuICBhYnN0cmFjdCBjb21waWxlVHJhbnNsYXRpb25zKHRyYW5zbGF0aW9uczogYW55LCBsYW5nOiBzdHJpbmcpOiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNvbXBpbGVyIGlzIGp1c3QgYSBwbGFjZWhvbGRlciB0aGF0IGRvZXMgbm90aGluZywgaW4gY2FzZSB5b3UgZG9uJ3QgbmVlZCBhIGNvbXBpbGVyIGF0IGFsbFxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlRmFrZUNvbXBpbGVyIGV4dGVuZHMgVHJhbnNsYXRlQ29tcGlsZXIge1xyXG4gIGNvbXBpbGUodmFsdWU6IHN0cmluZywgbGFuZzogc3RyaW5nKTogc3RyaW5nIHwgRnVuY3Rpb24ge1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgY29tcGlsZVRyYW5zbGF0aW9ucyh0cmFuc2xhdGlvbnM6IGFueSwgbGFuZzogc3RyaW5nKTogYW55IHtcclxuICAgIHJldHVybiB0cmFuc2xhdGlvbnM7XHJcbiAgfVxyXG59XHJcbiJdfQ==