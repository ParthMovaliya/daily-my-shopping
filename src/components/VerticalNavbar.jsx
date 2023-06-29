"use client";

import React, { useState } from 'react'
import { BsPlusLg } from "react-icons/bs"
import { RxDashboard } from "react-icons/rx"
import { IoIosArrowUp } from "react-icons/io"

const VerticalNavbar = () => {
    const [dashboard, setDashboard] = useState(false);
    const [application, setApplication] = useState(false);
    const [elements, setElements] = useState(false);
    const [forms, setForms] = useState(false);
    const [plugins, setPlugins] = useState(false);
    // const [dashboard, setDashboard] = useState(false);
    const [datagrid, setDatagrid] = useState(false);
    const [settings, setSettings] = useState(false);
    return (
        <div className='bg-neutral-800 text-white min-h-screen h-full w-[240px]'>

            <div className="flex items-center gap-1 p-1 rounded-md my-[15px] mx-[30px] bg-neutral-200 text-black">
                <BsPlusLg />
                <p>New Item</p>
            </div>

            <div className="flex justify-between items-center my-[15px] mx-[30px]">
                <div className="flex items-center gap-2">
                    <RxDashboard />
                    <p>Dashboard</p>
                </div>
                <div className={`cursor-pointer p-1 duration-150 ${dashboard ? "rotate-180" : ""}`} onClick={() => setDashboard(dashboard => !dashboard)}>
                    <IoIosArrowUp />
                </div>
            </div>

            <div className='mx-[30px]'>
                {
                    dashboard && <div className="flex flex-col gap-2">
                        <p>Commarce</p>
                        <p>Analytics</p>
                        <p>Cyrpto</p>
                        <p>Helpdesk</p>
                        <p>Monitoring</p>
                        <p>Fitnes</p>
                    </div>
                }
            </div>

            <div className="flex justify-between items-center my-[15px] mx-[30px]">
                <div className="flex items-center gap-2">
                    <RxDashboard />
                    <p>Application</p>
                </div>
                <div className={`cursor-pointer p-1 duration-150 ${application ? "rotate-180" : ""}`} onClick={() => setApplication(application => !application)}>
                    <IoIosArrowUp />
                </div>
            </div>

            <div className='mx-[30px]'>
                {
                    application && <div className="flex flex-col gap-2">
                        <p>Application</p>
                        <p>Application</p>
                    </div>
                }
            </div>

            <div className="flex justify-between items-center my-[15px] mx-[30px]">
                <div className="flex items-center gap-2">
                    <RxDashboard />
                    <p>Elements</p>
                </div>
                <div className={`cursor-pointer p-1 duration-150 ${elements ? "rotate-180" : ""}`} onClick={() => setElements(elements => !elements)}>
                    <IoIosArrowUp />
                </div>
            </div>

            <div className='mx-[30px]'>
                {
                    elements && <div className="flex flex-col gap-2">
                        <p>Elements</p>
                        <p>Elements</p>
                    </div>
                }
            </div>

            <div className="flex justify-between items-center my-[15px] mx-[30px]">
                <div className="flex items-center gap-2">
                    <RxDashboard />
                    <p>Forms</p>
                </div>
                <div className={`cursor-pointer p-1 duration-150 ${forms ? "rotate-180" : ""}`} onClick={() => setForms(forms => !forms)}>
                    <IoIosArrowUp />
                </div>
            </div>

            <div className='mx-[30px]'>
                {
                    forms && <div className="flex flex-col gap-2">
                        <p>Forms</p>
                        <p>Forms</p>
                    </div>
                }
            </div>

            <div className="flex justify-between items-center my-[15px] mx-[30px]">
                <div className="flex items-center gap-2">
                    <RxDashboard />
                    <p>Plugins</p>
                </div>
                <div className={`cursor-pointer p-1 duration-150 ${plugins ? "rotate-180" : ""}`} onClick={() => setPlugins(plugins => !plugins)}>
                    <IoIosArrowUp />
                </div>
            </div>

            <div className='mx-[30px]'>
                {
                    plugins && <div className="flex flex-col gap-2">
                        <p>Plugins</p>
                        <p>Plugins</p>
                    </div>
                }
            </div>

            {/* <div className="flex justify-between items-center my-[15px] mx-[30px]">
                <div className="flex items-center gap-2">
                    <RxDashboard />
                    <p>Elements</p>
                </div>
                <div className={`cursor-pointer p-1 duration-150 ${dashboard ? "rotate-180" : ""}`} onClick={() => setDashboard(dashboard => !dashboard)}>
                    <IoIosArrowUp />
                </div>
            </div> */}

            <div className="flex justify-between items-center my-[15px] mx-[30px]">
                <div className="flex items-center gap-2">
                    <RxDashboard />
                    <p>Datagrid</p>
                </div>
                <div className={`cursor-pointer p-1 duration-150 ${datagrid ? "rotate-180" : ""}`} onClick={() => setDatagrid(datagrid => !datagrid)}>
                    <IoIosArrowUp />
                </div>
            </div>

            <div className='mx-[30px]'>
                {
                    datagrid && <div className="flex flex-col gap-2">
                        <p>Datagrid</p>
                        <p>Datagrid</p>
                    </div>
                }
            </div>

            <div className="flex justify-between items-center my-[15px] mx-[30px]">
                <div className="flex items-center gap-2">
                    <RxDashboard />
                    <p>Settings</p>
                </div>
                <div className={`cursor-pointer p-1 duration-150 ${settings ? "rotate-180" : ""}`} onClick={() => setSettings(settings => !settings)}>
                    <IoIosArrowUp />
                </div>
            </div>

            <div className='mx-[30px]'>
                {
                    settings && <div className="flex flex-col gap-2">
                        <p>Settings</p>
                        <p>Settings</p>
                    </div>
                }
            </div>

        </div>
    )
}

export default VerticalNavbar