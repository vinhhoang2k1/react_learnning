import { cleanup } from '@testing-library/react';
import { useState, useMemo, useEffect, useRef } from 'react'
// useMemo giúp tránh đc 1 logic re-render không cần thiết  cũng giống  như useEffect và useCallback có dependentcy và sẽ re-render khi dependentcy thay đổi  

export default function UseMemo() {
    
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProduct] = useState([])
    const ref1 = useRef()
    
    const handleSubmit = () => {
        ref1.current.focus()
        setProduct([...products, {
            name,
            price: +price
        }])
    }

    useEffect(() => {
        setName('')
        setPrice('')
    }, [products])

    const total = useMemo(() => {
        const result = products.reduce((cur, prod) => {
            console.log( prod);
            return cur + prod.price
        }, 0)
        return result
    },[products])

    return (
        <div>
            <input style={{ display: "block", margin: '20px' }}
                ref={ref1}
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
            {products.map((product, index) => (//map and return something...
                <li key={index}>
                    {product.name} - {product.price}
                </li>
            ))}

        </div>
    )
}
