import React from 'react'
import FormInput from './FormInput';

function ItemList({ form, setForm }) {
    const { products } = form;

    const addHandler = () => {
        setForm({
            ...form,
            products: [...products, { name: "", price: "", quantity: "" }]
        })
        console.log(products)
    }

    const changeHandler = (event, index) => {
        const { name, value } = event.target;
        const newProducts = [...products];
        newProducts[index][name] = value
        setForm({ ...form, products: newProducts })
    };

    const deleteHandler = (index) => {
        const newProducts = [...products];
        newProducts.splice(index, 1)
        setForm({ ...form, products: newProducts })
    };
    console.log(products)
    return (
        <div className='item-list'>
            <p>Purchased Products</p>
            {
                products?.map((product, index) => (
                    <ProductItem key={index} product={product} changeHandler={event => changeHandler(event, index)} deleteHandler={() => deleteHandler(index)} />
                ))
            }
            <button onClick={addHandler}>Add Item</button>
        </div>
    )
}

export default ItemList

function ProductItem({ product, changeHandler, deleteHandler }) {
    return (
        <div className='form-input__list'>
            <FormInput name="name" label="Product Name" type="text" value={product.name} onChange={changeHandler} />
            <div>
                <FormInput name="price" label="Product Price" type="number" value={product.price} onChange={changeHandler} />
                <FormInput name="quantity" label="Product Quantity" type="number" value={product.quantity} onChange={changeHandler} />

            </div>
            <button onClick={deleteHandler}>Remove</button>
        </div>
    )
}