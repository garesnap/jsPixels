const box = document.querySelectorAll('.col-small');
const button = document.querySelectorAll('button');
let loadedColor = "black";

// when button is clicked, load that buttons text content to cursor 'painter' 🎨
button.forEach(element => {
    element.addEventListener('click', () => {
        loadedColor = element.textContent;
    });
});

box.forEach(element => {
    element.style.backgroundColor = 'white';
    element.addEventListener('click', () => {
        element.style.backgroundColor = loadedColor; // clicked box will take on background color of loadedColor
    });
}); // 



/*
TODO: 😀

Add
Let user choose dimensions and then generate grid

Small color pallete

*/