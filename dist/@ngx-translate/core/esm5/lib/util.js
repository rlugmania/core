/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable */
/**
 * Determines if two objects or two values are equivalent.
 *
 * Two objects or values are considered equivalent if at least one of the following is true:
 *
 * * Both objects or values pass `===` comparison.
 * * Both objects or values are of the same type and all of their properties are equal by
 *   comparing them with `equals`.
 *
 * @param {?} o1 Object or value to compare.
 * @param {?} o2 Object or value to compare.
 * @return {?} true if arguments are equal.
 */
export function equals(o1, o2) {
    if (o1 === o2)
        return true;
    if (o1 === null || o2 === null)
        return false;
    if (o1 !== o1 && o2 !== o2)
        return true; // NaN === NaN
    // NaN === NaN
    /** @type {?} */
    var t1 = typeof o1;
    /** @type {?} */
    var t2 = typeof o2;
    /** @type {?} */
    var length;
    /** @type {?} */
    var key;
    /** @type {?} */
    var keySet;
    if (t1 == t2 && t1 == 'object') {
        if (Array.isArray(o1)) {
            if (!Array.isArray(o2))
                return false;
            if ((length = o1.length) == o2.length) {
                for (key = 0; key < length; key++) {
                    if (!equals(o1[key], o2[key]))
                        return false;
                }
                return true;
            }
        }
        else {
            if (Array.isArray(o2)) {
                return false;
            }
            keySet = Object.create(null);
            for (key in o1) {
                if (!equals(o1[key], o2[key])) {
                    return false;
                }
                keySet[key] = true;
            }
            for (key in o2) {
                if (!(key in keySet) && typeof o2[key] !== 'undefined') {
                    return false;
                }
            }
            return true;
        }
    }
    return false;
}
/* tslint:enable */
/**
 * @param {?} value
 * @return {?}
 */
export function isDefined(value) {
    return typeof value !== 'undefined' && value !== null;
}
/**
 * @param {?} item
 * @return {?}
 */
export function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}
/**
 * @param {?} target
 * @param {?} source
 * @return {?}
 */
