

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

var f1Remove = document.getElementById('cartremove1')
var f2Remove = document.getElementById('cartremove2')
var f3Remove = document.getElementById('cartremove3')
var f4Remove = document.getElementById('cartremove4')


const f1Price = 5
const f2Price = 10
const f3Price = 15
const f4Price = 25
var total
let count = 0
var f1Count = 0
var f2Count = 0
var f3Count = 0
var f4Count = 0




//add to cart for flower 1

add2CartF1.addEventListener("click", function(event){
    


    document.querySelector('.btn-buy').style.display="block"
    document.querySelector('.emptyCart').style.display="none"
    document.querySelector('.cart-box1').style.display="block"
    count += f1Price //cout value results in total cost
    f1Count += 1 // fcount results in quanitity when each time Add to cart ' is clicked`
    var dollor = `<h4 margin-left="0%" >Total &nbsp &nbsp </h4> <p class="text-success" >${count}&nbsp$</p>`  
    totalPrice.innerHTML = dollor
 
    singleCount1.innerHTML = f1Count
    document.querySelector('.flowerCount1').style.display="flex"
    document.querySelector('.detail-box1').style.display="grid"

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
    document.querySelector('.detail-box2').style.display="grid"
    
    
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
    document.querySelector('.detail-box3').style.display="grid"
    
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
    document.querySelector('.detail-box4').style.display="grid"
    
})


//remove cart items

    f1Remove.addEventListener("click", function(event){
        document.querySelector('.flowerCount1').style.display="none"
        document.querySelector('.detail-box1').style.display="none"
        count -= f1Count*f1Price;
        var dollor = `<h4 margin-left="0%" >Total &nbsp &nbsp </h4> <p class="text-success" >${count}&nbsp$</p>`  
        totalPrice.innerHTML = dollor
        f1Count = 0
        if (count <= 0){
            document.querySelector('.btn-buy').style.display="none"
            document.querySelector('.emptyCart').style.display="block"
            document.querySelector('.total-price').style.display="none"
        }
      
    
    
    })




f2Remove.addEventListener("click", function(event){
    document.querySelector('.flowerCount2').style.display="none"
    document.querySelector('.detail-box2').style.display="none"
    count -= f2Count*f2Price;
    var dollor = `<h4 margin-left="0%" >Total &nbsp &nbsp </h4> <p class="text-success" >${count}&nbsp$</p>`  
    totalPrice.innerHTML = dollor
    f2Count = 0
    if (count <= 0){
        document.querySelector('.btn-buy').style.display="none"
        document.querySelector('.emptyCart').style.display="block"
        document.querySelector('.total-price').style.display="none"
    }
})

f3Remove.addEventListener("click", function(event){
    document.querySelector('.flowerCount3').style.display="none"
    document.querySelector('.detail-box3').style.display="none"
    count -= f3Count*f3Price;
    var dollor = `<h4 margin-left="0%" >Total &nbsp &nbsp </h4> <p class="text-success" >${count}&nbsp$</p>`  
    totalPrice.innerHTML = dollor
    f3Count = 0
    if (count <= 0){
        document.querySelector('.btn-buy').style.display="none"
        document.querySelector('.emptyCart').style.display="block"
        document.querySelector('.total-price').style.display="none"
    }
})

f4Remove.addEventListener("click", function(event){
    document.querySelector('.flowerCount4').style.display="none"
    document.querySelector('.detail-box4').style.display="none"
    count -= f4Count*f4Price;
    var dollor = `<h4 margin-left="0%" >Total &nbsp &nbsp </h4> <p class="text-success" >${count}&nbsp$</p>`  
    totalPrice.innerHTML = dollor
    f4Count = 0
    if (count <= 0){
        document.querySelector('.btn-buy').style.display="none"
        document.querySelector('.emptyCart').style.display="block"
        
    }
})






