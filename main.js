
import './style.css';

// ======================================
// CATÁLOGO DE PRODUCTOS QUICK SPOT
// ======================================

const productos = [
  {
    id: 1,
    nombre: 'Pepsi Black 355 ml',
    precio: 0.85,
    categoria: 'Bebidas',
    descripcion: 'Todo el sabor de Pepsi sin azúcar.',
    tipo: 'lata',
    marca: 'PEPSI BLACK',
    color: 'black'
  },
  {
    id: 2,
    nombre: 'Lipton Ice Tea 500 ml',
    precio: 1.25,
    categoria: 'Bebidas',
    descripcion: 'Té refrescante listo para disfrutar.',
    tipo: 'botella',
    marca: 'LIPTON',
    color: 'yellow'
  },
  {
    id: 3,
    nombre: 'Coca-Cola 355 ml',
    precio: 0.85,
    categoria: 'Bebidas',
    descripcion: 'Coca-Cola sabor original.',
    tipo: 'lata',
    marca: 'COCA-COLA',
    color: 'red'
  },
  {
    id: 4,
    nombre: 'Agua Cristal 600 ml',
    precio: 0.50,
    categoria: 'Bebidas',
    descripcion: 'Agua pura para refrescarte.',
    tipo: 'botella',
    marca: 'CRISTAL',
    color: 'blue'
  },
  {
    id: 5,
    nombre: 'Nature Valley Bar',
    precio: 1.25,
    categoria: 'Better for You',
    descripcion: 'Barra de granola para disfrutar.',
    tipo: 'barra',
    marca: 'NATURE VALLEY',
    color: 'green'
  },
  {
    id: 6,
    nombre: 'Papas Pringles 37 g',
    precio: 1.75,
    categoria: 'Snacks',
    descripcion: 'Un snack crujiente para compartir.',
    tipo: 'bolsa',
    marca: 'PRINGLES',
    color: 'yellow'
  },
  {
    id: 7,
    nombre: 'Chocolate Snickers 52 g',
    precio: 1.10,
    categoria: 'Confitería',
    descripcion: 'Chocolate, caramelo y maní.',
    tipo: 'barra',
    marca: 'SNICKERS',
    color: 'brown'
  },
  {
    id: 8,
    nombre: 'Jabón Dove 90 g',
    precio: 1.35,
    categoria: 'Cuidado personal',
    descripcion: 'Cuidado e hidratación para tu piel.',
    tipo: 'caja',
    marca: 'DOVE',
    color: 'white'
  }
];

// ======================================
// ESTADO DE LA APLICACIÓN
// ======================================

let categoriaActiva = 'Todos';
let precioMaximo = null;
let busqueda = '';
let carrito = [];

// ======================================
// ESTRUCTURA PRINCIPAL
// ======================================

