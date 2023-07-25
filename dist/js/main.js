// function reverseString(str) {
  
//     var reverseStr = "";
//     for (var i=str.length-1; i>=0; i--)
//     {
//         reverseStr += str[i]
//     }
//     return reverseStr
// }

// console.log(reverseString("hello"))

// 
// function factorialize(num) {

//     var fac = 1;

//     for ( var i=1; i<=num; i++) {
//         fac *= i
//     }
// return fac
// }

// console.log(factorialize(5))

// 

const portfolioModals = document.querySelectorAll(".portfolio_model");
const imgCards = document.querySelectorAll(".img_card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio_close_btn");

var portfolioModal = function (modalClick) {
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
        })
    })
})


const scrollTopBtn = document.querySelector(".scrollToTop_btn");

window.addEventListener("scroll", function() {
    scrollTopBtn.classList.toggle("active", window.scrollY > 500)
})

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
})

// const themeBtn = document.querySelector(".theme_btn");

// themeBtn.addEventListener("click", () => {
//     document.body.classList.toggle("dark_theme");
//     themeBtn.classList.toggle("sun");

//     localStorage.setItem("saved_theme", getCurrentTheme());
//     localStorage.setItem("saved_icon", getCurrentIcon());
// })

// const getCurrentTheme = () => document.body.classList.contains("dark_theme") ? "dark" : "light";
// const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

// const savedTheme = localStorage.getItem("saved_theme");
// const savedIcon = localStorage.getItem("saved_icon");

// if(savedTheme) {
//     document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark_theme");
//     themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun")
// }

const menuBtn = document.querySelector(".nav_menu_btn");
const closeBtn = document.querySelector(".nav_close_btn");
const navigation = document.querySelector(".nav");
const navItems = document.querySelectorAll(".nav_list_item_link");
console.log(1)
menuBtn.addEventListener("click", () => {
    console.log(1)
    navigation.classList.add("active")
})

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active")
})

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active")
    })
})