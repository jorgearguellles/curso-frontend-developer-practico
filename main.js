// Selectors
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const burgerMenuIcon = document.querySelector('.burger-menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

// EventsListeners
menuEmail.addEventListener('click', toggleDesktopMenu)
burgerMenuIcon.addEventListener('click', toggleMobileMenu)
menuCartIcon.addEventListener('click', toggleCartAside)

function toggleDesktopMenu(){
    const isAsideOpen = !aside.classList.contains('inactive')

    if(isAsideOpen){
        aside.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
};

function toggleMobileMenu(){
    const isAsideOpen = !aside.classList.contains('inactive')

    if(isAsideOpen){
        aside.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive')
};

function toggleCartAside(){
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive')

    if(isMobileMenuOpen){
        mobileMenu.classList.add('inactive')
    }
    aside.classList.toggle('inactive')
};

// Product list
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Bike II',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Bike III',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card')

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info')

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price

    const productName = document.createElement('p');
    productName.innerText = product.name

    productInfoDiv.appendChild(productPrice)
    productInfoDiv.appendChild(productName)

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart)

    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(productInfoFigure)

    productCard.appendChild(productImg)
    productCard.appendChild(productInfo)

    cardsContainer.appendChild(productCard)
}