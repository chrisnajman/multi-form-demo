# Multi-form Demo

- [Website (Git Pages)](https://chrisnajman.github.io/multi-form-demo)

## Description

A series of forms which allows the user to:

- Input personal details,
- Choose a plan,
- Choose add-ons (optional)
- Review chosen items before final submission.

Input is passed from the forms on steps 1, 2 and 3 to Step 4 (Finishing Up) where a total price is calculated.

At each step (apart from after final submission) the input data can be changed.

**No data is saved**.

The page is a response to the [Frontend Mentor Multistep Form](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ) challenge.

## Accessibility

### Keyboard navigation

I followed the project specification when scripting, but jettisoned much of the design. This was because I found that if I followed the design, successful keyboard navigation would only be partial, at best. So instead of hiding default form elements such as checkboxes and radio buttons, I've made a feature of them.

I also modified the excellent [Accessible Custom Toggle Switch by Álvaro (Codepen)](https://codepen.io/alvarotrigo/pen/NWweaqW) so the keyboard user will know they are interacting with a checkbox (and not have to make a guess).

#### To navigate between radio items:

- Use the keyboard arrow keys to select an item, then click `Tab` to continue.

#### To navigate between checkboxes:

- Use the `Tab` key to get to an item, then click the space bar to select it. Click `Tab` to continue.

#### To navigate buttons:

- Use the `Tab` key to focus on a button, then press `Enter` to activate it.

### Screen readers

- `ARIA` and `role` attributes are used as required.

## HTML

All steps take place on the same HTML page (index.html).

## CSS

- `grid` is used for the overall page layout as well as for the plan and add-ons steps.
- `flex` is used throughout.
- Responsive.

## Javascript

- ES6 modules
- ES6 (no transpilation to ES5)
- `document.startViewTransition` applied to 'Previous' and 'Next' buttons. Fallback supplied for unsupported browsers, e.g. Firefox (10/12/203). Note that e.g. Firefox logs `document.startViewTransition` as a type error to the console but functionality not affected.

## Testing

- Tested on:
  - Windows 10
    - Chrome
    - Firefox
    - Microsoft Edge
