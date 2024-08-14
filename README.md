# validatoolkit

Simple and specific validation toolkit for JS projects.

## Usage

### Manual validation

First, import necessary validation methods into your component:

```
import { isEmail } from 'validatoolkit'
```

Then, on field change (or any other event you want to handle), call the proper validation method:

```
onEmailChange(email) {
    const validationResult = isEmail(email);
}
```

Validation result will be in the following format (validation indicator and error message):

```
{
    valid: <boolean>,
    message: <string>
}
```

Here's a list of currently available validation methods:

```
required(value); // Checks whether passed variable contains a value.
notNull(value); // Checks whether passed variable is null.
maxValue(max)(value); // Checks whether passed value is lower than the passed maximum.
minValue(min)(value); // Checks whether passed value is greater than the passed minimum.
maxLength(max)(value); // Checks whether passed value's length is less than passed maximum.
minLength(min)(value); // Checks whether passed value's length is greater than passed minimum.
isValue(allowedValues)(value); // Checks whether passed value is one of the passed allowed values.
isEmail(value); // Checks whether passed value is a proper e-mail address.
isNumeric(value); // Checks whether passed value is numeric.
isTime(value); // Checks whether passed value is a valid date string (accepts '/', '-' and '.' delimiters).
isDate(value); // Checks whether passed value is a valid time string.
isUrl(value);  // Checks whether passed value is a proper URL.
isArray(value); // Checks whether passed value is an array.
isNotEmptyArray(value); // Check whether passed value is a non-empty array.
customRegex(value);  // Checks whether value matches the provided regex.
```

### Custom messages

You can also set custom error messages like this:

```
import { messages } from 'validatoolkit'

...

messages.required = () => `M8, field is required!`;
messages.maxLength = (maxCharacters) => `We don't allow more than ${maxCharacters} characters!!`;
```

Note that every message is defined as lambda expression. This is due to the messages that depend on one or more parameters (e.g. maximum number of characters).
