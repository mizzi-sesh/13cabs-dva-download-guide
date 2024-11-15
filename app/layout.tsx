import type { UserNavigation } from '../my-types'
import  GlobalNavigation from './ui/globalnav'
import { Fira_Code, Radio_Canada, Saira_Extra_Condensed } from "next/font/google";
import "./globals.css";
import {getTheme} from './getTheme'
import { Suspense, useState } from 'react';
import Chapter from './ui/chapter';
import ChapterSection from './ui/chaptersection';
import SectionPageLink from './ui/sectionpagelink';
import Link from 'next/link';
import ghLogo from '../public/Octicons-mark-github.svg';
import Image from 'next/image';
import { CSFragment } from './ui/pagecontents';

export const radio_canada = Radio_Canada({ subsets: ["latin"], weight: "300" });
export const radio_canada_bold = Radio_Canada({ subsets: ["latin"], weight: "400" });
export const saira_extra_condensed = Saira_Extra_Condensed({subsets: ["latin"], weight: "400"});

export const fira_code = Fira_Code({subsets: ["latin"], weight: "300"});



// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// const userNavigation: UserNavigation[] = [
//   {name: 'Your Profile', href: '#'},
//   {name: 'Settings', href: '#' },
//   {name: 'Sign out', href: '#'},
// ]

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 

    return (
    
      <html lang="en" className="bg-white dark:bg-black bg-no-repeat min-h-full 
        motion-reduce:transition-none dark:text-white transition-all duration-[1500ms]">
        {/*duration-[1500ms]*/}
        {/*transition-all */}
        <head>
          <script dangerouslySetInnerHTML={{ __html: getTheme }} />
        </head>
        <body className={`${radio_canada.className}`}>
        <Suspense fallback={<p></p>}>
          <div className="min-h-full">
            <header className="fixed z-50 w-full h-fit text-black dark:text-gray-400 dark:bg-black/50 bg-white-400/50 backdrop-filter backdrop-blur-[5px]">
              <GlobalNavigation /> 
            </header>
              <div className="relative mx-auto max-w-screen-xl px-4 py-10 md:flex md:flex-row md:py-10">
                  <div className="sticky top-[95px] hidden h-[calc(100vh-121px)] w-[284px]  md:flex md:shrink-0 md:flex-col md:justify-between">
                      <div className="overflow-hidden-relative">
                          <nav className="styled-scrollbar scroll-smooth flex h-[calc(100vh-125px)]lg:h-[calc(100vh-200px)] flex-col overflow-y-scroll pb-4 pr-2 dark:text-white ">
                              <div className="absolute top-0 left-0 z-10 w-full h-3 opacity-0" aria-hidden="true"></div>
                              <div className="absolute bottom-0 left-0 z-10 w-full h-3 opacity-0" aria-hidden="true"></div>

                              <Chapter name="Automatic Dispatch Interface (ADI)" link="/">
                                      <ChapterSection name="Getting Started with Development" link="/Docs/Dev/GettingStarted">
                                      <SectionPageLink name="Environment Variables" link="/Docs/Dev/GettingStarted/EnvironmentVariables"/>
                                      <SectionPageLink name="Project Structure" link="/Docs/Dev/GettingStarted/ProjectStructure"/>
                                  </ChapterSection>

                                  <ChapterSection name="MenuManagement" link="/Docs/Dev/MenuManagement"/>
                                  <ChapterSection name="Fundamental Classes" link="/Docs/Dev/Fundamentals">
                                      <SectionPageLink name="About DVA and PRODA " link="/Docs/Dev/Fundamentals/AboutDVAAndPRODA"/>
                                      <SectionPageLink name="BookingRedux" link="/Docs/Dev/Fundamentals/Booking"/>
                                      {/* <SectionPageLink name="Fleets" link="/Docs/Dev/Fundamentals/Fleets"/>
                                      <SectionPageLink name="Logging" link="/Docs/Dev/Fundamentals/Logging"/>
                                      <SectionPageLink name="SQL Parsing Objects" link="/Docs/Dev/Fundamentals/SQLParsingObjects"/> */}
                                  </ChapterSection>

                                  <ChapterSection name="Selenium Functionality" link="/Docs/Dev/Selenium">
                                      <SectionPageLink name="DVABooking" link="/Docs/Dev/Selenium/DVABooking"/>
                                      <SectionPageLink name="PRODAManager" link="/Docs/Dev/Selenium/PRODAManager"/>
                                  </ChapterSection>

                                  <ChapterSection name="GoogleRequests" link="/Docs/Dev/GoogleRequests"/>

                                  <ChapterSection name="ODICommands" link="/Docs/Dev/ODICommands">
                                      {/* <SectionPageLink name="AuthController" link="/Docs/Dev/ODICommands/AuthController"/>
                                      <ChapterSection name="CreateBookingController" link="/Docs/Dev/ODICommands/CreateBookingController">
                                      <SectionPageLink name="BookingLocations" link="/Docs/Dev/ODICommands/CreateBookingController/BookingLocations"/>
                                          <SectionPageLink name="BookingAccounts" link="/Docs/Dev/ODICommands/CreateBookingController/BookingAccounts"/>
                                          <SectionPageLink name="BookingHeader" link="/Docs/Dev/ODICommands/CreateBookingController/BookingHeader"/>
                                      </ChapterSection>
                                      <SectionPageLink name="SuburbsByName" link="/Docs/Dev/ODICommands/SuburbsByName"/>                                     */}
                                  </ChapterSection>
                                  <ChapterSection name="Main" link="/Docs/Dev/Main"/>
                              </Chapter>
                          </nav>
                      </div>
                  </div>

                 {children}
          </div>
          </div>

          <ul className='text-center relative scale-125'>
            <li className={`page-content-section-fragment transition ease-in-out block lg:hidden`}>
                <Link className="hover:text-gray-1000 transition ease-in-out duration-300 filter scroll-smooth text-gray-700 dark:brightness-[1.5] hover:brightness-[2]  dark:hover:text-gray-500  dark:hover:brightness-[2]" href={`#/`}>{`Back to Top`}</Link>
            </li>
          </ul>
          {/* <div className=' relative text-center pb-2 hover:brightness-[0.5] scale-125 hover:brightness-1 dark:brightness-[1.5] scroll-smooth block lg:hidden'>    
            <CSFragment content="Back to Top" link="/" ></CSFragment>
        </div> */}

            <div className='relative pb-6 text-center text-gray-700 text-sm dark:text-gray-600 filter dark:brightness-[1.5]'>
                <Link className='hover:text-gray-1000 dark:hover:text-gray-500 hover:brightness-[2] dark:hover:brightness-[2] transition ease-in-out duration-500' target="blank_" href="https://github.com/mizzi-sesh">{`Developed by Minerva Mizzi (2024) — `}<Image className="h-6 w-6 mb-1 ml-1 inline  brightness-[3] dark:brightness[1.5] transition ease-in-out duration-500"  alt={`GitHub Logo`} src={ghLogo}/>{``}
                </Link>
            </div>  
        </Suspense>
        
        </body>
      </html>
  );
}