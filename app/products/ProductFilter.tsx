import React from 'react'

const ProductFilter = () => {
  return (
    <div>
        <h2 className='font-bold text-2xl'>فیلتر محصولات</h2>

        <h3 className='text-xl py-4'>انتخاب دسته</h3>
        <form action="" className='flex flex-col'>
        <div>
            <input type="checkbox" name="دسته بندی" id="input-1" className='px-4'/>
            <label className='px-4' htmlFor="input-1">category-1</label>
        </div>
        <div>
            <input type="checkbox" name="دسته بندی" id="input-2" className='px-4'/>
            <label className='px-4' htmlFor="input-2">category-2</label>
        </div>
        <div>
            <input type="checkbox" name="دسته بندی" id="input-3" className='px-4'/>
            <label className='px-4' htmlFor="input-3">category-3</label>
        </div>
        <div>
            <input type="checkbox" name="دسته بندی" id="input-4" className='px-4'/>
            <label className='px-4' htmlFor="input-4">category-4</label>
        </div>
        </form>
        <h3 className='text-xl py-4'>انتخاب تگ</h3>
        <form action="" className='flex flex-col'>
        <div>
            <input type="checkbox" name="دسته بندی" id="input-1" className='px-4'/>
            <label className='px-4' htmlFor="input-1">category-1</label>
        </div>
        <div>
            <input type="checkbox" name="دسته بندی" id="input-2" className='px-4'/>
            <label className='px-4' htmlFor="input-2">category-2</label>
        </div>
        <div>
            <input type="checkbox" name="دسته بندی" id="input-3" className='px-4'/>
            <label className='px-4' htmlFor="input-3">category-3</label>
        </div>
        <div>
            <input type="checkbox" name="دسته بندی" id="input-4" className='px-4'/>
            <label className='px-4' htmlFor="input-4">category-4</label>
        </div>
        </form>
    </div>
  )
}

export default ProductFilter
