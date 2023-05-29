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

While the scripting requirements have been followed as per the Frontend Mentor project, the design has been more or less abandoned. This was because, amongst other reasons, I found that if I followed the design, keyboard navigation would be unsatisfactory. So, instead of hiding default form characteristics, e.g. checkboxes and radio buttons, I have instead tried to incorporate them into the design.

I also modified the [Accessible Custom Toggle Switch by Álvaro (Codepen)](https://codepen.io/alvarotrigo/pen/NWweaqW) so that the keyboard user would know they were interacting with a checkbox.

#### To navigate between radio items:

- Use the keyboard arrow keys to select an item, then click `Tab` to move on.

#### To navigate between checkboxes:

- Use the `Tab` key to get to an item, then click the space bar to select it. Click `Tab` to move on.

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

## Testing

- Tested on:
  - Windows 10
    - Chrome
    - Firefox
    - Microsoft Edge
