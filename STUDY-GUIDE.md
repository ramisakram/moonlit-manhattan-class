# How the project works

Read the code before submitting so you can explain it and make changes yourself.

## HTML

Each page uses header, nav, main, section, and footer elements. Navigation links point to local HTML files. The collection has four article elements. Each article has a data-category value that JavaScript reads.

## CSS

The same style.css file styles every page. A CSS grid displays two products per row. The media query changes this to one column when the viewport is 600 pixels wide or smaller. Colors, padding, borders, and font sizes are ordinary CSS rules.

## JavaScript filters

1. querySelectorAll finds the filter buttons and product cards.
2. A for loop adds a click event listener to each button.
3. Clicking reads the selected button's data-filter value.
4. Another loop compares each product's category with the chosen category.
5. The hidden property hides products that do not match.
6. The selected state and visible count are updated.

## JavaScript form

The submit listener calls preventDefault to stop a page reload. It reads the three inputs and checks them. trim removes spaces from the beginning and end. The email field's validity.valid value checks the email format. Error messages use textContent. If everything is valid, the page explains that this is a demonstration and nothing was sent.

## Important concepts

- let declares a variable.
- === compares values without converting their types.
- || means OR.
- for repeats a block of code.
- addEventListener runs a function when an event occurs.
- textContent updates visible text safely.
- HTML describes content, CSS styles it, and JavaScript adds behavior.

## Manual checks

- Open each navigation link from every page.
- On Collection, click All (4 cards), Outerwear (2), and Tops (2).
- Use Tab and Enter to operate links and buttons.
- Submit the contact form empty: three error messages should appear.
- Try an invalid email: an email error should appear.
- Try a message shorter than 10 characters: a message error should appear.
- Enter a name, valid email, and longer message: validation should pass without sending anything.
- Resize the browser to a phone-sized width: cards should stack and links should wrap.
- Confirm the official website link opens the real brand site.

## Customize before submitting

Confirm the business descriptions match your plans. Read every README answer. Check your professor's AI policy. Use your own product photos later if you want, updating image descriptions and resource credits. Keep the demo form explanation unless you add a real form service.
