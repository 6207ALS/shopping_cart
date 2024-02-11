import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom/client";
import EditableProduct from "./components/EditableProduct";
import AddProductForm from "./components/AddProductForm";

const App = () => {
	const [ products, setProducts ] = useState([]);
	
	const handleUpdateProduct = async (id, productDetails) => {
		const response = await fetch(`/api/products/${id}`, { 
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(productDetails)
		});

		const updatedProduct = await response.json();
		const newData = products.map(product => product._id === id ? updatedProduct : product);

		setProducts(newData);
	}

	const handleAddProduct = async (productDetails) => {
		const response = await fetch(`/api/products`, { 
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(productDetails)
		});

		const addedProduct = await response.json();
		const newData = products.concat(addedProduct);

		setProducts(newData);
	}

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch("/api/products")
				setProducts(await response.json());
			} catch (e) {
				console.error(e);
			}
		})();
	}, []);

	return (
		<>
			<div className="app">
				<main className="main">
				{products.map(item => <EditableProduct 
					key={item._id}
					id={item._id}
					item={item}
					handleUpdateProduct={handleUpdateProduct} 
				/>)}
				<AddProductForm
					handleAddProduct={handleAddProduct}
				/>
				</main>
			</div>
		</>
	)
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(React.createElement(App));