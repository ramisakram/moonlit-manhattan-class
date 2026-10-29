// Collection page: show only cards that match the chosen category.
let filterButtons = document.querySelectorAll('[data-filter]');
let products = document.querySelectorAll('.product');
for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener('click', function () {
        let selectedCategory = filterButtons[i].dataset.filter;
        let visibleCount = 0;
        for (let j = 0; j < products.length; j++) {
            if (selectedCategory === 'All' || products[j].dataset.category === selectedCategory) {
                products[j].hidden = false;
                visibleCount++;
            } else {
                products[j].hidden = true;
            }
        }
        for (let j = 0; j < filterButtons.length; j++) {
            filterButtons[j].setAttribute('aria-pressed', 'false');
        }
        filterButtons[i].setAttribute('aria-pressed', 'true');
        document.getElementById('filter-status').textContent = 'Showing ' + visibleCount + ' designs.';
    });
}
// Contact page: validate the form locally without sending information.
let contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        let name = document.getElementById('name');
        let email = document.getElementById('email');
        let message = document.getElementById('message');
        let nameError = '';
        let emailError = '';
        let messageError = '';
        if (name.value.trim() === '') {
            nameError = 'Please enter your name.';
        }
        if (email.value.trim() === '' || !email.validity.valid) {
            emailError = 'Please enter a valid email address.';
        }
        if (message.value.trim().length < 10) {
            messageError = 'Please enter a message with at least 10 characters.';
        }
        document.getElementById('name-error').textContent = nameError;
        document.getElementById('email-error').textContent = emailError;
        document.getElementById('message-error').textContent = messageError;
        name.setAttribute('aria-invalid', String(nameError !== ''));
        email.setAttribute('aria-invalid', String(emailError !== ''));
        message.setAttribute('aria-invalid', String(messageError !== ''));
        let status = document.getElementById('form-status');
        if (nameError || emailError || messageError) {
            status.textContent = 'Please correct the fields above.';
            if (nameError) { name.focus(); }
            else if (emailError) { email.focus(); }
            else { message.focus(); }
        } else {
            status.textContent = 'Your entries are valid. This class demo did not send or save your message.';
        }
    });
}
