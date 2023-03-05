/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Togglebutton } from './SvgIcons';
import { Stakingicon } from './SvgIcons';
import { Galleryicon } from './SvgIcons';
import { Leaderboard } from './SvgIcons';

export default function Sidebar(props: {
    isSidebar: boolean,
    setIsSidebar: Function
}) {
    const router = useRouter();
    const { isSidebar, setIsSidebar } = props;
    return (
        <nav className={`flex flex-col px-4 ${!isSidebar ? "w-[240px]" : "hidden"}`}>
            <div className="flex justify-between">
                <img src="/img/cat.png" alt="" className="w-[56px] rounded-[10px]" />
                <button onClick={() => setIsSidebar(true)}>
                    <Togglebutton />
                </button>
            </div>
            <div className="flex flex-row items-center pt-3">
                <p className="font-4 text-black-100 font-bold pr-1">@Daniel154</p>
                <div className="bg-[url('/img/star.svg')] w-4 h-4 flex justify-center items-center">
                    <img src="/img/tick.svg" className="w-2 h-[6px]" alt="" />
                </div>
                <img src="/img/baicai.svg" alt="" className="ml-[6px]" />
            </div>
            <p className="font-[14px]] text-black-80">Hodler sice 2022</p>
            <ul className="flex flex-col ml-[6px] mt-7">
                {links.map((item, key) => (
                    <li className="cursor-pointer" key={key}>
                        <Link href={item.link}>
                            <div className={`items-center text-black-80 font-[14px] leading-[18px] flex pt-[11.35px] pb-[11.35px] items-cente pl-[7px] rounded-[5px] hover:bg-[#1E1E1E14] ${router.pathname === item.link ? "bg-[#1E1E1E14]" : ""}`}>
                                {item.icon}
                                <p className={`ml-[9.5px] capitalize ${router.pathname === item.link ? "font-bold" : ""}`}>{item.title}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

const links = [
    {
        title: "staking",
        icon: <Stakingicon />,
        link: "/staking"
    },

    {
        title: "leaderboard",
        icon: <Leaderboard />,
        link: "/leaderboard"
    },
    {
        title: "gallery",
        icon: <Galleryicon />,
        link: "/gallery"
    },
    {
        title: "breadhead",
        icon: <Galleryicon />,
        link: "/breadhead"
    },
    {
        title: "staking1",
        icon: <Galleryicon />,
        link: "/ustaking"
    },
    {
        title: "staking2",
        icon: <Galleryicon />,
        link: "/mainstaking"
    }
]