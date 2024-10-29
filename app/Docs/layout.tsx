import Link from "next/link";
import Chapter from "../ui/chapter";
import ChapterSection from "../ui/chaptersection";
import LinkCard from "../ui/linkcard";
import SectionPageLink from "../ui/sectionpagelink";
import SyntaxHighlighter from "react-syntax-highlighter";
import { materialDark, materialOceanic } from "react-syntax-highlighter/dist/esm/styles/prism";
import PageContents, { CSFragment } from "../ui/pagecontents";
import { materialLight } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default async function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    let codeString = 
    `const userNavigation: UserNavigation[] = [
      {name: 'Your Profile', href: '#'}, {name: 'Your Profile', href: '#'}, {name: 'Your Profile', href: '#'}, {name: 'Your Profile', href: '#'},
      {name: 'Settings', href: '#' },
      {name: 'Sign out', href: '#'},
    ]`;

    return (
        <>
            <div className="relative mx-auto max-w-screen-xl px-4 py-10 md:flex md:flex-row md:py-10">
                <div className="sticky top-[121px] hidden h-[calc(100vh-121px)] w-[284px]  md:flex md:shrink-0 md:flex-col md:justify-between">
                    <div className="overflow-hidden-relative">
                        <nav className="styled-scrollbar scroll-smooth flex h-[calc(100vh-200px)] flex-col overflow-y-scroll pb-4 pr-2 dark:text-white ">
                            <div className="absolute top-0 left-0 z-10 w-full h-3 opacity-0" aria-hidden="true"></div>
                            <div className="absolute bottom-0 left-0 z-10 w-full h-3 opacity-0" aria-hidden="true"></div>
                            {/* <Chapter name="ADI (User)" link="/Docs/User/ADI">
                                <ChapterSection name="Requirements" link="/Docs/User/Requirements"/>
                                <ChapterSection name="Installation" link="/Docs/User/Installation"/>
                                <ChapterSection name="Starting Application" link="/Docs/User/Setup"/>
                                <ChapterSection name="Operation" link="/Docs/User/Operation"/>
                                <ChapterSection name="Exiting Application" link="/Docs/User/Closing"/>
                                <ChapterSection name="Troubleshooting" link="/Docs/User/Troubleshooting"/>
                                <ChapterSection name="Known Issues" link="/Docs/User/KnownIssues"/>
                                <ChapterSection name="Frequently Asked Questions" link="/Docs/User/FAQ"/>
                            </Chapter> */}

                            <Chapter name="ADI (Developer)" link="/Docs/Dev/ADI">
                                    <ChapterSection name="Getting Started with Development" link="/Docs/Dev/GettingStarted">
                                    <SectionPageLink name="Environment Variables" link="/Docs/Dev/GettingStarted/EnvironmentVariables"/>
                                    {/* <SectionPageLink name="Room for Development" link="/Docs/Dev/GettingStarted/FutureDevelopment"/> */}
                                    {/* <SectionPageLink name="Installation" link="/Docs/Dev/GettingStarted/Installation"/> */}
                                    <SectionPageLink name="Project Structure" link="/Docs/Dev/GettingStarted/ProjectStructure"/>
                                </ChapterSection>

                                <ChapterSection name="MenuManagement" link="/Docs/Dev/MenuManagement"/>
                                <ChapterSection name="Fundamental Classes" link="/Docs/Dev/Fundamentals">
                                    <SectionPageLink name="About DVA " link="/Docs/Dev/Fundamentals/AboutDVA"/>
                                    <SectionPageLink name="About PRODA" link="/Docs/Dev/Fundamentals/AboutPRODA"/>
                                    {/* <SectionPageLink name="ADI Base" link="/Docs/Dev/Fundamentals/ADIBase"/> */}
                                    <SectionPageLink name="BookingRedux" link="/Docs/Dev/Fundamentals/Booking"/>
                                    <SectionPageLink name="Fleets" link="/Docs/Dev/Fundamentals/Fleets"/>
                                    <SectionPageLink name="Logging" link="/Docs/Dev/Fundamentals/Logging"/>
                                    {/* <SectionPageLink name="SOAP Requests" link="/Docs/Dev/Fundamentals/SOAPRequests"/> */}
                                    <SectionPageLink name="SQL Parsing Objects" link="/Docs/Dev/Fundamentals/SQLParsingObjects"/>
                                    {/* <SectionPageLink name="StreetFindingStrategy (Deprecated)" link="/Docs/Dev/Fundamentals/StreetFindingStrategy"/> */}
                                    {/* <SectionPageLink name="StreetSuffixes (Deprecated)" link="/Docs/Dev/Fundamentals/StreetSuffixes"/> */}
                                    {/* <SectionPageLink name="TimeoutUtility" link="/Docs/Dev/Fundamentals/TimeoutUtility"/> */}
                                    <SectionPageLink name="Utility Methods" link="/Docs/Dev/Fundamentals/UtilityMethods"/>
                                </ChapterSection>

                                <ChapterSection name="Selenium Functionality" link="/Docs/Dev/Selenium">
                                    <SectionPageLink name="KernelUtilities" link="/Docs/Dev/Selenium/KernelUtilities"/>
                                    <SectionPageLink name="ChromeDriverGenerator" link="/Docs/Dev/Selenium/ChromeDriverGenerator"/>
                                    <SectionPageLink name="DVABooking" link="/Docs/Dev/Selenium/DVABooking"/>
                                    {/* <SectionPageLink name="EmailServicer (Deprecated)" link="/Docs/Dev/Selenium/EmailServicer"/> */}
                                    <SectionPageLink name="PRODAManager" link="/Docs/Dev/Selenium/PRODAManager"/>
                                    <SectionPageLink name="PRODA Menu Management" link="/Docs/Dev/Selenium/PRODAMenuManagement"/>
                                </ChapterSection>

                                <ChapterSection name="GoogleRequests" link="/Docs/Dev/GoogleRequests">
                                    <SectionPageLink name="JSONRequestAddressValidation" link="/Docs/Dev/GoogleRequests/JSONRequestAddressValidation"/>
                                    <SectionPageLink name="JSONSerializedMatrixResult" link="/Docs/Dev/GoogleRequests/JSONSerializedMatrixResult"/>
                                    <SectionPageLink name="PlacesJSONRequest" link="/Docs/Dev/GoogleRequests/PlacesJSONRequest"/>
                                    <SectionPageLink name="PlacesJSONResponse" link="/Docs/Dev/GoogleRequests/PlacesJSONResponse"/>
                                </ChapterSection>

                                <ChapterSection name="ODICommands" link="/Docs/Dev/ODICommands">
                                    <SectionPageLink name="AddBookingDispatch" link="/Docs/Dev/ODICommands/AddBookingDispatch"/>
                                    <SectionPageLink name="AuthController" link="/Docs/Dev/ODICommands/AuthController"/>
                                    <ChapterSection name="CreateBookingController" link="/Docs/Dev/ODICommands/CreateBookingController">
                                        <SectionPageLink name="BookingAccounts" link="/Docs/Dev/ODICommands/CreateBookingController/BookingAccounts"/>
                                        <SectionPageLink name="BookingHeader" link="/Docs/Dev/ODICommands/CreateBookingController/BookingHeader"/>
                                        <SectionPageLink name="BookingLocations" link="/Docs/Dev/ODICommands/CreateBookingController/BookingLocations"/>
                                    </ChapterSection>
                                    {/* <SectionPageLink name="StreetsBySuburb (Deprecated)" link="/Docs/Dev/ODICommands/StreetsBySuburb"/> */}
                                    <SectionPageLink name="SuburbsByName" link="/Docs/Dev/ODICommands/SuburbsByName"/>                                    
                                </ChapterSection>

                                <ChapterSection name="Main" link="/Docs/Dev/Main"/>
                            </Chapter>



                            {/* <Chapter name="Daily DVA Download" link="/FAQ">
                                <ChapterSection name="Download File Process" link="/Docs/DownloadFileProcess"/>
                                <ChapterSection name="Templates and Tools" link="/Docs/Tools"/>
                                <ChapterSection name="Schedules and Times" link="/Docs/Schedules"/>
                                <ChapterSection name="Download Tutorial" link="/Docs/DownloadTutorial"/>
                                <ChapterSection name="Fleets and Out of Area" link="/Docs/Fleets"/>
                                <ChapterSection name="Known Issues" link="/Docs/KnownIssues"/>
                                <ChapterSection name="Frequently Asked Questions" link="/Docs/FAQ#daily-dva-download"/>
                            </Chapter>
                            <Chapter name="DVA Cabcall Upload Config" link="/FAQ">
                                <ChapterSection name="Section1" link="/Docs"/>
                            </Chapter>
                            <Chapter name="DVA Excel Automation Script" link="/FAQ">
                                <ChapterSection name="Section1" link="/Docs"/>
                            </Chapter> */}
                        </nav>
                    </div>
                </div> 
            {/* <PageContents id="page-contents">
                <CSFragment content="Downloads" link="downloads" />
                <CSFragment content="What is the Download?" link="what-is-the-download" isLevel2={true}/>
                <CSFragment content="Hi Heading" link="Hi"/> 
                <CSFragment content="Extra" link="extra-heading" isLevel2={true}/> 
            </PageContents> */}
                {/* <article className="mt-4 w-full min-w-0 max-w-6x1 px-1 md:px-6 min-height-[calc(-103px + 100vh)]">
                    <div className="-mt-4 mb-7 md:mb-10 md:mt-2">
                     TODO: Make a page pass which links current chapter > chapter section > section page */}
                    {/* </div> */}
                    {/* <div className="prose prose-documentation max-w-none"> */}
                    {children}
                {/* </div> */}
            {/* </article> */}
        </div>
    </>
    )
  }