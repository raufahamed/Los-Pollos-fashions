//--------THE PRODUCT DETAILS PAGE------------- //


document.addEventListener("DOMContentLoaded",()=>{


    const productdetails = document.querySelector('.product-details')

    if(productdetails){
    const URLparams = new URLSearchParams(window.location.search)
    const productId = URLparams.get('id');
// 
    const selectedProduct = products.find(product =>product.id === productId)
   
    if(selectedProduct){

        showProductDetail(selectedProduct)

    }

}
    function showProductDetail (product){

       const productDetailContent = `
        <div class="product">
        <img class="detail-img" src="${product.image}" alt="${product.name}">
        <h1 class="detail-title">${product.name}</h1>
        <div class="detail-container">
        <p class="desc">${product.desc}</p>
        <p class="detail-price">Price: ${product.price}</p>
        <div class = " product-btn">
        <button class="add-to-cart" data-id= ${product.id}>Add to Cart</button>
       
       <button class="getBtn ">Buy Now</button>
        </div>
        </div>
        </div>
        `;
        productdetails.innerHTML = productDetailContent;
    }

})

    


const productdetail = document.querySelector('.product-details')
const actcount = document.querySelector('.actcount')
const cartcontainer = document.querySelector('.cart')
let count = 0;

// ADDNOTE FOR ADD CART //
// ADDNOTE FOR ADD CART //
// ADDNOTE FOR ADD CART //
let addnote = ()=>{


    const addnotebtn = document.querySelector('.addnote')

    addnotebtn.style.display = 'block';


    setTimeout(()=>{
           
        addnotebtn.style.display = 'none';
              
    },1500)
}

//-----BUY BTN //
//-----BUY BTN //
//-----BUY BTN //



productdetail?.addEventListener('click',e =>{

    if(e.target.classList.contains('getBtn')){
        const productId = e.target.getAttribute('data-id')
        const buttonadd = products.find(product =>product.id === productId)
        if(buttonadd){

            addtocart(buttonadd)
        }
        const getBtn = document.querySelector('.getBtn')
        buybtn()

    }
})
let buybtn = ()=>{


    const btncontent = document.querySelector('.btncontent')

    btncontent.style.display = 'block';


    setTimeout(()=>{
           
        btncontent.style.display = 'none';
              
    },1500)
}
//-----ADD TO CART ///
//-----ADD TO CART ///
//-----ADD TO CART ///
productdetail?.addEventListener('click',e =>{
    if(e.target.classList.contains('add-to-cart')){

        const productId = e.target.getAttribute('data-id')
        const productadd = products.find(product =>product.id === productId)
       

        if(productadd){

            addtocart(productadd)
            
            
            
            addnote()
            updateTotalprice()
        }
    }


  
});


let addtocart = product =>{
    store.push(product);
    showCartContent();
    localStorage.setItem("store", JSON.stringify(store));
}

showCartContent()

function showCartContent(){
    actcount.textContent = store.length;

    const shop = document.querySelector(".shop");

    shop.innerHTML = "";

    store.forEach(product => {
        const cartItemcontent = `
            <div  class="cart-box">
            <img  src="${product.image}" alt="${product.name}" class="cart-img">
            <div class="detail-box">
                <div class="product-title"> ${product.name}</div>
                <div class="product-price">${product.price}</div>
                <div class="qty">
                    <div class="qty-box  increment"> +</div>
                    <div class="qty-box cartqty">1</div>
                    <div class=" qty-box decrement">-</div>
                </div>
                <div class="shop"></div>
                
            </div>
            <i class="bi bi-trash-fill trash" id="trash ${product.id}"></i>
        </div>
            `
            shop.innerHTML += cartItemcontent;
    })

    

    // const totalelement = document.querySelector('.total')
     
    //  totalelement.insertAdjacentHTML('beforebegin',cartItemcontent)
}



//  ------TRASH ICON ------ //
//  ------TRASH ICON ------ //
//  ------TRASH ICON ------ //

   cartcontainer.addEventListener('click',e=>{

    if(e.target.classList.contains('trash')){

        const cartbox = e.target.closest('.cart-box')

        const id = e.target.id.split(' ')[1]

        store = store.filter(prod => prod.id !== id);

        console.log(store)
        

        if(cartbox){

            cartbox.remove();
            actcount.textContent = store.length;
                           
            updateTotalprice();

        }
        localStorage.setItem("store", JSON.stringify(store))
        showCartContent()
    }
})





function isCartEmpty() {
    const cartBoxes = document.querySelectorAll('.cart-box');
    return cartBoxes.length === 0;
}




//----INCREMENT AND DECREMENT------TOTAL //
//----INCREMENT AND DECREMENT------TOTAL //
//----INCREMENT AND DECREMENT------TOTAL //

cartcontainer.addEventListener('click',e=>{

    const cartBox = e.target.closest('.cart-box');
    if(cartBox){

        if(e.target.classList.contains('increment')){

            incrementQuantity(cartBox)
            updateTotalprice();
        }else if(e.target.classList.contains('decrement')){

            decrementQuantity(cartBox);
            updateTotalprice();

        }
    }
})

function updateTotalprice(){


const cartBoxes = document.querySelectorAll('.cart-box');
let totalprice = 0;

store.forEach(prod => {
    const p = prod.price.replace("$", "")
    const price = parseFloat(p);
    totalprice += price;

    
});
        const totalpriceElement = document.querySelector('.total-price')
        totalpriceElement.textContent = `$${totalprice.toFixed(2)}`;

         const emptyCartMessage = document.querySelector('.empty-cart-message');
         const emptycontainer = document.querySelector('.emptycontainer')
    if (isCartEmpty()) {
        emptyCartMessage.style.display = 'block';
        emptycontainer .style.display = 'none';

    } else {
        emptyCartMessage.style.display = 'none';
        emptycontainer.style.display = 'block';
    }
}

function incrementQuantity(cartBox){

    const quantityElement = cartBox.querySelector('.cartqty');
    let currentQuantity =  parseInt(quantityElement.textContent);
    currentQuantity++;
    quantityElement.textContent = currentQuantity;
}
function decrementQuantity(cartBox){

   const quantityElement = cartBox.querySelector('.cartqty');
    let currentQuantity = parseInt(quantityElement.textContent);
    if(currentQuantity>1){

    currentQuantity--;
    quantityElement.textContent = currentQuantity;
    }
    
}

updateTotalprice();


       
