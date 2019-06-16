const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2019"
  },
};

// write your code here

//Navigation Bar 
const navElements = document.querySelectorAll('a');
console.log(navElements)
const array = Array.from(navElements);
console.log(array)
array[0].textContent = 'Services'
array[1].textContent = 'Product'
array[2].textContent = 'Vision'
array[3].textContent = 'Features'
array[4].textContent = 'About'
array[5].textContent = 'Contact'

//Images
document.getElementById("logo-img").src = "img/logo.png";
document.getElementById("cta-img").src = "img/header-img.png";
document.getElementById("middle-img").src = "img/mid-page.jpg";

//Header
const div1 = document.querySelector('.cta-text');
const head1=div1.firstElementChild;
head1.textContent="DOM Is Awesome";
const btn=div1.lastElementChild;
btn.textContent="Get Started";

//Paragraphs
const paragraphElements = document.querySelectorAll('p');
console.log(paragraphElements);
const arrayP = Array.from(paragraphElements);
arrayP[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
arrayP[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
arrayP[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
arrayP[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
arrayP[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
arrayP[5].textContent = '123 Way 456 Street Somewhere, USA';
arrayP[6].textContent = '1 (888) 888-8888';
arrayP[7].textContent = 'sales@greatidea.io';
arrayP[8].textContent = 'Copyright Great Idea! 2019';

//Head Lines (h4)
const headElements = document.querySelectorAll('h4');
console.log(headElements);
const arrayH4 = Array.from(headElements);
arrayH4[0].textContent = 'Features';
arrayH4[1].textContent = 'About';
arrayH4[2].textContent = 'Services';
arrayH4[3].textContent = 'Product';
arrayH4[4].textContent = 'Vision';
arrayH4[5].textContent = 'Contact';

//task2
var i;
for (i = 0; i < array.length; i++) { 
  array[i].style.color='green';
}

//task3
const nav7 = document.createElement('a');
nav7.textContent = 'new7';
nav7.style.color='green';
const navBar = document.querySelector('nav');
navBar.appendChild(nav7);

const nav8 = document.createElement('a');
nav8.textContent = 'new8';
nav8.style.color='green';
navBar.appendChild(nav8);

//Button EventListner
btn.addEventListener('click', () => {
  head1.style.color='red';
});





