import { useState } from "react";
import EditProductForm from "./EditProductForm";
import Product from "./Product"; 

const EditableProduct = ({ id, item, handleUpdateProduct }) => {
	const [ isFormVisible, setIsFormVisible ] = useState(false);

	const handleClickEdit = (e) => {
		e.preventDefault();
		setIsFormVisible((prevState) => !prevState);
	}

	return (
		<>
			<div className="product">	
				<Product 
					id={id} 
					handleUpdateProduct={handleUpdateProduct}
					handleClickEdit={handleClickEdit}
					{...item} 
				/>
				{ isFormVisible ? <EditProductForm 
					id={id}
					onSubmit={handleUpdateProduct}
					setIsFormVisible={setIsFormVisible}
					{...item}
				/> : null }
			</div>
		</>
	)
}

export default EditableProduct;