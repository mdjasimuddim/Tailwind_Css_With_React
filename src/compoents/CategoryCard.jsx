import React from 'react'

const CategoryCard = (props) => {
  return (
    <div className='border overflow-hidden border-gray-200 hover:border-gray-300 transition-transform rounded-lg hover:scale-105'>
        <div className='flex justify-between items-center p-2'>
            <div>
                <h4 className='font-medium text-xl'>{props.name}</h4>
                <p className='text-gray-500'>{props.count}</p>
            </div>
            <img src={props.img} className='w-[90px] h-[90px] rounded-full' alt="name" />
        </div>
    </div>
  )
}

export default CategoryCard