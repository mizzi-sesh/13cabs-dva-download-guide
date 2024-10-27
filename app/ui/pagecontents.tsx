'use client'
import { Console } from "console";
import { init } from "next/dist/compiled/webpack/webpack";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Children, ReactNode, useEffect, useRef, useState } from "react";

interface ContentListProps {
    link: string, 
    content: string,
    isLevel2?: boolean,
}


export default async function PageContents({children, id}: {children: React.ReactNode, id: string}) {
    

     if (typeof document !== "undefined" && typeof window !== "undefined") {

        let viewHeight = window.visualViewport?.height
        let viewWidth = window.visualViewport?.width

        const coHeadingElements = useRef<HTMLElement | null>(null);

        if (viewHeight && viewWidth){

            Children.forEach(children, (child) => {
                if (React.isValidElement(child)){
                    let childProps: ContentListProps = child.props;                 
                    window.addEventListener("scroll", () => {
                        coHeadingElements.current = document.getElementById(childProps.link);
                        let headingRect = coHeadingElements.current?.getBoundingClientRect();
                        if(headingRect){
                            if (headingRect.bottom >= 0 && headingRect.top < viewHeight * 0.3){
                                let fragments = document.getElementsByClassName("page-content-section-fragment");
                                for(let i = 0; i < fragments.length; i++){
                                    let fragment = fragments.item(i);
                                    if (fragment?.hasChildNodes()){
                                        let fragmentAttribute = fragment.firstElementChild?.attributes;
                                        let hrefAttr = fragmentAttribute?.getNamedItem("href");
                                        if (hrefAttr?.value.substring(1) == childProps.link){
                                                fragment.firstElementChild?.classList.add("page-content-section-active-fragment")
                                        }
                                        else{
                                            fragment.firstElementChild?.classList.remove("page-content-section-active-fragment")
                                        }
                                    }                                    
                                }    
                            }
                        }
                    })
                }
            })
        }   
     }

    return(
        <nav id={id} className="order-last hidden w-56 shrink-0 lg:block ">
            <aside className="page-content-section page-content-section-has-secondary">
                <div className="page-content-heading">
                <span>Page Contents</span>
                </div>
                <ul>
                 {children}
                </ul>
            </aside>
        </nav>
    )
}


export function CSFragment(prop: ContentListProps){

    let level2Class: string = "page-content-section-level2-fragment";
    if (!prop.isLevel2){
        level2Class = "transition ease-in-out hover:text-gray-100";
    }

    return(
        <li className={`page-content-section-fragment  ${level2Class}`}>
            <Link className="transition ease-in-out duration-300 hover:text-gray-100" href={`#${prop.link}`}>{prop.content}</Link>
        </li>
    )
}