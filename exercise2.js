// Reference the stylesheet via HTML (!), see link-id: 'page-style' in index.html
// Select all three buttons
// Choose QuerySelectorAll to get a list of buttons. Reference a CSS selector #menu a (!), via style.css
var pageStyleSheet = document.getElementById('page-style'),
    styleButtons = document.querySelectorAll('#menu a'),
    currentStyle = 'default',
    buttonEl;


// Defensive programming to make sure the necessary elements exist in the page
// Check length of styleButtons as querySelectorAll always returns an array
// However, if no elements matching the selector were found, the array will be empty
// NB: in this case, it is not strictly necessary to check this as the "for" loop below
// won't run if the array is empty

if (pageStyleSheet !== null && styleButtons.length > 0) {

    // Loop through the buttons, adding event listener to each
    for (var i = 0; i < styleButtons.length; i++) {

        // Copy element from array to variable
        buttonEl = styleButtons[i];

        // Add event listener to button
        buttonEl.addEventListener('click', function (event) {

            // Get value of the button's "data-style" attribute, as seen in index.html
            // We can use "this" to reference the button that was clicked (buttonEl)
            // Also, use "this" because we can't use buttonEl inside eventHandler
            var newStyle = this.getAttribute('data-style');

            // Extra challenge: Compare the newStyle with value stored in currentStyle
            // We only take action below (new style and setting new sheet href) if the values are different
            if (newStyle != currentStyle) {
                // Update the value of currentStyle (for next time button is clicked)
                currentStyle = newStyle;
                // Set the new style sheet href
                pageStyleSheet.setAttribute('href', newStyle + '.css');
            }

            // Buttons are "a" tags, so we need to prevent default behaviour
            // To prevent the browser from opening th href, as seen in index.html
            event.preventDefault();

        });

    }

}
