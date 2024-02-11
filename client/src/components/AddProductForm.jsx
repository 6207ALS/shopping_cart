import { useState } from "react";
import useField from "../hooks/useField";

const AddProductForm = ({ handleAddProduct }) => {
	const formTitle = useField("text", "titleInput");
	const formPrice = useField("text", "priceInput");
	const formQuantity = useField("text", "quantityInput");
	const formIcon = useField("text", "iconInput");

	const handleOnSubmit = async (e) => {
		e.preventDefault();

		const productDetails = {
			title: formTitle.value,
			price: formPrice.value,
			quantity: formQuantity.value,
		}

		await handleAddProduct(productDetails);
		formTitle.setValue("");
		formPrice.setValue("");
		formQuantity.setValue("");
		formIcon.setValue("")
	}

	return (
		<div id="add-product_form">
			<h3>Add Product</h3>
			<form onSubmit={handleOnSubmit}>
				<table>
					<tbody>
						<tr>
							<td><label htmlFor={formTitle.name}>Product Name: </label></td>
							<td>
								<input 
									id={formTitle.name} 
									type={formTitle.type} 
									name={formTitle.name} 
									value={formTitle.value} 
									onChange={formTitle.onChange} 
								/>
							</td>
						</tr>

						<tr>
							<td><label htmlFor={formPrice.name}>Price: </label></td>
							<td>
								<input 
									id={formPrice.name} 
									type={formPrice.type} 
									name={formPrice.name} 
									value={formPrice.value} 
									onChange={formPrice.onChange} 
								/>
							</td>
						</tr>

						<tr>
							<td><label htmlFor={formQuantity.name}>Quantity: </label></td>
							<td>
								<input 
									id={formQuantity.name} 
									type={formQuantity.type} 
									name={formQuantity.name} 
									value={formQuantity.value} 
									onChange={formQuantity.onChange} 
								/>
							</td>
						</tr>

						<tr>
							<td><label htmlFor={formIcon.name}>Icon: </label></td>
							<td>
								<input 
									id={formIcon.name}
									type={formIcon.type}
									name={formIcon.name}
									value={formIcon.value}
									onChange={formIcon.onChange}
								/>
							</td>
						</tr>

					</tbody>
				</table>
				
				<button type="submit" id="add">Add</button>
				<button type="submit" id="cancel">Cancel</button>
			</form>
		</div>
	)
}

export default AddProductForm;