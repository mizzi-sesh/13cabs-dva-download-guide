'use client'
import { Disclosure, DisclosureButton } from "@headlessui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";


  const SetTheme = () => {
    const [theme, setTheme] = useState((global as any).window?.__theme || 'light');
  
    const isDark = theme === 'dark';
  
    const toggleTheme = () => {
      (global as any).window?.__setPreferredTheme(theme === 'light' ? 'dark': 'light');
    };
  
    useEffect(() => {
      (global as any).window.__onThemeChange = setTheme;
    }, []);
  
    
return (
    <Disclosure>
        <DisclosureButton className="group p-1 mr-5 rounded-full p-2p
        transition ease-in-out duration-500
        text-gray-400 
        hover:ring-white
        hover:text-gray-600
        hover:outline-none
        hover:ring-1
        hover:ring-offset-2
        hover:ring-offset-gray-400
        dark:hover:text-white
        dark:hover:ring-1
        dark:hover:ring-black
        dark:hover:ring-offset-white"
        onClick={toggleTheme}>
            <span className="sr-only">Toggle Theme</span>
            <SunIcon aria-hidden="true" className="dark:block h-6 w-6 hidden"/>
            <MoonIcon aria-hidden="true" className="dark:hidden h-6 w-6 block"/>
        </DisclosureButton> 
    </Disclosure>
  )
//}
};

export default SetTheme;

