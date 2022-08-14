import "../styles/Product.css"


function Product(name, category, cover, price) {

    return (
        <li className="item">
            <img className="item-cover" src={cover}></img>
            <span className="item-name">{name} {category}</span>
            <span className="item-price">{price}€</span>
        </li>
    )

}

export default Product;