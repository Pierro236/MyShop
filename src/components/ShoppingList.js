import { cartesListe } from "../data/data"
import Product from "./Product"
import "../styles/ShoppingList.css"


function ShoppingList() {
    
    return(
        <div className="plant-list">
        <ul  className="shop-list">
        
        {cartesListe.map((id,cover,name,price,category) => (
                <div key={id}>
                    <Product
                        name = {name}
                        category = {category}
                        cover = {cover}
                        price = {price}
                     />
                    
                </div>
            
            ))}
    
        </ul>
        </div>
        
    )
}


export default ShoppingList;