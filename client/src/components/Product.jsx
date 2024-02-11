import { useState } from "react";
import EditProductForm from "./EditProductForm";


const Product = ({ id, title, price, quantity, icon, handleClickEdit }) => {
	const [ formVisible, setFormVisible ] = useState(false);

	return (
		<>
			<div className="productDetailsContainer">
				<h3>{title} {icon ? String.fromCodePoint(icon) : ""}</h3>
				<div className="productDetails">
					<p>Price: ${price}</p>
					<p>Quantity: {quantity}</p>
				</div>
			</div>

			<div className="actions">
				<button className="addToCart-button">Add to cart</button>
				<button className="editProduct-button" onClick={handleClickEdit}>Edit</button>
			</div>

			<button className="deleteItem-button">X</button>
		</>
	)
}

export default Product;