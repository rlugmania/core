/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign, __values } from "tslib";
import { EventEmitter, Inject, Injectable, InjectionToken } from "@angular/core";
import { concat, forkJoin, isObservable, of, defer } from "rxjs";
import { concatMap, map, shareReplay, switchMap, take } from "rxjs/operators";
import { MissingTranslationHandler } from "./missing-translation-handler";
import { TranslateCompiler } from "./translate.compiler";
import { TranslateLoader } from "./translate.loader";
import { TranslateParser } from "./translate.parser";
import { TranslateStore } from "./translate.store";
import { isDefined, mergeDeep } from "./util";
/** @type {?} */
export var USE_STORE = new InjectionToken('USE_STORE');
/** @type {?} */
export var USE_DEFAULT_LANG = new InjectionToken('USE_DEFAULT_LANG');
/** @type {?} */
export var DEFAULT_LANGUAGE = new InjectionToken('DEFAULT_LANGUAGE');
/** @type {?} */
export var USE_EXTEND = new InjectionToken('USE_EXTEND');
/**
 * @record
 */
export function TranslationChangeEvent() { }
if (false) {
    /** @type {?} */
    TranslationChangeEvent.prototype.translations;
    /** @type {?} */
    TranslationChangeEvent.prototype.lang;
}
/**
 * @record
 */
export function LangChangeEvent() { }
if (false) {
    /** @type {?} */
    LangChangeEvent.prototype.lang;
    /** @type {?} */
    LangChangeEvent.prototype.translations;
}
/**
 * @record
 */
