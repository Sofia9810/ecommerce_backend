const { Product } = require("../models/index");
async function productSeeder() {
 const productList = [
  {
    name: "NVIDIA GeForce RTX 3080",
    description: "Potente tarjeta gráfica para gaming con arquitectura Ampere.",
    price: 699.99,
    stock: 10,
    featured: true,
    pic: "https://example.com/rtx3080.jpg",
    categoryId: 1,
    "category_label": "Hardware"
  },
  {
    name: "AMD Ryzen 9 5900X",
    description: "Procesador de alto rendimiento para juegos y aplicaciones intensivas.",
    price: 549.99,
    stock: 15,
    featured: false,
    pic: "https://example.com/ryzen5900x.jpg",
    categoryId: 1,
    "category_label": "Hardware"
  },
  {
    name: "ASUS ROG Strix X570-E Gaming",
    description: "Placa base premium con soporte para overclocking y iluminación RGB.",
    price: 299.99,
    stock: 8,
    featured: false,
    pic: "https://example.com/rogstrix.jpg",
    categoryId: 1,
    "category_label": "Hardware"
  },
  {
    name: "Corsair Vengeance RGB Pro 32GB (2x16GB)",
    description: "Kit de memoria RAM DDR4 de alta velocidad con iluminación RGB personalizable.",
    price: 159.99,
    stock: 20,
    featured: true,
    pic: "https://example.com/vengeancergb.jpg",
    categoryId: 1,
    "category_label": "Hardware"
  },
  {
    name: "Samsung 970 EVO Plus NVMe M.2 1TB",
    description: "Disco SSD ultrarrápido para almacenamiento de juegos y aplicaciones.",
    price: 179.99,
    stock: 25,
    featured: false,
    pic: "https://example.com/970evoplus.jpg",
    categoryId: 1,
    "category_label": "Hardware"
  },
  {
    name: "Corsair RM850x 850W 80+ Gold",
    description: "Fuente de alimentación modular con certificación 80+ Gold para una eficiencia óptima.",
    price: 129.99,
    stock: 12,
    featured: true,
    pic: "https://example.com/rm850x.jpg",
    categoryId: 1,
    "category_label": "Hardware"
  },
  {
    name: "NZXT H510 Elite",
    description: "Torre de PC compacta con panel frontal de vidrio templado y efectos de iluminación RGB.",
    price: 149.99,
    stock: 18,
    featured: true,
    pic: "https://example.com/h510elite.jpg",
    categoryId: 1,
    "category_label": "Hardware"
  },
  {
    name: "Corsair H100i RGB Platinum SE",
    description: "Sistema de refrigeración líquida de alto rendimiento con iluminación RGB.",
    price: 159.99,
    stock: 10,
    featured: false,
    pic: "https://example.com/h100i.jpg",
    categoryId: 1,
    "category_label": "Hardware"
  },
  {
    name: "ASUS Essence STX II",
    description: "Tarjeta de sonido de alta fidelidad para una experiencia de audio inmersiva.",
    price: 199.99,
    stock: 7,
    featured: true,
    pic: "https://example.com/essencestx.jpg",
    categoryId: 1,
    "category_label": "Hardware"
  },
  {
    name: "Cable de extensión PCIe 3.0 para GPU",
    description: "Cable de extensión de alta calidad para conectar tarjetas gráficas a la placa base.",
    price: 19.99,
    stock: 30,
    featured: false,
    pic: "https://example.com/pciecable.jpg",
    categoryId: 1,
    "category_label": "Hardware"
  },
  {
    name: "Razer BlackWidow Elite",
    description: "Teclado mecánico RGB diseñado para juegos de alto rendimiento.",
    price: 149.99,
    stock: 15,
    featured: true,
    pic: "https://example.com/blackwidowelite.jpg",
    categoryId: 2,
    "category_label": "Periféricos"
  },
  {
    name: "Logitech G502 HERO",
    description: "Ratón de alto rendimiento con sensor óptico avanzado y pesos ajustables.",
    price: 79.99,
    stock: 20,
    featured: false,
    pic: "https://example.com/g502hero.jpg",
    categoryId: 2,
    "category_label": "Periféricos"
  },
  {
    name: "Corsair MM800 Polaris RGB",
    description: "Alfombrilla de ratón con iluminación RGB y carga inalámbrica Qi.",
    price: 59.99,
    stock: 25,
    featured: true,
    pic: "https://example.com/mm800.jpg",
    categoryId: 2,
    "category_label": "Periféricos"
  },
  {
    name: "SteelSeries Arctis 7",
    description: "Auriculares inalámbricos para gaming con sonido envolvente DTS Headphone:X 2.0.",
    price: 149.99,
    stock: 12,
    featured: false,
    pic: "https://example.com/arctis7.jpg",
    categoryId: 2,
    "category_label": "Periféricos"
  },
  {
    name: "Blue Yeti X",
    description: "Micrófono USB de alta calidad con múltiples patrones de captura de audio.",
    price: 169.99,
    stock: 8,
    featured: true,
    pic: "https://example.com/yetix.jpg",
    categoryId: 2,
    "category_label": "Periféricos"
  },
  {
    name: "Logitech G Saitek X52 Pro Flight Control System",
    description: "Joystick profesional para simuladores de vuelo con tecnología de precisión.",
    price: 199.99,
    stock: 5,
    featured: false,
    pic: "https://example.com/x52pro.jpg",
    categoryId: 2,
    "category_label": "Periféricos"
  },
  {
    name: "Xbox Elite Series 2",
    description: "Gamepad premium con botones intercambiables y personalizables.",
    price: 179.99,
    stock: 12,
    featured: true,
    pic: "https://example.com/elite2.jpg",
    categoryId: 2,
    "category_label": "Periféricos"
  },
  {
    name: "Logitech G923 TrueForce",
    description: "Volante de carreras con tecnología TrueForce para una experiencia de conducción realista.",
    price: 399.99,
    stock: 8,
    featured: false,
    pic: "https://example.com/g923.jpg",
    categoryId: 2,
    "category_label": "Periféricos"
  },
  {
    name: "DXRacer Racing Series",
    description: "Silla gaming ergonómica con reposabrazos ajustables y soporte lumbar integrado.",
    price: 299.99,
    stock: 10,
    featured: true,
    pic: "https://example.com/dxracer.jpg",
    categoryId: 2,
    "category_label": "Periféricos"
  },
  {
    name: "Philips Hue Play",
    description: "Kit de iluminación LED para crear ambientes personalizados en tu espacio de juego.",
    price: 129.99,
    stock: 15,
    featured: false,
    pic: "https://example.com/hueplay.jpg",
    categoryId: 2,
    "category_label": "Periféricos"
  },
  {
    name: "ASUS ROG Swift PG279Q",
    description: "Monitor de gaming con resolución 1440p y tasa de refresco de 165Hz.",
    price: 599.99,
    stock: 8,
    featured: true,
    pic: "https://example.com/rogswift.jpg",
    categoryId: 3,
    "category_label": "Monitores"
  },
  {
    name: "Samsung Odyssey G7",
    description: "Monitor curvo de gaming con resolución 1440p y tasa de refresco de 240Hz.",
    price: 799.99,
    stock: 5,
    featured: false,
    pic: "https://example.com/odysseyg7.jpg",
    categoryId: 3,
    "category_label": "Monitores"
  },
  {
    name: "LG 34GN850-B",
    description: "Monitor ultrawide con resolución 3440x1440 y tasa de refresco de 160Hz.",
    price: 899.99,
    stock: 7,
    featured: true,
    pic: "https://example.com/lg34gn850.jpg",
    categoryId: 3,
    "category_label": "Monitores"
  },
  {
    name: "ASUS ProArt PA32UCX",
    description: "Monitor HDR profesional con resolución 4K y tasa de refresco de 120Hz.",
    price: 1999.99,
    stock: 3,
    featured: false,
    pic: "https://example.com/proart.jpg",
    categoryId: 3,
    "category_label": "Monitores"
  },
  {
    name: "ASUS ROG Strix XG17AHP",
    description: "Monitor portátil de gaming con resolución 1080p y tasa de refresco de 240Hz.",
    price: 499.99,
    stock: 5,
    featured: true,
    pic: "https://example.com/xg17ahp.jpg",
    categoryId: 3,
    "category_label": "Monitores"
  },
  {
    name: "MSI Infinite X Plus 10th",
    description: "Potente PC gaming con procesador Intel Core i9 y tarjeta gráfica NVIDIA RTX 3080.",
    price: 2499.99,
    stock: 5,
    featured: true,
    pic: "https://example.com/msiinfinite.jpg",
    categoryId: 4,
    "category_label": "Equipos Prearmados"
  },
  {
    name: "Corsair Vengeance i7200",
    description: "PC gaming de alta gama con procesador Intel Core i7 y tarjeta gráfica NVIDIA RTX 3070.",
    price: 1999.99,
    stock: 8,
    featured: false,
    pic: "https://example.com/vengeancei7200.jpg",
    categoryId: 4,
    "category_label": "Equipos Prearmados"
  },
  {
    name: "HP Omen 30L GT13-0999ns",
    description: "Ordenador gaming con procesador AMD Ryzen 7 y tarjeta gráfica NVIDIA RTX 3060.",
    price: 1699.99,
    stock: 10,
    featured: true,
    pic: "https://example.com/omen30l.jpg",
    categoryId: 4,
    "category_label": "Equipos Prearmados"
  },
  {
    name: "Alienware Aurora R12",
    description: "Sobremesa gaming con procesador Intel Core i5 y tarjeta gráfica NVIDIA RTX 3050.",
    price: 1299.99,
    stock: 12,
    featured: false,
    pic: "https://example.com/aurorar12.jpg",
    categoryId: 4,
    "category_label": "Equipos Prearmados"
  },
  {
    name: "Zotac Magnus EN72070V",
    description: "Mini PC compacto para gaming con tarjeta gráfica NVIDIA GTX 1660 Ti.",
    price: 899.99,
    stock: 15,
    featured: true,
    pic: "https://example.com/magnus.jpg",
    categoryId: 4,
    "category_label": "Equipos Prearmados"
  },
  {
    name: "ASUS ROG Zephyrus G14",
    description: "Laptop gaming ultradelgada con CPU AMD Ryzen 9 y gráficos NVIDIA GeForce RTX 3060.",
    price: 1499.99,
    stock: 12,
    featured: true,
    pic: "https://example.com/zephyrusg14.jpg",
    categoryId: 5,
    "category_label": "Laptops"
  },
  {
    name: "MSI GS66 Stealth",
    description: "Laptop gaming delgada y potente con CPU Intel Core i7 y gráficos NVIDIA RTX 3070.",
    price: 1799.99,
    stock: 10,
    featured: false,
    pic: "https://example.com/gs66stealth.jpg",
    categoryId: 5,
    "category_label": "Laptops"
  },
  {
    name: "Acer Predator Helios 300",
    description: "Laptop gaming con pantalla de 15.6 pulgadas, CPU Intel Core i7 y gráficos NVIDIA GTX 1660 Ti.",
    price: 1299.99,
    stock: 15,
    featured: true,
    pic: "https://example.com/predatorhelios.jpg",
    categoryId: 5,
    "category_label": "Laptops"
  },
  {
    name: "Razer Blade 15",
    description: "Laptop gaming premium con pantalla táctil de 15.6 pulgadas, CPU Intel Core i9 y gráficos NVIDIA RTX 3080.",
    price: 2499.99,
    stock: 8,
    featured: false,
    pic: "https://example.com/razerblade15.jpg",
    categoryId: 5,
    "category_label": "Laptops"
  },
  {
    name: "Dell Alienware m15 R6",
    description: "Laptop gaming delgada y ligera con CPU Intel Core i7 y gráficos NVIDIA RTX 3060.",
    price: 1699.99,
    stock: 12,
    featured: true,
    pic: "https://example.com/alienwarem15.jpg",
    categoryId: 5,
    "category_label": "Laptops"
  }
];

  await Product.bulkCreate(productList);
  console.log("Product seeder is running")
};
module.exports = productSeeder;