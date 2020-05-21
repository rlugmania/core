/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
/**
 * @record
 */
export function MissingTranslationHandlerParams() { }
if (false) {
    /**
     * the key that's missing in translation files
     * @type {?}
     */
    MissingTranslationHandlerParams.prototype.key;
    /**
     * an instance of the service that was unable to translate the key.
     * @type {?}
     */
    MissingTranslationHandlerParams.prototype.translateService;
    /**
     * interpolation params that were passed along for translating the given key.
     * @type {?|undefined}
     */
    MissingTranslationHandlerParams.prototype.interpolateParams;
}
/**
 * @abstract
 */
export class MissingTranslationHandler {
}
if (false) {
    /**
     * A function that handles missing translations.
     *
     * @abstract
     * @param {?} params context for resolving a missing translation
     * @return {?} a value or an observable
     * If it returns a value, then this value is used.
     * If it return an observable, the value returned by this observable will be used (except if the method was "instant").
     * If it doesn't return then the key will be used as a value
     */
    MissingTranslationHandler.prototype.handle = function (params) { };
}
/**
 * This handler is just a placeholder that does nothing, in case you don't need a missing translation handler at all
 */
export class FakeMissingTranslationHandler {
    /**
     * @param {?} params
     * @return {?}
     */
    handle(params) {
        return params.key;
    }
}
FakeMissingTranslationHandler.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzc2luZy10cmFuc2xhdGlvbi1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC10cmFuc2xhdGUvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9taXNzaW5nLXRyYW5zbGF0aW9uLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFHekMscURBZUM7Ozs7OztJQVhDLDhDQUFZOzs7OztJQUtaLDJEQUFtQzs7Ozs7SUFLbkMsNERBQTJCOzs7OztBQUc3QixNQUFNLE9BQWdCLHlCQUF5QjtDQVc5Qzs7Ozs7Ozs7Ozs7O0lBREMsbUVBQThEOzs7OztBQU9oRSxNQUFNLE9BQU8sNkJBQTZCOzs7OztJQUN4QyxNQUFNLENBQUMsTUFBdUM7UUFDNUMsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ3BCLENBQUM7OztZQUpGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7VHJhbnNsYXRlU2VydmljZX0gZnJvbSBcIi4vdHJhbnNsYXRlLnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlclBhcmFtcyB7XHJcbiAgLyoqXHJcbiAgICogdGhlIGtleSB0aGF0J3MgbWlzc2luZyBpbiB0cmFuc2xhdGlvbiBmaWxlc1xyXG4gICAqL1xyXG4gIGtleTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBhbiBpbnN0YW5jZSBvZiB0aGUgc2VydmljZSB0aGF0IHdhcyB1bmFibGUgdG8gdHJhbnNsYXRlIHRoZSBrZXkuXHJcbiAgICovXHJcbiAgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZTtcclxuXHJcbiAgLyoqXHJcbiAgICogaW50ZXJwb2xhdGlvbiBwYXJhbXMgdGhhdCB3ZXJlIHBhc3NlZCBhbG9uZyBmb3IgdHJhbnNsYXRpbmcgdGhlIGdpdmVuIGtleS5cclxuICAgKi9cclxuICBpbnRlcnBvbGF0ZVBhcmFtcz86IE9iamVjdDtcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIge1xyXG4gIC8qKlxyXG4gICAqIEEgZnVuY3Rpb24gdGhhdCBoYW5kbGVzIG1pc3NpbmcgdHJhbnNsYXRpb25zLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHBhcmFtcyBjb250ZXh0IGZvciByZXNvbHZpbmcgYSBtaXNzaW5nIHRyYW5zbGF0aW9uXHJcbiAgICogQHJldHVybnMgYSB2YWx1ZSBvciBhbiBvYnNlcnZhYmxlXHJcbiAgICogSWYgaXQgcmV0dXJucyBhIHZhbHVlLCB0aGVuIHRoaXMgdmFsdWUgaXMgdXNlZC5cclxuICAgKiBJZiBpdCByZXR1cm4gYW4gb2JzZXJ2YWJsZSwgdGhlIHZhbHVlIHJldHVybmVkIGJ5IHRoaXMgb2JzZXJ2YWJsZSB3aWxsIGJlIHVzZWQgKGV4Y2VwdCBpZiB0aGUgbWV0aG9kIHdhcyBcImluc3RhbnRcIikuXHJcbiAgICogSWYgaXQgZG9lc24ndCByZXR1cm4gdGhlbiB0aGUga2V5IHdpbGwgYmUgdXNlZCBhcyBhIHZhbHVlXHJcbiAgICovXHJcbiAgYWJzdHJhY3QgaGFuZGxlKHBhcmFtczogTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlclBhcmFtcyk6IGFueTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgaGFuZGxlciBpcyBqdXN0IGEgcGxhY2Vob2xkZXIgdGhhdCBkb2VzIG5vdGhpbmcsIGluIGNhc2UgeW91IGRvbid0IG5lZWQgYSBtaXNzaW5nIHRyYW5zbGF0aW9uIGhhbmRsZXIgYXQgYWxsXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGYWtlTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciBpbXBsZW1lbnRzIE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIge1xyXG4gIGhhbmRsZShwYXJhbXM6IE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXJQYXJhbXMpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHBhcmFtcy5rZXk7XHJcbiAgfVxyXG59XHJcbiJdfQ==