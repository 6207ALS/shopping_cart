import useField from "../hooks/useField";

const EditProductForm = ({ id, title, price, quantity, onSubmit, setIsFormVisible }) => {
	const formTitle = useField("text", "titleInput", title);
	const formPrice = useField("text", "priceInput", price);
	const formQuantity = useField("text", "quantityInput", quantity);

	const handleOnSubmit = async (e) => {
		e.preventDefault();

		const productDetails = {
			title: formTitle.value,
			price: formPrice.value,
			quantity: formQuantity.value,
		}

		await onSubmit(id, productDetails);
		setIsFormVisible((prevState) => !prevState)
	}

	return (
		<>
			<h3>Edit Product</h3>
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
							<td><label htmlFor={formPrice.name}>Quantity: </label></td>
							<td>
								<input 
									id={formPrice.name} 
									type={formQuantity.type} 
									name={formPrice.name} 
									value={formQuantity.value} 
									onChange={formQuantity.onChange} 
								/>
							</td>
						</tr>
					</tbody>
				</table>
				
				<button type="submit" id="update">Update</button>
				<button type="submit" id="cancel">Cancel</button>
			</form>
		</>
	)
}

export default EditProductForm;