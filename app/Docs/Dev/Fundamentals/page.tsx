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

    const sqlMessageSnip_1 = `"SELECT TOP 100 percent [SuburbId]" +
     ",[Name]" +
     ",[AddressDbID]" +
     ",[StateID]" +
     ",[PlaceID]" +
     ",[Longitude]" +
     ",[Latitude]" +
     ",[Postcode]" +
     ",[LocalSuburb].[DispatchFleetid]" +
    ",[LocalSuburb].[LocalSuburbID] " +
    ",[Suburb].[IsActive]" +
    " FROM [Australia].[dbo].[Suburb] RIGHT JOIN" +
    "[Australia].[dbo].[LocalSuburb] ON Suburb.SuburbID" +
    " = LocalSuburb.MasterSuburbID" +
    " WHERE (Postcode=" + postCode.ToString() +
    " OR Name LIKE '%" + suburbName + "%')" +
    " AND NOT (Postcode IS NULL OR Postcode = '')" +
    " AND [Suburb].[IsActive]=1" +
    " AND NOT [LocalSuburb].[DispatchFleetId]=0" +
    " AND (AddressDbID=1 OR AddressDbID=2 OR AddressDbID=3" +
    "   OR AddressDbID=4 OR AddressDbID=5 OR AddressDbID=7" +
    "   OR AddressDbID=8 OR AddressDbID=1007 OR AddressDbID=1009" +
    "   OR AddressDbID=1010 OR AddressDbID=1011 + OR AddressDbID=1012" +
    "   OR AddressDbID=1014 OR AddressDbID=9 OR AddressDbID=10" +
    "   OR AddressDbId=12 OR AddressDbID=13 OR AddressDbId=1004)" +     
    " ORDER BY Name";`;

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
                        <p className="ml-4">{`SOAP requests are critical to the ADI booking process as they allow the application to submit bookings to the 13cabs dispatch server. The `}<InlineCodeSnip>{`SOAPRequest`}</InlineCodeSnip>{` class functions essentially as an abstract class which defines the basic parameters and expectations of a given SOAP function. The class is intended to only be used for inheritance of explicit SOAP methods, i.e. `}<InlineCodeSnip>{`Auth_Request`}</InlineCodeSnip>{`.`}</p>
                        <p className="ml-4">{`SOAP requests have three functional methods: `}<InlineCodeSnip>{`RequestParams()`}</InlineCodeSnip>{`, `}<InlineCodeSnip>{`SendRequest()`}</InlineCodeSnip>{` and `}<InlineCodeSnip>{`ParseResponse<U>()`}</InlineCodeSnip>{`. `}<InlineCodeSnip>{`SendRequest()`}</InlineCodeSnip>{` is the same across SOAP classes, in that it merely constructs the `}<InlineCodeSnip>{`HttpRequestMessage`}</InlineCodeSnip>{` based on whatever action and `}<InlineCodeSnip>{`message_bytes`}</InlineCodeSnip>{` have been defined for the given request.`}</p>
                        <p className="ml-4">{`The generic argument `}<InlineCodeSnip>{`T`}</InlineCodeSnip>{` for `}<InlineCodeSnip>{`SOAPRequest`}</InlineCodeSnip>{` defines the type of SOAP request to be sent. Each SOAP function must have: `}</p>
                        <ul className="list-disc ml-10 mb-2">
                            <li className="pb-1">{`A request type`}</li>
                            <li className="pb-1">{`A response type`}</li>
                            <li className="pb-1">{`A message controller`}</li>
                        </ul>
                        <p className="ml-4">{`In the case of the ADI project, the SOAP actions available are specifically defined by methods found on: `}</p>
                        <ul className="list-disc ml-10 mb-2">
                            <li className="pb-1">
                                <Link href="https://azsvr09.13cabs.com.au/dispatch/bookingwebservice.asmx" target="_blank"><InlineCodeSnip>{`Bookingwebservice.asmx`}</InlineCodeSnip></Link>
                            </li>
                            <li className="pb-1">
                                <Link href="https://azsvr09.13cabs.com.au/dispatch/authenticationwebservice.asmx" target="_blank"><InlineCodeSnip>{`Authenticationwebservice.asmx`}</InlineCodeSnip></Link>
                            </li>
                            <li className="pb-1">
                                <Link href="https://azsvr09.13cabs.com.au/dispatch/AddressWebService.asmx" target="_blank"><InlineCodeSnip>{`AddressWebService.asmx`}</InlineCodeSnip></Link>
                            </li>
                        </ul>
                        <p className="ml-4">{`Once a SOAP request has been defined, and declared with an appropriate action, it will have it's defining object i.e. `}<InlineCodeSnip>{`Auth_Request`}</InlineCodeSnip>{` serialized into and XML object by calling `}<InlineCodeSnip>{`RequestParams()`}</InlineCodeSnip>{`. The Request parameters method is also virtual, so that each SOAP action type can prepare it's parameters within the serializable object before being converted into an XML message. Once prepared, simply call `}<InlineCodeSnip>{`SendRequest()`}</InlineCodeSnip>{` until a response is received.`}</p>
                        <p className="ml-4">
                            {`More information about menu functions can be found on the `}<Link href="/Docs/Dev/ODICommands">{`ODI commands page`}</Link>{`.`}
                        </p>
                        <h2 id="a2b-sql" className={`${fira_code.className}`}>{`A2bSQLServerQueryBuilder`}</h2>
                        <p className="ml-4">{`The `}<InlineCodeSnip>{`A2bSQLServerQueryBuilder`}</InlineCodeSnip>{` class is used to construct an SQL query which can be sent to the Location SQL server in order to find the appropriate taxi fleet based on a combination of pickup postcode and suburb name. It defines the connection string to connect with the server, and then prompts the server with a SELECT sql request with the `}<InlineCodeSnip>{``}</InlineCodeSnip>{` which returns a pre-defined message that specifies a postcode and suburb name which is provided in the method parameters.`}</p>
                        <p className="ml-4">{`The SQL message submitted for the request:`}</p>
                        <InlineCodeSnip><Link href="/Docs/Dev/Fundamentals/SQLParsingObjects">{`BookingRedux.cs`}</Link></InlineCodeSnip>
                        <CustomSynxtaxHighligher language="mysql" code={sqlMessageSnip_1}/>
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