import React, { useEffect, useState } from 'react'

function Home() {
    const [products, setProducts] = useState([]);
    useEffect(async () => {
        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products)
    return (
        <div style={{ display: 'flex', flexWrap: "wrap" }} >
            {products.map((product, index) => {
                return <div key={index} style={{ width: "30%", margin: '25px' }} >
                    <h1>{product.title.slice(0, 20)}</h1>
                    <img src={product.image} style={{ height: "200px", width: "200px" }} />
                    {/* <p>{product.description}</p> */}
                    <p>${product.price}</p>
                    <h4>{product.rating.rate}</h4>
                </div>
            })}
        </div>
    )
}

export default Home