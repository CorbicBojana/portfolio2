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