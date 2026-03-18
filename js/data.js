const categories = [
  "Spices & Masalas",
  "Fresh Produce",
  "Snacks & Sweets",
  "Lentils & Beans",
  "Atta & Flours",
  "Ayurvedic",
  "Beverages",
  "Dairy & Bakery",
];

const vendorNames = [
  "Desi Farms",
  "Everest",
  "MDH",
  "Aashirvaad",
  "Haldiram's",
  "Patanjali",
  "Tata Sampann",
  "Dabur",
  "Amul",
  "Bikano",
];

const unsplashImages = {
  "Spices & Masalas": [
    "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1559811814-e2c59b6fe2dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  ],
  "Fresh Produce": [
    "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  ],
  "Snacks & Sweets": [
    "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  ],
  "Lentils & Beans": [
    "https://images.unsplash.com/photo-1585995475658-fa83af1057c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1585995475658-fa83af1057c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  ],
  "Atta & Flours": [
    "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1586525198428-225f6f12cff5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  ],
  Ayurvedic: [
    "https://images.unsplash.com/photo-1628102491629-77858ab5721d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  ],
  Beverages: [
    "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  ],
  "Dairy & Bakery": [
    "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  ],
};

const productAdjectives = [
  "Premium",
  "Organic",
  "Authentic",
  "Pure",
  "Traditional",
  "Fresh",
  "Classic",
  "Rich",
  "Aromatic",
  "Handpicked",
];
const productNouns = {
  "Spices & Masalas": [
    "Garam Masala",
    "Turmeric Powder",
    "Red Chilli Powder",
    "Coriander Powder",
    "Cumin Seeds",
    "Saffron",
    "Cardamom",
    "Black Pepper",
    "Cloves",
    "Cinnamon",
  ],
  "Fresh Produce": [
    "Okra (Bhindi)",
    "Tomatoes",
    "Green Chillies",
    "Coriander Leaves",
    "Mint Leaves",
    "Eggplant (Baingan)",
    "Bitter Gourd (Karela)",
    "Bottle Gourd (Lauki)",
    "Mangoes",
    "Papaya",
  ],
  "Snacks & Sweets": [
    "Samosas",
    "Bhujia",
    "Banana Chips",
    "Gulab Jamun",
    "Rasgulla",
    "Soan Papdi",
    "Khakhra",
    "Mathri",
    "Chakli",
    "Kaju Katli",
  ],
  "Lentils & Beans": [
    "Toor Dal",
    "Moong Dal",
    "Chana Dal",
    "Urad Dal",
    "Masoor Dal",
    "Rajma (Kidney Beans)",
    "Kabuli Chana",
    "Black-eyed Peas",
    "Green Gram",
    "Moth Beans",
  ],
  "Atta & Flours": [
    "Sharbati Atta",
    "Besan (Gram Flour)",
    "Maida",
    "Rice Flour",
    "Ragi Atta",
    "Bajra Flour",
    "Jowar Flour",
    "Multigrain Atta",
    "Sattu",
    "Corn Flour",
  ],
  Ayurvedic: [
    "Chyawanprash",
    "Ashwagandha Powder",
    "Triphala Churna",
    "Amla Juice",
    "Neem Capsules",
    "Tulsi Drops",
    "Brahmi Powder",
    "Giloy Juice",
    "Shatavari",
    "Aloe Vera Juice",
  ],
  Beverages: [
    "Assam Tea",
    "Darjeeling Tea",
    "Filter Coffee",
    "Masala Chai Mix",
    "Rose Syrup",
    "Mango Frooti",
    "Thumbs Up",
    "Limca",
    "Badam Milk Mix",
    "Jaljeera Powder",
  ],
  "Dairy & Bakery": [
    "Desi Ghee",
    "Paneer",
    "Curd (Dahi)",
    "Butter",
    "Cheese Cubes",
    "Pav (Bread)",
    "Rusk",
    "Khari Biscuit",
    "Namkeen Biscuit",
    "Milk Powder",
  ],
};

// Generate 100 products
const products = [];
for (let i = 0; i < 100; i++) {
  const category = categories[Math.floor(Math.random() * categories.length)];
  const noun =
    productNouns[category][
      Math.floor(Math.random() * productNouns[category].length)
    ];
  const adjective =
    productAdjectives[Math.floor(Math.random() * productAdjectives.length)];
  const title = `${adjective} ${noun} - ${Math.floor(Math.random() * 5 + 1) * 100}g`;

  const priceRaw = (Math.random() * 15 + 1).toFixed(2);
  const hasOldPrice = Math.random() > 0.6;
  const oldPriceRaw = hasOldPrice
    ? (parseFloat(priceRaw) * (1 + Math.random() * 0.3)).toFixed(2)
    : null;

  const tags = [
    "Bestseller",
    "New Arrival",
    "Organic",
    "10% OFF",
    "Premium",
    "Staff Pick",
  ];
  const tagColors = [
    "bg-orange-500",
    "bg-green-500",
    "bg-green-600",
    "bg-red-500",
    "bg-purple-500",
    "bg-blue-500",
  ];
  const hasTag = Math.random() > 0.7;
  const tagIndex = Math.floor(Math.random() * tags.length);

  const images = unsplashImages[category];
  const image = images[Math.floor(Math.random() * images.length)];

  products.push({
    id: i,
    title: title,
    vendor: vendorNames[Math.floor(Math.random() * vendorNames.length)],
    price: `£${priceRaw}`,
    oldPrice: oldPriceRaw ? `£${oldPriceRaw}` : null,
    image: image,
    category: category,
    tag: hasTag ? tags[tagIndex] : null,
    tagColor: hasTag ? tagColors[tagIndex] : null,
    priceValue: parseFloat(priceRaw), // Stored as number for sorting
    popularity: Math.random() * 100, // For "Recommended" sorting
  });
}

// Attach to window so all scripts can reliably use it
window.getProducts = function () {
  return products;
};

window.searchProducts = function (query) {
  if (!query) return products;
  query = query.toLowerCase();
  return products.filter(
    (p) =>
      p.title.toLowerCase().includes(query) ||
      p.vendor.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query),
  );
};

window.filterAndSortProducts = function (
  filteredProducts,
  activeCategories,
  sortOption,
  maxPrice,
) {
  let result = filteredProducts;

  if (activeCategories && activeCategories.length > 0) {
    result = result.filter((p) => activeCategories.includes(p.category));
  }

  if (maxPrice !== undefined && maxPrice !== null) {
    result = result.filter((p) => p.priceValue <= maxPrice);
  }

  switch (sortOption) {
    case "Price: Low to High":
      result.sort((a, b) => a.priceValue - b.priceValue);
      break;
    case "Price: High to Low":
      result.sort((a, b) => b.priceValue - a.priceValue);
      break;
    case "Newest Arrivals": // Mock reverse id
      result.sort((a, b) => b.id - a.id);
      break;
    case "Recommended":
    default:
      result.sort((a, b) => b.popularity - a.popularity);
      break;
  }

  return result;
};