export function DefaultLangChangeEvent() { }
if (false) {
    /** @type {?} */
    DefaultLangChangeEvent.prototype.lang;
    /** @type {?} */
    DefaultLangChangeEvent.prototype.translations;
}
var TranslateService = /** @class */ (function () {
    /**
     *
     * @param store an instance of the store (that is supposed to be unique)
     * @param currentLoader An instance of the loader currently used
     * @param compiler An instance of the compiler currently used
     * @param parser An instance of the parser currently used
     * @param missingTranslationHandler A handler for missing translations.
     * @param useDefaultLang whether we should use default language translation when current language translation is missing.
     * @param isolate whether this service should use the store or not
     * @param extend To make a child module extend (and use) translations from parent modules.
     * @param defaultLanguage Set the default language using configuration
     */
    function TranslateService(store, currentLoader, compiler, parser, missingTranslationHandler, useDefaultLang, isolate, extend, defaultLanguage) {
        if (useDefaultLang === void 0) { useDefaultLang = true; }
        if (isolate === void 0) { isolate = false; }
        if (extend === void 0) { extend = false; }
        this.store = store;
        this.currentLoader = currentLoader;
        this.compiler = compiler;
        this.parser = parser;
        this.missingTranslationHandler = missingTranslationHandler;
        this.useDefaultLang = useDefaultLang;
        this.isolate = isolate;
        this.extend = extend;
        this.pending = false;
        this._onTranslationChange = new EventEmitter();
        this._onLangChange = new EventEmitter();
        this._onDefaultLangChange = new EventEmitter();
        this._langs = [];
        this._translations = {};
        this._translationRequests = {};
        /** set the default language from configuration */
        if (defaultLanguage) {
            this.setDefaultLang(defaultLanguage);
        }
    }
    Object.defineProperty(TranslateService.prototype, "onTranslationChange", {
        /**
         * An EventEmitter to listen to translation change events
         * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
           *     // do something
           * });
         */
        get: /**
         * An EventEmitter to listen to translation change events
         * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
         *     // do something
         * });
         * @return {?}
         */
        function () {
            return this.isolate ? this._onTranslationChange : this.store.onTranslationChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "onLangChange", {
        /**
         * An EventEmitter to listen to lang change events
         * onLangChange.subscribe((params: LangChangeEvent) => {
           *     // do something
           * });
         */
        get: /**
         * An EventEmitter to listen to lang change events
         * onLangChange.subscribe((params: LangChangeEvent) => {
         *     // do something
         * });
         * @return {?}
         */
        function () {
            return this.isolate ? this._onLangChange : this.store.onLangChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "onDefaultLangChange", {
        /**
         * An EventEmitter to listen to default lang change events
         * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
           *     // do something
           * });
         */
        get: /**
         * An EventEmitter to listen to default lang change events
         * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
         *     // do something
         * });
         * @return {?}
         */
        function () {
            return this.isolate ? this._onDefaultLangChange : this.store.onDefaultLangChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "defaultLang", {
        /**
         * The default lang to fallback when translations are missing on the current lang
         */
        get: /**
         * The default lang to fallback when translations are missing on the current lang
         * @return {?}
         */
        function () {
            return this.isolate ? this._defaultLang : this.store.defaultLang;
        },
        set: /**
         * @param {?} defaultLang
         * @return {?}
         */
        function (defaultLang) {
            if (this.isolate) {
                this._defaultLang = defaultLang;
            }
            else {
                this.store.defaultLang = defaultLang;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "currentLang", {
        /**
         * The lang currently used
         */
        get: /**
         * The lang currently used
         * @return {?}
         */
        function () {
            return this.isolate ? this._currentLang : this.store.currentLang;
        },
        set: /**
         * @param {?} currentLang
         * @return {?}
         */
        function (currentLang) {
            if (this.isolate) {
                this._currentLang = currentLang;
            }
            else {
                this.store.currentLang = currentLang;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "langs", {
        /**
         * an array of langs
         */
        get: /**
         * an array of langs
         * @return {?}
         */
        function () {
            return this.isolate ? this._langs : this.store.langs;
        },
        set: /**
         * @param {?} langs
         * @return {?}
         */
        function (langs) {
            if (this.isolate) {
                this._langs = langs;
            }
            else {
                this.store.langs = langs;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "translations", {
        /**
         * a list of translations per lang
         */
        get: /**
         * a list of translations per lang
         * @return {?}
         */
        function () {
            return this.isolate ? this._translations : this.store.translations;
        },
        set: /**
         * @param {?} translations
         * @return {?}
         */
        function (translations) {
            if (this.isolate) {
                this._translations = translations;
            }
            else {
                this.store.translations = translations;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the default language to use as a fallback
     */
    /**
     * Sets the default language to use as a fallback
     * @param {?} lang
     * @return {?}
     */
    TranslateService.prototype.setDefaultLang = /**
     * Sets the default language to use as a fallback
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        var _this = this;
        if (lang === this.defaultLang) {
            return;
        }
        /** @type {?} */
        var pending = this.retrieveTranslations(lang);
        if (typeof pending !== "undefined") {
            // on init set the defaultLang immediately
            if (this.defaultLang == null) {
                this.defaultLang = lang;
            }
            pending.pipe(take(1))
                .subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                _this.changeDefaultLang(lang);
            }));
        }
        else { // we already have this language
            this.changeDefaultLang(lang);
        }
    };
    /**
     * Gets the default language used
     */
    /**
     * Gets the default language used
     * @return {?}
     */
    TranslateService.prototype.getDefaultLang = /**
     * Gets the default language used
     * @return {?}
     */
    function () {
        return this.defaultLang;
    };
    /**
     * Changes the lang currently used
     */
    /**
     * Changes the lang currently used
     * @param {?} lang
     * @return {?}
     */
    TranslateService.prototype.use = /**
     * Changes the lang currently used
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        var _this = this;
        // don't change the language if the language given is already selected
        if (lang === this.currentLang) {
            return of(this.translations[lang]);
        }
        /** @type {?} */
        var pending = this.retrieveTranslations(lang);
        if (typeof pending !== "undefined") {
            // on init set the currentLang immediately
            if (!this.currentLang) {
                this.currentLang = lang;
            }
            pending.pipe(take(1))
                .subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                _this.changeLang(lang);
            }));
            return pending;
        }
        else { // we have this language, return an Observable
            this.changeLang(lang);
            return of(this.translations[lang]);
        }
    };
    /**
     * Retrieves the given translations
     */
    /**
     * Retrieves the given translations
     * @private
     * @param {?} lang
     * @return {?}
     */
    TranslateService.prototype.retrieveTranslations = /**
     * Retrieves the given translations
     * @private
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        /** @type {?} */
        var pending;
        // if this language is unavailable or extend is true, ask for it
        if (typeof this.translations[lang] === "undefined" || this.extend) {
            this._translationRequests[lang] = this._translationRequests[lang] || this.getTranslation(lang);
            pending = this._translationRequests[lang];
        }
        return pending;
    };
    /**
     * Gets an object of translations for a given language with the current loader
     * and passes it through the compiler
     */
    /**
     * Gets an object of translations for a given language with the current loader
     * and passes it through the compiler
     * @param {?} lang
     * @return {?}
     */
    TranslateService.prototype.getTranslation = /**
     * Gets an object of translations for a given language with the current loader
     * and passes it through the compiler
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        var _this = this;
        this.pending = true;
        /** @type {?} */
        var loadingTranslations = this.currentLoader.getTranslation(lang).pipe(shareReplay(1), take(1));
        this.loadingTranslations = loadingTranslations.pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return _this.compiler.compileTranslations(res, lang); })), shareReplay(1), take(1));
        this.loadingTranslations
            .subscribe({
            next: (/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                _this.translations[lang] = _this.extend && _this.translations[lang] ? __assign(__assign({}, res), _this.translations[lang]) : res;
                _this.updateLangs();
                _this.pending = false;
            }),
            error: (/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                _this.pending = false;
            })
        });
        return loadingTranslations;
    };
    /**
     * Manually sets an object of translations for a given language
     * after passing it through the compiler
     */
    /**
     * Manually sets an object of translations for a given language
     * after passing it through the compiler
     * @param {?} lang
     * @param {?} translations
     * @param {?=} shouldMerge
     * @return {?}
     */
    TranslateService.prototype.setTranslation = /**
     * Manually sets an object of translations for a given language
     * after passing it through the compiler
     * @param {?} lang
     * @param {?} translations
     * @param {?=} shouldMerge
     * @return {?}
     */
    function (lang, translations, shouldMerge) {
        if (shouldMerge === void 0) { shouldMerge = false; }
        translations = this.compiler.compileTranslations(translations, lang);
        if ((shouldMerge || this.extend) && this.translations[lang]) {
            this.translations[lang] = mergeDeep(this.translations[lang], translations);
        }
        else {
            this.translations[lang] = translations;
        }
        this.updateLangs();
        this.onTranslationChange.emit({ lang: lang, translations: this.translations[lang] });
    };
    /**
     * Returns an array of currently available langs
     */
    /**
     * Returns an array of currently available langs
     * @return {?}
     */
    TranslateService.prototype.getLangs = /**
     * Returns an array of currently available langs
     * @return {?}
     */
    function () {
        return this.langs;
    };
    /**
     * Add available langs
     */
    /**
     * Add available langs
     * @param {?} langs
     * @return {?}
     */
    TranslateService.prototype.addLangs = /**
     * Add available langs
     * @param {?} langs
     * @return {?}
     */
    function (langs) {
        var _this = this;
        langs.forEach((/**
         * @param {?} lang
         * @return {?}
         */
        function (lang) {
            if (_this.langs.indexOf(lang) === -1) {
                _this.langs.push(lang);
            }
        }));
    };
    /**
     * Update the list of available langs
     */
    /**
     * Update the list of available langs
     * @private
     * @return {?}
     */
    TranslateService.prototype.updateLangs = /**
     * Update the list of available langs
     * @private
     * @return {?}
     */
    function () {
        this.addLangs(Object.keys(this.translations));
    };
    /**
     * Returns the parsed result of the translations
     */
    /**
     * Returns the parsed result of the translations
     * @param {?} translations
     * @param {?} key
     * @param {?=} interpolateParams
     * @return {?}
     */
    TranslateService.prototype.getParsedResult = /**
     * Returns the parsed result of the translations
     * @param {?} translations
     * @param {?} key
     * @param {?=} interpolateParams
     * @return {?}
     */
    function (translations, key, interpolateParams) {
        var e_1, _a;
        // TODO: Logging for intregrate a fix in IE10 :(
        console.log('translations recieved', translations);
        console.log('keys recieved', key);
        console.log('interpolateparams', interpolateParams);
        /** @type {?} */
        var res;
        if (key instanceof Array) {
            /** @type {?} */
            var result_1 = {};
            /** @type {?} */
            var observables = false;
            try {
                for (var key_1 = __values(key), key_1_1 = key_1.next(); !key_1_1.done; key_1_1 = key_1.next()) {
                    var k = key_1_1.value;
                    result_1[k] = this.getParsedResult(translations, k, interpolateParams);
                    if (isObservable(result_1[k])) {
                        observables = true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (key_1_1 && !key_1_1.done && (_a = key_1.return)) _a.call(key_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (observables) {
                /** @type {?} */
                var sources = key.map((/**
                 * @param {?} k
                 * @return {?}
                 */
                function (k) { return isObservable(result_1[k]) ? result_1[k] : of((/** @type {?} */ (result_1[k]))); }));
                return forkJoin(sources).pipe(map((/**
                 * @param {?} arr
                 * @return {?}
                 */
                function (arr) {
                    /** @type {?} */
                    var obj = {};
                    arr.forEach((/**
                     * @param {?} value
                     * @param {?} index
                     * @return {?}
                     */
                    function (value, index) {
                        obj[key[index]] = value;
                    }));
                    return obj;
                })));
            }
            return result_1;
        }
        if (translations) {
            res = this.parser.interpolate(this.parser.getValue(translations, key), interpolateParams);
        }
        if (typeof res === "undefined" && this.defaultLang != null && this.defaultLang !== this.currentLang && this.useDefaultLang) {
            res = this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang], key), interpolateParams);
        }
        if (typeof res === "undefined") {
            /** @type {?} */
            var params = { key: key, translateService: this };
            if (typeof interpolateParams !== 'undefined') {
                params.interpolateParams = interpolateParams;
            }
            res = this.missingTranslationHandler.handle(params);
        }
        return typeof res !== "undefined" ? res : key;
    };
    /**
     * Gets the translated value of a key (or an array of keys)
     * @returns the translated key, or an object of translated keys
     */
    /**
     * Gets the translated value of a key (or an array of keys)
     * @param {?} key
     * @param {?=} interpolateParams
     * @return {?} the translated key, or an object of translated keys
     */
    TranslateService.prototype.get = /**
     * Gets the translated value of a key (or an array of keys)
     * @param {?} key
     * @param {?=} interpolateParams
     * @return {?} the translated key, or an object of translated keys
     */
    function (key, interpolateParams) {
        var _this = this;
        if (!isDefined(key) || !key.length) {
            throw new Error("Parameter \"key\" required");
        }
        // check if we are loading a new translation to use
        if (this.pending) {
            return this.loadingTranslations.pipe(concatMap((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                res = _this.getParsedResult(res, key, interpolateParams);
                return isObservable(res) ? res : of(res);
            })));
        }
        else {
            /** @type {?} */
            var res = this.getParsedResult(this.translations[this.currentLang], key, interpolateParams);
            return isObservable(res) ? res : of(res);
        }
    };
    /**
     * Returns a stream of translated values of a key (or an array of keys) which updates
     * whenever the translation changes.
     * @returns A stream of the translated key, or an object of translated keys
     */
    /**
     * Returns a stream of translated values of a key (or an array of keys) which updates
     * whenever the translation changes.
     * @param {?} key
     * @param {?=} interpolateParams
     * @return {?} A stream of the translated key, or an object of translated keys
     */
    TranslateService.prototype.getStreamOnTranslationChange = /**
     * Returns a stream of translated values of a key (or an array of keys) which updates
     * whenever the translation changes.
     * @param {?} key
     * @param {?=} interpolateParams
     * @return {?} A stream of the translated key, or an object of translated keys
     */
    function (key, interpolateParams) {
        var _this = this;
        if (!isDefined(key) || !key.length) {
            throw new Error("Parameter \"key\" required");
        }
        return concat(defer((/**
         * @return {?}
         */
        function () { return _this.get(key, interpolateParams); })), this.onTranslationChange.pipe(switchMap((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var res = _this.getParsedResult(event.translations, key, interpolateParams);
            if (typeof res.subscribe === 'function') {
                return res;
            }
            else {
                return of(res);
            }
        }))));
    };
    /**
     * Returns a stream of translated values of a key (or an array of keys) which updates
     * whenever the language changes.
     * @returns A stream of the translated key, or an object of translated keys
     */
    /**
     * Returns a stream of translated values of a key (or an array of keys) which updates
     * whenever the language changes.
     * @param {?} key
     * @param {?=} interpolateParams
     * @return {?} A stream of the translated key, or an object of translated keys
     */
    TranslateService.prototype.stream = /**
     * Returns a stream of translated values of a key (or an array of keys) which updates
     * whenever the language changes.
     * @param {?} key
     * @param {?=} interpolateParams
     * @return {?} A stream of the translated key, or an object of translated keys
     */
    function (key, interpolateParams) {
        var _this = this;
        if (!isDefined(key) || !key.length) {
            throw new Error("Parameter \"key\" required");
        }
        return concat(defer((/**
         * @return {?}
         */
        function () { return _this.get(key, interpolateParams); })), this.onLangChange.pipe(switchMap((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var res = _this.getParsedResult(event.translations, key, interpolateParams);
            return isObservable(res) ? res : of(res);
        }))));
    };
    /**
     * Returns a translation instantly from the internal state of loaded translation.
     * All rules regarding the current language, the preferred language of even fallback languages will be used except any promise handling.
     */
    /**
     * Returns a translation instantly from the internal state of loaded translation.
     * All rules regarding the current language, the preferred language of even fallback languages will be used except any promise handling.
     * @param {?} key
     * @param {?=} interpolateParams
     * @return {?}
     */
    TranslateService.prototype.instant = /**
     * Returns a translation instantly from the internal state of loaded translation.
     * All rules regarding the current language, the preferred language of even fallback languages will be used except any promise handling.
     * @param {?} key
     * @param {?=} interpolateParams
     * @return {?}
     */
    function (key, interpolateParams) {
        if (!isDefined(key) || !key.length) {
            throw new Error("Parameter \"key\" required");
        }
        /** @type {?} */
        var res = this.getParsedResult(this.translations[this.currentLang], key, interpolateParams);
        if (isObservable(res)) {
            if (key instanceof Array) {
                /** @type {?} */
                var obj_1 = {};
                key.forEach((/**
                 * @param {?} value
                 * @param {?} index
                 * @return {?}
                 */
                function (value, index) {
                    obj_1[key[index]] = key[index];
                }));
                return obj_1;
            }
            return key;
        }
        else {
            return res;
        }
    };
    /**
     * Sets the translated value of a key, after compiling it
     */
    /**
     * Sets the translated value of a key, after compiling it
     * @param {?} key
     * @param {?} value
     * @param {?=} lang
     * @return {?}
     */
    TranslateService.prototype.set = /**
     * Sets the translated value of a key, after compiling it
     * @param {?} key
     * @param {?} value
     * @param {?=} lang
     * @return {?}
     */
    function (key, value, lang) {
        if (lang === void 0) { lang = this.currentLang; }
        this.translations[lang][key] = this.compiler.compile(value, lang);
        this.updateLangs();
        this.onTranslationChange.emit({ lang: lang, translations: this.translations[lang] });
    };
    /**
     * Changes the current lang
     */
    /**
     * Changes the current lang
     * @private
     * @param {?} lang
     * @return {?}
     */
    TranslateService.prototype.changeLang = /**
     * Changes the current lang
     * @private
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        this.currentLang = lang;
        this.onLangChange.emit({ lang: lang, translations: this.translations[lang] });
        // if there is no default lang, use the one that we just set
        if (this.defaultLang == null) {
            this.changeDefaultLang(lang);
        }
    };
    /**
     * Changes the default lang
     */
    /**
     * Changes the default lang
     * @private
     * @param {?} lang
     * @return {?}
     */
    TranslateService.prototype.changeDefaultLang = /**
     * Changes the default lang
     * @private
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        this.defaultLang = lang;
        this.onDefaultLangChange.emit({ lang: lang, translations: this.translations[lang] });
    };
    /**
     * Allows to reload the lang file from the file
     */
    /**
     * Allows to reload the lang file from the file
     * @param {?} lang
     * @return {?}
     */
    TranslateService.prototype.reloadLang = /**
     * Allows to reload the lang file from the file
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        this.resetLang(lang);
        return this.getTranslation(lang);
    };
    /**
     * Deletes inner translation
     */
    /**
     * Deletes inner translation
     * @param {?} lang
     * @return {?}
     */
    TranslateService.prototype.resetLang = /**
     * Deletes inner translation
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        this._translationRequests[lang] = undefined;
        this.translations[lang] = undefined;
    };
    /**
     * Returns the language code name from the browser, e.g. "de"
     */
    /**
     * Returns the language code name from the browser, e.g. "de"
     * @return {?}
     */
    TranslateService.prototype.getBrowserLang = /**
     * Returns the language code name from the browser, e.g. "de"
     * @return {?}
     */
    function () {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return undefined;
        }
        /** @type {?} */
        var browserLang = window.navigator.languages ? window.navigator.languages[0] : null;
        browserLang = browserLang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
        if (typeof browserLang === 'undefined') {
            return undefined;
        }
        if (browserLang.indexOf('-') !== -1) {
            browserLang = browserLang.split('-')[0];
        }
        if (browserLang.indexOf('_') !== -1) {
            browserLang = browserLang.split('_')[0];
        }
        return browserLang;
    };
    /**
     * Returns the culture language code name from the browser, e.g. "de-DE"
     */
    /**
     * Returns the culture language code name from the browser, e.g. "de-DE"
     * @return {?}
     */
    TranslateService.prototype.getBrowserCultureLang = /**
     * Returns the culture language code name from the browser, e.g. "de-DE"
     * @return {?}
     */
    function () {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return undefined;
        }
        /** @type {?} */
        var browserCultureLang = window.navigator.languages ? window.navigator.languages[0] : null;
        browserCultureLang = browserCultureLang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
        return browserCultureLang;
    };
    TranslateService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TranslateService.ctorParameters = function () { return [
        { type: TranslateStore },
        { type: TranslateLoader },
        { type: TranslateCompiler },
        { type: TranslateParser },
        { type: MissingTranslationHandler },
        { type: Boolean, decorators: [{ type: Inject, args: [USE_DEFAULT_LANG,] }] },
        { type: Boolean, decorators: [{ type: Inject, args: [USE_STORE,] }] },
        { type: Boolean, decorators: [{ type: Inject, args: [USE_EXTEND,] }] },
        { type: String, decorators: [{ type: Inject, args: [DEFAULT_LANGUAGE,] }] }
    ]; };
    return TranslateService;
}());
export { TranslateService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype.loadingTranslations;
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype.pending;
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype._onTranslationChange;
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype._onLangChange;
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype._onDefaultLangChange;
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype._defaultLang;
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype._currentLang;
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype._langs;
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype._translations;
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype._translationRequests;
    /** @type {?} */
    TranslateService.prototype.store;
    /** @type {?} */
    TranslateService.prototype.currentLoader;
    /** @type {?} */
    TranslateService.prototype.compiler;
    /** @type {?} */
    TranslateService.prototype.parser;
    /** @type {?} */
    TranslateService.prototype.missingTranslationHandler;
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype.useDefaultLang;
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype.isolate;
    /**
     * @type {?}
     * @private
     */
    TranslateService.prototype.extend;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LXRyYW5zbGF0ZS9jb3JlLyIsInNvdXJjZXMiOlsibGliL3RyYW5zbGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFlBQVksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQWMsRUFBRSxFQUFFLEtBQUssRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUMzRSxPQUFPLEVBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzVFLE9BQU8sRUFBQyx5QkFBeUIsRUFBa0MsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBRW5ELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBQyxNQUFNLFFBQVEsQ0FBQzs7QUFFNUMsTUFBTSxLQUFPLFNBQVMsR0FBRyxJQUFJLGNBQWMsQ0FBUyxXQUFXLENBQUM7O0FBQ2hFLE1BQU0sS0FBTyxnQkFBZ0IsR0FBRyxJQUFJLGNBQWMsQ0FBUyxrQkFBa0IsQ0FBQzs7QUFDOUUsTUFBTSxLQUFPLGdCQUFnQixHQUFHLElBQUksY0FBYyxDQUFTLGtCQUFrQixDQUFDOztBQUM5RSxNQUFNLEtBQU8sVUFBVSxHQUFHLElBQUksY0FBYyxDQUFTLFlBQVksQ0FBQzs7OztBQUVsRSw0Q0FHQzs7O0lBRkMsOENBQWtC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LEVBQUU7WUFDNUUsT0FBTyxTQUFTLENBQUM7U0FDbEI7O1lBRUcsa0JBQWtCLEdBQVEsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1FBQy9GLGtCQUFrQixHQUFHLGtCQUFrQixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsZUFBZSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDO1FBRTFJLE9BQU8sa0JBQWtCLENBQUM7SUFDNUIsQ0FBQzs7Z0JBN2ZGLFVBQVU7Ozs7Z0JBN0JILGNBQWM7Z0JBSGQsZUFBZTtnQkFEZixpQkFBaUI7Z0JBRWpCLGVBQWU7Z0JBSGYseUJBQXlCOzhDQTBKbEIsTUFBTSxTQUFDLGdCQUFnQjs4Q0FDdkIsTUFBTSxTQUFDLFNBQVM7OENBQ2hCLE1BQU0sU0FBQyxVQUFVOzZDQUNqQixNQUFNLFNBQUMsZ0JBQWdCOztJQW1ZdEMsdUJBQUM7Q0FBQSxBQTlmRCxJQThmQztTQTdmWSxnQkFBZ0I7Ozs7OztJQUMzQiwrQ0FBNkM7Ozs7O0lBQzdDLG1DQUFpQzs7Ozs7SUFDakMsZ0RBQWdIOzs7OztJQUNoSCx5Q0FBMkY7Ozs7O0lBQzNGLGdEQUFnSDs7Ozs7SUFDaEgsd0NBQTZCOzs7OztJQUM3Qix3Q0FBNkI7Ozs7O0lBQzdCLGtDQUFtQzs7Ozs7SUFDbkMseUNBQWdDOzs7OztJQUNoQyxnREFBdUM7O0lBd0czQixpQ0FBNEI7O0lBQzVCLHlDQUFxQzs7SUFDckMsb0NBQWtDOztJQUNsQyxrQ0FBOEI7O0lBQzlCLHFEQUEyRDs7Ozs7SUFDM0QsMENBQWdFOzs7OztJQUNoRSxtQ0FBbUQ7Ozs7O0lBQ25ELGtDQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXZlbnRFbWl0dGVyLCBJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge2NvbmNhdCwgZm9ya0pvaW4sIGlzT2JzZXJ2YWJsZSwgT2JzZXJ2YWJsZSwgb2YsIGRlZmVyfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQge2NvbmNhdE1hcCwgbWFwLCBzaGFyZVJlcGxheSwgc3dpdGNoTWFwLCB0YWtlfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHtNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyLCBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyUGFyYW1zfSBmcm9tIFwiLi9taXNzaW5nLXRyYW5zbGF0aW9uLWhhbmRsZXJcIjtcclxuaW1wb3J0IHtUcmFuc2xhdGVDb21waWxlcn0gZnJvbSBcIi4vdHJhbnNsYXRlLmNvbXBpbGVyXCI7XHJcbmltcG9ydCB7VHJhbnNsYXRlTG9hZGVyfSBmcm9tIFwiLi90cmFuc2xhdGUubG9hZGVyXCI7XHJcbmltcG9ydCB7VHJhbnNsYXRlUGFyc2VyfSBmcm9tIFwiLi90cmFuc2xhdGUucGFyc2VyXCI7XHJcblxyXG5pbXBvcnQge1RyYW5zbGF0ZVN0b3JlfSBmcm9tIFwiLi90cmFuc2xhdGUuc3RvcmVcIjtcclxuaW1wb3J0IHtpc0RlZmluZWQsIG1lcmdlRGVlcH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVTRV9TVE9SRSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KCdVU0VfU1RPUkUnKTtcclxuZXhwb3J0IGNvbnN0IFVTRV9ERUZBVUxUX0xBTkcgPSBuZXcgSW5qZWN0aW9uVG9rZW48c3RyaW5nPignVVNFX0RFRkFVTFRfTEFORycpO1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9MQU5HVUFHRSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KCdERUZBVUxUX0xBTkdVQUdFJyk7XHJcbmV4cG9ydCBjb25zdCBVU0VfRVhURU5EID0gbmV3IEluamVjdGlvblRva2VuPHN0cmluZz4oJ1VTRV9FWFRFTkQnKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNsYXRpb25DaGFuZ2VFdmVudCB7XHJcbiAgdHJhbnNsYXRpb25zOiBhbnk7XHJcbiAgbGFuZzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExhbmdDaGFuZ2VFdmVudCB7XHJcbiAgbGFuZzogc3RyaW5nO1xyXG4gIHRyYW5zbGF0aW9uczogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERlZmF1bHRMYW5nQ2hhbmdlRXZlbnQge1xyXG4gIGxhbmc6IHN0cmluZztcclxuICB0cmFuc2xhdGlvbnM6IGFueTtcclxufVxyXG5cclxuZGVjbGFyZSBpbnRlcmZhY2UgV2luZG93IHtcclxuICBuYXZpZ2F0b3I6IGFueTtcclxufVxyXG5cclxuZGVjbGFyZSBjb25zdCB3aW5kb3c6IFdpbmRvdztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgbG9hZGluZ1RyYW5zbGF0aW9uczogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gIHByaXZhdGUgcGVuZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX29uVHJhbnNsYXRpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGlvbkNoYW5nZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VHJhbnNsYXRpb25DaGFuZ2VFdmVudD4oKTtcclxuICBwcml2YXRlIF9vbkxhbmdDaGFuZ2U6IEV2ZW50RW1pdHRlcjxMYW5nQ2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxMYW5nQ2hhbmdlRXZlbnQ+KCk7XHJcbiAgcHJpdmF0ZSBfb25EZWZhdWx0TGFuZ0NoYW5nZTogRXZlbnRFbWl0dGVyPERlZmF1bHRMYW5nQ2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxEZWZhdWx0TGFuZ0NoYW5nZUV2ZW50PigpO1xyXG4gIHByaXZhdGUgX2RlZmF1bHRMYW5nOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfY3VycmVudExhbmc6IHN0cmluZztcclxuICBwcml2YXRlIF9sYW5nczogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gIHByaXZhdGUgX3RyYW5zbGF0aW9uczogYW55ID0ge307XHJcbiAgcHJpdmF0ZSBfdHJhbnNsYXRpb25SZXF1ZXN0czogYW55ID0ge307XHJcblxyXG4gIC8qKlxyXG4gICAqIEFuIEV2ZW50RW1pdHRlciB0byBsaXN0ZW4gdG8gdHJhbnNsYXRpb24gY2hhbmdlIGV2ZW50c1xyXG4gICAqIG9uVHJhbnNsYXRpb25DaGFuZ2Uuc3Vic2NyaWJlKChwYXJhbXM6IFRyYW5zbGF0aW9uQ2hhbmdlRXZlbnQpID0+IHtcclxuICAgICAqICAgICAvLyBkbyBzb21ldGhpbmdcclxuICAgICAqIH0pO1xyXG4gICAqL1xyXG4gIGdldCBvblRyYW5zbGF0aW9uQ2hhbmdlKCk6IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGlvbkNoYW5nZUV2ZW50PiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc29sYXRlID8gdGhpcy5fb25UcmFuc2xhdGlvbkNoYW5nZSA6IHRoaXMuc3RvcmUub25UcmFuc2xhdGlvbkNoYW5nZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFuIEV2ZW50RW1pdHRlciB0byBsaXN0ZW4gdG8gbGFuZyBjaGFuZ2UgZXZlbnRzXHJcbiAgICogb25MYW5nQ2hhbmdlLnN1YnNjcmliZSgocGFyYW1zOiBMYW5nQ2hhbmdlRXZlbnQpID0+IHtcclxuICAgICAqICAgICAvLyBkbyBzb21ldGhpbmdcclxuICAgICAqIH0pO1xyXG4gICAqL1xyXG4gIGdldCBvbkxhbmdDaGFuZ2UoKTogRXZlbnRFbWl0dGVyPExhbmdDaGFuZ2VFdmVudD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNvbGF0ZSA/IHRoaXMuX29uTGFuZ0NoYW5nZSA6IHRoaXMuc3RvcmUub25MYW5nQ2hhbmdlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQW4gRXZlbnRFbWl0dGVyIHRvIGxpc3RlbiB0byBkZWZhdWx0IGxhbmcgY2hhbmdlIGV2ZW50c1xyXG4gICAqIG9uRGVmYXVsdExhbmdDaGFuZ2Uuc3Vic2NyaWJlKChwYXJhbXM6IERlZmF1bHRMYW5nQ2hhbmdlRXZlbnQpID0+IHtcclxuICAgICAqICAgICAvLyBkbyBzb21ldGhpbmdcclxuICAgICAqIH0pO1xyXG4gICAqL1xyXG4gIGdldCBvbkRlZmF1bHRMYW5nQ2hhbmdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNvbGF0ZSA/IHRoaXMuX29uRGVmYXVsdExhbmdDaGFuZ2UgOiB0aGlzLnN0b3JlLm9uRGVmYXVsdExhbmdDaGFuZ2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgZGVmYXVsdCBsYW5nIHRvIGZhbGxiYWNrIHdoZW4gdHJhbnNsYXRpb25zIGFyZSBtaXNzaW5nIG9uIHRoZSBjdXJyZW50IGxhbmdcclxuICAgKi9cclxuICBnZXQgZGVmYXVsdExhbmcoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmlzb2xhdGUgPyB0aGlzLl9kZWZhdWx0TGFuZyA6IHRoaXMuc3RvcmUuZGVmYXVsdExhbmc7XHJcbiAgfVxyXG5cclxuICBzZXQgZGVmYXVsdExhbmcoZGVmYXVsdExhbmc6IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMuaXNvbGF0ZSkge1xyXG4gICAgICB0aGlzLl9kZWZhdWx0TGFuZyA9IGRlZmF1bHRMYW5nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zdG9yZS5kZWZhdWx0TGFuZyA9IGRlZmF1bHRMYW5nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGxhbmcgY3VycmVudGx5IHVzZWRcclxuICAgKi9cclxuICBnZXQgY3VycmVudExhbmcoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmlzb2xhdGUgPyB0aGlzLl9jdXJyZW50TGFuZyA6IHRoaXMuc3RvcmUuY3VycmVudExhbmc7XHJcbiAgfVxyXG5cclxuICBzZXQgY3VycmVudExhbmcoY3VycmVudExhbmc6IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMuaXNvbGF0ZSkge1xyXG4gICAgICB0aGlzLl9jdXJyZW50TGFuZyA9IGN1cnJlbnRMYW5nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zdG9yZS5jdXJyZW50TGFuZyA9IGN1cnJlbnRMYW5nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogYW4gYXJyYXkgb2YgbGFuZ3NcclxuICAgKi9cclxuICBnZXQgbGFuZ3MoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNvbGF0ZSA/IHRoaXMuX2xhbmdzIDogdGhpcy5zdG9yZS5sYW5ncztcclxuICB9XHJcblxyXG4gIHNldCBsYW5ncyhsYW5nczogc3RyaW5nW10pIHtcclxuICAgIGlmICh0aGlzLmlzb2xhdGUpIHtcclxuICAgICAgdGhpcy5fbGFuZ3MgPSBsYW5ncztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RvcmUubGFuZ3MgPSBsYW5ncztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGEgbGlzdCBvZiB0cmFuc2xhdGlvbnMgcGVyIGxhbmdcclxuICAgKi9cclxuICBnZXQgdHJhbnNsYXRpb25zKCk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc29sYXRlID8gdGhpcy5fdHJhbnNsYXRpb25zIDogdGhpcy5zdG9yZS50cmFuc2xhdGlvbnM7XHJcbiAgfVxyXG5cclxuICBzZXQgdHJhbnNsYXRpb25zKHRyYW5zbGF0aW9uczogYW55KSB7XHJcbiAgICBpZiAodGhpcy5pc29sYXRlKSB7XHJcbiAgICAgIHRoaXMuX3RyYW5zbGF0aW9ucyA9IHRyYW5zbGF0aW9ucztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RvcmUudHJhbnNsYXRpb25zID0gdHJhbnNsYXRpb25zO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0gc3RvcmUgYW4gaW5zdGFuY2Ugb2YgdGhlIHN0b3JlICh0aGF0IGlzIHN1cHBvc2VkIHRvIGJlIHVuaXF1ZSlcclxuICAgKiBAcGFyYW0gY3VycmVudExvYWRlciBBbiBpbnN0YW5jZSBvZiB0aGUgbG9hZGVyIGN1cnJlbnRseSB1c2VkXHJcbiAgICogQHBhcmFtIGNvbXBpbGVyIEFuIGluc3RhbmNlIG9mIHRoZSBjb21waWxlciBjdXJyZW50bHkgdXNlZFxyXG4gICAqIEBwYXJhbSBwYXJzZXIgQW4gaW5zdGFuY2Ugb2YgdGhlIHBhcnNlciBjdXJyZW50bHkgdXNlZFxyXG4gICAqIEBwYXJhbSBtaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyIEEgaGFuZGxlciBmb3IgbWlzc2luZyB0cmFuc2xhdGlvbnMuXHJcbiAgICogQHBhcmFtIHVzZURlZmF1bHRMYW5nIHdoZXRoZXIgd2Ugc2hvdWxkIHVzZSBkZWZhdWx0IGxhbmd1YWdlIHRyYW5zbGF0aW9uIHdoZW4gY3VycmVudCBsYW5ndWFnZSB0cmFuc2xhdGlvbiBpcyBtaXNzaW5nLlxyXG4gICAqIEBwYXJhbSBpc29sYXRlIHdoZXRoZXIgdGhpcyBzZXJ2aWNlIHNob3VsZCB1c2UgdGhlIHN0b3JlIG9yIG5vdFxyXG4gICAqIEBwYXJhbSBleHRlbmQgVG8gbWFrZSBhIGNoaWxkIG1vZHVsZSBleHRlbmQgKGFuZCB1c2UpIHRyYW5zbGF0aW9ucyBmcm9tIHBhcmVudCBtb2R1bGVzLlxyXG4gICAqIEBwYXJhbSBkZWZhdWx0TGFuZ3VhZ2UgU2V0IHRoZSBkZWZhdWx0IGxhbmd1YWdlIHVzaW5nIGNvbmZpZ3VyYXRpb25cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3RvcmU6IFRyYW5zbGF0ZVN0b3JlLFxyXG4gICAgICAgICAgICAgIHB1YmxpYyBjdXJyZW50TG9hZGVyOiBUcmFuc2xhdGVMb2FkZXIsXHJcbiAgICAgICAgICAgICAgcHVibGljIGNvbXBpbGVyOiBUcmFuc2xhdGVDb21waWxlcixcclxuICAgICAgICAgICAgICBwdWJsaWMgcGFyc2VyOiBUcmFuc2xhdGVQYXJzZXIsXHJcbiAgICAgICAgICAgICAgcHVibGljIG1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXI6IE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIsXHJcbiAgICAgICAgICAgICAgQEluamVjdChVU0VfREVGQVVMVF9MQU5HKSBwcml2YXRlIHVzZURlZmF1bHRMYW5nOiBib29sZWFuID0gdHJ1ZSxcclxuICAgICAgICAgICAgICBASW5qZWN0KFVTRV9TVE9SRSkgcHJpdmF0ZSBpc29sYXRlOiBib29sZWFuID0gZmFsc2UsXHJcbiAgICAgICAgICAgICAgQEluamVjdChVU0VfRVhURU5EKSBwcml2YXRlIGV4dGVuZDogYm9vbGVhbiA9IGZhbHNlLFxyXG4gICAgICAgICAgICAgIEBJbmplY3QoREVGQVVMVF9MQU5HVUFHRSkgZGVmYXVsdExhbmd1YWdlOiBzdHJpbmcpIHtcclxuICAgIC8qKiBzZXQgdGhlIGRlZmF1bHQgbGFuZ3VhZ2UgZnJvbSBjb25maWd1cmF0aW9uICovXHJcbiAgICBpZiAoZGVmYXVsdExhbmd1YWdlKSB7XHJcbiAgICAgIHRoaXMuc2V0RGVmYXVsdExhbmcoZGVmYXVsdExhbmd1YWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgdGhlIGRlZmF1bHQgbGFuZ3VhZ2UgdG8gdXNlIGFzIGEgZmFsbGJhY2tcclxuICAgKi9cclxuICBwdWJsaWMgc2V0RGVmYXVsdExhbmcobGFuZzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAobGFuZyA9PT0gdGhpcy5kZWZhdWx0TGFuZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHBlbmRpbmc6IE9ic2VydmFibGU8YW55PiA9IHRoaXMucmV0cmlldmVUcmFuc2xhdGlvbnMobGFuZyk7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBwZW5kaW5nICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIC8vIG9uIGluaXQgc2V0IHRoZSBkZWZhdWx0TGFuZyBpbW1lZGlhdGVseVxyXG4gICAgICBpZiAodGhpcy5kZWZhdWx0TGFuZyA9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0TGFuZyA9IGxhbmc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHBlbmRpbmcucGlwZSh0YWtlKDEpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmNoYW5nZURlZmF1bHRMYW5nKGxhbmcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHsgLy8gd2UgYWxyZWFkeSBoYXZlIHRoaXMgbGFuZ3VhZ2VcclxuICAgICAgdGhpcy5jaGFuZ2VEZWZhdWx0TGFuZyhsYW5nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgdGhlIGRlZmF1bHQgbGFuZ3VhZ2UgdXNlZFxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXREZWZhdWx0TGFuZygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdExhbmc7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGFuZ2VzIHRoZSBsYW5nIGN1cnJlbnRseSB1c2VkXHJcbiAgICovXHJcbiAgcHVibGljIHVzZShsYW5nOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgLy8gZG9uJ3QgY2hhbmdlIHRoZSBsYW5ndWFnZSBpZiB0aGUgbGFuZ3VhZ2UgZ2l2ZW4gaXMgYWxyZWFkeSBzZWxlY3RlZFxyXG4gICAgaWYgKGxhbmcgPT09IHRoaXMuY3VycmVudExhbmcpIHtcclxuICAgICAgcmV0dXJuIG9mKHRoaXMudHJhbnNsYXRpb25zW2xhbmddKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcGVuZGluZzogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5yZXRyaWV2ZVRyYW5zbGF0aW9ucyhsYW5nKTtcclxuXHJcbiAgICBpZiAodHlwZW9mIHBlbmRpbmcgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgLy8gb24gaW5pdCBzZXQgdGhlIGN1cnJlbnRMYW5nIGltbWVkaWF0ZWx5XHJcbiAgICAgIGlmICghdGhpcy5jdXJyZW50TGFuZykge1xyXG4gICAgICAgIHRoaXMuY3VycmVudExhbmcgPSBsYW5nO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwZW5kaW5nLnBpcGUodGFrZSgxKSlcclxuICAgICAgICAuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jaGFuZ2VMYW5nKGxhbmcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHBlbmRpbmc7XHJcbiAgICB9IGVsc2UgeyAvLyB3ZSBoYXZlIHRoaXMgbGFuZ3VhZ2UsIHJldHVybiBhbiBPYnNlcnZhYmxlXHJcbiAgICAgIHRoaXMuY2hhbmdlTGFuZyhsYW5nKTtcclxuXHJcbiAgICAgIHJldHVybiBvZih0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXRyaWV2ZXMgdGhlIGdpdmVuIHRyYW5zbGF0aW9uc1xyXG4gICAqL1xyXG4gIHByaXZhdGUgcmV0cmlldmVUcmFuc2xhdGlvbnMobGFuZzogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGxldCBwZW5kaW5nOiBPYnNlcnZhYmxlPGFueT47XHJcblxyXG4gICAgLy8gaWYgdGhpcyBsYW5ndWFnZSBpcyB1bmF2YWlsYWJsZSBvciBleHRlbmQgaXMgdHJ1ZSwgYXNrIGZvciBpdFxyXG4gICAgaWYgKHR5cGVvZiB0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSA9PT0gXCJ1bmRlZmluZWRcIiB8fCB0aGlzLmV4dGVuZCkge1xyXG4gICAgICB0aGlzLl90cmFuc2xhdGlvblJlcXVlc3RzW2xhbmddID0gdGhpcy5fdHJhbnNsYXRpb25SZXF1ZXN0c1tsYW5nXSB8fCB0aGlzLmdldFRyYW5zbGF0aW9uKGxhbmcpO1xyXG4gICAgICBwZW5kaW5nID0gdGhpcy5fdHJhbnNsYXRpb25SZXF1ZXN0c1tsYW5nXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGVuZGluZztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgYW4gb2JqZWN0IG9mIHRyYW5zbGF0aW9ucyBmb3IgYSBnaXZlbiBsYW5ndWFnZSB3aXRoIHRoZSBjdXJyZW50IGxvYWRlclxyXG4gICAqIGFuZCBwYXNzZXMgaXQgdGhyb3VnaCB0aGUgY29tcGlsZXJcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0VHJhbnNsYXRpb24obGFuZzogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHRoaXMucGVuZGluZyA9IHRydWU7XHJcbiAgICBjb25zdCBsb2FkaW5nVHJhbnNsYXRpb25zID0gdGhpcy5jdXJyZW50TG9hZGVyLmdldFRyYW5zbGF0aW9uKGxhbmcpLnBpcGUoXHJcbiAgICAgIHNoYXJlUmVwbGF5KDEpLFxyXG4gICAgICB0YWtlKDEpLFxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmxvYWRpbmdUcmFuc2xhdGlvbnMgPSBsb2FkaW5nVHJhbnNsYXRpb25zLnBpcGUoXHJcbiAgICAgIG1hcCgocmVzOiBPYmplY3QpID0+IHRoaXMuY29tcGlsZXIuY29tcGlsZVRyYW5zbGF0aW9ucyhyZXMsIGxhbmcpKSxcclxuICAgICAgc2hhcmVSZXBsYXkoMSksXHJcbiAgICAgIHRha2UoMSksXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMubG9hZGluZ1RyYW5zbGF0aW9uc1xyXG4gICAgICAuc3Vic2NyaWJlKHtcclxuICAgICAgICBuZXh0OiAocmVzOiBPYmplY3QpID0+IHtcclxuICAgICAgICAgIHRoaXMudHJhbnNsYXRpb25zW2xhbmddID0gdGhpcy5leHRlbmQgJiYgdGhpcy50cmFuc2xhdGlvbnNbbGFuZ10gPyB7IC4uLnJlcywgLi4udGhpcy50cmFuc2xhdGlvbnNbbGFuZ10gfSA6IHJlcztcclxuICAgICAgICAgIHRoaXMudXBkYXRlTGFuZ3MoKTtcclxuICAgICAgICAgIHRoaXMucGVuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IChlcnI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gbG9hZGluZ1RyYW5zbGF0aW9ucztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1hbnVhbGx5IHNldHMgYW4gb2JqZWN0IG9mIHRyYW5zbGF0aW9ucyBmb3IgYSBnaXZlbiBsYW5ndWFnZVxyXG4gICAqIGFmdGVyIHBhc3NpbmcgaXQgdGhyb3VnaCB0aGUgY29tcGlsZXJcclxuICAgKi9cclxuICBwdWJsaWMgc2V0VHJhbnNsYXRpb24obGFuZzogc3RyaW5nLCB0cmFuc2xhdGlvbnM6IE9iamVjdCwgc2hvdWxkTWVyZ2U6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgdHJhbnNsYXRpb25zID0gdGhpcy5jb21waWxlci5jb21waWxlVHJhbnNsYXRpb25zKHRyYW5zbGF0aW9ucywgbGFuZyk7XHJcbiAgICBpZiAoKHNob3VsZE1lcmdlIHx8IHRoaXMuZXh0ZW5kKSAmJiB0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSkge1xyXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSA9IG1lcmdlRGVlcCh0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSwgdHJhbnNsYXRpb25zKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudHJhbnNsYXRpb25zW2xhbmddID0gdHJhbnNsYXRpb25zO1xyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVMYW5ncygpO1xyXG4gICAgdGhpcy5vblRyYW5zbGF0aW9uQ2hhbmdlLmVtaXQoe2xhbmc6IGxhbmcsIHRyYW5zbGF0aW9uczogdGhpcy50cmFuc2xhdGlvbnNbbGFuZ119KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgY3VycmVudGx5IGF2YWlsYWJsZSBsYW5nc1xyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXRMYW5ncygpOiBBcnJheTxzdHJpbmc+IHtcclxuICAgIHJldHVybiB0aGlzLmxhbmdzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkIGF2YWlsYWJsZSBsYW5nc1xyXG4gICAqL1xyXG4gIHB1YmxpYyBhZGRMYW5ncyhsYW5nczogQXJyYXk8c3RyaW5nPik6IHZvaWQge1xyXG4gICAgbGFuZ3MuZm9yRWFjaCgobGFuZzogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmxhbmdzLmluZGV4T2YobGFuZykgPT09IC0xKSB7XHJcbiAgICAgICAgdGhpcy5sYW5ncy5wdXNoKGxhbmcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSB0aGUgbGlzdCBvZiBhdmFpbGFibGUgbGFuZ3NcclxuICAgKi9cclxuICBwcml2YXRlIHVwZGF0ZUxhbmdzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5hZGRMYW5ncyhPYmplY3Qua2V5cyh0aGlzLnRyYW5zbGF0aW9ucykpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgcGFyc2VkIHJlc3VsdCBvZiB0aGUgdHJhbnNsYXRpb25zXHJcbiAgICovXHJcbiAgcHVibGljIGdldFBhcnNlZFJlc3VsdCh0cmFuc2xhdGlvbnM6IGFueSwga2V5OiBhbnksIGludGVycG9sYXRlUGFyYW1zPzogT2JqZWN0KTogYW55IHtcclxuXHJcbiAgICAvLyBUT0RPOiBMb2dnaW5nIGZvciBpbnRyZWdyYXRlIGEgZml4IGluIElFMTAgOihcclxuICAgIGNvbnNvbGUubG9nKCd0cmFuc2xhdGlvbnMgcmVjaWV2ZWQnLCB0cmFuc2xhdGlvbnMpO1xyXG4gICAgY29uc29sZS5sb2coJ2tleXMgcmVjaWV2ZWQnLCBrZXkpO1xyXG4gICAgY29uc29sZS5sb2coJ2ludGVycG9sYXRlcGFyYW1zJywgaW50ZXJwb2xhdGVQYXJhbXMpO1xyXG5cclxuICAgIGxldCByZXM6IHN0cmluZyB8IE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHJcbiAgICBpZiAoa2V5IGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgbGV0IHJlc3VsdDogYW55ID0ge30sXHJcbiAgICAgICAgb2JzZXJ2YWJsZXM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgZm9yIChsZXQgayBvZiBrZXkpIHtcclxuICAgICAgICByZXN1bHRba10gPSB0aGlzLmdldFBhcnNlZFJlc3VsdCh0cmFuc2xhdGlvbnMsIGssIGludGVycG9sYXRlUGFyYW1zKTtcclxuICAgICAgICBpZiAoaXNPYnNlcnZhYmxlKHJlc3VsdFtrXSkpIHtcclxuICAgICAgICAgIG9ic2VydmFibGVzID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG9ic2VydmFibGVzKSB7XHJcbiAgICAgICAgY29uc3Qgc291cmNlcyA9IGtleS5tYXAoayA9PiBpc09ic2VydmFibGUocmVzdWx0W2tdKSA/IHJlc3VsdFtrXSA6IG9mKHJlc3VsdFtrXSBhcyBzdHJpbmcpKTtcclxuICAgICAgICByZXR1cm4gZm9ya0pvaW4oc291cmNlcykucGlwZShcclxuICAgICAgICAgIG1hcCgoYXJyOiBBcnJheTxzdHJpbmc+KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBvYmo6IGFueSA9IHt9O1xyXG4gICAgICAgICAgICBhcnIuZm9yRWFjaCgodmFsdWU6IHN0cmluZywgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgIG9ialtrZXlbaW5kZXhdXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0cmFuc2xhdGlvbnMpIHtcclxuICAgICAgcmVzID0gdGhpcy5wYXJzZXIuaW50ZXJwb2xhdGUodGhpcy5wYXJzZXIuZ2V0VmFsdWUodHJhbnNsYXRpb25zLCBrZXkpLCBpbnRlcnBvbGF0ZVBhcmFtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiByZXMgPT09IFwidW5kZWZpbmVkXCIgJiYgdGhpcy5kZWZhdWx0TGFuZyAhPSBudWxsICYmIHRoaXMuZGVmYXVsdExhbmcgIT09IHRoaXMuY3VycmVudExhbmcgJiYgdGhpcy51c2VEZWZhdWx0TGFuZykge1xyXG4gICAgICByZXMgPSB0aGlzLnBhcnNlci5pbnRlcnBvbGF0ZSh0aGlzLnBhcnNlci5nZXRWYWx1ZSh0aGlzLnRyYW5zbGF0aW9uc1t0aGlzLmRlZmF1bHRMYW5nXSwga2V5KSwgaW50ZXJwb2xhdGVQYXJhbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgcmVzID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIGxldCBwYXJhbXM6IE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXJQYXJhbXMgPSB7a2V5LCB0cmFuc2xhdGVTZXJ2aWNlOiB0aGlzfTtcclxuICAgICAgaWYgKHR5cGVvZiBpbnRlcnBvbGF0ZVBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBwYXJhbXMuaW50ZXJwb2xhdGVQYXJhbXMgPSBpbnRlcnBvbGF0ZVBhcmFtcztcclxuICAgICAgfVxyXG4gICAgICByZXMgPSB0aGlzLm1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIuaGFuZGxlKHBhcmFtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHR5cGVvZiByZXMgIT09IFwidW5kZWZpbmVkXCIgPyByZXMgOiBrZXk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIHRoZSB0cmFuc2xhdGVkIHZhbHVlIG9mIGEga2V5IChvciBhbiBhcnJheSBvZiBrZXlzKVxyXG4gICAqIEByZXR1cm5zIHRoZSB0cmFuc2xhdGVkIGtleSwgb3IgYW4gb2JqZWN0IG9mIHRyYW5zbGF0ZWQga2V5c1xyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXQoa2V5OiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+LCBpbnRlcnBvbGF0ZVBhcmFtcz86IE9iamVjdCk6IE9ic2VydmFibGU8c3RyaW5nIHwgYW55PiB7XHJcbiAgICBpZiAoIWlzRGVmaW5lZChrZXkpIHx8ICFrZXkubGVuZ3RoKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUGFyYW1ldGVyIFwia2V5XCIgcmVxdWlyZWRgKTtcclxuICAgIH1cclxuICAgIC8vIGNoZWNrIGlmIHdlIGFyZSBsb2FkaW5nIGEgbmV3IHRyYW5zbGF0aW9uIHRvIHVzZVxyXG4gICAgaWYgKHRoaXMucGVuZGluZykge1xyXG4gICAgICByZXR1cm4gdGhpcy5sb2FkaW5nVHJhbnNsYXRpb25zLnBpcGUoXHJcbiAgICAgICAgY29uY2F0TWFwKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgcmVzID0gdGhpcy5nZXRQYXJzZWRSZXN1bHQocmVzLCBrZXksIGludGVycG9sYXRlUGFyYW1zKTtcclxuICAgICAgICAgIHJldHVybiBpc09ic2VydmFibGUocmVzKSA/IHJlcyA6IG9mKHJlcyk7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgcmVzID0gdGhpcy5nZXRQYXJzZWRSZXN1bHQodGhpcy50cmFuc2xhdGlvbnNbdGhpcy5jdXJyZW50TGFuZ10sIGtleSwgaW50ZXJwb2xhdGVQYXJhbXMpO1xyXG4gICAgICByZXR1cm4gaXNPYnNlcnZhYmxlKHJlcykgPyByZXMgOiBvZihyZXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhIHN0cmVhbSBvZiB0cmFuc2xhdGVkIHZhbHVlcyBvZiBhIGtleSAob3IgYW4gYXJyYXkgb2Yga2V5cykgd2hpY2ggdXBkYXRlc1xyXG4gICAqIHdoZW5ldmVyIHRoZSB0cmFuc2xhdGlvbiBjaGFuZ2VzLlxyXG4gICAqIEByZXR1cm5zIEEgc3RyZWFtIG9mIHRoZSB0cmFuc2xhdGVkIGtleSwgb3IgYW4gb2JqZWN0IG9mIHRyYW5zbGF0ZWQga2V5c1xyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXRTdHJlYW1PblRyYW5zbGF0aW9uQ2hhbmdlKGtleTogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPiwgaW50ZXJwb2xhdGVQYXJhbXM/OiBPYmplY3QpOiBPYnNlcnZhYmxlPHN0cmluZyB8IGFueT4ge1xyXG4gICAgaWYgKCFpc0RlZmluZWQoa2V5KSB8fCAha2V5Lmxlbmd0aCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFBhcmFtZXRlciBcImtleVwiIHJlcXVpcmVkYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvbmNhdChcclxuICAgICAgZGVmZXIoKCkgPT4gdGhpcy5nZXQoa2V5LCBpbnRlcnBvbGF0ZVBhcmFtcykpLFxyXG4gICAgICB0aGlzLm9uVHJhbnNsYXRpb25DaGFuZ2UucGlwZShcclxuICAgICAgICBzd2l0Y2hNYXAoKGV2ZW50OiBUcmFuc2xhdGlvbkNoYW5nZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSB0aGlzLmdldFBhcnNlZFJlc3VsdChldmVudC50cmFuc2xhdGlvbnMsIGtleSwgaW50ZXJwb2xhdGVQYXJhbXMpO1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiByZXMuc3Vic2NyaWJlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gb2YocmVzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICApXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhIHN0cmVhbSBvZiB0cmFuc2xhdGVkIHZhbHVlcyBvZiBhIGtleSAob3IgYW4gYXJyYXkgb2Yga2V5cykgd2hpY2ggdXBkYXRlc1xyXG4gICAqIHdoZW5ldmVyIHRoZSBsYW5ndWFnZSBjaGFuZ2VzLlxyXG4gICAqIEByZXR1cm5zIEEgc3RyZWFtIG9mIHRoZSB0cmFuc2xhdGVkIGtleSwgb3IgYW4gb2JqZWN0IG9mIHRyYW5zbGF0ZWQga2V5c1xyXG4gICAqL1xyXG4gIHB1YmxpYyBzdHJlYW0oa2V5OiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+LCBpbnRlcnBvbGF0ZVBhcmFtcz86IE9iamVjdCk6IE9ic2VydmFibGU8c3RyaW5nIHwgYW55PiB7XHJcbiAgICBpZiAoIWlzRGVmaW5lZChrZXkpIHx8ICFrZXkubGVuZ3RoKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUGFyYW1ldGVyIFwia2V5XCIgcmVxdWlyZWRgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY29uY2F0KFxyXG4gICAgICBkZWZlcigoKSA9PiB0aGlzLmdldChrZXksIGludGVycG9sYXRlUGFyYW1zKSksXHJcbiAgICAgIHRoaXMub25MYW5nQ2hhbmdlLnBpcGUoXHJcbiAgICAgICAgc3dpdGNoTWFwKChldmVudDogTGFuZ0NoYW5nZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSB0aGlzLmdldFBhcnNlZFJlc3VsdChldmVudC50cmFuc2xhdGlvbnMsIGtleSwgaW50ZXJwb2xhdGVQYXJhbXMpO1xyXG4gICAgICAgICAgcmV0dXJuIGlzT2JzZXJ2YWJsZShyZXMpID8gcmVzIDogb2YocmVzKTtcclxuICAgICAgICB9KVxyXG4gICAgICApKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYSB0cmFuc2xhdGlvbiBpbnN0YW50bHkgZnJvbSB0aGUgaW50ZXJuYWwgc3RhdGUgb2YgbG9hZGVkIHRyYW5zbGF0aW9uLlxyXG4gICAqIEFsbCBydWxlcyByZWdhcmRpbmcgdGhlIGN1cnJlbnQgbGFuZ3VhZ2UsIHRoZSBwcmVmZXJyZWQgbGFuZ3VhZ2Ugb2YgZXZlbiBmYWxsYmFjayBsYW5ndWFnZXMgd2lsbCBiZSB1c2VkIGV4Y2VwdCBhbnkgcHJvbWlzZSBoYW5kbGluZy5cclxuICAgKi9cclxuICBwdWJsaWMgaW5zdGFudChrZXk6IHN0cmluZyB8IEFycmF5PHN0cmluZz4sIGludGVycG9sYXRlUGFyYW1zPzogT2JqZWN0KTogc3RyaW5nIHwgYW55IHtcclxuICAgIGlmICghaXNEZWZpbmVkKGtleSkgfHwgIWtleS5sZW5ndGgpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBQYXJhbWV0ZXIgXCJrZXlcIiByZXF1aXJlZGApO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCByZXMgPSB0aGlzLmdldFBhcnNlZFJlc3VsdCh0aGlzLnRyYW5zbGF0aW9uc1t0aGlzLmN1cnJlbnRMYW5nXSwga2V5LCBpbnRlcnBvbGF0ZVBhcmFtcyk7XHJcbiAgICBpZiAoaXNPYnNlcnZhYmxlKHJlcykpIHtcclxuICAgICAgaWYgKGtleSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgbGV0IG9iajogYW55ID0ge307XHJcbiAgICAgICAga2V5LmZvckVhY2goKHZhbHVlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgIG9ialtrZXlbaW5kZXhdXSA9IGtleVtpbmRleF07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4ga2V5O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgdGhlIHRyYW5zbGF0ZWQgdmFsdWUgb2YgYSBrZXksIGFmdGVyIGNvbXBpbGluZyBpdFxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGxhbmc6IHN0cmluZyA9IHRoaXMuY3VycmVudExhbmcpOiB2b2lkIHtcclxuICAgIHRoaXMudHJhbnNsYXRpb25zW2xhbmddW2tleV0gPSB0aGlzLmNvbXBpbGVyLmNvbXBpbGUodmFsdWUsIGxhbmcpO1xyXG4gICAgdGhpcy51cGRhdGVMYW5ncygpO1xyXG4gICAgdGhpcy5vblRyYW5zbGF0aW9uQ2hhbmdlLmVtaXQoe2xhbmc6IGxhbmcsIHRyYW5zbGF0aW9uczogdGhpcy50cmFuc2xhdGlvbnNbbGFuZ119KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoYW5nZXMgdGhlIGN1cnJlbnQgbGFuZ1xyXG4gICAqL1xyXG4gIHByaXZhdGUgY2hhbmdlTGFuZyhsYW5nOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuY3VycmVudExhbmcgPSBsYW5nO1xyXG4gICAgdGhpcy5vbkxhbmdDaGFuZ2UuZW1pdCh7bGFuZzogbGFuZywgdHJhbnNsYXRpb25zOiB0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXX0pO1xyXG5cclxuICAgIC8vIGlmIHRoZXJlIGlzIG5vIGRlZmF1bHQgbGFuZywgdXNlIHRoZSBvbmUgdGhhdCB3ZSBqdXN0IHNldFxyXG4gICAgaWYgKHRoaXMuZGVmYXVsdExhbmcgPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmNoYW5nZURlZmF1bHRMYW5nKGxhbmcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hhbmdlcyB0aGUgZGVmYXVsdCBsYW5nXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBjaGFuZ2VEZWZhdWx0TGFuZyhsYW5nOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVmYXVsdExhbmcgPSBsYW5nO1xyXG4gICAgdGhpcy5vbkRlZmF1bHRMYW5nQ2hhbmdlLmVtaXQoe2xhbmc6IGxhbmcsIHRyYW5zbGF0aW9uczogdGhpcy50cmFuc2xhdGlvbnNbbGFuZ119KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFsbG93cyB0byByZWxvYWQgdGhlIGxhbmcgZmlsZSBmcm9tIHRoZSBmaWxlXHJcbiAgICovXHJcbiAgcHVibGljIHJlbG9hZExhbmcobGFuZzogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHRoaXMucmVzZXRMYW5nKGxhbmcpO1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0VHJhbnNsYXRpb24obGFuZyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZWxldGVzIGlubmVyIHRyYW5zbGF0aW9uXHJcbiAgICovXHJcbiAgcHVibGljIHJlc2V0TGFuZyhsYW5nOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuX3RyYW5zbGF0aW9uUmVxdWVzdHNbbGFuZ10gPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSA9IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIGxhbmd1YWdlIGNvZGUgbmFtZSBmcm9tIHRoZSBicm93c2VyLCBlLmcuIFwiZGVcIlxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXRCcm93c2VyTGFuZygpOiBzdHJpbmcge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiB3aW5kb3cubmF2aWdhdG9yID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBicm93c2VyTGFuZzogYW55ID0gd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZXMgPyB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlc1swXSA6IG51bGw7XHJcbiAgICBicm93c2VyTGFuZyA9IGJyb3dzZXJMYW5nIHx8IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2UgfHwgd2luZG93Lm5hdmlnYXRvci5icm93c2VyTGFuZ3VhZ2UgfHwgd2luZG93Lm5hdmlnYXRvci51c2VyTGFuZ3VhZ2U7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBicm93c2VyTGFuZyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIGlmIChicm93c2VyTGFuZy5pbmRleE9mKCctJykgIT09IC0xKSB7XHJcbiAgICAgIGJyb3dzZXJMYW5nID0gYnJvd3Nlckxhbmcuc3BsaXQoJy0nKVswXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYnJvd3NlckxhbmcuaW5kZXhPZignXycpICE9PSAtMSkge1xyXG4gICAgICBicm93c2VyTGFuZyA9IGJyb3dzZXJMYW5nLnNwbGl0KCdfJylbMF07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGJyb3dzZXJMYW5nO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgY3VsdHVyZSBsYW5ndWFnZSBjb2RlIG5hbWUgZnJvbSB0aGUgYnJvd3NlciwgZS5nLiBcImRlLURFXCJcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0QnJvd3NlckN1bHR1cmVMYW5nKCk6IHN0cmluZyB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHdpbmRvdy5uYXZpZ2F0b3IgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGJyb3dzZXJDdWx0dXJlTGFuZzogYW55ID0gd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZXMgPyB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlc1swXSA6IG51bGw7XHJcbiAgICBicm93c2VyQ3VsdHVyZUxhbmcgPSBicm93c2VyQ3VsdHVyZUxhbmcgfHwgd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZSB8fCB3aW5kb3cubmF2aWdhdG9yLmJyb3dzZXJMYW5ndWFnZSB8fCB3aW5kb3cubmF2aWdhdG9yLnVzZXJMYW5ndWFnZTtcclxuXHJcbiAgICByZXR1cm4gYnJvd3NlckN1bHR1cmVMYW5nO1xyXG4gIH1cclxufVxyXG4iXX0=