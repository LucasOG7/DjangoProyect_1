var img = document.createElement('img');
img.src = 'img/Comida-perro.jfif'; // Ruta relativa o absoluta de la imagen
document.body.appendChild(img);


const ITEMS = [
    
    {
        id: 1,
        name: 'Comida para perros (Champion Dog)',
        price: 8990,
        image: img,
        qty: 1,
    },

    {
        id: 2,
        name: 'Comida para gatos (Purina Cat Show)',
        price: 8990,
        image: 'newProject/static/img/Comida-gato.jfif',
        qty: 1,
    },

    {
        id: 3,
        name: 'Collar para perros',
        price: 3990,
        image: 'static/img/Collar-Perrro.webp',
        qty: 1,
    },

    {
        id: 4,
        name: 'Rascador para gatos',
        price: 29990,
        image: "{% static 'img/Rascador-Gatos.webp'%}",
        qty: 1,
    },

    {
        id: 5,
        name: 'Bandanas',
        price: 1990,
        image: 'static/img/Bandanas.png',
        qty: 1,
    },

    {
        id: 6,
        name: 'Identificador para perros',
        price: 4990,
        image: 'static/img/IDENTIFICADOR-PERRO.jpg',
        qty: 1,
    },

    {
        id: 7,
        name: 'Identificador para gatos',
        price: 4990,
        image: 'img/IDENTIFICADOR-GATO.jpg',
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
const cartItems = document.querySelector('.cart_items')
const itemCount = document.getElementById('Item_Count')
const SubtotalPrice = document.getElementById('subtotal_price')

let cart_data = []

openBtn.addEventListener('click', openCart)
closeBtn.addEventListener('click', closeCart)
backdrop.addEventListener('click', closeCart)

renderItems()
RenderCartItems()

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

// Agregar productos al carrito
function addItem(idx, ProductoId) {
    // Encontrar mismos productos
    const foundedItem = cart_data.find(
        (producto) => producto.id.toString() === ProductoId.toString()
    )

    if (foundedItem) {
        IncrementarCantidad(ProductoId)
    } else {
        cart_data.push(ITEMS[idx])
    }
    updateCart()
    openCart()
}


// Remover productos del carrito
function RemoveCartItem(ProductoId){
    cart_data = cart_data.filter((producto) => producto.id != ProductoId)

    updateCart()
}

// Incrementar cantidad de producto
function IncrementarCantidad(ProductoId) {
    cart_data = cart_data.map((producto) =>
     producto.id.toString() === ProductoId.toString()
     ? { ...producto, qty: producto.qty + 1}
     : producto
     )

     updateCart()
}

// Disminuir cantidad de producto
function DisminuirCantidad(ProductoId) {
    cart_data = cart_data.map((producto) =>
     producto.id.toString() === ProductoId.toString()
     ? { ...producto, qty: producto.qty > 1 ? producto.qty - 1 : producto.qty}
     : producto
     )

     updateCart()
}

// Contador de items 
function ContadorItems(){
    let ItemCount = 0

    cart_data.forEach((producto) => (ItemCount += producto.qty))

    itemCount.innerText = ItemCount
}

// Calculo Total Compra
function CountSubtotalPrice(){
    let subtotal = 0

    cart_data.forEach((producto) => (subtotal += producto.price * producto.qty))

    SubtotalPrice.innerText = subtotal
}


// Render Items
function renderItems() {
    ITEMS.forEach((producto, idx) => {
        const itemEl = document.createElement('div');
        itemEl.classList.add('producto');
        itemEl.onclick = () => addItem(idx, producto.id)
        itemEl.innerHTML = `
            <img src="{% static '${producto.image}' %}">
            <button>Agregar al carrito</button>
        `
        itemsEl.appendChild(itemEl)
    })
}

// ${producto.image}
// Render Cart Items
function RenderCartItems() {
    // Removemos todo del carrito
    cartItems.innerHTML = ""
    // Agregamos nuevo producto
    cart_data.forEach((producto) => {
        const cartItem = document.createElement('div')
        cartItem.classList.add('cart_item')
        cartItem.innerHTML = `
        <div class="remove_item" onclick="RemoveCartItem(${producto.id})">
        <span>&times;</span>
      </div>
      <div class="item_img">
        <img src="${producto.image}">
      </div>
      <div class="item_details">
        <p>${producto.name}</p>
        <strong>$${producto.price}</strong>
        <div class="qty">
          <span onclick="DisminuirCantidad(${producto.id})">-</span>
          <strong>${producto.qty}</strong>
          <span onclick="IncrementarCantidad(${producto.id})">+</span>
        </div>
      </div>
        `
    cartItems.appendChild(cartItem)
    })
}

function updateCart() {
    // Renderizado de carrito con data actualizada
    RenderCartItems()
    // Contador total de items de carrito
    ContadorItems()
    // Calculo Precio Total
    CountSubtotalPrice()
}