var grid = document.querySelector('.gallery');

var masonry = new Masonry( grid, {
    itemSelector: '.gallery-item',
    columnWidth: '.gallery-sizer',
    gutter: 15, // Abstand zwischen den Elementen
    fitWidth: true // Richte die Gitterbreite am übergeordneten Container aus
});