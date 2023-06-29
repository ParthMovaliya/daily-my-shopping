import React from 'react'
import { BiHomeAlt } from "react-icons/bi"
import { AiOutlineUnorderedList } from "react-icons/ai"
import { CiSettings } from "react-icons/ci"
const Nav = () => {
    return (
        <div className='bg-neutral-900'>
            <div className="text-white">
                <div className="">
                    <div className="">
                        <BiHomeAlt />
                        <p>Home</p>
                    </div>
                    <div className="">
                        <AiOutlineUnorderedList />
                        <p>Contents</p>
                    </div>
                    <div className="">
                        <CiSettings />
                        <p>Categories</p>
                    </div>
                    <div className="">
                        <BiHomeAlt />
                        <p>Settings</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav