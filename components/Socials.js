import React from "react";

import { socials } from "./data";

export default function Socials(){
    return(
        <>
            <ul className="flex space-x-6">
                {
                    socials.map((item, index) => {
                        return (
                            <li className="flex justify-center items-center" key={index}>
                                <a className="text-3xl" href={item.href} target="_blank">{item.icon}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}