const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        const colorId = e.target.id;
        if (colorId === 'gray') {
            body.style.backgroundColor = 'gray';
        } else if (colorId === 'white') {
            body.style.backgroundColor = 'white';
        } else if (colorId === 'blue') {
            body.style.backgroundColor = 'blue';
        } else if (colorId === 'yellow') {
            body.style.backgroundColor = 'yellow';
        }
    });
});
