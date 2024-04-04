// HAMBURGER ICON

document.addEventListener('DOMContentLoaded', function() {
    const listIcon = document.querySelector('.bi-list');
    const sidebar = document.getElementById('sidebar');

    // Toggle sidebar visibility when list icon is clicked
    listIcon.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
});
// SCROLL NAVBAR



document.addEventListener('DOMContentLoaded', function() {
    let listIcon = document.querySelector('.bi-list');
    let closeIcon = document.getElementById('#close-sidebar');
    let sidebar = document.getElementById('#sidebar');

    // Toggle sidebar visibility when list icon is clicked
    listIcon.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
    
    closeIcon.addEventListener('click',()=>{
        sidebar.style.display = 'none';
    })

});


// CHANGING BACKGROUND

// List of image URLs
const images = [
    'IMAGES/bg1.jpg',
    'IMAGES/bg2.jpg',
    'IMAGES/bg3.jpg'
];

// Change background image every 5 seconds
let currentIndex = 0;

function changeBackground() {
    document.querySelector('.background-image').style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}

changeBackground(); // Change background immediately on page load

setInterval(changeBackground, 5000); // Change background every 5 seconds




