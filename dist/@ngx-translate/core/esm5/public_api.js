/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from "@angular/core";
import { TranslateLoader, TranslateFakeLoader } from "./lib/translate.loader";
import { MissingTranslationHandler, FakeMissingTranslationHandler } from "./lib/missing-translation-handler";
import { TranslateParser, TranslateDefaultParser } from "./lib/translate.parser";
import { TranslateCompiler, TranslateFakeCompiler } from "./lib/translate.compiler";
import { TranslateDirective } from "./lib/translate.directive";
import { TranslatePipe } from "./lib/translate.pipe";
import { TranslateStore } from "./lib/translate.store";
import { USE_DEFAULT_LANG, DEFAULT_LANGUAGE, USE_STORE, TranslateService, USE_EXTEND } from "./lib/translate.service";
export { TranslateLoader, TranslateFakeLoader } from "./lib/translate.loader";
export { USE_STORE, USE_DEFAULT_LANG, DEFAULT_LANGUAGE, USE_EXTEND, TranslateService } from "./lib/translate.service";
export { MissingTranslationHandler, FakeMissingTranslationHandler } from "./lib/missing-translation-handler";
export { TranslateParser, TranslateDefaultParser } from "./lib/translate.parser";
export { TranslateCompiler, TranslateFakeCompiler } from "./lib/translate.compiler";
export { TranslateDirective } from "./lib/translate.directive";
export { TranslatePipe } from "./lib/translate.pipe";
export { TranslateStore } from "./lib/translate.store";
/**
 * @record
 */
