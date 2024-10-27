'use client'

import { clsx } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Chapter(props: {children: React.ReactNode, link: string, name: string}){

    const pathname = usePathname()
     
    return(
        <ul className="last-of-type:pb-3 dark-theme">
            <li className="my-1.5 ml-[3px]" data-active={pathname === props.link}>
                <Link className={clsx({'font-black dark:text-gray-400 text-gray-900': pathname !== props.link, },
                 {'text-orange-600' :  pathname === props.link},
                 'font-semibold text-[16px] hover:text-gray-1000 relative flex w-full cursor-pointer items-center',
                 'justify-between rounded-md py-1 pl-2 text-left text-sm overflow-auto text-gray-1000 font-medium')} href={props.link}>
                {props.name}   
                </Link>
                <div data-is-collapsed="false" style={{height: 'auto', opacity: 1, overflow: 'hidden', 
                 display: 'flex', flexDirection: 'column'}}>
                    <div className="relative">
                        <ul className="px-0.5 overflow-auto last-of-type:mb-0 mb-8">
                            {props.children}
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
    )
}