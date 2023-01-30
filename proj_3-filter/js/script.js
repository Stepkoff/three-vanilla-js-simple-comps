const data = [
  {
    id: 1,
    name: "Invicta Men's Pro Diver",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 74,
    cat: "Dress",
  },
  {
    id: 11,
    name: "Invicta Men's Pro Diver 2",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 74,
    cat: "Dress",
  },
  {
    id: 2,
    name: "Timex Men's Expedition Scout ",
    img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
    price: 40,
    cat: "Sport",
  },
  {
    id: 3,
    name: "Breitling Superocean Heritage",
    img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
    price: 200,
    cat: "Luxury",
  },
  {
    id: 4,
    name: "Casio Classic Resin Strap ",
    img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
    price: 16,
    cat: "Sport",
  },
  {
    id: 5,
    name: "Garmin Venu Smartwatch ",
    img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
    price: 74,
    cat: "Casual",
  },
];

const productsContainer = document.querySelector('.products');
const searchInput = document.querySelector('.search');
const priceRange = document.querySelector('.price-range');
const categoriesContainer = document.querySelector('.categories-container');
const priceValue = document.querySelector('.price-value');

const displayProducts = (productsArr) => {
  productsContainer.innerHTML = productsArr.map((item) => {
    return (`
        <div class="product">
            <img src="${item.img}" alt="">
            <div class="productName">${item.name}</div>
            <div class="productPrice">$${item.price}</div>
        </div>
    `)
  }).join('');
}
searchInput.addEventListener('input', (e) => {
  const value = e.target.value.toLowerCase();
  if(value) {
    displayProducts(data.filter(item => item.name.toLowerCase().indexOf(value) !== -1))
  } else {
    displayProducts(data)
  }
});
const setCategories = () => {
  const categories = ['All', ...new Set(data.map(item => item.cat))]
  categoriesContainer.innerHTML = categories.map(item => {
    return (`
        <span class="category">${item}</span>
    `)
  }).join('')
}
categoriesContainer.addEventListener('click', (e) => {
  if(e.target.nodeName !== 'SPAN') return
  const selectedCat = e.target.innerHTML.toLowerCase();
  if(selectedCat === 'all') {
    displayProducts(data)
  } else {
    displayProducts(data.filter(item => item.cat.toLowerCase() === selectedCat))
  }
})
const setPrices = () => {
  const pricesArr = data.map(item => item.price)
  const minPrice = Math.min(...pricesArr);
  const maxPrice = Math.max(...pricesArr);
  priceRange.min = minPrice;
  priceRange.max = maxPrice;
  priceRange.value = Math.ceil(maxPrice);
  priceValue.innerHTML = '$'+maxPrice;
}
priceRange.addEventListener('input', (e) => {
  priceValue.innerHTML = '$'+e.target.value;
  const arr = data.filter(item => item.price <= e.target.value)
  displayProducts(arr)
})

displayProducts(data);
setCategories()
setPrices()

















