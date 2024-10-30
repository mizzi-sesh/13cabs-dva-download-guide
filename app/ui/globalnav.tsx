'use client';
import dynamic from 'next/dynamic';
import { Button, Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Navigation, UserNavigation } from '../../my-types'
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import Logo from '../../public/branding/13cabs_logo_only__PMS-151C_.svg'
import Image from 'next/image'
import { saira_extra_condensed, radio_canada_bold } from "../layout";
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx'

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
  }

const UnoptimisedLogo = (props: any) => {
    return <Image {...props} unoptimized className="" alt="PFP"/>
}

const SetTheme = dynamic(() => import('../ui/themebutton'), {
  ssr: false,
});

let navigation: Navigation[] = [
  // {name: 'Home', href: '/', current: true},
  // {name: 'FAQ', href: '/FAQ', current: false},
  // {name: 'Docs', href: '/Docs', current: false},
  // {name: 'About', href: '/About', current: false},
]

export default function GlobalNavigation(){
  
  const pathname = usePathname();

  return (
        <Disclosure as="nav" className="dark:border-gray-800 py-1 border-gray-200 shadow-md border-b">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-[6dvh] min-h-12 items-center justify-between ">
              <div className="flex items-center">
                <div className="flex-shrink-0 pb-8 h-5 w-32">
                  <Link href="/">
                    <UnoptimisedLogo
                      src={Logo}
                      alt="13cabs"
                      />
                  </Link>
                </div>
                {/* <div className={`text-3xl flex pl-5 ${saira_extra_condensed.className}`}>|</div> */}
                <div className={`text-2xl pl-5 ${saira_extra_condensed.className} border-l dark:border-l-gray-800 border-l-gray-200 border-offset-2 m-5 hidden md:block`}>
                  Automatic Dispatch Interface - Documentation
                </div>
              <div className="hidden md:hidden lg:block p-2">
                <div className="mt-1 flex items-baseline  space-x-4">
                  {navigation.map((item) => (
                    <Link
                      id={item.name}
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                      className={clsx(
                        'dark:text-gray-300 dark:hover:text-gray-100 dark:hover:bg-zinc-700 hover:bg-gray-300 hover:text-gray-700',
                        {
                          'bg-gray-300 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-900 hover:bg-gray-400 ': pathname === item.href,
                        },
                        `${radio_canada_bold.className} rounded-md px-3 py-2 text-md font-medium hover:ease-in-out duration-300 hover:backdrop-filter hover:backdrop-blur-[5px]
                        
                        `                      
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-1 justify-end">
              <div className="flex items-center">       
                <SetTheme/>
                {/* <Menu as="div" className="flex flex-row relative m1-3 hidden lg:block">
                  <div className="hover:outline-none transition ease-in-out duration-500 hover:ring-1 hover:ring-gray-400 hover:ring-offset-gray-400  dark:hover:ring-offset-white rounded-full hover:ring-offset-1 dark:hover:ring-white dark:hover:ring-offset-gray-800 ">
                    <MenuButton className="relative flex max-w-xs items-center rounded-full text:sm ">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>

                      <div className="h-10 w-10 rounded-full p-0.5" />
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-zinc-800 py-1 shadow-1g ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      {props.userNavigation.map((item) => (
                        <MenuItem key={item.name} >
                          <Link href={item.href} 
                          className={`block px-4 py-2 text-md dark:bg-zinc-800 bg-white dark:text-white data-[focus]:bg-gray-300 dark:data-[focus]:bg-zinc-700 ${radio_canada_bold.className}`}
                          >
                            {item.name}
                          </Link>
                        </MenuItem>
                      ))}
                    </MenuItems>
                </Menu> */}
              </div>
            </div>
              {/* <div className="-mr-2 flex lg:hidden">
                <DisclosureButton className="group relative inline-flex text-gray-400 items-center hover:ring-2 hover:ring-black justify-center rounded-md dark:bg-zinc-950 p-2p dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white focus:outline-none focus:ring-2 dark:focus:ring-white focus:ring-offset-2 dark:focus:ring-offset-gray-800">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                </DisclosureButton>
              </div> */}
            </div>
          </div>
          {/* <DisclosurePanel className="lg:hidden">
            <div className="space-y-1 space-x-1 flex justify-evenly px-3 pb-3 columns-2 pt-2 sm:px-3 ">
              {navigation.map((item)=>(
                <Link
                id={item.name}
                key={item.name}
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={clsx(
                  'dark:text-gray-300 transition ease-in-out duration-400 dark:hover:text-gray-100 dark:hover:bg-zinc-700 hover:bg-gray-300 hover:text-gray-700',
                  {
                    'bg-gray-300 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-900 hover:bg-gray-400 ': pathname === item.href,
                  },
                  `${radio_canada_bold.className} rounded-md px-3 py-2 text-md font-medium `                      
                )}>
                  {item.name}
                </Link>
   
              ))}

            </div>
            <div className="border-t border-gray-400 container dark:border-zinc-700 pb-3 pt-4">
              <div className="flex px-5 items-center">
                <div className="flex-shrink-0 pr-3 ">
                  <div className="h-10 w-10 rounded-full" />
                </div>
                <div className="mt-3 flex-1">
                  <div className="text-base font-medium leading-none text-black dark:text-white">Jane Doe</div>
                  <div className="text-sm font-medium leading-none text-black dark:text-gray-400">jane.doe@13cabs.com.au</div>
                  <div className="static px-3 md:hidden"></div>
                </div>
  
              </div>
              
              <div className="mt-3 space-y-1 px-2">
                {props.userNavigation.map((item)=>(
                  <Link
                    key={item.name}
                    
                    href={item.href}
                    className="block rounded-md transition ease-in-out px-3 py-2 text-base text-black dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-zinc-700"
                    >
                      {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </DisclosurePanel> */}
          </Disclosure> 
    )
}

