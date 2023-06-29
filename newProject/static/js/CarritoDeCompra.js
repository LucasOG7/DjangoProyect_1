const ITEMS = [
    // No me funciona la importacion de las imagenes :c
    {
        id: 1,
        name: 'Comida para perros (Champion Dog)',
        price: 8.990,
        image: 'img/Comida-perro.jfif',
        qty: 1,
    },

    {
        id: 2,
        name: 'Comida para gatos (Purina Cat Show)',
        price: 8.990,
        image: 'static/img/Comida-gato.jfif',
        qty: 1,
    },

    {
        id: 3,
        name: 'Collar para perros',
        price: 3.990,
        image: 'static/img/Collar-Perrro.webp',
        qty: 1,
    },

    {
        id: 4,
        name: 'Rascador para gatos',
        price: 29.990,
        image: 'static/img/Rascador-Gatos.webp',
        qty: 1,
    },

    {
        id: 5,
        name: 'Bandanas',
        price: 1.990,
        image: 'static/img/Bandanas.png',
        qty: 1,
    },

    {
        id: 6,
        name: 'Identificador para perros',
        price: 4.990,
        image: 'static/img/IDENTIFICADOR-PERRO.jpg',
        qty: 1,
    },

    {
        id: 7,
        name: 'Identificador para gatos',
        price: 4.990,
        image: 'static/img/IDENTIFICADOR-GATO.jpg',
        qty: 1,
    },

    {
        id: 8,
        name: 'Correa para perros',
        price: 4.990,
        image: 'static/img/IDENTIFICADOR-PERRO.jpg',
        qty: 1,
    },

]



const openBtn = document.getElementById('open_cart_btn')
const cart = document.getElementById('sidecart')
const closeBtn = document.getElementById('close_btn')
const backdrop = document.querySelector('.backdrop')
const itemsEl = document.querySelector('.Productos')

openBtn.addEventListener('click', openCart)
closeBtn.addEventListener('click', closeCart)
backdrop.addEventListener('click', closeCart)

renderItems()

// Open Cart
function openCart() {
    cart.classList.add('open')
    backdrop.style.display = 'block'

    setTimeout(() => {
        backdrop.classList.add('show')
    }, 0)
}

// close Cart
function closeCart() {
    cart.classList.remove('open')
    backdrop.classList.remove('show')

    setTimeout(() => {
        backdrop.style.display = 'none'
    }, 500)
}


// Render Items
function renderItems() {
    ITEMS.forEach((producto) => {
        const itemEl = document.createElement('div');
        itemEl.classList.add('producto');
        itemEl.innerHTML = `
                <img src="{% static '${producto.image}' %}">
                <button>Agregar al carrito</button>
        `;
        itemsEl.appendChild(itemEl)
    })
}