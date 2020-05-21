/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Directive, ElementRef, Input } from '@angular/core';
import { isObservable } from 'rxjs';
import { TranslateService } from './translate.service';
import { equals, isDefined } from './util';
var TranslateDirective = /** @class */ (function () {
    function TranslateDirective(translateService, element, _ref) {
        var _this = this;
        this.translateService = translateService;
        this.element = element;
        this._ref = _ref;
        // subscribe to onTranslationChange event, in case the translations of the current lang change
        if (!this.onTranslationChangeSub) {
            this.onTranslationChangeSub = this.translateService.onTranslationChange.subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                if (event.lang === _this.translateService.currentLang) {
                    _this.checkNodes(true, event.translations);
                }
            }));
        }
        // subscribe to onLangChange event, in case the language changes
        if (!this.onLangChangeSub) {
            this.onLangChangeSub = this.translateService.onLangChange.subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                _this.checkNodes(true, event.translations);
            }));
        }
        // subscribe to onDefaultLangChange event, in case the default language changes
        if (!this.onDefaultLangChangeSub) {
            this.onDefaultLangChangeSub = this.translateService.onDefaultLangChange.subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                _this.checkNodes(true);
            }));
        }
    }
    Object.defineProperty(TranslateDirective.prototype, "translate", {
        set: /**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            if (key) {
                this.key = key;
                this.checkNodes();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateDirective.prototype, "translateParams", {
        set: /**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            if (!equals(this.currentParams, params)) {
                this.currentParams = params;
                this.checkNodes(true);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TranslateDirective.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        this.checkNodes();
    };
    /**
     * @param {?=} forceUpdate
     * @param {?=} translations
     * @return {?}
     */
    TranslateDirective.prototype.checkNodes = /**
     * @param {?=} forceUpdate
     * @param {?=} translations
     * @return {?}
     */
    function (forceUpdate, translations) {
        if (forceUpdate === void 0) { forceUpdate = false; }
        /** @type {?} */
        var nodes = this.element.nativeElement.childNodes;
        // if the element is empty
        if (!nodes.length) {
            // we add the key as content
            this.setContent(this.element.nativeElement, this.key);
            nodes = this.element.nativeElement.childNodes;
        }
        for (var i = 0; i < nodes.length; ++i) {
            /** @type {?} */
            var node = nodes[i];
            if (node.nodeType === 3) { // node type 3 is a text node
                // node type 3 is a text node
                /** @type {?} */
                var key = void 0;
                if (forceUpdate) {
                    node.lastKey = null;
                }
                if (isDefined(node.lookupKey)) {
                    key = node.lookupKey;
                }
                else if (this.key) {
                    key = this.key;
                }
                else {
                    /** @type {?} */
                    var content = this.getContent(node);
                    /** @type {?} */
                    var trimmedContent = content.trim();
                    if (trimmedContent.length) {
                        node.lookupKey = trimmedContent;
                        // we want to use the content as a key, not the translation value
                        if (content !== node.currentValue) {
                            key = trimmedContent;
                            // the content was changed from the user, we'll use it as a reference if needed
                            node.originalContent = content || node.originalContent;
                        }
                        else if (node.originalContent) { // the content seems ok, but the lang has changed
                            // the current content is the translation, not the key, use the last real content as key
                            key = node.originalContent.trim();
                        }
                        else if (content !== node.currentValue) {
                            // we want to use the content as a key, not the translation value
                            key = trimmedContent;
                            // the content was changed from the user, we'll use it as a reference if needed
                            node.originalContent = content || node.originalContent;
                        }
                    }
                }
                this.updateValue(key, node, translations);
            }
        }
    };
    /**
     * @param {?} key
     * @param {?} node
     * @param {?} translations
     * @return {?}
     */
    TranslateDirective.prototype.updateValue = /**
     * @param {?} key
     * @param {?} node
     * @param {?} translations
     * @return {?}
     */
    function (key, node, translations) {
        var _this = this;
        if (key) {
            if (node.lastKey === key && this.lastParams === this.currentParams) {
                return;
            }
            this.lastParams = this.currentParams;
            /** @type {?} */
            var onTranslation = (/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                if (res !== key) {
                    node.lastKey = key;
                }
                if (!node.originalContent) {
                    node.originalContent = _this.getContent(node);
                }
                node.currentValue = isDefined(res) ? res : (node.originalContent || key);
                // we replace in the original content to preserve spaces that we might have trimmed
                _this.setContent(node, _this.key ? node.currentValue : node.originalContent.replace(key, node.currentValue));
                _this._ref.markForCheck();
            });
            if (isDefined(translations)) {
                /** @type {?} */
                var res = this.translateService.getParsedResult(translations, key, this.currentParams);
                if (isObservable(res)) {
                    res.subscribe(onTranslation);
                }
                else {
                    onTranslation(res);
                }
            }
            else {
                this.translateService.get(key, this.currentParams).subscribe(onTranslation);
            }
        }
    };
    /**
     * @param {?} node
     * @return {?}
     */
    TranslateDirective.prototype.getContent = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        return isDefined(node.textContent) ? node.textContent : node.data;
    };
    /**
     * @param {?} node
     * @param {?} content
     * @return {?}
     */
    TranslateDirective.prototype.setContent = /**
     * @param {?} node
     * @param {?} content
     * @return {?}
     */
    function (node, content) {
        if (isDefined(node.textContent)) {
            node.textContent = content;
        }
        else {
            node.data = content;
        }
    };
    /**
     * @return {?}
     */
    TranslateDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.onLangChangeSub) {
            this.onLangChangeSub.unsubscribe();
        }
        if (this.onDefaultLangChangeSub) {
            this.onDefaultLangChangeSub.unsubscribe();
        }
        if (this.onTranslationChangeSub) {
            this.onTranslationChangeSub.unsubscribe();
        }
    };
    TranslateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[translate],[ngx-translate]'
                },] }
    ];
    /** @nocollapse */
    TranslateDirective.ctorParameters = function () { return [
        { type: TranslateService },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    TranslateDirective.propDecorators = {
        translate: [{ type: Input }],
        translateParams: [{ type: Input }]
    };
    return TranslateDirective;
}());
export { TranslateDirective };
if (false) {
    /** @type {?} */
    TranslateDirective.prototype.key;
    /** @type {?} */
    TranslateDirective.prototype.lastParams;
    /** @type {?} */
    TranslateDirective.prototype.currentParams;
    /** @type {?} */
    TranslateDirective.prototype.onLangChangeSub;
    /** @type {?} */
    TranslateDirective.prototype.onDefaultLangChangeSub;
    /** @type {?} */
    TranslateDirective.prototype.onTranslationChangeSub;
    /**
     * @type {?}
     * @private
     */
    TranslateDirective.prototype.translateService;
    /**
     * @type {?}
     * @private
     */
    TranslateDirective.prototype.element;
    /**
     * @type {?}
     * @private
     */
    TranslateDirective.prototype._ref;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtdHJhbnNsYXRlL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdHJhbnNsYXRlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFtQixpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUMzRyxPQUFPLEVBQWUsWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ2hELE9BQU8sRUFBMEMsZ0JBQWdCLEVBQXlCLE1BQU0scUJBQXFCLENBQUM7QUFDdEgsT0FBTyxFQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFFekM7SUF5QkUsNEJBQW9CLGdCQUFrQyxFQUFVLE9BQW1CLEVBQVUsSUFBdUI7UUFBcEgsaUJBdUJDO1FBdkJtQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQW1CO1FBQ2xILDhGQUE4RjtRQUM5RixJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQ2hDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsU0FBUzs7OztZQUFDLFVBQUMsS0FBNkI7Z0JBQzlHLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFO29CQUNwRCxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQzNDO1lBQ0gsQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUVELGdFQUFnRTtRQUNoRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN6QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FB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QUksQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztTQUM1QjthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7U0FDckI7SUFDSCxDQUFDOzs7O0lBRUQsd0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEM7UUFFRCxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtZQUMvQixJQUFJLENBQUMsc0JBQXNCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDM0M7UUFFRCxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtZQUMvQixJQUFJLENBQUMsc0JBQXNCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDM0M7SUFDSCxDQUFDOztnQkE3SkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw2QkFBNkI7aUJBQ3hDOzs7O2dCQUxnRCxnQkFBZ0I7Z0JBRlQsVUFBVTtnQkFBeEMsaUJBQWlCOzs7NEJBZ0J4QyxLQUFLO2tDQU9MLEtBQUs7O0lBNElSLHlCQUFDO0NBQUEsQUE5SkQsSUE4SkM7U0EzSlksa0JBQWtCOzs7SUFDN0IsaUNBQVk7O0lBQ1osd0NBQWdCOztJQUNoQiwyQ0FBbUI7O0lBQ25CLDZDQUE4Qjs7SUFDOUIsb0RBQXFDOztJQUNyQyxvREFBcUM7Ozs7O0lBZ0J6Qiw4Q0FBMEM7Ozs7O0lBQUUscUNBQTJCOzs7OztJQUFFLGtDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3Q2hlY2tlZCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7U3Vic2NyaXB0aW9uLCBpc09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge0RlZmF1bHRMYW5nQ2hhbmdlRXZlbnQsIExhbmdDaGFuZ2VFdmVudCwgVHJhbnNsYXRlU2VydmljZSwgVHJhbnNsYXRpb25DaGFuZ2VFdmVudH0gZnJvbSAnLi90cmFuc2xhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7ZXF1YWxzLCBpc0RlZmluZWR9IGZyb20gJy4vdXRpbCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1t0cmFuc2xhdGVdLFtuZ3gtdHJhbnNsYXRlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0NoZWNrZWQsIE9uRGVzdHJveSB7XHJcbiAga2V5OiBzdHJpbmc7XHJcbiAgbGFzdFBhcmFtczogYW55O1xyXG4gIGN1cnJlbnRQYXJhbXM6IGFueTtcclxuICBvbkxhbmdDaGFuZ2VTdWI6IFN1YnNjcmlwdGlvbjtcclxuICBvbkRlZmF1bHRMYW5nQ2hhbmdlU3ViOiBTdWJzY3JpcHRpb247XHJcbiAgb25UcmFuc2xhdGlvbkNoYW5nZVN1YjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBASW5wdXQoKSBzZXQgdHJhbnNsYXRlKGtleTogc3RyaW5nKSB7XHJcbiAgICBpZiAoa2V5KSB7XHJcbiAgICAgIHRoaXMua2V5ID0ga2V5O1xyXG4gICAgICB0aGlzLmNoZWNrTm9kZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIHNldCB0cmFuc2xhdGVQYXJhbXMocGFyYW1zOiBhbnkpIHtcclxuICAgIGlmICghZXF1YWxzKHRoaXMuY3VycmVudFBhcmFtcywgcGFyYW1zKSkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRQYXJhbXMgPSBwYXJhbXM7XHJcbiAgICAgIHRoaXMuY2hlY2tOb2Rlcyh0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSwgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICAvLyBzdWJzY3JpYmUgdG8gb25UcmFuc2xhdGlvbkNoYW5nZSBldmVudCwgaW4gY2FzZSB0aGUgdHJhbnNsYXRpb25zIG9mIHRoZSBjdXJyZW50IGxhbmcgY2hhbmdlXHJcbiAgICBpZiAoIXRoaXMub25UcmFuc2xhdGlvbkNoYW5nZVN1Yikge1xyXG4gICAgICB0aGlzLm9uVHJhbnNsYXRpb25DaGFuZ2VTdWIgPSB0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uub25UcmFuc2xhdGlvbkNoYW5nZS5zdWJzY3JpYmUoKGV2ZW50OiBUcmFuc2xhdGlvbkNoYW5nZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmxhbmcgPT09IHRoaXMudHJhbnNsYXRlU2VydmljZS5jdXJyZW50TGFuZykge1xyXG4gICAgICAgICAgdGhpcy5jaGVja05vZGVzKHRydWUsIGV2ZW50LnRyYW5zbGF0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzdWJzY3JpYmUgdG8gb25MYW5nQ2hhbmdlIGV2ZW50LCBpbiBjYXNlIHRoZSBsYW5ndWFnZSBjaGFuZ2VzXHJcbiAgICBpZiAoIXRoaXMub25MYW5nQ2hhbmdlU3ViKSB7XHJcbiAgICAgIHRoaXMub25MYW5nQ2hhbmdlU3ViID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLm9uTGFuZ0NoYW5nZS5zdWJzY3JpYmUoKGV2ZW50OiBMYW5nQ2hhbmdlRXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLmNoZWNrTm9kZXModHJ1ZSwgZXZlbnQudHJhbnNsYXRpb25zKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc3Vic2NyaWJlIHRvIG9uRGVmYXVsdExhbmdDaGFuZ2UgZXZlbnQsIGluIGNhc2UgdGhlIGRlZmF1bHQgbGFuZ3VhZ2UgY2hhbmdlc1xyXG4gICAgaWYgKCF0aGlzLm9uRGVmYXVsdExhbmdDaGFuZ2VTdWIpIHtcclxuICAgICAgdGhpcy5vbkRlZmF1bHRMYW5nQ2hhbmdlU3ViID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLm9uRGVmYXVsdExhbmdDaGFuZ2Uuc3Vic2NyaWJlKChldmVudDogRGVmYXVsdExhbmdDaGFuZ2VFdmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2hlY2tOb2Rlcyh0cnVlKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XHJcbiAgICB0aGlzLmNoZWNrTm9kZXMoKTtcclxuICB9XHJcblxyXG4gIGNoZWNrTm9kZXMoZm9yY2VVcGRhdGUgPSBmYWxzZSwgdHJhbnNsYXRpb25zPzogYW55KSB7XHJcbiAgICBsZXQgbm9kZXM6IE5vZGVMaXN0ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGROb2RlcztcclxuICAgIC8vIGlmIHRoZSBlbGVtZW50IGlzIGVtcHR5XHJcbiAgICBpZiAoIW5vZGVzLmxlbmd0aCkge1xyXG4gICAgICAvLyB3ZSBhZGQgdGhlIGtleSBhcyBjb250ZW50XHJcbiAgICAgIHRoaXMuc2V0Q29udGVudCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy5rZXkpO1xyXG4gICAgICBub2RlcyA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXM7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgIGxldCBub2RlOiBhbnkgPSBub2Rlc1tpXTtcclxuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDMpIHsgLy8gbm9kZSB0eXBlIDMgaXMgYSB0ZXh0IG5vZGVcclxuICAgICAgICBsZXQga2V5OiBzdHJpbmc7XHJcbiAgICAgICAgaWYgKGZvcmNlVXBkYXRlKSB7XHJcbiAgICAgICAgICBub2RlLmxhc3RLZXkgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpc0RlZmluZWQobm9kZS5sb29rdXBLZXkpKSB7XHJcbiAgICAgICAgICBrZXkgPSBub2RlLmxvb2t1cEtleTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMua2V5KSB7XHJcbiAgICAgICAgICBrZXkgPSB0aGlzLmtleTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQobm9kZSk7XHJcbiAgICAgICAgICBsZXQgdHJpbW1lZENvbnRlbnQgPSBjb250ZW50LnRyaW0oKTtcclxuICAgICAgICAgIGlmICh0cmltbWVkQ29udGVudC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbm9kZS5sb29rdXBLZXkgPSB0cmltbWVkQ29udGVudDtcclxuICAgICAgICAgICAgLy8gd2Ugd2FudCB0byB1c2UgdGhlIGNvbnRlbnQgYXMgYSBrZXksIG5vdCB0aGUgdHJhbnNsYXRpb24gdmFsdWVcclxuICAgICAgICAgICAgaWYgKGNvbnRlbnQgIT09IG5vZGUuY3VycmVudFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAga2V5ID0gdHJpbW1lZENvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgLy8gdGhlIGNvbnRlbnQgd2FzIGNoYW5nZWQgZnJvbSB0aGUgdXNlciwgd2UnbGwgdXNlIGl0IGFzIGEgcmVmZXJlbmNlIGlmIG5lZWRlZFxyXG4gICAgICAgICAgICAgIG5vZGUub3JpZ2luYWxDb250ZW50ID0gY29udGVudCB8fCBub2RlLm9yaWdpbmFsQ29udGVudDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChub2RlLm9yaWdpbmFsQ29udGVudCkgeyAvLyB0aGUgY29udGVudCBzZWVtcyBvaywgYnV0IHRoZSBsYW5nIGhhcyBjaGFuZ2VkXHJcbiAgICAgICAgICAgICAgLy8gdGhlIGN1cnJlbnQgY29udGVudCBpcyB0aGUgdHJhbnNsYXRpb24sIG5vdCB0aGUga2V5LCB1c2UgdGhlIGxhc3QgcmVhbCBjb250ZW50IGFzIGtleVxyXG4gICAgICAgICAgICAgIGtleSA9IG5vZGUub3JpZ2luYWxDb250ZW50LnRyaW0oKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb250ZW50ICE9PSBub2RlLmN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgIC8vIHdlIHdhbnQgdG8gdXNlIHRoZSBjb250ZW50IGFzIGEga2V5LCBub3QgdGhlIHRyYW5zbGF0aW9uIHZhbHVlXHJcbiAgICAgICAgICAgICAga2V5ID0gdHJpbW1lZENvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgLy8gdGhlIGNvbnRlbnQgd2FzIGNoYW5nZWQgZnJvbSB0aGUgdXNlciwgd2UnbGwgdXNlIGl0IGFzIGEgcmVmZXJlbmNlIGlmIG5lZWRlZFxyXG4gICAgICAgICAgICAgIG5vZGUub3JpZ2luYWxDb250ZW50ID0gY29udGVudCB8fCBub2RlLm9yaWdpbmFsQ29udGVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKGtleSwgbm9kZSwgdHJhbnNsYXRpb25zKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlVmFsdWUoa2V5OiBzdHJpbmcsIG5vZGU6IGFueSwgdHJhbnNsYXRpb25zOiBhbnkpIHtcclxuICAgIGlmIChrZXkpIHtcclxuICAgICAgaWYgKG5vZGUubGFzdEtleSA9PT0ga2V5ICYmIHRoaXMubGFzdFBhcmFtcyA9PT0gdGhpcy5jdXJyZW50UGFyYW1zKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmxhc3RQYXJhbXMgPSB0aGlzLmN1cnJlbnRQYXJhbXM7XHJcblxyXG4gICAgICBsZXQgb25UcmFuc2xhdGlvbiA9IChyZXM6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGlmIChyZXMgIT09IGtleSkge1xyXG4gICAgICAgICAgbm9kZS5sYXN0S2V5ID0ga2V5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW5vZGUub3JpZ2luYWxDb250ZW50KSB7XHJcbiAgICAgICAgICBub2RlLm9yaWdpbmFsQ29udGVudCA9IHRoaXMuZ2V0Q29udGVudChub2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbm9kZS5jdXJyZW50VmFsdWUgPSBpc0RlZmluZWQocmVzKSA/IHJlcyA6IChub2RlLm9yaWdpbmFsQ29udGVudCB8fCBrZXkpO1xyXG4gICAgICAgIC8vIHdlIHJlcGxhY2UgaW4gdGhlIG9yaWdpbmFsIGNvbnRlbnQgdG8gcHJlc2VydmUgc3BhY2VzIHRoYXQgd2UgbWlnaHQgaGF2ZSB0cmltbWVkXHJcbiAgICAgICAgdGhpcy5zZXRDb250ZW50KG5vZGUsIHRoaXMua2V5ID8gbm9kZS5jdXJyZW50VmFsdWUgOiBub2RlLm9yaWdpbmFsQ29udGVudC5yZXBsYWNlKGtleSwgbm9kZS5jdXJyZW50VmFsdWUpKTtcclxuICAgICAgICB0aGlzLl9yZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAoaXNEZWZpbmVkKHRyYW5zbGF0aW9ucykpIHtcclxuICAgICAgICBsZXQgcmVzID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldFBhcnNlZFJlc3VsdCh0cmFuc2xhdGlvbnMsIGtleSwgdGhpcy5jdXJyZW50UGFyYW1zKTtcclxuICAgICAgICBpZiAoaXNPYnNlcnZhYmxlKHJlcykpIHtcclxuICAgICAgICAgIHJlcy5zdWJzY3JpYmUob25UcmFuc2xhdGlvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG9uVHJhbnNsYXRpb24ocmVzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldChrZXksIHRoaXMuY3VycmVudFBhcmFtcykuc3Vic2NyaWJlKG9uVHJhbnNsYXRpb24pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRDb250ZW50KG5vZGU6IGFueSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gaXNEZWZpbmVkKG5vZGUudGV4dENvbnRlbnQpID8gbm9kZS50ZXh0Q29udGVudCA6IG5vZGUuZGF0YTtcclxuICB9XHJcblxyXG4gIHNldENvbnRlbnQobm9kZTogYW55LCBjb250ZW50OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmIChpc0RlZmluZWQobm9kZS50ZXh0Q29udGVudCkpIHtcclxuICAgICAgbm9kZS50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBub2RlLmRhdGEgPSBjb250ZW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5vbkxhbmdDaGFuZ2VTdWIpIHtcclxuICAgICAgdGhpcy5vbkxhbmdDaGFuZ2VTdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5vbkRlZmF1bHRMYW5nQ2hhbmdlU3ViKSB7XHJcbiAgICAgIHRoaXMub25EZWZhdWx0TGFuZ0NoYW5nZVN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm9uVHJhbnNsYXRpb25DaGFuZ2VTdWIpIHtcclxuICAgICAgdGhpcy5vblRyYW5zbGF0aW9uQ2hhbmdlU3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==