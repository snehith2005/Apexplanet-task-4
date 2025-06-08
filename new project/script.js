// let inp=document.querySelector(".form-control")
// let btn=document.querySelector(".btn")
// let div=document.querySelector(".items")
// let p=document.querySelectorAll("p")
// btn.addEventListener("click",()=>{
//     let p=document.createElement("p")
//     if(inp.value!=""){
//     p.innerText=inp.value
//     let removebtn=document.createElement("button")
//     removebtn.innerText="remove"
//     removebtn.style.backgroundColor="red"
//     removebtn.addEventListener("click",()=>{
//         div.removeChild(p)
//     })
//     p.appendChild(removebtn)
//     div.appendChild(p)
//     inp.value=""
// }
// })
const products = [
  { id: 1, name: "Phone", category: "electronics", price: 299, rating: 4.5, img: "phone.webp" },
  { id: 2, name: "Jeans", category: "clothing", price: 49, rating: 4.0, img: "jeans.webp" },
  { id: 3, name: "Laptop", category: "electronics", price: 899, rating: 4.7, img: "laptop.webp" },
  { id: 4, name: "T-Shirt", category: "clothing", price: 19, rating: 3.8, img: "tshirt.webp" },
  { id: 5, name: "Novel", category: "books", price: 15, rating: 4.9, img: "novel.webp" },
  { id: 6, name: "Smartwatch", category: "electronics", price: 120, rating: 4.1, img: "watch.webp" },
];

const productGrid = document.getElementById("productGrid");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");
const sortOption = document.getElementById("sortOption");

function renderProducts(list) {
  productGrid.innerHTML = "";
  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}" />
      <div class="product-info">
        <h3>${p.name}</h3>
        <p>Category: ${p.category}</p>
        <p>Price: $${p.price}</p>
        <p>Rating: ${p.rating}⭐</p>
      </div>
    `;
    productGrid.appendChild(card);
  });
}

function applyFilters() {
  let filtered = [...products];

  // Category filter
  const cat = categoryFilter.value;
  if (cat !== "all") {
    filtered = filtered.filter(p => p.category === cat);
  }

  // Price filter
  const priceVal = priceFilter.value;
  if (priceVal !== "all") {
    const [min, max] = priceVal.split("-").map(Number);
    filtered = filtered.filter(p => p.price >= min && p.price <= max);
  }

  // Sorting
  const sortVal = sortOption.value;
  if (sortVal === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortVal === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortVal === "rating-desc") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  renderProducts(filtered);
}

// Event listeners
categoryFilter.addEventListener("change", applyFilters);
priceFilter.addEventListener("change", applyFilters);
sortOption.addEventListener("change", applyFilters);

// Initial load
renderProducts(products);
