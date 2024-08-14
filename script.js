document.addEventListener('DOMContentLoaded', function () {
    // Get the button and the div elements
    let button = document.querySelector('.button-open');
    let shareButton = document.querySelector('.share-button');

    // Add a click event listener to the button
    button.addEventListener('click', function () {
        // Toggle the display property of the shareButton div
        if (shareButton.style.display === 'none' || shareButton.style.display === '') {
            shareButton.style.display = 'flex';
        } else {
            shareButton.style.display = 'none';
        }
    });
});