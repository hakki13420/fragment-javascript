const Products=[
    {
        id:1,
        nom:"Ananas",
        quantity:10
    },
    {
        id:2,
        nom:"Banane",
        quantity:10
    },
    {
        id:3,
        nom:"Fraise",
        quantity:10
    },
    {
        id:4,
        nom:"Poire",
        quantity:10
    },
    {
        id:5,
        nom:"Pomme",
        quantity:10
    },
]

let cart=[];


const row=document.querySelector('.row');
const cardItem=document.querySelector('#card-item');
const fragment=document.createDocumentFragment();

Products.forEach(item =>{
    const node = cardItem.content.firstElementChild.cloneNode(true);
    node.querySelector('.btn').id='btn-'+item.id;
    node.querySelector('h5').textContent=item.nom;
    
    node.querySelector('#btn-'+item.id).addEventListener('click',()=>{                    
        console.log(item)
        const element=cart.filter(el => el.nom==item.nom)
        if(element.length) {           
            element[0].quantity++  
        }
        else {
            cart.push({nom:item.nom,quantity:1});    
        }
        console.log(cart);
    });
    fragment.appendChild(node);    
});
row.appendChild(fragment);




//carito
const caritoIcon =document.querySelector('.fa-shopping-cart'); //icone de carot
const carito=document.querySelector('.cart'); // div de cart
const tempalteCart=document.getElementById('templateCart');  //template cart
const TableCart = document.getElementById('tableCart');
   
caritoIcon.addEventListener('click',handlCart)

function handlCart(){
    carito.classList.toggle('cart-active');
    appendItemToCart();
}
function appendItemToCart(){
    tableCart.textContent=""
    
    let i=1;    
    cart.forEach(item =>{
        const node = tempalteCart.content.firstElementChild.cloneNode(true);        
        node.querySelector('.first').textContent=i;
        node.querySelector('.second').textContent=item.nom;
        node.querySelector('.third').textContent=item.quantity
        node.querySelector('.fourth').textContent=''
        fragment.appendChild(node);
        i++;
    })
    tableCart.appendChild(fragment);
}