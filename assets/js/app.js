const product = 
    [
        {
            id: 0,
            title:" 1899 Retro Home Kit Shirt - Long Sleeves",
            price: 74.99,
            image: "assets/img/Retro1.webp",
        },
        {
            id: 1,
            title:" 70's Retro Johan Cruyff White Shirt",
            price: 60.99,
            image: "assets/img/Retro2.webp",
        },
        {
            id: 2,
            title:" 1995-97's Season shirt",
            price: 69.99,
            image: "assets/img/Retro3.webp",
        }
    ];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("numbercart").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById("listCart").innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "£ "+0+".00";
    }
    else{
        document.getElementById("listCart").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>£ ${price}.00</h2>`+
                "<i class='ri-delete-bin-2-fill' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}