import React from 'react'
import { BsPlusLg } from "react-icons/bs"
import { CiSettings } from "react-icons/ci"
import { FiSearch } from "react-icons/fi"
import Counter from './Counter'
import DisplayForm from './DisplayForm'
import Formone from './Formone'

const MainBody = () => {
    return (
        <div className='bg-neutral-200 w-full '>
            <div className="flex flex-row px-6 bg-white h-16 items-center justify-between">
                <div className="flex flex-row gap-4">
                    <h1 className='font-semibold text-[22px]'>Add new post</h1>
                    <div className="flex flex-row gap-4">
                        <div className="flex flex-row items-center gap-1">
                            <BsPlusLg />
                            <p>Add Content</p>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <CiSettings />
                            <p>Settings</p>
                        </div>
                    </div>
                </div>
                <div className="border border-neutral-300 flex items-center  rounded-md">
                    <input className='p-2' type="text" name="search" placeholder='Search content..' />
                    <div className="p-1 cursor-pointer">
                        <FiSearch className='text-[20px]' />
                    </div>
                </div>
            </div>

            <Counter />
            <DisplayForm />
            <Formone />
        </div>
    )
}

export default MainBody