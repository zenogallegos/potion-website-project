var count = 0;
var deathCount = 0;

var cartWindow = document.querySelector("aside");
var cartMessage = document.querySelector(".cartmessage");
var cartCount = document.querySelector("#cart-count");
var btnOne = document.querySelector(".btn-one");
var btnTwo = document.querySelector(".btn-two");
var btnThree = document.querySelector(".btn-three");
var btnFour = document.querySelector(".btn-four");
var btnFive = document.querySelector(".btn-five");
var userInput = document.querySelector("input");
var emailBtn = document.querySelector("#email-btn");
var emailSect = document.querySelector("#emailbtn-sect");

cartMessage.textContent = "Your Wagon, My Liege... Is Empty...";

cartCount.addEventListener("click", toggleCartWindow);
function toggleCartWindow() {
    cartWindow.classList.toggle("openwindow");
}

btnOne.addEventListener("click", addProductCount);
btnTwo.addEventListener("click", addProductCount);
btnThree.addEventListener("click", addProductCount);
btnFour.addEventListener("click", addProductCount);
btnFive.addEventListener("click", addProductCount);

function addProductCount() {
    count = count + 1;
    cartCount.textContent = "Wagon: " + count + " Potions";
}

function deleteProduct() {
    event.target.remove();
    count = count - 1;
    cartCount.textContent = "Wagon: " + count + " Potions";
    if (count === 0) {
        var emptyCartMessage = document.createElement("p");
        cartWindow.appendChild(emptyCartMessage);
        emptyCartMessage.textContent = "'Not interested, huh? You're killing me.'";
    }
}

console.log(count)

btnOne.addEventListener("click", btnOneAdd);
btnTwo.addEventListener("click", btnTwoAdd);
btnThree.addEventListener("click", btnThreeAdd);
btnFour.addEventListener("click", btnFourAdd);
btnFive.addEventListener("click", btnFiveAdd);

btnOne.addEventListener("click", addContainer);
btnTwo.addEventListener("click", addContainer);
btnThree.addEventListener("click", addContainer);
btnFour.addEventListener("click", addContainer);
btnFive.addEventListener("click", addContainer);

function btnOneAdd() {
    var cartList = document.createElement("li");
    cartList.textContent = "Potion of Greater Healing x 1";
    cartWindow.appendChild(cartList);
    cartList.addEventListener("click", deleteProduct);
}

function btnTwoAdd() {
    var cartList = document.createElement("li");
    cartList.textContent = "Potion of Mana x 1";
    cartWindow.appendChild(cartList);
    cartList.addEventListener("click", deleteProduct);
}

function btnThreeAdd() {
    var cartList = document.createElement("li");
    cartList.textContent = "Potion of Strength x 1";
    cartWindow.appendChild(cartList);
    cartList.addEventListener("click", deleteProduct);
}

function btnFourAdd() {
    var cartList = document.createElement("li");
    cartList.textContent = "Potion of Flying x 1";
    cartWindow.appendChild(cartList);
    cartList.addEventListener("click", deleteProduct);
}

function btnFiveAdd() {
    var cartList = document.createElement("li");
    cartList.textContent = "The Potion that Shall Not be Named x 1";
    cartWindow.appendChild(cartList);
    deathCount = deathCount + 1
    btnFive.addEventListener("click", deathCountMessage);
    cartList.addEventListener("click", deleteProduct);
}

function addContainer() {
    if (count === 1) {
        cartWindow.removeChild(cartMessage);
        var cartListCont = document.createElement("ul");
    }
}

function deathCountMessage() {
    if (deathCount === 2) {
        var cartList = document.createElement("p");
        cartWindow.appendChild(cartList);
        cartList.textContent = "'Sorry, we only have one of these (don't know why you'd want it anyway..), so please do. not add another to your cart. Thanks.'";
    } else if (deathCount === 3) {
        var cartList = document.createElement("p");
        cartWindow.appendChild(cartList);
        cartList.textContent = "'Okay, so we know you can keep adding the potion to your cart, but it's  unavailable. We only have one of these. Please stop adding it to your cart.'";
    } else if (deathCount === 4) {
        var cartList = document.createElement("p");
        cartWindow.appendChild(cartList);
        cartList.textContent = "'Think you're a funny guy, eh? A little rebel? We said stop adding this to your cart. So... stop.'";
    } else if (deathCount === 5) {
        var cartList = document.createElement("p");
        cartWindow.appendChild(cartList);
        cartList.textContent = "'...'";
    } else if (deathCount === 6) {
        var cartList = document.createElement("p");
        cartWindow.appendChild(cartList);
        cartList.textContent = "'.....'";
    } else if (deathCount === 7) {
        var cartList = document.createElement("p");
        cartWindow.appendChild(cartList);
        cartList.textContent = "'...Really?'";
    } else if (deathCount === 8) {
        var cartList = document.createElement("p");
        cartWindow.appendChild(cartList);
        cartList.textContent = "'.......'";
    } else if (deathCount === 9) {
        var cartList = document.createElement("p");
        cartWindow.appendChild(cartList);
        cartList.textContent = "'Are you done?'";
    } else if (deathCount === 10) {
        var cartList = document.createElement("p");
        cartWindow.appendChild(cartList);
        cartList.textContent = "'Alright, I guess not.'";
    } else if (deathCount === 11) {
        var cartList = document.createElement("p");
        cartWindow.appendChild(cartList);
        cartList.textContent = "'...'";
    } else if (deathCount === 12) {
        var cartList = document.createElement("p");
        cartWindow.appendChild(cartList);
        cartList.textContent = "'You know, I gotta hand it to you. You're something else, kid. Really. I'm surprised you're even buying this off of us. You know what? I'll let you have your fun. Add this death wish to your cart as many times as you want! Go wild!'";
    } else if (deathCount === 13) {
        var cartList = document.createElement("p");
        cartWindow.appendChild(cartList);
        cartList.textContent = "'...'";
    } else if (deathCount === 14) {
        var cartList = document.createElement("p");
        cartWindow.appendChild(cartList);
        cartList.textContent = "'Are you having fun?'";
    } else if (deathCount === 15) {
        var cartList = document.createElement("p");
        cartWindow.appendChild(cartList);
        cartList.textContent = "'Oh you are? Good. That's good. I'm glad.";
    }
}

emailBtn.addEventListener("click", emailThankYou);
function emailThankYou() {
    var thankYou = document.createElement("p");
    thankYou.classList.add("thankyoustyle");
    emailSect.replaceWith(thankYou);
    thankYou.textContent = userInput.value + ", thank you for signing up for our newsletter! We look forward to your money-- er.. your, uh.. valuable and 100% not dispensable partnership.";
}