document.querySelector('#app').innerHTML = `
  <header class="top-header">
    <div class="top-header-inner">

      <a href="#" class="brand" aria-label="Quick Spot inicio">
        <span class="brand-name">QUICK SPOT</span>
        <span class="brand-slogan">Tu tienda favorita</span>
      </a>

      <div class="header-search">
        <input
          type="search"
          id="busqueda"
          placeholder="¿Qué estás buscando hoy?"
          aria-label="Buscar productos"
        >
        <button id="buscarBtn" type="button">Buscar</button>
      </div>

      <button class="cart-button" id="cartButton" type="button">
        Mi carrito
        <span id="cartCount">0</span>
      </button>

    </div>
  </header>

  <nav class="category-nav">
    <div class="category-nav-inner">
      <a href="#catalogo">Inicio</a>
      <a href="#catalogo">Todos los productos</a>
      <a href="#catalogo" data-category="Bebidas">Bebidas</a>
      <a href="#catalogo" data-category="Snacks">Snacks</a>
      <a href="#catalogo" data-category="Better for You">Better for You</a>
      <a href="#catalogo" data-category="Confitería">Confitería</a>
      <a href="#catalogo" data-category="Cuidado personal">Cuidado personal</a>
    </div>
  </nav>

  <main>

    <section class="promo-strip">
      <div>
        <span class="promo-label">QUICK SPOT</span>
        <h1>Todo lo que necesitas,<br>más cerca de ti.</h1>
        <p>
          Bebidas, snacks, productos saludables y esenciales
          para tu día a día.
        </p>
        <a href="#catalogo" class="promo-button">
          Explorar productos
        </a>
      </div>

      <div class="promo-side">
        <span>COMPRA INTELIGENTE</span>
        <strong>Más opciones.</strong>
        <strong>Precios competitivos.</strong>
        <span class="promo-dot"></span>
      </div>
    </section>

    <section class="benefits">
      <div>
        <strong>Variedad</strong>
        <span>Más opciones para ti</span>
      </div>
      <div>
        <strong>Conveniencia</strong>
        <span>Todo en un solo lugar</span>
      </div>
      <div>
        <strong>Bienestar</strong>
        <span>Opciones para elegir mejor</span>
      </div>
    </section>

    <section class="catalog-section" id="catalogo">

      <div class="section-heading">
        <div>
          <span class="eyebrow">DESCUBRE QUICK SPOT</span>
          <h2>Compra tus favoritos</h2>
          <p>Encuentra lo que necesitas al mejor precio.</p>
        </div>

        <div class="available-count">
          <strong id="availableCount">8</strong>
          <span>productos disponibles</span>
        </div>
      </div>

      <div class="filter-panel">

        <div class="category-filters">
          <label>Comprar por categoría</label>
          <div id="categoryButtons" class="filter-buttons"></div>
        </div>

        <div class="price-filter">
          <label for="precioMaximo">Precio máximo</label>
          <div class="price-controls">
            <span>$</span>
            <input
              type="number"
              id="precioMaximo"
              min="0"
              step="0.01"
              placeholder="Ej. 2.00"
            >
            <button id="aplicarPrecio" type="button">Aplicar</button>
            <button id="limpiarFiltros" class="clear-button" type="button">
              Limpiar
            </button>
          </div>
          <small id="priceError" class="error-message"></small>
        </div>

      </div>

      <div class="results-heading">
        <div>
          <span class="eyebrow">NUESTRA SELECCIÓN</span>
          <h3>Productos</h3>
        </div>
        <span id="resultsCount"></span>
      </div>

      <div id="productGrid" class="product-grid"></div>

      <div id="emptyMessage" class="empty-message" hidden>
        <h3>No encontramos productos</h3>
        <p>Intenta cambiar la categoría o el precio máximo.</p>
        <button id="resetEmpty" type="button">Ver todos los productos</button>
      </div>

    </section>

  </main>

  <footer class="footer">
    <div class="footer-brand">QUICK SPOT</div>
    <strong>Tu tienda favorita</strong>
    <p>Más opciones, más necesidades resueltas.</p>
    <small>© 2026 QUICK SPOT. Todos los derechos reservados.</small>
  </footer>

  <div id="cartMessage" class="cart-message" role="status" aria-live="polite"></div>
`;

// ======================================
// ELEMENTOS DEL DOM
// ======================================

const productGrid = document.querySelector('#productGrid');
const categoryButtons = document.querySelector('#categoryButtons');
const priceInput = document.querySelector('#precioMaximo');
const searchInput = document.querySelector('#busqueda');
const emptyMessage = document.querySelector('#emptyMessage');

// ======================================
// FORMATO DE PRECIO
// ======================================

function formatoPrecio(precio) {
  return `$${precio.toFixed(2)}`;
}

// ======================================
// VISUAL DEL PRODUCTO
// No sustituye fotografías oficiales.
// Es una representación gráfica temporal.
// ======================================

function crearVisual(producto) {
  return `
    <div class="product-visual ${producto.color}">
      <span class="visual-brand">${producto.marca}</span>
      <div class="package ${producto.tipo}">
        <span class="package-label">${producto.marca}</span>
      </div>
      <span class="visual-caption">${producto.nombre}</span>
    </div>
  `;
}

// ======================================
// GENERAR TARJETAS CON MAP()
// ======================================

function mostrarProductos(lista) {

  productGrid.innerHTML = lista.map(producto => `
    <article class="product-card">

      <span class="product-category">
        ${producto.categoria}
      </span>

      ${crearVisual(producto)}

      <div class="product-info">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>

        <div class="product-bottom">
          <strong>${formatoPrecio(producto.precio)}</strong>

          <button
            class="add-button"
            data-id="${producto.id}"
            type="button"
          >
            Agregar
          </button>
        </div>
      </div>

    </article>
  `).join('');

  document.querySelector('#availableCount').textContent = lista.length;
  document.querySelector('#resultsCount').textContent =
    `${lista.length} producto(s) encontrado(s)`;

  emptyMessage.hidden = lista.length !== 0;
}

// ======================================
// FILTRAR PRODUCTOS CON FILTER()
// ======================================

