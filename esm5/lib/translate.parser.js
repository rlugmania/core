/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends } from "tslib";
import { Injectable } from "@angular/core";
import { isDefined } from "./util";
/**
 * @abstract
 */
var /**
 * @abstract
 */
TranslateParser = /** @class */ (function () {
    function TranslateParser() {
    }
    return TranslateParser;
}());
/**
 * @abstract
 */
export { TranslateParser };
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
var TranslateDefaultParser = /** @class */ (function (_super) {
    __extends(TranslateDefaultParser, _super);
    function TranslateDefaultParser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
        return _this;
    }
    /**
     * @param {?} expr
     * @param {?=} params
     * @return {?}
     */
    TranslateDefaultParser.prototype.interpolate = /**
     * @param {?} expr
     * @param {?=} params
     * @return {?}
     */
    function (expr, params) {
        /** @type {?} */
        var result;
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
    };
    /**
     * @param {?} target
     * @param {?} key
     * @return {?}
     */
    TranslateDefaultParser.prototype.getValue = /**
     * @param {?} target
     * @param {?} key
     * @return {?}
     */
    function (target, key) {
        /** @type {?} */
        var keys = typeof key === 'string' ? key.split('.') : [key];
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
    };
    /**
     * @private
     * @param {?} fn
     * @param {?=} params
     * @return {?}
     */
    TranslateDefaultParser.prototype.interpolateFunction = /**
     * @private
     * @param {?} fn
     * @param {?=} params
     * @return {?}
     */
    function (fn, params) {
        return fn(params);
    };
    /**
     * @private
     * @param {?} expr
     * @param {?=} params
     * @return {?}
     */
    TranslateDefaultParser.prototype.interpolateString = /**
     * @private
     * @param {?} expr
     * @param {?=} params
     * @return {?}
     */
    function (expr, params) {
        var _this = this;
        if (!params) {
            return expr;
        }
        return expr.replace(this.templateMatcher, (/**
         * @param {?} substring
         * @param {?} b
         * @return {?}
         */
        function (substring, b) {
            /** @type {?} */
            var r = _this.getValue(params, b);
            return isDefined(r) ? r : substring;
        }));
    };
    TranslateDefaultParser.decorators = [
        { type: Injectable }
    ];
    return TranslateDefaultParser;
}(TranslateParser));
export { TranslateDefaultParser };
if (false) {
    /** @type {?} */
    TranslateDefaultParser.prototype.templateMatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBhcnNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtdHJhbnNsYXRlL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdHJhbnNsYXRlLnBhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLFFBQVEsQ0FBQzs7OztBQUVqQzs7OztJQUFBO0lBZ0JBLENBQUM7SUFBRCxzQkFBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7Ozs7Ozs7Ozs7Ozs7O0lBVEMsb0VBQW9FOzs7Ozs7Ozs7SUFRcEUsZ0VBQWdEOztBQUdsRDtJQUM0QywwQ0FBZTtJQUQzRDtRQUFBLHFFQW1EQztRQWpEQyxxQkFBZSxHQUFXLHVCQUF1QixDQUFDOztJQWlEcEQsQ0FBQzs7Ozs7O0lBL0NRLDRDQUFXOzs7OztJQUFsQixVQUFtQixJQUF1QixFQUFFLE1BQVk7O1lBQ2xELE1BQWM7UUFFbEIsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDNUIsTUFBTSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDL0M7YUFBTSxJQUFJLE9BQU8sSUFBSSxLQUFLLFVBQVUsRUFBRTtZQUNyQyxNQUFNLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNqRDthQUFNO1lBQ0wsK0VBQStFO1lBQy9FLE1BQU0sR0FBRyxtQkFBQSxJQUFJLEVBQVUsQ0FBQztTQUN6QjtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7OztJQUVELHlDQUFROzs7OztJQUFSLFVBQVMsTUFBVyxFQUFFLEdBQVc7O1lBQzNCLElBQUksR0FBRyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQzNELEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDVCxHQUFHO1lBQ0QsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNwQixJQUFJLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3BHLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3JCLEdBQUcsR0FBRyxFQUFFLENBQUM7YUFDVjtpQkFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDdkIsTUFBTSxHQUFHLFNBQVMsQ0FBQzthQUNwQjtpQkFBTTtnQkFDTCxHQUFHLElBQUksR0FBRyxDQUFDO2FBQ1o7U0FDRixRQUFRLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFFdEIsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7OztJQUVPLG9EQUFtQjs7Ozs7O0lBQTNCLFVBQTRCLEVBQVksRUFBRSxNQUFZO1FBQ3BELE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BCLENBQUM7Ozs7Ozs7SUFFTyxrREFBaUI7Ozs7OztJQUF6QixVQUEwQixJQUFZLEVBQUUsTUFBWTtRQUFwRCxpQkFTQztRQVJDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlOzs7OztRQUFFLFVBQUMsU0FBaUIsRUFBRSxDQUFTOztnQkFDakUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUNoQyxPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDdEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkFsREYsVUFBVTs7SUFtRFgsNkJBQUM7Q0FBQSxBQW5ERCxDQUM0QyxlQUFlLEdBa0QxRDtTQWxEWSxzQkFBc0I7OztJQUNqQyxpREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7aXNEZWZpbmVkfSBmcm9tIFwiLi91dGlsXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVHJhbnNsYXRlUGFyc2VyIHtcclxuICAvKipcclxuICAgKiBJbnRlcnBvbGF0ZXMgYSBzdHJpbmcgdG8gcmVwbGFjZSBwYXJhbWV0ZXJzXHJcbiAgICogXCJUaGlzIGlzIGEge3sga2V5IH19XCIgPT0+IFwiVGhpcyBpcyBhIHZhbHVlXCIsIHdpdGggcGFyYW1zID0geyBrZXk6IFwidmFsdWVcIiB9XHJcbiAgICogQHBhcmFtIGV4cHJcclxuICAgKiBAcGFyYW0gcGFyYW1zXHJcbiAgICovXHJcbiAgYWJzdHJhY3QgaW50ZXJwb2xhdGUoZXhwcjogc3RyaW5nIHwgRnVuY3Rpb24sIHBhcmFtcz86IGFueSk6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyBhIHZhbHVlIGZyb20gYW4gb2JqZWN0IGJ5IGNvbXBvc2VkIGtleVxyXG4gICAqIHBhcnNlci5nZXRWYWx1ZSh7IGtleTE6IHsga2V5QTogJ3ZhbHVlSScgfX0sICdrZXkxLmtleUEnKSA9PT4gJ3ZhbHVlSSdcclxuICAgKiBAcGFyYW0gdGFyZ2V0XHJcbiAgICogQHBhcmFtIGtleVxyXG4gICAqL1xyXG4gIGFic3RyYWN0IGdldFZhbHVlKHRhcmdldDogYW55LCBrZXk6IHN0cmluZyk6IGFueVxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVEZWZhdWx0UGFyc2VyIGV4dGVuZHMgVHJhbnNsYXRlUGFyc2VyIHtcclxuICB0ZW1wbGF0ZU1hdGNoZXI6IFJlZ0V4cCA9IC97e1xccz8oW157fVxcc10qKVxccz99fS9nO1xyXG5cclxuICBwdWJsaWMgaW50ZXJwb2xhdGUoZXhwcjogc3RyaW5nIHwgRnVuY3Rpb24sIHBhcmFtcz86IGFueSk6IHN0cmluZyB7XHJcbiAgICBsZXQgcmVzdWx0OiBzdHJpbmc7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBleHByID09PSAnc3RyaW5nJykge1xyXG4gICAgICByZXN1bHQgPSB0aGlzLmludGVycG9sYXRlU3RyaW5nKGV4cHIsIHBhcmFtcyk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHByID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHJlc3VsdCA9IHRoaXMuaW50ZXJwb2xhdGVGdW5jdGlvbihleHByLCBwYXJhbXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gdGhpcyBzaG91bGQgbm90IGhhcHBlbiwgYnV0IGFuIHVucmVsYXRlZCBUcmFuc2xhdGVTZXJ2aWNlIHRlc3QgZGVwZW5kcyBvbiBpdFxyXG4gICAgICByZXN1bHQgPSBleHByIGFzIHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgZ2V0VmFsdWUodGFyZ2V0OiBhbnksIGtleTogc3RyaW5nKTogYW55IHtcclxuICAgIGxldCBrZXlzID0gdHlwZW9mIGtleSA9PT0gJ3N0cmluZycgPyBrZXkuc3BsaXQoJy4nKSA6IFtrZXldO1xyXG4gICAga2V5ID0gJyc7XHJcbiAgICBkbyB7XHJcbiAgICAgIGtleSArPSBrZXlzLnNoaWZ0KCk7XHJcbiAgICAgIGlmIChpc0RlZmluZWQodGFyZ2V0KSAmJiBpc0RlZmluZWQodGFyZ2V0W2tleV0pICYmICh0eXBlb2YgdGFyZ2V0W2tleV0gPT09ICdvYmplY3QnIHx8ICFrZXlzLmxlbmd0aCkpIHtcclxuICAgICAgICB0YXJnZXQgPSB0YXJnZXRba2V5XTtcclxuICAgICAgICBrZXkgPSAnJztcclxuICAgICAgfSBlbHNlIGlmICgha2V5cy5sZW5ndGgpIHtcclxuICAgICAgICB0YXJnZXQgPSB1bmRlZmluZWQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAga2V5ICs9ICcuJztcclxuICAgICAgfVxyXG4gICAgfSB3aGlsZSAoa2V5cy5sZW5ndGgpO1xyXG5cclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGludGVycG9sYXRlRnVuY3Rpb24oZm46IEZ1bmN0aW9uLCBwYXJhbXM/OiBhbnkpIHtcclxuICAgIHJldHVybiBmbihwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbnRlcnBvbGF0ZVN0cmluZyhleHByOiBzdHJpbmcsIHBhcmFtcz86IGFueSkge1xyXG4gICAgaWYgKCFwYXJhbXMpIHtcclxuICAgICAgcmV0dXJuIGV4cHI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGV4cHIucmVwbGFjZSh0aGlzLnRlbXBsYXRlTWF0Y2hlciwgKHN1YnN0cmluZzogc3RyaW5nLCBiOiBzdHJpbmcpID0+IHtcclxuICAgICAgbGV0IHIgPSB0aGlzLmdldFZhbHVlKHBhcmFtcywgYik7XHJcbiAgICAgIHJldHVybiBpc0RlZmluZWQocikgPyByIDogc3Vic3RyaW5nO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==