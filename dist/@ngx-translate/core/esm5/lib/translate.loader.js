/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends } from "tslib";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
/**
 * @abstract
 */
var /**
 * @abstract
 */
TranslateLoader = /** @class */ (function () {
    function TranslateLoader() {
    }
    return TranslateLoader;
}());
/**
 * @abstract
 */
export { TranslateLoader };
if (false) {
    /**
     * @abstract
     * @param {?} lang
     * @return {?}
     */
    TranslateLoader.prototype.getTranslation = function (lang) { };
}
/**
 * This loader is just a placeholder that does nothing, in case you don't need a loader at all
 */
var TranslateFakeLoader = /** @class */ (function (_super) {
    __extends(TranslateFakeLoader, _super);
    function TranslateFakeLoader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    TranslateFakeLoader.prototype.getTranslation = /**
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        return of({});
    };
    TranslateFakeLoader.decorators = [
        { type: Injectable }
    ];
    return TranslateFakeLoader;
}(TranslateLoader));
export { TranslateFakeLoader };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLmxvYWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtdHJhbnNsYXRlL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdHJhbnNsYXRlLmxvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFhLEVBQUUsRUFBQyxNQUFNLE1BQU0sQ0FBQzs7OztBQUVwQzs7OztJQUFBO0lBRUEsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7Ozs7Ozs7O0lBREMsK0RBQXVEOzs7OztBQU16RDtJQUN5Qyx1Q0FBZTtJQUR4RDs7SUFLQSxDQUFDOzs7OztJQUhDLDRDQUFjOzs7O0lBQWQsVUFBZSxJQUFZO1FBQ3pCLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7O2dCQUpGLFVBQVU7O0lBS1gsMEJBQUM7Q0FBQSxBQUxELENBQ3lDLGVBQWUsR0FJdkQ7U0FKWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZSwgb2Z9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVHJhbnNsYXRlTG9hZGVyIHtcclxuICBhYnN0cmFjdCBnZXRUcmFuc2xhdGlvbihsYW5nOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGxvYWRlciBpcyBqdXN0IGEgcGxhY2Vob2xkZXIgdGhhdCBkb2VzIG5vdGhpbmcsIGluIGNhc2UgeW91IGRvbid0IG5lZWQgYSBsb2FkZXIgYXQgYWxsXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVGYWtlTG9hZGVyIGV4dGVuZHMgVHJhbnNsYXRlTG9hZGVyIHtcclxuICBnZXRUcmFuc2xhdGlvbihsYW5nOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIG9mKHt9KTtcclxuICB9XHJcbn1cclxuIl19