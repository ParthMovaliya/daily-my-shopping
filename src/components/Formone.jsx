import Image from 'next/image'
import React from 'react'

const Formone = () => {
    return (
        <div className='bg-white mt-4 mx-4 p-8 rounded-lg flex flex-col gap-2'>
            <div className="">
                <p className='font-semibold text-[22px]'>Form title</p>
                <p>Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.</p>
            </div>
            <div className="flex gap-2">
                <div className="flex gap-1 p-1 w-fit border border-amber-600 bg-amber-200">
                    <Image className='bg-white' src="/images/english.png" alt='endlish' height={25} width={25} />
                    <p>English</p>
                </div>
                <div className="flex gap-1 p-1 w-fit border border-neutral-300">
                    <Image className='' src="/images/turkish.png" alt='endlish' height={25} width={25} />
                    <p>Turkish</p>
                </div>
            </div>
            <div className="flex flex-col">
                <label htmlFor="first">Label title</label>
                <input className='border border-neutral-300 p-2 rounded-md' type="text" name="first" id="first" placeholder='Placeholder content' />
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col">
                    <label htmlFor="select">Label title</label>
                    <select className='border border-neutral-300 p-2 rounded-md' name="select" id="first" >
                        <option value="" selected>Choose</option>
                        <option value="One">One</option>
                        <option value="Two">Two</option>
                        <option value="Three">Three</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="first">Label title</label>
                    <input className='border border-neutral-300 p-2 rounded-md' type="text" name="first" id="first" placeholder='Placeholder content' />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="first">Label title</label>
                    <input className='border border-neutral-300 p-2 rounded-md' type="text" name="first" id="first" placeholder='Placeholder content' />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                    <label htmlFor="first">Label title</label>
                    <input className='border border-neutral-300 p-2 rounded-md' type="text" name="first" id="first" placeholder='Placeholder content' />
                </div>
                <div className="flex flex-col ">
                    <label htmlFor="first">Label title</label>
                    <input className='border border-neutral-300 p-2 rounded-md' type="text" name="first" id="first" placeholder='Placeholder content' />
                </div>
            </div>
            <label htmlFor="textarea">Label title</label>
            <textarea className='border border-neutral-300 p-4 rounded-md' placeholder="Placeholder content" name="textarea" id="textarea" cols="0" rows="5"></textarea>
        </div>
    )
}

export default Formone