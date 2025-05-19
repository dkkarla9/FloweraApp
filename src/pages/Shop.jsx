import React, { Component } from 'react'
import Banner from '../component/Banner'
import ProductList from '../component/ProductList'

export default class Shop extends Component {
  render() {
    return (
       <div className='bg-gray-100'>
     <Banner/>
      <ProductList/>
      {/* <PaginatedProductGrid/> */}
     
      </div>
    )
  }
}