function aplicarFiltros() {

  let resultado = productos.filter(producto => {

    const coincideCategoria =
      categoriaActiva === 'Todos' ||
      producto.categoria === categoriaActiva;

    const coincidePrecio =
      precioMaximo === null ||
      producto.precio <= precioMaximo;

    const coincideBusqueda =
      producto.nombre.toLowerCase().includes(busqueda) ||
      producto.categoria.toLowerCase().includes(busqueda) ||
      producto.marca.toLowerCase().includes(busqueda);

    return coincideCategoria && coincidePrecio && coincideBusqueda;
  });

  mostrarProductos(resultado);
}

// ======================================
// BOTONES DE CATEGORÍA
// ======================================

const categorias = [
  'Todos',
  'Bebidas',
  'Better for You',
  'Snacks',
  'Confitería',
  'Cuidado personal'
];

function crearBotonesCategorias() {

  categoryButtons.innerHTML = categorias.map(categoria => `
    <button
      class="category-chip ${categoria === categoriaActiva ? 'active' : ''}"
      data-category="${categoria}"
      type="button"
    >
      ${categoria}
    </button>
  `).join('');

}

categoryButtons.addEventListener('click', (event) => {

  const boton = event.target.closest('[data-category]');

  if (!boton) return;

  categoriaActiva = boton.dataset.category;

  crearBotonesCategorias();
  aplicarFiltros();

});

// Navegación superior por categorías

document.querySelectorAll('.category-nav [data-category]').forEach(link => {

  link.addEventListener('click', () => {
    categoriaActiva = link.dataset.category;
    crearBotonesCategorias();
    aplicarFiltros();
  });

});

// ======================================
// FILTRO POR PRECIO MÁXIMO
// ======================================

document.querySelector('#aplicarPrecio').addEventListener('click', () => {

  const valor = priceInput.value.trim();
  const error = document.querySelector('#priceError');

  if (valor === '') {
    error.textContent = 'Ingresa un precio máximo.';
    return;
  }

  const precio = Number(valor);

  if (!Number.isFinite(precio) || precio < 0) {
    error.textContent = 'Ingresa un precio válido.';
    return;
  }

  error.textContent = '';
  precioMaximo = precio;

  aplicarFiltros();

});

// ======================================
// BUSCADOR
// ======================================

function buscarProductos() {
  busqueda = searchInput.value.trim().toLowerCase();
  aplicarFiltros();
}

document.querySelector('#buscarBtn').addEventListener('click', buscarProductos);

searchInput.addEventListener('input', buscarProductos);

// ======================================
// LIMPIAR FILTROS
// ======================================

function limpiarFiltros() {

  categoriaActiva = 'Todos';
  precioMaximo = null;
  busqueda = '';

  priceInput.value = '';
  searchInput.value = '';

  document.querySelector('#priceError').textContent = '';

  crearBotonesCategorias();
  aplicarFiltros();

}

document.querySelector('#limpiarFiltros').addEventListener('click', limpiarFiltros);
document.querySelector('#resetEmpty').addEventListener('click', limpiarFiltros);

// ======================================
// CARRITO
// ======================================

function actualizarCarrito() {

  const total = carrito.reduce((suma, item) => suma + item.cantidad, 0);

  document.querySelector('#cartCount').textContent = total;
  document.querySelector('#cartButton').setAttribute(
    'aria-label',
    `Mi carrito, ${total} productos`
  );

}

productGrid.addEventListener('click', (event) => {

  const boton = event.target.closest('.add-button');

  if (!boton) return;

  const id = Number(boton.dataset.id);
  const producto = productos.find(item => item.id === id);

  if (!producto) return;

  const existente = carrito.find(item => item.id === id);

  if (existente) {
    existente.cantidad++;
  } else {
    carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      cantidad: 1
    });
  }

  actualizarCarrito();

  const mensaje = document.querySelector('#cartMessage');
  mensaje.textContent = `${producto.nombre} agregado al carrito.`;
  mensaje.classList.add('show');

  window.setTimeout(() => {
    mensaje.classList.remove('show');
  }, 2200);

});

// Mostrar contenido del carrito

document.querySelector('#cartButton').addEventListener('click', () => {

  if (carrito.length === 0) {
    alert('Tu carrito está vacío.');
    return;
  }

  const detalle = carrito.map(item =>
    `${item.nombre} x${item.cantidad} - ${formatoPrecio(item.precio * item.cantidad)}`
  ).join('\n');

  const total = carrito.reduce(
    (suma, item) => suma + item.precio * item.cantidad,
    0
  );

  alert(
    `MI CARRITO QUICK SPOT\n\n${detalle}\n\nTOTAL: ${formatoPrecio(total)}`
  );

});

// ======================================
// INICIALIZAR APLICACIÓN
// ======================================

crearBotonesCategorias();
mostrarProductos(productos);
actualizarCarrito();
