import React from 'react'
import Product_category from './Category/page'
import Product_tags from './Tags/page'

const ProductSidebar = () => {
  return (
    <div className='p-6 rounded-xl border border-gray-300 shadow-xl'>
      <h2 className='mb-5 text-2xl'>قیمت ۲۰۰۰۰ تومان</h2>

      <div className='mb-6 p-3 border border-gray-400 rounded-xl'>
        <label className='block font-bold text-مل'>تعداد</label>
        <select className='w-full ml-1 text-xm items-center'>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      <div className='w-full mb-6 py-6 text-center text-white bg-gray-600 rounded-xl hover:bg-gray-800 transition'>
        خرید
      </div>

      <div className='mb-4 flex justify-between align-center'>
        <p>۱۰۰۰ تومان * ۴</p>

        <p>۴۰۰۰ تومان</p>
      </div>

      <div className='mb-4 flex justify-between align-center'>
        <p>هزینه ارسال تهران</p>

        <p>۳۰۰۰۰ تومان</p>
      </div>

      <hr />
      <div className='my-4 flex justify-between align-center font-bold'>
        <p>مبلغ کل</p>

        <p>۵۰۰۰۰ تومان</p>
      </div>
    </div>
  )
}

export default ProductSidebar
