

var cartIcon = document.querySelector("#cart");
var cart = document.querySelector(".cartHover");
var closeCart = document.querySelector("#close-cart");
var buyButton = document.querySelector('.btn-buy')

buyButton.addEventListener("click", function(event){
    alert("Your order has beeen placed")
})

cartIcon.addEventListener("click" ,function(event){
    document.querySelector('.cartHover').style.display="block"

});

closeCart.addEventListener("click" , function(event){
    document.querySelector('.cartHover').style.display="none"
});



var delButton = document.getElementById('cartremove');
var add2CartF1 = document.getElementById('f1')
var add2CartF2 = document.getElementById('f2')
var add2CartF3 = document.getElementById('f3')
var add2CartF4 = document.getElementById('f4')
var totalPrice = document.getElementById('totalPrice');
var singleCount1 = document.getElementById('singleCount1')
var singleCount2 = document.getElementById('singleCount2')
var singleCount3 = document.getElementById('singleCount3')
var singleCount4 = document.getElementById('singleCount4')
var detailBox = document.getElementsByClassName('detail-box')


const f1Price = 5
const f2Price = 10
const f3Price = 15
const f4Price = 25
var total
var count = 0
var f1Count = 0
var f2Count = 0
var f3Count = 0
var f4Count = 0



//add to cart for flower 1

add2CartF1.addEventListener("click", function(event){
    


    document.querySelector('.btn-buy').style.display="block"
    document.querySelector('.emptyCart').style.display="none"
    document.querySelector('.cart-box1').style.display="block"
    count += f1Price
    f1Count += 1
    var dollor = `<h4 margin-left="0%" >Total &nbsp &nbsp </h4> <p class="text-success" >${count}&nbsp$</p>`  
    totalPrice.innerHTML = dollor
    singleCount1.innerHTML = f1Count
    document.querySelector('.flowerCount1').style.display="flex"
    document.querySelector('.detail-box').style.display="grid"
    

    
})



//add to cart for flower 2
add2CartF2.addEventListener("click", function(event){
    document.querySelector('.btn-buy').style.display="block"
    document.querySelector('.emptyCart').style.display="none"
    document.querySelector('.cart-box2').style.display="block"
    count += f2Price
    f2Count += 1
    var dollor = `<h4 margin-left="0%" >Total &nbsp &nbsp </h4> <p class="text-success" >${count}&nbsp$</p>`  
    totalPrice.innerHTML = dollor
    singleCount2.innerHTML = f2Count
    document.querySelector('.flowerCount2').style.display="flex"
    
    
})

//add to cart for flower 2
add2CartF3.addEventListener("click", function(event){
    document.querySelector('.btn-buy').style.display="block"
    document.querySelector('.emptyCart').style.display="none"
    document.querySelector('.cart-box3').style.display="block"
    count += f3Price
    f3Count += 1
    var dollor = `<h4 margin-left="0%" >Total &nbsp &nbsp </h4> <p class="text-success" >${count}&nbsp$</p>`  
    totalPrice.innerHTML = dollor
    singleCount3.innerHTML = f3Count
    document.querySelector('.flowerCount3').style.display="flex"
    
})



//add to cart for flower 4
add2CartF4.addEventListener("click", function(event){
    document.querySelector('.btn-buy').style.display="block"
    document.querySelector('.emptyCart').style.display="none"
    document.querySelector('.cart-box4').style.display="block"
    count += f4Price
    f4Count += 1
    var dollor = `<h4 margin-left="0%" >Total &nbsp &nbsp </h4> <p class="text-success" >${count}&nbsp$</p>`  
    totalPrice.innerHTML = dollor
    singleCount4.innerHTML = f4Count
    document.querySelector('.flowerCount4').style.display="flex"
    
})







