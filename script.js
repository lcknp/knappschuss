function openOverlay(element) {
    var imgSrc = element.querySelector('img').src;
    document.querySelector('.overlay img').src = imgSrc;
    document.querySelector('.overlay').classList.add('active');
}

function closeOverlay(element) {
    element.classList.remove('active');
}

function myFunction() {
document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
    }
    }
}
}