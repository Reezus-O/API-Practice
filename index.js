const card = document.querySelector(".card-grid")

const products = async () => {
    const productData = await fetch("https://fakestoreapi.com/products?limit=5");
    const jsonProductData = await productData.json()
    const items = jsonProductData.map(product => {
        return product
    })
    render(items)
}


const render = (array) => {
    console.log(array);
    let cardHtml = ""
    array.forEach((product) => {
        let itemName = product.title
        let itemPrice = product.price
        let itemImage = product.image
        html = `  
        <div>
            <img
            src="${itemImage}"
            alt=""
            />
            <h2>${itemName}</h2>
            <p>$${itemPrice}</p>
        </div>`
        cardHtml += html
    });

    card.innerHTML = cardHtml
}

products();