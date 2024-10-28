'use client'
import LinkCard from "@/app/ui/linkcard";
import PageContents, { CSFragment } from "@/app/ui/pagecontents";
import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierCaveLight } from "react-syntax-highlighter/dist/cjs/styles/hljs";

import { atelierHeathDark } from "react-syntax-highlighter/dist/esm/styles/hljs";


export default function Page() {

    return( 
        <>
            <PageContents id="page-contents">
                <CSFragment content="What is the Automatic Dispatch Interface?" link="what-is-the-adi"/>
                <CSFragment content="Features" link="features"/>

                <CSFragment content="Tools Used" link="tools-used"/> 
                <CSFragment content="Extra" link="extra-heading"/> 
            </PageContents>
            <article className="mt-4 w-full min-w-0 max-w-6x1 px-1 md:px-6 min-height-[calc(-103px + 100vh)]">
                <div className="-mt-4 mb-7 md:mb-10 md:mt-2">
                {/* TODO: Make a page pass which links current chapter > chapter section > section page */}
                </div>
                <div className="prose prose-documentation max-w-none">

                    <h1 id="adi" className="break-words">Automatic Dispatch Interface (ADI)</h1>
                    <p>Welcome to the ADI developer documentation! If you're interested in maintaining or extending the ADI platform, this page is a great place to start.
                       Although broader programming knowledge will be required to make the most of this documentation, 
                       general maintenance tasks and fixes should not require more than a basic grasp of <Link target="_blank" href="https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/">C# principles</Link> and <Link href="https://www.selenium.dev/documentation/webdriver/" target="_blank">Selenium ChromeDriver</Link>.
                    </p>
                    <h2 id="what-is-the-adi">What is the Automatic Dispatch Interface?</h2>
                    <p>The Automatic Dispatch Interface is a .NET Console Application developed for <Link target="_blank" href="https://www.13cabs.com.au/">13Cabs</Link>, which dispatches text-based bookings to their booking servers. 
                        While the application has been engineered to support bookings of multiple types, only bookings submitted for the <a href="/Docs/Dev/Fundamentals/AboutDVA">Department of Veteran Affairs (DVA)</a> was 
                        able to be implemented in production. However, the application has effectively replaced the previous workflow for DVA booking submissions, and so this 
                        documentation is primarily concerned with maintenance, whilst also specifying information that enables future development.
                    </p>
                    <h2 id="features">Features</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full table-auto">
                        <thead>
                            <tr>
                            <th>Feature</th>
                            <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>
                                <Link href="/Docs/User/Operation#submit-booking">
                                Simple Booking Submission
                                </Link>
                            </td>
                            <td>Previously, manually submitted bookings required several fields for successful dispatch. ADI reduces the number of required fields down from 16 to two, drastically simplifying the process.</td>
                            </tr>
                            <tr>
                            <td>
                                <Link href="/Docs/User/Operation#booking-history">
                                Booking History
                                </Link>
                            </td>
                            <td>
                                Review bookings submitted during each session by simply bringing up the "View Booking History" menu, to show the fleet, order numbers and name of all bookings submitted during an ODI session. The last submitted booking features a reminder on the main menu at all times.
                            </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="/Docs/Dev/Fundamentals/Fleets">
                                        Fleet Detection
                                    </a>
                                </td>
                                <td>Across over 30 fleets nation wide, ADI can automatically detect and submit bookings without the user having to determine the fleet.</td>
                            </tr>
                            <tr> 
                                <td>
                                    <a href="/Docs/Dev/Fundamentals/Logging">File-based Logging</a>
                                </td>
                                <td>
                                    ADI automatically records information regarding any exceptions or faults in a daily log file. It also retains all SOAP messages submitted during use, as well as the entire booking history when exiting the application. 
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {/* <a href="/Docs/Dev/Fundamentals/Logging"> */}
                                    Less Mistakes
                                    {/* </a> */}
                                </td>
                                <td>
                                    With manual booking submissions, input errors occurred often due to the amount of information which required duplication, but with ADI the bookings are almost entirely copied from the original booking before dispatch, so they're always accurate to the original.
                                </td>
                            </tr>
                        </tbody>
                        </table>
                        <h2 id="tools-used">Tools Used</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <h2 id="extra-heading">EXTRA HEADING!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        {/* <CodeBlock aria-label="Hello World" filename="Wow.jsx" language="jsx">

                        </CodeBlock> */}
                        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2"> 
                        <LinkCard name="Getting Started" link="/Downloads">
                            Wow
                        </LinkCard>
                        <LinkCard name="Getting Started" link="/Downloads">
                            Wow
                        </LinkCard>
                        <LinkCard name="Getting Started" link="/Downloads">
                            Wow
                        </LinkCard>
                        <LinkCard name="Getting Started" link="/Downloads">
                            Wow
                        </LinkCard>
                        <LinkCard name="Getting Started" link="/Downloads">
                            Wow
                        </LinkCard>
                        <LinkCard name="Getting Started" link="/Downloads">
                            Wow
                        </LinkCard>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}