import { cleanup } from '@testing-library/react';
import { useState, useMemo, useEffect } from 'react'

export default function UseMemo() {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProduct] = useState([])

    const handleSubmit = () => {

        setProduct([...products, {
            name,
            price: +price
        }])
    }
    // useEffect(() => {
    //     setName('')
    //     setPrice('')
    // }, [products])



    const total = useMemo(() => {
        const result = products.reduce((result, prod) => {
            console.log("re-render");
            return result + prod.price;
        }, 0)
        return result
    }, [products])
    return (
        <div>
            <input style={{ display: "block", margin: '20px' }}
                value={name}
                placeholder="name..."
                onChange={e => setName(e.target.value)}
            />
            <input style={{ display: "block", margin: '20px' }}
                value={price}
                placeholder="price..."
                onChange={e => setPrice(e.target.value)}
            />
            <button style={{ display: "block", margin: '20px' }} onClick={handleSubmit}>
                submit
            </button>
            <h2>total {total}</h2>
            {products.map((product, index) => (//map and return something
                <li key={index}>
                    {product.name} - {product.price}
                </li>
            ))}

        </div>
    )
}
