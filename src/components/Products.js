import React from 'react';
import ComplexTitle from './ComplexTitle'
import Product from './Product';

const products = [
  {id:1, name:'chair', price: 50.30},
  {id:3, name:'table', price: 500.30},
  {id:3, name:'sofa', price: 150.30},
  {id:4, name:'TV', price: 400.30},
  {id:5, name:'Soundbar', price: 150.30},
]

const Products = () => {
  return (
    <section>
      <ComplexTitle title="All Products" />
      {products.map((product) =>{
        return <Product {...product} key={product.id} />
      })}
    </section>
  )
}

export default Products