import messages from "./messages.js";
import lambdas from "./lambdas.js";

// Facade for everything that will be exported by the module.
const facade = {
	/**
	 * Checks whether value is Falsy, or, if value is a string, whether it's Falsy when trimmed.
	 */
	required: function (value) {
		return {
			isValid: lambdas.required(value),
			message: messages.required(),
		};
	},

	/**
	 * Checks whether value is explicitly null.
	 */
	notNull: function (value) {
		return {
			isValid: lambdas.notNull(value),
			message: messages.notNull(),
		};
	},

	/**
	 * Checks whether value is explicitly undefined.
	 */
	notUndefined: function (value) {
		return {
			isValid: lambdas.notUndefined(value),
			message: messages.notUndefined(),
		};
	},

	/**
	 * Checks whether value is greater than the provided maximum.
	 */
	maxValue: function (maximum) {
		return function (value) {
			return {
				isValid: lambdas.maxValue(maximum)(value),
				message: messages.maxValue(maximum),
			};
		};
	},

	/**
	 * Checks whether value is lower than the provided minimum.
	 */
	minValue: function (minimum) {
		return function (value) {
			return {
				isValid: lambdas.minValue(minimum)(value),
				message: messages.minValue(minimum),
			};
		};
	},

	/**
	 * Checks whether value is shorter in length than provided maximum.
	 */
	maxLength: function (maximumCharacters) {
		return function (value) {
			return {
				isValid: lambdas.maxLength(maximumCharacters)(value),
				message: messages.maxLength(maximumCharacters),
			};
		};
	},

	/**
	 * Checks whether value is longer in length than provided minimum.
	 */
	minLength: function (minimumCharacters) {
		return function (value) {
			return {
				isValid: lambdas.minLength(minimumCharacters)(value),
				message: messages.minLength(minimumCharacters),
			};
		};
	},

	/**
	 * Checks whether value is a member of the provided values list.
	 */
	isValue: function (values) {
		return function (value) {
			return {
				isValid: lambdas.isValue(values)(value),
				message: messages.isValue(values),
			};
		};
	},

	/**
	 * Checks whether value is a valid e-mail address.
	 */
	isEmail: function (value) {
		return {
			isValid: lambdas.isEmail(value),
			message: messages.isEmail(),
		};
	},

	/**
	 * Checks whether value is explicitly numeric.
	 */
	isNumeric: function (value) {
		return {
			isValid: lambdas.isNumeric(value),
			message: messages.isNumeric(),
		};
	},

	/**
	 * Checks whether value is in a valid time format.
	 */
	isTime: function (value) {
		return {
			isValid: lambdas.isTime(value),
			message: messages.isTime(),
		};
	},

	/**
	 * Checks whether value is in a valid date format.
	 */
	isDate: function (value) {
		return {
			isValid: lambdas.isDate(value),
			message: messages.isDate(),
		};
	},

	/**
	 * Checks whether value is lower than the provided minimum.
	 */
	isUrl: function (value) {
		return {
			isValid: lambdas.isUrl(value),
			message: messages.isUrl(),
		};
	},

	/**
	 * Checks whether value is an array.
	 */
	isArray: function (value) {
		return {
			isValid: lambdas.isArray(value),
			message: messages.isArray(),
		};
	},

	/**
	 * Check whether value is a non-empty array.
	 */
	isNotEmptyArray: function (value) {
		return {
			isValid: lambdas.isNotEmptyArray(value),
			message: messages.isNotEmptyArray(),
		};
	},

	/**
	 * Checks whether value matches the provided regex.
	 */
	customRegex: function (value) {
		return {
			isValid: lambdas.customRegex(value),
			message: messages.customRegex(),
		};
	},
};

// Validation methods export.
export const required = facade.required;
export const notNull = facade.notNull;
export const notUndefined = facade.notUndefined;
export const maxValue = facade.maxValue;
export const minValue = facade.minValue;
export const maxLength = facade.maxLength;
export const minLength = facade.minLength;
export const isValue = facade.isValue;
export const isEmail = facade.isEmail;
export const isNumeric = facade.isNumeric;
export const isTime = facade.isTime;
export const isDate = facade.isDate;
export const isUrl = facade.isUrl;
export const isArray = facade.isArray;
export const isNotEmptyArray = facade.isNotEmptyArray;
export const customRegex = facade.customRegex;

// Composite types specific for common domains.
export const domainTypes = {
	email: [facade.isEmail, facade.maxLength(64)],
	password: [facade.minLength(4), facade.maxLength(64)],
	name: [facade.minLength(4), facade.maxLength(64)],
	rating: [facade.minValue(1), facade.maxValue(5)],
};

// Default export to supress warnings.
export default {
	required: facade.required,
	notNull: facade.notNull,
	notUndefined: facade.notUndefined,
	maxValue: facade.maxValue,
	minValue: facade.minValue,
	maxLength: facade.maxLength,
	minLength: facade.minLength,
	isValue: facade.isValue,
	isEmail: facade.isEmail,
	isNumeric: facade.isNumeric,
	isTime: facade.isTime,
	isDate: facade.isDate,
	isUrl: facade.isUrl,
	isArray: facade.isArray,
	isNotEmptyArray: facade.isNotEmptyArray,
	customRegex: facade.customRegex,
	domainTypes: domainTypes,
};

// Export for imported packages (used for custom lambdas and messages).
export { default as messages } from "./messages";
export { default as lambdas } from "./lambdas";
