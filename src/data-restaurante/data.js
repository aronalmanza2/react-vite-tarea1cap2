export const data = {
  platos: [
    {
      id: 1,
      nombre: "Ensalada César",
      descripcion:
        "Lechuga romana fresca con crutones, queso parmesano y aderezo césar.",
      precio: 8.5,
      categoria: "Entradas",
      imagen: "/img/ensalada-cesar.jpg",
    },
    {
      id: 2,
      nombre: "Sopa de Tomate",
      descripcion:
        "Sopa casera de tomate con hierbas frescas y una mezcla de quesos gratinados.",
      precio: 6.0,
      categoria: "Entradas",
      imagen: "/img/sopa-tomate.jpg",
    },
    {
      id: 3,
      nombre: "Hamburguesa Clásica",
      descripcion:
        "Carne a la parrilla, lechuga, tomate, queso cheddar y salsa especial sobre pan tostado.",
      precio: 9.75,
      categoria: "Platos Principales",
      imagen: "/img/hamburguesa-clasica.jpg",
    },
    {
      id: 4,
      nombre: "Pasta Carbonara",
      descripcion:
        "Espaguetis al dente con salsa cremosa de huevo, panceta y queso parmesano.",
      precio: 11.0,
      categoria: "Platos Principales",
      imagen: "/img/pasta-carbonara.jpg",
    },
    {
      id: 5,
      nombre: "Pizza Margherita",
      descripcion:
        "Masa fina artesanal con salsa de tomate, mozzarella fresca y albahaca.",
      precio: 10.5,
      categoria: "Platos Principales",
      imagen: "/img/pizza-margherita.jpg",
    },
    {
      id: 6,
      nombre: "Tacos de Pollo Asado",
      descripcion:
        "Tortillas de maíz rellenas de pollo asado, cilantro, cebolla y lima.",
      precio: 9.0,
      categoria: "Platos Principales",
      imagen: "/img/tacos-pollo-asado.jpg",
    },
    {
      id: 7,
      nombre: "Lasagna de Carne",
      descripcion:
        "Capas de pasta, carne molida, bechamel y queso gratinado al horno.",
      precio: 12.0,
      categoria: "Platos Principales",
      imagen: "/img/lasagna-carne.jpg",
    },
    {
      id: 8,
      nombre: "Helado de Vainilla",
      descripcion: "Helado artesanal de vainilla con topping de chocolate.",
      precio: 5.0,
      categoria: "Postres",
      imagen: "/img/helado-vainilla.jpg",
    },
    {
      id: 9,
      nombre: "Tarta de Chocolate",
      descripcion: "Tarta densa de chocolate con glaseado de chocolate negro.",
      precio: 6.5,
      categoria: "Postres",
      imagen: "/img/tarta-chocolate.jpg",
    },
    {
      id: 10,
      nombre: "Flan Caramelo",
      descripcion: "Flan suave con una capa de caramelo líquido encima.",
      precio: 5.5,
      categoria: "Postres",
      imagen: "/img/flan-caramelo.jpg",
    },
    {
      id: 11,
      nombre: "Café Expreso",
      descripcion: "Café recién molido servido en taza pequeña.",
      precio: 2.0,
      categoria: "Bebidas",
      imagen: "/img/cafe-expreso.jpg",
    },
    {
      id: 12,
      nombre: "Jugo Natural de Naranja",
      descripcion: "Jugo exprimido al momento sin azúcar añadido.",
      precio: 3.5,
      categoria: "Bebidas",
      imagen: "/img/jugo-naranja.jpg",
    },
    {
      id: 13,
      nombre: "Agua Mineral con Limón",
      descripcion: "Vaso de agua mineral con rodajas de limón fresco.",
      precio: 1.5,
      categoria: "Bebidas",
      imagen: "/img/agua-limon.jpg",
    },
    {
      id: 14,
      nombre: "Nachos con Guacamole",
      descripcion: "Tortillas de maíz fritas acompañadas de guacamole casero.",
      precio: 7.0,
      categoria: "Aperitivos",
      imagen: "/img/nachos-guacamole.jpg",
    },
    {
      id: 15,
      nombre: "Pan de Ajo",
      descripcion: "Pan tostado con mantequilla de ajo y queso derretido.",
      precio: 4.0,
      categoria: "Aperitivos",
      imagen: "/img/pan-de-ajo.jpg",
    },
  ],

  fnPlatosEntradas: () => {
    return data.platos.filter((x) => x.categoria === "Entradas");
  },
  fnPlatosPrincipales: () => {
    return data.platos.filter((x) => x.categoria === "Platos Principales");
  },
  fnPlatosPostres: () => {
    return data.platos.filter((x) => x.categoria === "Postres");
  },
  fnPlatosBebidas: () => {
    return data.platos.filter((x) => x.categoria === "Bebidas");
  },
  fnPlatosAperitivos: () => {
    return data.platos.filter((x) => x.categoria === "Aperitivos");
  },
};
