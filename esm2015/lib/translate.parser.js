/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { isDefined } from "./util";
/**
 * @abstract
 */
export class TranslateParser {
}
if (false) {
    /**
     * Interpolates a string to replace parameters
     * "This is a {{ key }}" ==> "This is a value", with params = { key: "value" }
     * @abstract
     * @param {?} expr
     * @param {?=} params
     * @return {?}
     */
    TranslateParser.prototype.interpolate = function (expr, params) { };
    /**
     * Gets a value from an object by composed key
     * parser.getValue({ key1: { keyA: 'valueI' }}, 'key1.keyA') ==> 'valueI'
     * @abstract
     * @param {?} target
     * @param {?} key
     * @return {?}
     */
    TranslateParser.prototype.getValue = function (target, key) { };
}
export class TranslateDefaultParser extends TranslateParser {
    constructor() {
        super(...arguments);
        this.templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
    }
    /**
     * @param {?} expr
     * @param {?=} params
     * @return {?}
     */
    interpolate(expr, params) {
        /** @type {?} */
        let result;
        if (typeof expr === 'string') {
            result = this.interpolateString(expr, params);
        }
        else if (typeof expr === 'function') {
            result = this.interpolateFunction(expr, params);
        }
        else {
            // this should not happen, but an unrelated TranslateService test depends on it
            result = (/** @type {?} */ (expr));
        }
        return result;
    }
    /**
     * @param {?} target
     * @param {?} key
     * @return {?}
     */
    getValue(target, key) {
        /** @type {?} */
        let keys = typeof key === 'string' ? key.split('.') : [key];
        key = '';
        do {
            key += keys.shift();
            if (isDefined(target) && isDefined(target[key]) && (typeof target[key] === 'object' || !keys.length)) {
                target = target[key];
                key = '';
            }
            else if (!keys.length) {
                target = undefined;
            }
            else {
                key += '.';
            }
        } while (keys.length);
        return target;
    }
    /**
     * @private
     * @param {?} fn
     * @param {?=} params
     * @return {?}
     */
    interpolateFunction(fn, params) {
        return fn(params);
    }
    /**
     * @private
     * @param {?} expr
     * @param {?=} params
     * @return {?}
     */
    interpolateString(expr, params) {
        if (!params) {
            return expr;
        }
        return expr.replace(this.templateMatcher, (/**
         * @param {?} substring
         * @param {?} b
         * @return {?}
         */
        (substring, b) => {
            /** @type {?} */
            let r = this.getValue(params, b);
            return isDefined(r) ? r : substring;
        }));
    }
}
TranslateDefaultParser.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    TranslateDefaultParser.prototype.templateMatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBhcnNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtdHJhbnNsYXRlL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdHJhbnNsYXRlLnBhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sUUFBUSxDQUFDOzs7O0FBRWpDLE1BQU0sT0FBZ0IsZUFBZTtDQWdCcEM7Ozs7Ozs7Ozs7SUFUQyxvRUFBb0U7Ozs7Ozs7OztJQVFwRSxnRUFBZ0Q7O0FBSWxELE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxlQUFlO0lBRDNEOztRQUVFLG9CQUFlLEdBQVcsdUJBQXVCLENBQUM7SUFpRHBELENBQUM7Ozs7OztJQS9DUSxXQUFXLENBQUMsSUFBdUIsRUFBRSxNQUFZOztZQUNsRCxNQUFjO1FBRWxCLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzVCLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQy9DO2FBQU0sSUFBSSxPQUFPLElBQUksS0FBSyxVQUFVLEVBQUU7WUFDckMsTUFBTSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDakQ7YUFBTTtZQUNMLCtFQUErRTtZQUMvRSxNQUFNLEdBQUcsbUJBQUEsSUFBSSxFQUFVLENBQUM7U0FDekI7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7SUFFRCxRQUFRLENBQUMsTUFBVyxFQUFFLEdBQVc7O1lBQzNCLElBQUksR0FBRyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQzNELEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDVCxHQUFHO1lBQ0QsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNwQixJQUFJLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3BHLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3JCLEdBQUcsR0FBRyxFQUFFLENBQUM7YUFDVjtpQkFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDdkIsTUFBTSxHQUFHLFNBQVMsQ0FBQzthQUNwQjtpQkFBTTtnQkFDTCxHQUFHLElBQUksR0FBRyxDQUFDO2FBQ1o7U0FDRixRQUFRLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFFdEIsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7OztJQUVPLG1CQUFtQixDQUFDLEVBQVksRUFBRSxNQUFZO1FBQ3BELE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BCLENBQUM7Ozs7Ozs7SUFFTyxpQkFBaUIsQ0FBQyxJQUFZLEVBQUUsTUFBWTtRQUNsRCxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZTs7Ozs7UUFBRSxDQUFDLFNBQWlCLEVBQUUsQ0FBUyxFQUFFLEVBQUU7O2dCQUNyRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBQ2hDLE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN0QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQWxERixVQUFVOzs7O0lBRVQsaURBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge2lzRGVmaW5lZH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRyYW5zbGF0ZVBhcnNlciB7XHJcbiAgLyoqXHJcbiAgICogSW50ZXJwb2xhdGVzIGEgc3RyaW5nIHRvIHJlcGxhY2UgcGFyYW1ldGVyc1xyXG4gICAqIFwiVGhpcyBpcyBhIHt7IGtleSB9fVwiID09PiBcIlRoaXMgaXMgYSB2YWx1ZVwiLCB3aXRoIHBhcmFtcyA9IHsga2V5OiBcInZhbHVlXCIgfVxyXG4gICAqIEBwYXJhbSBleHByXHJcbiAgICogQHBhcmFtIHBhcmFtc1xyXG4gICAqL1xyXG4gIGFic3RyYWN0IGludGVycG9sYXRlKGV4cHI6IHN0cmluZyB8IEZ1bmN0aW9uLCBwYXJhbXM/OiBhbnkpOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgYSB2YWx1ZSBmcm9tIGFuIG9iamVjdCBieSBjb21wb3NlZCBrZXlcclxuICAgKiBwYXJzZXIuZ2V0VmFsdWUoeyBrZXkxOiB7IGtleUE6ICd2YWx1ZUknIH19LCAna2V5MS5rZXlBJykgPT0+ICd2YWx1ZUknXHJcbiAgICogQHBhcmFtIHRhcmdldFxyXG4gICAqIEBwYXJhbSBrZXlcclxuICAgKi9cclxuICBhYnN0cmFjdCBnZXRWYWx1ZSh0YXJnZXQ6IGFueSwga2V5OiBzdHJpbmcpOiBhbnlcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlRGVmYXVsdFBhcnNlciBleHRlbmRzIFRyYW5zbGF0ZVBhcnNlciB7XHJcbiAgdGVtcGxhdGVNYXRjaGVyOiBSZWdFeHAgPSAve3tcXHM/KFtee31cXHNdKilcXHM/fX0vZztcclxuXHJcbiAgcHVibGljIGludGVycG9sYXRlKGV4cHI6IHN0cmluZyB8IEZ1bmN0aW9uLCBwYXJhbXM/OiBhbnkpOiBzdHJpbmcge1xyXG4gICAgbGV0IHJlc3VsdDogc3RyaW5nO1xyXG5cclxuICAgIGlmICh0eXBlb2YgZXhwciA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgcmVzdWx0ID0gdGhpcy5pbnRlcnBvbGF0ZVN0cmluZyhleHByLCBwYXJhbXMpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICByZXN1bHQgPSB0aGlzLmludGVycG9sYXRlRnVuY3Rpb24oZXhwciwgcGFyYW1zKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIHRoaXMgc2hvdWxkIG5vdCBoYXBwZW4sIGJ1dCBhbiB1bnJlbGF0ZWQgVHJhbnNsYXRlU2VydmljZSB0ZXN0IGRlcGVuZHMgb24gaXRcclxuICAgICAgcmVzdWx0ID0gZXhwciBhcyBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIGdldFZhbHVlKHRhcmdldDogYW55LCBrZXk6IHN0cmluZyk6IGFueSB7XHJcbiAgICBsZXQga2V5cyA9IHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnID8ga2V5LnNwbGl0KCcuJykgOiBba2V5XTtcclxuICAgIGtleSA9ICcnO1xyXG4gICAgZG8ge1xyXG4gICAgICBrZXkgKz0ga2V5cy5zaGlmdCgpO1xyXG4gICAgICBpZiAoaXNEZWZpbmVkKHRhcmdldCkgJiYgaXNEZWZpbmVkKHRhcmdldFtrZXldKSAmJiAodHlwZW9mIHRhcmdldFtrZXldID09PSAnb2JqZWN0JyB8fCAha2V5cy5sZW5ndGgpKSB7XHJcbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0W2tleV07XHJcbiAgICAgICAga2V5ID0gJyc7XHJcbiAgICAgIH0gZWxzZSBpZiAoIWtleXMubGVuZ3RoKSB7XHJcbiAgICAgICAgdGFyZ2V0ID0gdW5kZWZpbmVkO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGtleSArPSAnLic7XHJcbiAgICAgIH1cclxuICAgIH0gd2hpbGUgKGtleXMubGVuZ3RoKTtcclxuXHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbnRlcnBvbGF0ZUZ1bmN0aW9uKGZuOiBGdW5jdGlvbiwgcGFyYW1zPzogYW55KSB7XHJcbiAgICByZXR1cm4gZm4ocGFyYW1zKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW50ZXJwb2xhdGVTdHJpbmcoZXhwcjogc3RyaW5nLCBwYXJhbXM/OiBhbnkpIHtcclxuICAgIGlmICghcGFyYW1zKSB7XHJcbiAgICAgIHJldHVybiBleHByO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBleHByLnJlcGxhY2UodGhpcy50ZW1wbGF0ZU1hdGNoZXIsIChzdWJzdHJpbmc6IHN0cmluZywgYjogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGxldCByID0gdGhpcy5nZXRWYWx1ZShwYXJhbXMsIGIpO1xyXG4gICAgICByZXR1cm4gaXNEZWZpbmVkKHIpID8gciA6IHN1YnN0cmluZztcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=