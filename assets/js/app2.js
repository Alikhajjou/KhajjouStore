const product = 
    [
        {
            id: 0,
            title:" FC Barcelona home shirt 23/24 Player's Edition",
            price: 184.99,
            image: "assets/img/Kit5.webp",
        },
        {
            id: 1,
            title:" FC Barcelona away match shirt 23/24",
            price: 174.99,
            image: "assets/img/Kit2.webp",
        },
        {
            id: 2,
            title:" LFP FC Barcelona Goalkeeper shirt 23/24",
            price: 124.99,
            image: "assets/img/Kit3.webp",
        },
        {
            id: 3,
            title:" Limited Edition Karol G x FC Barcelona's men's home Shirt 23/24",
            price: 39.99,
            image: "assets/img/Kit4.webp",
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