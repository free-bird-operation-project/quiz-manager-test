# Set Attributes

The `setAttributes` function dynamically assigns attributes to HTML elements, simplifying attribute management without direct DOM manipulation.

## Purpose

- Simplify adding or updating attributes on HTML elements.

## Parameters

1. `element`

     - Type: `HTMLElement`
     - Required: Yes
     - Description: The HTML element to modify.

2. `attributes`

     - Type: `Object`
     - Required: Yes
     - Description: Key-value pairs defining attributes and their values to set on the element.

## Usage

To utilize `setAttributes`, provide an HTML element and an object with the desired attributes.

1. Import the `setAttributes`:

    ```js
    import { setAttributes } from './path/to/utility/set-attributes'
    ```

2. Set up parameters:

    ```js
    const element = document.createElement('div')
    const attributes = {
      'id': 'myElement',
      'class': 'highlight',
      'data-theme': 'dark'
    }
    ```

3. Apply the function with the element and attributes:

    ```js
    setAttributes(element, attributes)
    ```

## Result

> NOTE: This function is not responsible for appending the element to the DOM.

If the above steps are executed, this is the expected result

```html
<div id="myElement" class="highlight" data-theme='dark'></div>
```

## Note

The `setAttributes` function is designed to be used in environments where the DOM is available, such as in web browsers. It may not work as expected in non-DOM environments without modifications.
