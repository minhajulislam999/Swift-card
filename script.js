const loadData = () =>{
    // const url =

    fetch("https://fakestoreapi.com/products")
    .then(res=>res.json())
    .then(json=>display(json));
}

// category
// : 
// "men's clothing"
// description
// : 
// "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id
// : 
// 1
// image
// : 
// "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
// price
// : 
// 109.95
// rating
// : 
// count
// : 
// 120
// rate
// : 
// 3.9

const display=(json) =>{
    const getDiv = document.getElementById("btn-products");
    getDiv.innerHTML= "";
    // console.log(data);

    for(const product of json ){
         const createDiv = document.createElement("div");
    // console.log(product.id);

    createDiv.innerHTML = `
    <button class="btn btn-active btn-primary>${product.category}</button>

    
    `

    getDiv.append(createDiv);

    }

   



    
}

loadData();