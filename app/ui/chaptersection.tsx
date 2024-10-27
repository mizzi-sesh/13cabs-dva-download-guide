'use client'

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Children, Component, CSSProperties, ReactNode, useRef, useState } from "react";


export default function ChapterSection(props: { link: string, name: string, children?: React.ReactNode}){

    const pathname = usePathname();
    const [dataCollapsed , toggleCollapse] = useState(() => {        
        if(pathname.includes(props.link)){
            console.log (pathname, props.link);
           return false;
        } else {
            return true;
        }
    });
    const countRef = useRef<number | null>(null);
    

    let divStyle: CSSProperties = {
        ['height']: 0,
        ['opacity']: 0,
        ['overflow']: 'hidden',
        ['display']: 'flex',
        ['flexDirection']: 'column',
        
      }

      let svgArrowStyle: CSSProperties = {
        ['color']: 'currentcolor',
        ['width']: 16,
        ['height']: 16,
      }

      function toggleChapterOrientation(){
        if(pathname === props.link){
            toggleCollapse(!dataCollapsed);
        }

      }

      let childCount = Children.count(props.children)    
      let svgString;
    if (childCount > 0){
        if (dataCollapsed){
            svgString = "M9 18l6-6-6-6"
        }
        else{
            svgString = "M6 9l6 6 6-6"
        }
    }

    if(dataCollapsed){
        divStyle.height = "0";
        divStyle.opacity = 0;
    }
    else {
        divStyle.height = "100%"
        
        divStyle.opacity = 1;
    }

    return(
        <ul>
        <li className="my-1.5" data-active={pathname === props.link}>
            <Link href={props.link} className={clsx({'font-black dark:text-gray-400 text-gray-600': pathname !== props.link,},
            {'dark:hover:text-gray-300 font-extrabold text-orange-600' :  pathname === props.link, },
             'hover:text-black dark:hover:text-gray-300 relative flex  w-full cursor-pointer items-center',
            'justify-between rounded-md py-1 pl-5 text-left text-sm transition-all ease-in-out duration-300')} 
            onClick={toggleChapterOrientation}>
                {props.name}
                <svg data-testid="geist-icon" fill="none" height="24" 
                shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                viewBox="0 0 24 24" width="24" style={svgArrowStyle}>
                    <path d={svgString}></path>
                </svg>  
            </Link>        
            <div data-is-collapsed={dataCollapsed} style={divStyle} className={clsx(
                {'': dataCollapsed === true},
                {'': dataCollapsed === false},
                "transition-all ease-in-out duration-200")}
                >
                <div className="relative">
                    <ul className={clsx({'': dataCollapsed === true},
                        {'': dataCollapsed === false},
                        'px-0.5 last-of-type:mb-0 mr-6 border-l border-gray-600/30  pl-0  dark:border-gray-400/30 ml-4')}>
                        {props.children}
                    </ul>
                </div>
            </div>
        </li>
        </ul>
    )
}