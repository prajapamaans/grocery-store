// Products are now loaded from data.js
window.addToGlobalCart = function (product, qty = 1) {
  let cart = JSON.parse(localStorage.getItem("desiMartCart")) || [];

  // Check if item exists
  const existingIndex = cart.findIndex((item) => item.id === product.id); // Changed from title to id

  if (existingIndex > -1) {
    cart[existingIndex].qty += qty;
  } else {
    cart.push({
      ...product,
      qty: qty,
      id: product.id, // Changed to use product.id directly
    });
  }

  localStorage.setItem("desiMartCart", JSON.stringify(cart));
  window.updateCartBadge();
};

window.updateCartBadge = function () {
  const badge = document.getElementById("cart-badge");
  if (!badge) return;

  const cart = JSON.parse(localStorage.getItem("desiMartCart")) || [];
  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  badge.textContent = totalItems;
  if (totalItems > 0) {
    badge.classList.remove("hidden");
  } else {
    badge.classList.add("hidden");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // Inject products into homepage grid if the container exists
  const container = document.getElementById("product-container");
  if (container) {
    const products = window.getProducts();
    // Just show 4 random products for homepage trending limit
    const trending = [...products].sort(() => 0.5 - Math.random()).slice(0, 4);

    trending.forEach((prod) => {
      const card = document.createElement("div");
      card.className =
        "group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col overflow-hidden";

      // Add click handlers linking to product page
      card.innerHTML = `
                <div class="relative h-56 bg-slate-50 flex items-center justify-center p-6 overflow-hidden cursor-pointer" onclick="window.location.href='product.html?id=${prod.id}'">
                    ${prod.tag ? `<span class="absolute top-4 left-4 ${prod.tagColor} text-white px-3 py-1 text-xs font-bold rounded-full z-10 shadow-sm">${prod.tag}</span>` : ""}
                    <div class="absolute top-4 right-4 h-8 w-8 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-400 hover:text-red-500 cursor-default transition-colors z-10 wishlist-btn">
                        <i class="ri-heart-3-line"></i>
                    </div>
                    <img src="${prod.image}" alt="${prod.title}" loading="lazy" class="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-500 mix-blend-multiply">
                </div>
                
                <div class="p-5 flex flex-col flex-1">
                    <span class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">${prod.vendor}</span>
                    <h3 class="text-slate-800 font-semibold leading-snug mb-4 line-clamp-2 hover:text-primary transition-colors cursor-pointer" onclick="window.location.href='product.html?id=${prod.id}'">${prod.title}</h3>
                    
                    <div class="mt-auto flex items-center justify-between">
                        <div>
                            <span class="text-xl font-extrabold text-brand">${prod.price}</span>
                            ${prod.oldPrice ? `<span class="text-sm text-slate-400 line-through ml-2 font-medium">${prod.oldPrice}</span>` : ""}
                        </div>
                        
                        <button class="add-btn h-10 w-10 md:w-auto md:px-4 rounded-xl bg-slate-100 text-brand font-semibold hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-1 group-hover:shadow-md" data-id="${prod.id}">
                            <i class="ri-add-line text-lg"></i>
                            <span class="hidden md:block">Add</span>
                        </button>
                    </div>
                </div>
            `;
      container.appendChild(card);
    });
  }

  // Initialize cart logic
  window.bindCartButtons();
  window.updateCartBadge();

  // Sticky Header Scroll effect
  const header = document.getElementById("main-header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        header.classList.add("shadow-md");
      } else {
        header.classList.remove("shadow-md");
      }
    });
  }
});

// Re-usable bind cart method (useful for category page where items inject later)
window.bindCartButtons = function () {
  document.querySelectorAll(".add-btn").forEach((btn) => {
    // Prevent multiple bindings
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);

    newBtn.addEventListener("click", function (e) {
      e.stopPropagation(); // prevent navigation
      const id = parseInt(this.getAttribute("data-id"));
      const products = window.getProducts();
      const product = products.find((p) => p.id === id) || products[id]; // fallback for index

      window.addToGlobalCart(product, 1);

      // Button success state
      const originalHTML = this.innerHTML;
      this.innerHTML = `<i class="ri-check-line text-lg"></i><span class="hidden md:block">Added</span>`;
      this.classList.add("bg-green-500", "text-white");
      this.classList.remove("bg-slate-100", "text-brand", "hover:bg-primary");

      setTimeout(() => {
        this.innerHTML = originalHTML;
        this.classList.remove("bg-green-500", "text-white");
        this.classList.add("bg-slate-100", "text-brand", "hover:bg-primary");
      }, 1000);
    });
  });

  document.querySelectorAll(".wishlist-btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      const icon = this.querySelector("i");
      if (icon.classList.contains("ri-heart-3-line")) {
        icon.classList.replace("ri-heart-3-line", "ri-heart-3-fill");
        this.classList.add("text-red-500");
      } else {
        icon.classList.replace("ri-heart-3-fill", "ri-heart-3-line");
        this.classList.remove("text-red-500");
      }
    });
  });
};