export function mergeDeep(target, source) {
    /** @type {?} */
    var output = Object.assign({}, target);
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            var _a, _b;
            if (isObject(source[key])) {
                if (!(key in target)) {
                    Object.assign(output, (_a = {}, _a[key] = source[key], _a));
                }
                else {
                    output[key] = mergeDeep(target[key], source[key]);
                }
            }
            else {
                Object.assign(output, (_b = {}, _b[key] = source[key], _b));
            }
        }));
    }
    return output;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtdHJhbnNsYXRlL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjQSxNQUFNLFVBQVUsTUFBTSxDQUFDLEVBQU8sRUFBRSxFQUFPO0lBQ3JDLElBQUksRUFBRSxLQUFLLEVBQUU7UUFBRSxPQUFPLElBQUksQ0FBQztJQUMzQixJQUFJLEVBQUUsS0FBSyxJQUFJLElBQUksRUFBRSxLQUFLLElBQUk7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUM3QyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7UUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDLGNBQWM7OztRQUNuRCxFQUFFLEdBQUcsT0FBTyxFQUFFOztRQUFFLEVBQUUsR0FBRyxPQUFPLEVBQUU7O1FBQUUsTUFBYzs7UUFBRSxHQUFROztRQUFFLE1BQVc7SUFDekUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxRQUFRLEVBQUU7UUFDOUIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFBRSxPQUFPLEtBQUssQ0FBQztZQUNyQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFO2dCQUNyQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRTtvQkFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUFFLE9BQU8sS0FBSyxDQUFDO2lCQUM3QztnQkFDRCxPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0Y7YUFBTTtZQUNMLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDckIsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUNELE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdCLEtBQUssR0FBRyxJQUFJLEVBQUUsRUFBRTtnQkFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDN0IsT0FBTyxLQUFLLENBQUM7aUJBQ2Q7Z0JBQ0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQzthQUNwQjtZQUNELEtBQUssR0FBRyxJQUFJLEVBQUUsRUFBRTtnQkFDZCxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssV0FBVyxFQUFFO29CQUN0RCxPQUFPLEtBQUssQ0FBQztpQkFDZDthQUNGO1lBQ0QsT0FBTyxJQUFJLENBQUM7U0FDYjtLQUNGO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDOzs7Ozs7QUFHRCxNQUFNLFVBQVUsU0FBUyxDQUFDLEtBQVU7SUFDbEMsT0FBTyxPQUFPLEtBQUssS0FBSyxXQUFXLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQztBQUN4RCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxRQUFRLENBQUMsSUFBUztJQUNoQyxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNwRSxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsU0FBUyxDQUFDLE1BQVcsRUFBRSxNQUFXOztRQUM1QyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDO0lBQ3RDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLEdBQVE7O1lBQ25DLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUN6QixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLEVBQUU7b0JBQ3BCLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxZQUFHLEdBQUMsR0FBRyxJQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBRSxDQUFDO2lCQUM3QztxQkFBTTtvQkFDTCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDbkQ7YUFDRjtpQkFBTTtnQkFDTCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sWUFBRyxHQUFDLEdBQUcsSUFBRyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQUUsQ0FBQzthQUM3QztRQUNILENBQUMsRUFBQyxDQUFDO0tBQ0o7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cclxuLyoqXHJcbiAqIERldGVybWluZXMgaWYgdHdvIG9iamVjdHMgb3IgdHdvIHZhbHVlcyBhcmUgZXF1aXZhbGVudC5cclxuICpcclxuICogVHdvIG9iamVjdHMgb3IgdmFsdWVzIGFyZSBjb25zaWRlcmVkIGVxdWl2YWxlbnQgaWYgYXQgbGVhc3Qgb25lIG9mIHRoZSBmb2xsb3dpbmcgaXMgdHJ1ZTpcclxuICpcclxuICogKiBCb3RoIG9iamVjdHMgb3IgdmFsdWVzIHBhc3MgYD09PWAgY29tcGFyaXNvbi5cclxuICogKiBCb3RoIG9iamVjdHMgb3IgdmFsdWVzIGFyZSBvZiB0aGUgc2FtZSB0eXBlIGFuZCBhbGwgb2YgdGhlaXIgcHJvcGVydGllcyBhcmUgZXF1YWwgYnlcclxuICogICBjb21wYXJpbmcgdGhlbSB3aXRoIGBlcXVhbHNgLlxyXG4gKlxyXG4gKiBAcGFyYW0gbzEgT2JqZWN0IG9yIHZhbHVlIHRvIGNvbXBhcmUuXHJcbiAqIEBwYXJhbSBvMiBPYmplY3Qgb3IgdmFsdWUgdG8gY29tcGFyZS5cclxuICogQHJldHVybnMgdHJ1ZSBpZiBhcmd1bWVudHMgYXJlIGVxdWFsLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhvMTogYW55LCBvMjogYW55KTogYm9vbGVhbiB7XHJcbiAgaWYgKG8xID09PSBvMikgcmV0dXJuIHRydWU7XHJcbiAgaWYgKG8xID09PSBudWxsIHx8IG8yID09PSBudWxsKSByZXR1cm4gZmFsc2U7XHJcbiAgaWYgKG8xICE9PSBvMSAmJiBvMiAhPT0gbzIpIHJldHVybiB0cnVlOyAvLyBOYU4gPT09IE5hTlxyXG4gIGxldCB0MSA9IHR5cGVvZiBvMSwgdDIgPSB0eXBlb2YgbzIsIGxlbmd0aDogbnVtYmVyLCBrZXk6IGFueSwga2V5U2V0OiBhbnk7XHJcbiAgaWYgKHQxID09IHQyICYmIHQxID09ICdvYmplY3QnKSB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvMSkpIHtcclxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG8yKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBpZiAoKGxlbmd0aCA9IG8xLmxlbmd0aCkgPT0gbzIubGVuZ3RoKSB7XHJcbiAgICAgICAgZm9yIChrZXkgPSAwOyBrZXkgPCBsZW5ndGg7IGtleSsrKSB7XHJcbiAgICAgICAgICBpZiAoIWVxdWFscyhvMVtrZXldLCBvMltrZXldKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkobzIpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGtleVNldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcbiAgICAgIGZvciAoa2V5IGluIG8xKSB7XHJcbiAgICAgICAgaWYgKCFlcXVhbHMobzFba2V5XSwgbzJba2V5XSkpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAga2V5U2V0W2tleV0gPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAoa2V5IGluIG8yKSB7XHJcbiAgICAgICAgaWYgKCEoa2V5IGluIGtleVNldCkgJiYgdHlwZW9mIG8yW2tleV0gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuLyogdHNsaW50OmVuYWJsZSAqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRGVmaW5lZCh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgIT09IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdChpdGVtOiBhbnkpOiBib29sZWFuIHtcclxuICByZXR1cm4gKGl0ZW0gJiYgdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGl0ZW0pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcCh0YXJnZXQ6IGFueSwgc291cmNlOiBhbnkpOiBhbnkge1xyXG4gIGxldCBvdXRwdXQgPSBPYmplY3QuYXNzaWduKHt9LCB0YXJnZXQpO1xyXG4gIGlmIChpc09iamVjdCh0YXJnZXQpICYmIGlzT2JqZWN0KHNvdXJjZSkpIHtcclxuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaCgoa2V5OiBhbnkpID0+IHtcclxuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xyXG4gICAgICAgIGlmICghKGtleSBpbiB0YXJnZXQpKSB7XHJcbiAgICAgICAgICBPYmplY3QuYXNzaWduKG91dHB1dCwge1trZXldOiBzb3VyY2Vba2V5XX0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBvdXRwdXRba2V5XSA9IG1lcmdlRGVlcCh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKG91dHB1dCwge1trZXldOiBzb3VyY2Vba2V5XX0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmV0dXJuIG91dHB1dDtcclxufVxyXG4iXX0=