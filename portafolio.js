console.log("hola");


// Lista de trabajos
const trabajos = [
    {
        titulo: "Identidad Corporativa",
        categoria: "Branding",
        imagen: "images/i1.jpg"
    },
    {
        titulo: "Mobiliario",
        categoria: "Product Design",
        imagen: "images/i2.png"
    },
    {
        titulo: "Juego",
        categoria: "Product Design",
        imagen: "images/i3.png"
    },
    {
        titulo: "App Design",
        categoria: "UX/UI",
        imagen: "images/i4.png"
    },
    {
        titulo: "Identidad Corporativa",
        categoria: "Branding",
        imagen: "images/i5.png"
    },
    {
        titulo: "App Design",
        categoria: "UX/UI",
        imagen: "images/i6.png"
    },
    {
        titulo: "Packaging",
        categoria: "Produc Design",
        imagen: "images/i7.png"
    },
    {
        titulo: "Aromatizante",
        categoria: "Produc Design",
        imagen: "images/i8.png"
    },
    
];


const galleryGrid = document.querySelector('.gallery-grid');


trabajos.forEach(trabajo => {
    const item = document.createElement('div');
    item.classList.add('gallery-item');

    item.innerHTML = `
        <img src="${trabajo.imagen}" alt="${trabajo.titulo}">
        <div class="gallery-overlay">
            <h3>${trabajo.titulo}</h3>
            <p>${trabajo.categoria}</p>
        </div>
    `;

    galleryGrid.appendChild(item);
});
