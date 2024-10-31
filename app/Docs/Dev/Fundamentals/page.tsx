import { CustomSynxtaxHighligher } from "@/app/ui/customsyntaxhighlighter";
import InlineCodeSnip, { fira_code } from "@/app/ui/inlinecodesnip";
import PageContents, { CSFragment } from "@/app/ui/pagecontents";
import Link from "next/link";
// `}<InlineCodeSnip>{` `}</InlineCodeSnip>{` 
export default function Page () {


    const menuManageSnip_1 = `public static void MenuLoop()
{
   //...
   while (!Instance.FullQuitProgram && retries < 5)
   {
       try
       {
           if (Console.WindowHeight != 40 || Console.WindowWidth != 75)
               Console.SetWindowSize(75, 40);
           if (Console.BufferWidth != 75)
               Console.BufferWidth = 75;
           Console.Clear();
           Instance.PrintMenuOptions();
           string? inputBuffer = ReadLine();
           input = inputBuffer != null ? inputBuffer : string.Empty;
           Instance.CurrentMenu.PerformFunction(null, input);
           retries = 0;
       }
       //...
   }
   //...
}`;

   return  (
        <>
            <PageContents id="page-contents">
                <CSFragment content="TerminalHandler" link="terminal-handler"/>
                <CSFragment content="Menu" link="menu"/>
                <CSFragment content="SOAPRequest<T>" link="soap-request"/>
                <CSFragment content="A2bSQLServerQueryBuilder" link="a2b-sql"/>
                <CSFragment content="BookingRedux" link="booking-redux"/>
                <CSFragment content="BookingInfo" link="booking-info"/>
                <CSFragment content="TravelTimeEstimation" link="travel-time-estimation"/>
                <CSFragment content="TravelPoint" link="travel-point"/>
                <CSFragment content="Fleets" link="fleets"/>
                <CSFragment content="Back to top" link="/"/>
            </PageContents>
            <article className="mt-4 w-full min-w-0 max-w-6x1 px-1 md:px-6 min-height-[calc(-103px + 100vh)]">
                <div className="-mt-4 mb-7 md:mb-10 md:mt-2">
                    </div>
                    <div className="prose prose-documentation max-w-none">
                        <h1 id="" className="break-words">{`Fundamental Classes`}</h1>
                        <div className="ml-4">
                            <p >{`The ADI project is designed with core classes in mind which define the general behaviour of the application. While the project development only reached a stage where only DVA bookings are viable, the architecture has been refactored to accommodate other accounts in future.`}</p>
                            <p>{`While a significant amount of time and development would be required, the application already offers the interfaces and classes required to create bookings of any type and submit them in a stream-lined way. This page discusses the most important, generic classes used during the application runtime.`}</p>
                        
                        <h2 id="terminal-handler" className={`${fira_code.className}`}>{`TerminalHandler`}</h2>
                        <p className="ml-4">{`The Terminal Handler class runs a menu loop responsible for the menu serviced used to navigate ADI functions:`}</p>
                        <InlineCodeSnip><Link href="/Docs/Dev/MenuManagement">{`MenuManagement.cs`}</Link></InlineCodeSnip>
                        <CustomSynxtaxHighligher language="csharp" code={menuManageSnip_1}/>
                        <p>{`So long as the program isn't issuing a request to quit the program, and the current method has not been tried more than 5 times, the console will be cleared, the menu options printed, the line read from the user, and then ADI will attempt to perform the requested action based on the currently selected menu.`}</p>
                        <p>{`It should also be noted that the application has a fixed console size for operation, and sets the console size to specific dimensions after every command. This helps enforce a small working space and consistent string formatting.`}</p>
                        <p>{`The Terminal Handler is implemented as a singleton to ensure there is only one, static instance during any runtime, therefore it's instance must be called to change the menu to something else.`}</p>
                        </div>
                        <h2 id="menu" className={`${fira_code.className}`}>{`Menu`}</h2>
                        <p className="ml-4">{`The Menu class is, at its most fundamental, a list of `}<InlineCodeSnip>{`MenuFunction`}</InlineCodeSnip>{`s. Menu functionality is only defined by the provided or requested `}<InlineCodeSnip>{`MenuFunction`}</InlineCodeSnip>{` itself, whereas the Menu simply holds a list of `}<InlineCodeSnip>{`MenuFunction`}</InlineCodeSnip>{`s to be loaded and made available during `}<InlineCodeSnip>{`Terminal.MenuLoop()`}</InlineCodeSnip>{`. `}</p>
                        <p className="ml-4">{`The `}<InlineCodeSnip>{`Menu`}</InlineCodeSnip>{` class also maintains diagnostic fields which are output to the user to help useful information. For example, the `}<InlineCodeSnip>{`LastBooking`}</InlineCodeSnip>{` field prints information about the last booking submitted, whereas the `}<InlineCodeSnip>{`EffectOfLastOperation`}</InlineCodeSnip>{` field sets a value that describes the effect of the last menu operation. This effect usually clarifies whether a booking was submitted successfully, or not, and provides a small preview of the error recorded.`}</p>
                        <p className="ml-4">
                            {`More information about menu functions can be found on the `}<Link href="/Docs/Dev/MenuManagement">{`menu management page`}</Link>{`.`}
                        </p>
                        <h2 id="soap-request" className={`${fira_code.className}`}>{`SOAPRequest<T>`}</h2>
                        <p className="ml-4">{`SOAP requests are critical to the ADI booking process as they allow the application to submit bookings to the 13cabs dispatch server. The `}<InlineCodeSnip>{`SOAPRequest`}</InlineCodeSnip>{` class functions essentially as an abstract class which defines the basic parameters and expectations of a given SOAP function. The class is intended to only be used for inheritance of explicit SOAP methods, i.e. `}<InlineCodeSnip>{`Auth_Request`}</InlineCodeSnip>{`. `}</p>
                        <h2 id="a2b-sql" className={`${fira_code.className}`}>{`A2bSQLServerQueryBuilder`}</h2>
                        <p className="ml-4">{``}</p>

                        <h2 id="booking-redux" className={`${fira_code.className}`}>{`BookingRedux`}</h2>
                        <p className="ml-4">{``}</p>
                        
                        <h2 id="booking-info" className={`${fira_code.className}`}>{`BookingInfo`}</h2>
                        <p className="ml-4">{``}</p>

                        <h2 id="travel-time-estimation" className={`${fira_code.className}`}>{`TravelTimeEstimation`}</h2>
                        <p className="ml-4">{``}</p>

                        <h2 id="travel-point" className={`${fira_code.className}`}>{`TravelPoint`}</h2>
                        <p className="ml-4">{``}</p>

                        <h2 id="fleets" className={`${fira_code.className}`}>{`Fleets`}</h2>
                        <p className="ml-4">{``}</p>
                    </div>
                    <div className="h-96">{``}</div>
                    <div className="h-96">{``}</div>
            </article>

        </>
    )
}