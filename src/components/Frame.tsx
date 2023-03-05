/* eslint-disable @next/next/no-img-element */
import React, { ReactNode, useState } from "react"
import Header from "../components/Header";
import Sidebar from "./Sidebar";
import { Togglebutton } from "./SvgIcons";

export default function Frame(props: {
    children: ReactNode,
    isSidebar: boolean,
    setIsSidebar: Function
}) {
    const { isSidebar, setIsSidebar } = props;
    return (
        <div
            className="min-h-[100vh] bg-no-repeat relative py-[88px]" >
            <img
                src="/img/bg.png"
                className="absolute left-0 top-0 w-full h-full object-cover z-0"
                alt=""
            />
            <Header />

            <main className="flex flex-col max-w-[960px] ml-auto mr-auto bg-[#FFFFFF60] mb-[118px] rounded-[12px] relative z-20">
                <div className="flex flex-col">
                    <div className="h-[50px]"></div>
                    <div className="flex flex-row">
                        <Sidebar
                            isSidebar={isSidebar}
                            setIsSidebar={setIsSidebar}
                        />
                        <section className={`flex flex-col ${!isSidebar ? "w-[704px]" : "w-full ml-4"} bg-white-60 mb-6 rounded-[10px] mr-4 relative`}>
                            {props.children}
                            <div className="absolute left-[2px] top-[-50px]">
                                <button onClick={() => setIsSidebar(false)} className={`${isSidebar ? "block" : "hidden"}`}><Togglebutton /></button>
                            </div>
                        </section>
                    </div>

                </div>
            </main>
        </div>
    )
}
