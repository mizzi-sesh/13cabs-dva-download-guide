'use client'

import Link from "next/link";
import { isAsyncFunction } from "util/types";
import { clsx } from 'clsx'
import { getEventListeners } from "events";
import { usePathname } from "next/navigation";

export default function SectionPageLink({children, link, name, className}: {children?: React.ReactNode, link: string, name: string, className?: string}){

    const pathname = usePathname();
    return(
        
        <li className="overflow-visible my-1.5" data-active={pathname == link}>
            <Link className={clsx({'text-gray-500': pathname !== link, },
            {'font-bold text-orange-600 border-l border-current ' :  pathname === link, },
            ' font-semibold dark:hover:text-gray-300 hover:text-black relative flex w-full cursor-pointer',
            `items-center justify-between py-1 pl-5 text-left text-sm transition ease-in-out duration-350 ${className}`)} 
            href={link}>
                {name}
            </Link>
            <HighlightBackground isSelected={pathname == link} />
            {children}
        </li>
    )
}

function HighlightBackground(props: {isSelected: boolean}){
    if (props.isSelected){
        return (
            <div className="relative -left-[2px] bottom-0 top-0 w-[1px] bg-orange-600" aria-hidden="true"></div>
        )
    }
    else
    {
        return null;
    }
}