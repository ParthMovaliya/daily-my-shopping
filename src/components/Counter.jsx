import React from 'react'
import { AiOutlineShop } from 'react-icons/ai'
import { FiList, FiUsers } from 'react-icons/fi'
import { MdOutlineShoppingBag } from "react-icons/md"
const Counter = () => {
    return (
        <div className='grid  gap-6 p-4 mx-2 grid-cols-2 lg:grid-cols-4'>
            <div className="flex bg-white p-5 gap-4 rounded-lg">
                <MdOutlineShoppingBag className='text-orange-600 w-8 h-9 ' />
                <div className="">
                    <p className="font-light text-[12px]">Total Sales</p>
                    <p className='font-semibold size-[22px]'>$2,456</p>
                </div>
            </div>
            <div className="flex bg-white p-5 gap-4 rounded-lg">
                <AiOutlineShop className='text-violet-600 w-8 h-9 ' />
                <div className="">
                    <p className="font-light text-[12px]">Total Expenses</p>
                    <p className='font-semibold size-[22px]'>$3,326</p>
                </div>
            </div>
            <div className="flex bg-white p-5 gap-4 rounded-lg">
                <FiUsers className='text-emerald-600 w-8 h-9 ' />
                <div className="">
                    <p className="font-light text-[12px]">Total Visitors </p>
                    <p className='font-semibold size-[22px]'>5,325</p>
                </div>
            </div>
            <div className="flex bg-white p-5 gap-4 rounded-lg">
                <FiList className='text-purple-600 w-8 h-9 ' />
                <div className="">
                    <p className="font-light text-[12px]">Total Orders</p>
                    <p className='font-semibold size-[22px]'>1,326 </p>
                </div>
            </div>
        </div>
    )
}

export default Counter