export function TranslateModuleConfig() { }
if (false) {
    /** @type {?|undefined} */
    TranslateModuleConfig.prototype.loader;
    /** @type {?|undefined} */
    TranslateModuleConfig.prototype.compiler;
    /** @type {?|undefined} */
    TranslateModuleConfig.prototype.parser;
    /** @type {?|undefined} */
    TranslateModuleConfig.prototype.missingTranslationHandler;
    /** @type {?|undefined} */
    TranslateModuleConfig.prototype.isolate;
    /** @type {?|undefined} */
    TranslateModuleConfig.prototype.extend;
    /** @type {?|undefined} */
    TranslateModuleConfig.prototype.useDefaultLang;
    /** @type {?|undefined} */
    TranslateModuleConfig.prototype.defaultLanguage;
}
var TranslateModule = /** @class */ (function () {
    function TranslateModule() {
    }
    /**
     * Use this method in your root module to provide the TranslateService
     */
    /**
     * Use this method in your root module to provide the TranslateService
     * @param {?=} config
     * @return {?}
     */
    TranslateModule.forRoot = /**
     * Use this method in your root module to provide the TranslateService
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: TranslateModule,
            providers: [
                config.loader || { provide: TranslateLoader, useClass: TranslateFakeLoader },
                config.compiler || { provide: TranslateCompiler, useClass: TranslateFakeCompiler },
                config.parser || { provide: TranslateParser, useClass: TranslateDefaultParser },
                config.missingTranslationHandler || { provide: MissingTranslationHandler, useClass: FakeMissingTranslationHandler },
                TranslateStore,
                { provide: USE_STORE, useValue: config.isolate },
                { provide: USE_DEFAULT_LANG, useValue: config.useDefaultLang },
                { provide: USE_EXTEND, useValue: config.extend },
                { provide: DEFAULT_LANGUAGE, useValue: config.defaultLanguage },
                TranslateService
            ]
        };
    };
    /**
     * Use this method in your other (non root) modules to import the directive/pipe
     */
    /**
     * Use this method in your other (non root) modules to import the directive/pipe
     * @param {?=} config
     * @return {?}
     */
    TranslateModule.forChild = /**
     * Use this method in your other (non root) modules to import the directive/pipe
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: TranslateModule,
            providers: [
                config.loader || { provide: TranslateLoader, useClass: TranslateFakeLoader },
                config.compiler || { provide: TranslateCompiler, useClass: TranslateFakeCompiler },
                config.parser || { provide: TranslateParser, useClass: TranslateDefaultParser },
                config.missingTranslationHandler || { provide: MissingTranslationHandler, useClass: FakeMissingTranslationHandler },
                { provide: USE_STORE, useValue: config.isolate },
                { provide: USE_DEFAULT_LANG, useValue: config.useDefaultLang },
                { provide: USE_EXTEND, useValue: config.extend },
                { provide: DEFAULT_LANGUAGE, useValue: config.defaultLanguage },
                TranslateService
            ]
        };
    };
    TranslateModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        TranslatePipe,
                        TranslateDirective
                    ],
                    exports: [
                        TranslatePipe,
                        TranslateDirective
                    ]
                },] }
    ];
    return TranslateModule;
}());
export { TranslateModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtdHJhbnNsYXRlL2NvcmUvIiwic291cmNlcyI6WyJwdWJsaWNfYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFnQyxNQUFNLGVBQWUsQ0FBQztBQUN0RSxPQUFPLEVBQUMsZUFBZSxFQUFFLG1CQUFtQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDNUUsT0FBTyxFQUFDLHlCQUF5QixFQUFFLDZCQUE2QixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDM0csT0FBTyxFQUFDLGVBQWUsRUFBRSxzQkFBc0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQy9FLE9BQU8sRUFBQyxpQkFBaUIsRUFBRSxxQkFBcUIsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ2xGLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUFDLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUVwSCxxREFBYyx3QkFBd0IsQ0FBQztBQUN2Qyw0RkFBYyx5QkFBeUIsQ0FBQztBQUN4Qyx5RUFBYyxtQ0FBbUMsQ0FBQztBQUNsRCx3REFBYyx3QkFBd0IsQ0FBQztBQUN2Qyx5REFBYywwQkFBMEIsQ0FBQztBQUN6QyxtQ0FBYywyQkFBMkIsQ0FBQztBQUMxQyw4QkFBYyxzQkFBc0IsQ0FBQztBQUNyQywrQkFBYyx1QkFBdUIsQ0FBQzs7OztBQUV0QywyQ0FXQzs7O0lBVkMsdUNBQWtCOztJQUNsQix5Q0FBb0I7O0lBQ3BCLHVDQUFrQjs7SUFDbEIsMERBQXFDOztJQUVyQyx3Q0FBa0I7O0lBRWxCLHVDQUFpQjs7SUFDakIsK0NBQXlCOztJQUN6QixnREFBeUI7O0FBRzNCO0lBQUE7SUFtREEsQ0FBQztJQXhDQzs7T0FFRzs7Ozs7O0lBQ0ksdUJBQU87Ozs7O0lBQWQsVUFBZSxNQUFrQztRQUFsQyx1QkFBQSxFQUFBLFdBQWtDO1FBQy9DLE9BQU87WUFDTCxRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTLEVBQUU7Z0JBQ1QsTUFBTSxDQUFDLE1BQU0sSUFBSSxFQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFDO2dCQUMxRSxNQUFNLENBQUMsUUFBUSxJQUFJLEVBQUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBQztnQkFDaEYsTUFBTSxDQUFDLE1BQU0sSUFBSSxFQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFDO2dCQUM3RSxNQUFNLENBQUMseUJBQXlCLElBQUksRUFBQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsUUFBUSxFQUFFLDZCQUE2QixFQUFDO2dCQUNqSCxjQUFjO2dCQUNkLEVBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBQztnQkFDOUMsRUFBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxjQUFjLEVBQUM7Z0JBQzVELEVBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBQztnQkFDOUMsRUFBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxlQUFlLEVBQUM7Z0JBQzdELGdCQUFnQjthQUNqQjtTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNJLHdCQUFROzs7OztJQUFmLFVBQWdCLE1BQWtDO1FBQWxDLHVCQUFBLEVBQUEsV0FBa0M7UUFDaEQsT0FBTztZQUNMLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFNBQVMsRUFBRTtnQkFDVCxNQUFNLENBQUMsTUFBTSxJQUFJLEVBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUM7Z0JBQzFFLE1BQU0sQ0FBQyxRQUFRLElBQUksRUFBQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFDO2dCQUNoRixNQUFNLENBQUMsTUFBTSxJQUFJLEVBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUM7Z0JBQzdFLE1BQU0sQ0FBQyx5QkFBeUIsSUFBSSxFQUFDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxRQUFRLEVBQUUsNkJBQTZCLEVBQUM7Z0JBQ2pILEVBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBQztnQkFDOUMsRUFBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxjQUFjLEVBQUM7Z0JBQzVELEVBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBQztnQkFDOUMsRUFBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxlQUFlLEVBQUM7Z0JBQzdELGdCQUFnQjthQUNqQjtTQUNGLENBQUM7SUFDSixDQUFDOztnQkFsREYsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixhQUFhO3dCQUNiLGtCQUFrQjtxQkFDbkI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2Isa0JBQWtCO3FCQUNuQjtpQkFDRjs7SUEwQ0Qsc0JBQUM7Q0FBQSxBQW5ERCxJQW1EQztTQXpDWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgUHJvdmlkZXJ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7VHJhbnNsYXRlTG9hZGVyLCBUcmFuc2xhdGVGYWtlTG9hZGVyfSBmcm9tIFwiLi9saWIvdHJhbnNsYXRlLmxvYWRlclwiO1xyXG5pbXBvcnQge01pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIsIEZha2VNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyfSBmcm9tIFwiLi9saWIvbWlzc2luZy10cmFuc2xhdGlvbi1oYW5kbGVyXCI7XHJcbmltcG9ydCB7VHJhbnNsYXRlUGFyc2VyLCBUcmFuc2xhdGVEZWZhdWx0UGFyc2VyfSBmcm9tIFwiLi9saWIvdHJhbnNsYXRlLnBhcnNlclwiO1xyXG5pbXBvcnQge1RyYW5zbGF0ZUNvbXBpbGVyLCBUcmFuc2xhdGVGYWtlQ29tcGlsZXJ9IGZyb20gXCIuL2xpYi90cmFuc2xhdGUuY29tcGlsZXJcIjtcclxuaW1wb3J0IHtUcmFuc2xhdGVEaXJlY3RpdmV9IGZyb20gXCIuL2xpYi90cmFuc2xhdGUuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7VHJhbnNsYXRlUGlwZX0gZnJvbSBcIi4vbGliL3RyYW5zbGF0ZS5waXBlXCI7XHJcbmltcG9ydCB7VHJhbnNsYXRlU3RvcmV9IGZyb20gXCIuL2xpYi90cmFuc2xhdGUuc3RvcmVcIjtcclxuaW1wb3J0IHtVU0VfREVGQVVMVF9MQU5HLCBERUZBVUxUX0xBTkdVQUdFLCBVU0VfU1RPUkUsIFRyYW5zbGF0ZVNlcnZpY2UsIFVTRV9FWFRFTkR9IGZyb20gXCIuL2xpYi90cmFuc2xhdGUuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vbGliL3RyYW5zbGF0ZS5sb2FkZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbGliL3RyYW5zbGF0ZS5zZXJ2aWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2xpYi9taXNzaW5nLXRyYW5zbGF0aW9uLWhhbmRsZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbGliL3RyYW5zbGF0ZS5wYXJzZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbGliL3RyYW5zbGF0ZS5jb21waWxlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9saWIvdHJhbnNsYXRlLmRpcmVjdGl2ZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9saWIvdHJhbnNsYXRlLnBpcGVcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbGliL3RyYW5zbGF0ZS5zdG9yZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2xhdGVNb2R1bGVDb25maWcge1xyXG4gIGxvYWRlcj86IFByb3ZpZGVyO1xyXG4gIGNvbXBpbGVyPzogUHJvdmlkZXI7XHJcbiAgcGFyc2VyPzogUHJvdmlkZXI7XHJcbiAgbWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlcj86IFByb3ZpZGVyO1xyXG4gIC8vIGlzb2xhdGUgdGhlIHNlcnZpY2UgaW5zdGFuY2UsIG9ubHkgd29ya3MgZm9yIGxhenkgbG9hZGVkIG1vZHVsZXMgb3IgY29tcG9uZW50cyB3aXRoIHRoZSBcInByb3ZpZGVyc1wiIHByb3BlcnR5XHJcbiAgaXNvbGF0ZT86IGJvb2xlYW47XHJcbiAgLy8gZXh0ZW5kcyB0cmFuc2xhdGlvbnMgZm9yIGEgZ2l2ZW4gbGFuZ3VhZ2UgaW5zdGVhZCBvZiBpZ25vcmluZyB0aGVtIGlmIHByZXNlbnRcclxuICBleHRlbmQ/OiBib29sZWFuO1xyXG4gIHVzZURlZmF1bHRMYW5nPzogYm9vbGVhbjtcclxuICBkZWZhdWx0TGFuZ3VhZ2U/OiBzdHJpbmc7XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBUcmFuc2xhdGVQaXBlLFxyXG4gICAgVHJhbnNsYXRlRGlyZWN0aXZlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBUcmFuc2xhdGVQaXBlLFxyXG4gICAgVHJhbnNsYXRlRGlyZWN0aXZlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlTW9kdWxlIHtcclxuICAvKipcclxuICAgKiBVc2UgdGhpcyBtZXRob2QgaW4geW91ciByb290IG1vZHVsZSB0byBwcm92aWRlIHRoZSBUcmFuc2xhdGVTZXJ2aWNlXHJcbiAgICovXHJcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBUcmFuc2xhdGVNb2R1bGVDb25maWcgPSB7fSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8VHJhbnNsYXRlTW9kdWxlPiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogVHJhbnNsYXRlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBjb25maWcubG9hZGVyIHx8IHtwcm92aWRlOiBUcmFuc2xhdGVMb2FkZXIsIHVzZUNsYXNzOiBUcmFuc2xhdGVGYWtlTG9hZGVyfSxcclxuICAgICAgICBjb25maWcuY29tcGlsZXIgfHwge3Byb3ZpZGU6IFRyYW5zbGF0ZUNvbXBpbGVyLCB1c2VDbGFzczogVHJhbnNsYXRlRmFrZUNvbXBpbGVyfSxcclxuICAgICAgICBjb25maWcucGFyc2VyIHx8IHtwcm92aWRlOiBUcmFuc2xhdGVQYXJzZXIsIHVzZUNsYXNzOiBUcmFuc2xhdGVEZWZhdWx0UGFyc2VyfSxcclxuICAgICAgICBjb25maWcubWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciB8fCB7cHJvdmlkZTogTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciwgdXNlQ2xhc3M6IEZha2VNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyfSxcclxuICAgICAgICBUcmFuc2xhdGVTdG9yZSxcclxuICAgICAgICB7cHJvdmlkZTogVVNFX1NUT1JFLCB1c2VWYWx1ZTogY29uZmlnLmlzb2xhdGV9LFxyXG4gICAgICAgIHtwcm92aWRlOiBVU0VfREVGQVVMVF9MQU5HLCB1c2VWYWx1ZTogY29uZmlnLnVzZURlZmF1bHRMYW5nfSxcclxuICAgICAgICB7cHJvdmlkZTogVVNFX0VYVEVORCwgdXNlVmFsdWU6IGNvbmZpZy5leHRlbmR9LFxyXG4gICAgICAgIHtwcm92aWRlOiBERUZBVUxUX0xBTkdVQUdFLCB1c2VWYWx1ZTogY29uZmlnLmRlZmF1bHRMYW5ndWFnZX0sXHJcbiAgICAgICAgVHJhbnNsYXRlU2VydmljZVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXNlIHRoaXMgbWV0aG9kIGluIHlvdXIgb3RoZXIgKG5vbiByb290KSBtb2R1bGVzIHRvIGltcG9ydCB0aGUgZGlyZWN0aXZlL3BpcGVcclxuICAgKi9cclxuICBzdGF0aWMgZm9yQ2hpbGQoY29uZmlnOiBUcmFuc2xhdGVNb2R1bGVDb25maWcgPSB7fSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8VHJhbnNsYXRlTW9kdWxlPiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogVHJhbnNsYXRlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBjb25maWcubG9hZGVyIHx8IHtwcm92aWRlOiBUcmFuc2xhdGVMb2FkZXIsIHVzZUNsYXNzOiBUcmFuc2xhdGVGYWtlTG9hZGVyfSxcclxuICAgICAgICBjb25maWcuY29tcGlsZXIgfHwge3Byb3ZpZGU6IFRyYW5zbGF0ZUNvbXBpbGVyLCB1c2VDbGFzczogVHJhbnNsYXRlRmFrZUNvbXBpbGVyfSxcclxuICAgICAgICBjb25maWcucGFyc2VyIHx8IHtwcm92aWRlOiBUcmFuc2xhdGVQYXJzZXIsIHVzZUNsYXNzOiBUcmFuc2xhdGVEZWZhdWx0UGFyc2VyfSxcclxuICAgICAgICBjb25maWcubWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciB8fCB7cHJvdmlkZTogTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciwgdXNlQ2xhc3M6IEZha2VNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyfSxcclxuICAgICAgICB7cHJvdmlkZTogVVNFX1NUT1JFLCB1c2VWYWx1ZTogY29uZmlnLmlzb2xhdGV9LFxyXG4gICAgICAgIHtwcm92aWRlOiBVU0VfREVGQVVMVF9MQU5HLCB1c2VWYWx1ZTogY29uZmlnLnVzZURlZmF1bHRMYW5nfSxcclxuICAgICAgICB7cHJvdmlkZTogVVNFX0VYVEVORCwgdXNlVmFsdWU6IGNvbmZpZy5leHRlbmR9LFxyXG4gICAgICAgIHtwcm92aWRlOiBERUZBVUxUX0xBTkdVQUdFLCB1c2VWYWx1ZTogY29uZmlnLmRlZmF1bHRMYW5ndWFnZX0sXHJcbiAgICAgICAgVHJhbnNsYXRlU2VydmljZVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=