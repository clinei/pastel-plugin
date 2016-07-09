"use strict";
const off = 0;
const warn = 1;
const error = 2;

module.exports = {
	"parserOptions": {
		"ecmaVersion": 6,
		"sourceType": "script",
		"ecmaFeatures": {
			"globalReturn": false,
			"impliedStrict": false,
			"jsx": false,
			"experimentalObjectRestSpread": true,
		},
	},
	"env": {
		"es6": true,
		"node": true,
	},
	"extends": "eslint:recommended",
	"rules": {
		// Possible errors
		"no-cond-assign": [
			error,
			"always",
		],
		"no-console": [
			error,
			{
				"allow": [
					"warn",
					"log",
					"dir",
				],
			},
		],
		"no-constant-condition": [
			error,
			{"checkLoops": true},
		],
		"no-control-regex": error,
		"no-debugger": error,
		"no-dupe-args": error,
		"no-dupe-keys": error,
		"no-duplicate-case": error,
		"no-empty": [
			error,
			{"allowEmptyCatch": false},
		],
		"no-empty-character-class": error,
		"no-ex-assign": error,
		"no-extra-boolean-cast": error,
		"no-extra-parens": off,
		"no-extra-semi": error,
		"no-func-assign": off,
		"no-inner-declarations": error,
		"no-invalid-regexp": error,
		"no-irregular-whitespace": [
			error,
			{
				"skipStrings": false,
				"skipComments": false,
				"skipRegExps": false,
				"skipTemplates": false,
			},
		],
		"no-negated-in-lhs": error,
		"no-obj-calls": error,
		"no-prototype-builtins": error,
		"no-regex-spaces": error,
		"no-sparse-arrays": error,
		"no-unexpected-multiline": error,
		"no-unreachable": error,
		"no-unsafe-finally": error,
		"use-isnan": error,
		"valid-jsdoc": off,
		"valid-typeof": error,

		// Best Practices
		"accessor-pairs": off,
		"array-callback-return": error,
		"block-scoped-var": error,
		"complexity": off,
		"consistent-return": error,
		"curly": [
			error,
			"all",
		],
		"default-case": error,
		"dot-location": [
			error,
			"property",
		],
		"dot-notation": off,
		"eqeqeq": [
			error,
			"always",
		],
		"guard-for-in": off,
		"no-alert": error,
		"no-caller": error,
		"no-case-declarations": error,
		"no-div-regex": off,
		"no-else-return": off,
		"no-empty-function": [
			error,
			{
				"allow": [
					"arrowFunctions",
				],
			},
		],
		"no-empty-pattern": error,
		"no-eq-null": error,
		"no-eval": error,
		"no-extend-native": error,
		"no-extra-bind": off,
		"no-extra-label": error,
		"no-fallthrough": error,
		"no-floating-decimal": error,
		"no-implicit-coercion": error,
		"no-implicit-globals": off,
		"no-implied-eval": error,
		"no-invalid-this": error,
		"no-iterator": error,
		"no-labels": error,
		"no-lone-blocks": error,
		"no-loop-func": error,
		"no-magic-numbers": off,
		"no-multi-spaces": off,
		"no-multi-str": error,
		"no-native-reassign": error,
		"no-new": error,
		"no-new-func": error,
		"no-new-wrappers": error,
		"no-octal": error,
		"no-octal-escape": error,
		"no-param-reassign": error,
		"no-proto": error,
		"no-redeclare": error,
		"no-return-assign": error,
		"no-script-url": error,
		"no-self-assign": warn,
		"no-self-compare": error,
		"no-sequences": error,
		"no-throw-literal": error,
		"no-unmodified-loop-condition": warn,
		"no-unused-expressions": off,
		"no-unused-labels": error,
		"no-useless-call": error,
		"no-useless-concat": error,
		"no-useless-escape": error,
		"no-void": error,
		"no-warning-comments": off,
		"no-with": error,
		"radix": [
			error,
			"always",
		],
		"vars-on-top": off,
		"wrap-iife": [
			error,
			"outside",
		],
		"yoda": [
			error,
			"never",
			{"onlyEquality": true},
		],

		// Strict Mode
		"strict": [
			error,
			"global",
		],

		// Variables
		"init-declarations": [
			error,
			"always",
		],
		"no-catch-shadow": error,
		"no-delete-var": error,
		"no-label-var": error,
		"no-restricted-globals": error,
		"no-shadow": off,
		"no-shadow-restricted-names": error,
		"no-undef": error,
		"no-undef-init": error,
		"no-undefined": error,
		"no-unused-vars": error,
		"no-use-before-define": error,

		// Node.js and CommonJS
		"callback-return": warn,
		"global-require": error,
		"handle-callback-err": warn,
		"no-mixed-requires": error,
		"no-new-require": error,
		"no-path-concat": error,
		"no-process-env": error,
		"no-process-exit": error,
		"no-restricted-modules": off,
		"no-sync": warn,

		// Stylistic Issues
		"array-bracket-spacing": [
			error,
			"never",
		],
		"block-spacing": [
			error,
			"never",
		],
		"brace-style": [
			error,
			"1tbs",
			{"allowSingleLine": false},
		],
		"camelcase": off,
		"comma-dangle": [
			error,
			"always-multiline",
		],
		"comma-spacing": [
			error,
			{
				"before": false,
				"after": true,
			},
		],
		"comma-style": [
			error,
			"last",
		],
		"computed-property-spacing": [
			error,
			"never",
		],
		"consistent-this": [
			error,
			"that",
		],
		"eol-last": [
			error,
			"unix",
		],
		"func-names": [
			error,
			"always",
		],
		"func-style": [
			error,
			"declaration",
			{"allowArrowFunctions": true},
		],
		"id-blacklist": off,
		"id-length": [
			error,
			{
				"min": 3,
				"properties": "always",
				"exceptions": [
					"fs",
				],
			},
		],
		"id-match": off,
		"indent": [
			error,
			"tab",
		],
		"jsx-quotes": off,
		"key-spacing": [
			error,
			{
				"beforeColon": false,
				"afterColon": true,
				"mode": "strict",
			},
		],
		"keyword-spacing": [
			error,
			{
				"before": true,
				"after": true,
			},
		],
		"linebreak-style": [
			error,
			"unix",
		],
		"lines-around-comment": off,
		"max-depth": [
			error,
			{"max": 6},
		],
		"max-len": [
			error,
			{
				"code": 240,
				"tabWidth": 8,
				"ignoreComments": true,
				"ignoreUrls": true,
			},
		],
		"max-lines": [
			error,
			{
				"max": 800,
				"skipBlankLines": true,
				"skipComments": true,
			},
		],
		"max-nested-callbacks": [
			error,
			{"max": 6},
		],
		"max-params": [
			error,
			{"max": 6},
		],
		"max-statements": off,
		"max-statements-per-line": [
			error,
			{"max": 1},
		],
		"new-cap": [
			error,
			{
				"newIsCap": true,
				"capIsNew": true,
				"newIsCapExceptions": [""],
				"capIsNewExceptions": [""],
				"properties": true,
			},
		],
		"new-parens": error,
		"newline-after-var": off,
		"newline-before-return": off,
		"newline-per-chained-call": [
			error,
			{"ignoreChainWithDepth": 3},
		],
		"no-array-constructor": error,
		"no-bitwise": off,
		"no-continue": error,
		"no-inline-comments": error,
		"no-lonely-if": off,
		"no-mixed-operators": off,
		"no-mixed-spaces-and-tabs": [
			error,
			"smart-tabs",
		],
		"no-multiple-empty-lines": off,
		"no-negated-condition": off,
		"no-nested-ternary": error,
		"no-new-object": error,
		"no-plusplus": [
			error,
			{"allowForLoopAfterthoughts": false},
		],
		"no-restricted-syntax": off,
		"no-spaced-func": error,
		"no-ternary": off,
		"no-trailing-spaces": [
			error,
			{"skipBlankLines": false},
		],
		"no-underscore-dangle": off,
		"no-unneeded-ternary": [
			error,
			{"defaultAssignment": false},
		],
		"no-whitespace-before-property": error,
		"object-curly-newline": off,
		"object-curly-spacing": [
			error,
			"never",
		],
		"object-property-newline": [
			"error",
			{"allowMultiplePropertiesPerLine": false},
		],
		"one-var": off,
		"one-var-declaration-per-line": [
			error,
			"always",
		],
		"operator-assignment": [
			error,
			"always",
		],
		"operator-linebreak": [
			error,
			"none",
		],
		"padded-blocks": off,
		"quote-props": [
			error,
			"consistent",
		],
		"quotes": [
			error,
			"double",
			{
				"avoidEscape": true,
				"allowTemplateLiterals": true,
			},
		],
		"require-jsdoc": off,
		"semi": [error, "always"],
		"semi-spacing": [
			error,
			{
				"before": false,
				"after": true,
			},
		],
		"sort-vars": off,
		"space-before-blocks": [
			error,
			"always",
		],
		"space-before-function-paren": [
			error,
			"never",
		],
		"space-in-parens": [
			error,
			"never",
		],
		"space-infix-ops": off,
		"space-unary-ops": [
			error,
			{
				"words": true,
				"nonwords": false,
			},
		],
		"spaced-comment": [
			error,
			"always",
		],
		"unicode-bom": off,
		"wrap-regex": error,

		// ECMAScript 6
		"arrow-body-style": off,
		"arrow-parens": [
			error,
			"always",
		],
		"arrow-spacing": [
			error,
			{
				"before": true,
				"after": true,
			},
		],
		"constructor-super": error,
		"generator-star-spacing": [
			error,
			{
				"before": false,
				"after": true,
			},
		],
		"no-class-assign": error,
		"no-confusing-arrow": [
			error,
			{"allowParens": true},
		],
		"no-const-assign": error,
		"no-dupe-class-members": error,
		"no-duplicate-imports": error,
		"no-new-symbol": error,
		"no-restricted-imports": off,
		"no-this-before-super": error,
		"no-useless-computed-key": error,
		"no-useless-constructor": error,
		"no-useless-rename": error,
		"no-var": error,
		"object-shorthand": [
			error,
			"never",
		],
		"prefer-arrow-callback": [
			error,
			{"allowNamedFunctions": true},
		],
		"prefer-const": off,

		"prefer-reflect": warn,
		"prefer-rest-params": error,
		"prefer-spread": error,
		"prefer-template": error,
		"require-yield": error,
		"rest-spread-spacing": [
			error,
			"never",
		],
		"sort-imports": off,
		"template-curly-spacing": [
			error,
			"never",
		],
		"yield-star-spacing": [
			error,
			{
				"before": false,
				"after": true,
			},
		],
	},
};
