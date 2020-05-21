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
var /**
 * @abstract
 */
MissingTranslationHandler = /** @class */ (function () {
    function MissingTranslationHandler() {
    }
    return MissingTranslationHandler;
}());
/**
 * @abstract
 */
export { MissingTranslationHandler };
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
var FakeMissingTranslationHandler = /** @class */ (function () {
    function FakeMissingTranslationHandler() {
    }
    /**
     * @param {?} params
     * @return {?}
     */
    FakeMissingTranslationHandler.prototype.handle = /**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        return params.key;
    };
    FakeMissingTranslationHandler.decorators = [
        { type: Injectable }
    ];
    return FakeMissingTranslationHandler;
}());
export { FakeMissingTranslationHandler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzc2luZy10cmFuc2xhdGlvbi1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC10cmFuc2xhdGUvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9taXNzaW5nLXRyYW5zbGF0aW9uLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFHekMscURBZUM7Ozs7OztJQVhDLDhDQUFZOzs7OztJQUtaLDJEQUFtQzs7Ozs7SUFLbkMsNERBQTJCOzs7OztBQUc3Qjs7OztJQUFBO0lBV0EsQ0FBQztJQUFELGdDQUFDO0FBQUQsQ0FBQyxBQVhELElBV0M7Ozs7Ozs7Ozs7Ozs7Ozs7SUFEQyxtRUFBOEQ7Ozs7O0FBTWhFO0lBQUE7SUFLQSxDQUFDOzs7OztJQUhDLDhDQUFNOzs7O0lBQU4sVUFBTyxNQUF1QztRQUM1QyxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQzs7Z0JBSkYsVUFBVTs7SUFLWCxvQ0FBQztDQUFBLEFBTEQsSUFLQztTQUpZLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tIFwiLi90cmFuc2xhdGUuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyUGFyYW1zIHtcclxuICAvKipcclxuICAgKiB0aGUga2V5IHRoYXQncyBtaXNzaW5nIGluIHRyYW5zbGF0aW9uIGZpbGVzXHJcbiAgICovXHJcbiAga2V5OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIGFuIGluc3RhbmNlIG9mIHRoZSBzZXJ2aWNlIHRoYXQgd2FzIHVuYWJsZSB0byB0cmFuc2xhdGUgdGhlIGtleS5cclxuICAgKi9cclxuICB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlO1xyXG5cclxuICAvKipcclxuICAgKiBpbnRlcnBvbGF0aW9uIHBhcmFtcyB0aGF0IHdlcmUgcGFzc2VkIGFsb25nIGZvciB0cmFuc2xhdGluZyB0aGUgZ2l2ZW4ga2V5LlxyXG4gICAqL1xyXG4gIGludGVycG9sYXRlUGFyYW1zPzogT2JqZWN0O1xyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciB7XHJcbiAgLyoqXHJcbiAgICogQSBmdW5jdGlvbiB0aGF0IGhhbmRsZXMgbWlzc2luZyB0cmFuc2xhdGlvbnMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gcGFyYW1zIGNvbnRleHQgZm9yIHJlc29sdmluZyBhIG1pc3NpbmcgdHJhbnNsYXRpb25cclxuICAgKiBAcmV0dXJucyBhIHZhbHVlIG9yIGFuIG9ic2VydmFibGVcclxuICAgKiBJZiBpdCByZXR1cm5zIGEgdmFsdWUsIHRoZW4gdGhpcyB2YWx1ZSBpcyB1c2VkLlxyXG4gICAqIElmIGl0IHJldHVybiBhbiBvYnNlcnZhYmxlLCB0aGUgdmFsdWUgcmV0dXJuZWQgYnkgdGhpcyBvYnNlcnZhYmxlIHdpbGwgYmUgdXNlZCAoZXhjZXB0IGlmIHRoZSBtZXRob2Qgd2FzIFwiaW5zdGFudFwiKS5cclxuICAgKiBJZiBpdCBkb2Vzbid0IHJldHVybiB0aGVuIHRoZSBrZXkgd2lsbCBiZSB1c2VkIGFzIGEgdmFsdWVcclxuICAgKi9cclxuICBhYnN0cmFjdCBoYW5kbGUocGFyYW1zOiBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyUGFyYW1zKTogYW55O1xyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBoYW5kbGVyIGlzIGp1c3QgYSBwbGFjZWhvbGRlciB0aGF0IGRvZXMgbm90aGluZywgaW4gY2FzZSB5b3UgZG9uJ3QgbmVlZCBhIG1pc3NpbmcgdHJhbnNsYXRpb24gaGFuZGxlciBhdCBhbGxcclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZha2VNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyIGltcGxlbWVudHMgTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciB7XHJcbiAgaGFuZGxlKHBhcmFtczogTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlclBhcmFtcyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gcGFyYW1zLmtleTtcclxuICB9XHJcbn1cclxuIl19