document.addEventListener('DOMContentLoaded', function () {
    // Get the button and the div elements
    var button = document.querySelector('.button-open');
    var shareButton = document.querySelector('.share-button');

    // Add a click event listener to the button
    button.addEventListener('click', function () {
        // Toggle the display property of the shareButton div
        if (shareButton.style.display === 'none' || shareButton.style.display === '') {
            shareButton.style.display = 'block';
        } else {
            shareButton.style.display = 'none';
        }
    });
});