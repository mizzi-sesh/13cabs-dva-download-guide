import { CustomSynxtaxHighligher } from "@/app/ui/customsyntaxhighlighter";
import InlineCodeSnip from "@/app/ui/inlinecodesnip";
import PageContents, { CSFragment } from "@/app/ui/pagecontents";
import Link from "next/link";
// `}<InlineCodeSnip>{` `}</InlineCodeSnip>{` 
export default function Page () {

const scrapeDVASnip1 = `public static async Task<(DVAInfo?, DVAInfo?, Address[]?, Address[]?)>
    ScrapeDVABooking(int orderNumber, string fileName, /*...*/)`; 

const scrapeDVASnip2 = `
//...

if (!PRODAManager.OrderNumber().Match(orderNumber.ToString()).Success)
{ 
    return (null, null, null, null); 
}
(DVAInfo?, Address[]?) output = new();
IWebDriver? webDriver;

if (testMockDriver == null)
{
    webDriver = SearchBrowserForBooking(webDrivers, orderNumber);
}
else
{
    webDriver = testMockDriver;
}

IWebElement? table;
if (webDriver != null)
{
    table = GetBookingTable(webDriver, orderNumber); 
    if (table == null)
    { 
        return (null, null, null, null);
    }
}
else
{
    return (null, null, null, null);
}

DVAInfoCache? dvaInfo = DeriveBookingFromTable(table, 
                                               fileName,
                                               orderNumber);

//... 
`

const scrapeDVASnip3 = `
//... 

(DVAInfo?, Address[]?) pbrBookingInfoObject = new();
 DVAInfoCache? preBookedCache;
 if (dvaInfo != null)
 {
     if (StopIfCancelled(dvaInfo.OrderStatus, 
                        dvaInfo.OrderNumber.ToString())) 
                        { 
                            return (null, null, null, null); 
                        }

     var fleetFinderResult = await BookingAddressValidation.
                                GetFleetFromSuburbAndPostCode(
                                dvaInfo.PickupSuburb, 
                                int.Parse(dvaInfo.PickupPostCode.Trim()));
                                
     if (fleetFinderResult.Value.Item1 == null) 
        return (null, null, null, null);

     Fleets? fleet = fleetFinderResult.Value.Item1;
     FoundSuburb? pickUpSuburb = fleetFinderResult.Value.Item2 != null ? fleetFinderResult.Value.Item2 : null;

     string contactNumber = FindContactNumber(table, dvaInfo.SpecialInstructions, userInput);

//... 
`

const scrapeDVASnip4 = `
        //...

        if (dvaInfo.Direction == DirectionDVA.Inbound)
        {
            int? resultOfOutbound = DetermineOutboundOrderNumber(orderNumber, 
                                                                userInput);

            int outboundOrderNumber = resultOfOutbound != 
                                            null ? (int)resultOfOutbound : 0;

            IWebElement? preBookedTable = CheckIfPreBookedRequested(
                                            webDrivers,
                                            dvaInfo.SpecialInstructions,
                                            outboundOrderNumber);

            preBookedCache = DeriveBookingFromTable(
                                preBookedTable,
                                fileName,
                                outboundOrderNumber);

            output = await GenerateBookingFromCache(
                                dvaInfo,
                                fleet,
                                outboundOrderNumber,
                                contactNumber,
                                false,
                                userInput,
                                pickUpSuburb);

            if (preBookedCache != null)
                PrintDVASummary(preBookedCache);

            bool preBookedChoice = GoAheadWithPreBook(preBookedCache);

            if (preBookedChoice && preBookedCache != null)
            {
                if (StopIfCancelled(preBookedCache.OrderStatus,
                        dvaInfo.OrderNumber.ToString()))
                        {
                            return (null, null, null, null);
                        }

                var fleetPreBook = await BookingAddressValidation.
                                            GetFleetFromSuburbAndPostCode(
                                                preBookedCache.PickupSuburb, 
                                                int.Parse(preBookedCache.PickupPostCode.Trim()));

                if (fleetPreBook.Value.Item1 != null && fleetPreBook.Value.Item2 != null)
                {
                    pbrBookingInfoObject = await GenerateBookingFromCache(
                                                    preBookedCache,
                                                    fleet,
                                                    null,
                                                    contactNumber,
                                                    true,
                                                    null,
                                                    fleetPreBook.Value.Item2);
                }
            }
        }
        else
        {
            output = await GenerateBookingFromCache(
                                dvaInfo,
                                fleet,
                                orderNumber,
                                contactNumber,
                                false,
                                userInput,
                                pickUpSuburb);
        }
    }

    return (output.Item1, pbrBookingInfoObject.Item1, output.Item2, pbrBookingInfoObject.Item2);
}`

const generateBookingSnip1 = `private static async Task<(DVAInfo?, Address[]?)> GenerateBookingFromCache(DVAInfoCache? dvaInfo, Fleets fleet, int? obOrderNumber = null, string? chosenPhoneNumber = null, bool pbrBooking = false, AutomaticDispatchInterface.IUserInput? fakeInput = null, FoundSuburb? pickUpSuburb = null)
`


   return  (
        <>
            <PageContents id="page-contents">
                <CSFragment content="DVAInfo" link="dva-info"/>
                <CSFragment content="ScrapeDVABooking(...)" link="scrape-dva"/>
                <CSFragment content="DeriveBookingFromTable(...)" link="derive-booking"/>
                <CSFragment content="GenerateBookingFromCache(...)" link="generate-booking"/>
                <CSFragment content="DeterminePreBookedPickUpTime(...)" link="determine-prebook"/>
                <CSFragment content="GetBookingTable(...)" link="get-booking-table"/>
                <CSFragment content="SearchBrowserForBooking(...)" link="search-browser"/>
                <CSFragment content="ScrapeDVATable(...)" link="scrape-dva-table"/>
                <CSFragment content="DesiredPickUpTime(..)" link="desired-pickup"/>
                <CSFragment content="YieldDVABookingInformation(...)" link="yield-booking-info"/>
                <CSFragment content="DVABooking" link="dvabooking"/>
                <CSFragment content="Back to top" link="/"/>
            </PageContents>
            <article className="mt-4 w-full min-w-0 max-w-6x1 px-2 md:px-6 min-height-[calc(-103px + 100vh)]">
                <div className="-mt-4 mb-7 md:mb-10 md:mt-2">
                    </div>
                    <div className="prose prose-documentation max-w-none">
                        <div className="h-[15px]">{``}</div>
                        <h1 id="" className="break-words">{`DVABooking`}</h1>
                        
                        <p>{`The `}<InlineCodeSnip>{`DVABooking`}</InlineCodeSnip>{` class is defines the procedure for submitting a DVA booking. `}<InlineCodeSnip>{`DVABooking`}</InlineCodeSnip>{` inherits from the `}<InlineCodeSnip><Link href="/Docs/Dev/Fundamentals/Booking">{`BookingRedux`}</Link></InlineCodeSnip>{` class, and builds on top of the existing booking class structure to include fields specific to the DVA service. In addition to implementing `}<InlineCodeSnip>{`BooingRedux`}</InlineCodeSnip>{`, `}<InlineCodeSnip>{`DVABooking`}</InlineCodeSnip>{` features functionality which interprets the XML read into the application via the `}<InlineCodeSnip><Link href="/Docs/Dev/Selenium">{`Selenium ChromeDriver`}</Link></InlineCodeSnip>{` into a dispatchable `}<InlineCodeSnip>{`DVABooking`}</InlineCodeSnip>{` object.`}</p>
                        <p className="mb-2">{`Functionally speaking, the actual implementation of these features is primarily facilitated through the `}<InlineCodeSnip>{`DVAInfo`}</InlineCodeSnip>{` class, with the `}<InlineCodeSnip>{`DVABooking`}</InlineCodeSnip>{` class serving as an interchangeable wrapper so that it may be parsed alongside bookings of different accounts.`}</p>
                    
                        <h2 id="dva-info" className="">{`DVAInfo`}</h2>
                        <p>{``}<InlineCodeSnip>{`DVAInfo`}</InlineCodeSnip>{` inherits from the `}<InlineCodeSnip>{`BookingInfo`}</InlineCodeSnip>{` class, and contains all DVA-booking specific fields for order interpretation. Here are the defined enums and fields  used in this class:`}</p>
                        <ul className="ml-6 mb-4 list-disc space-y-2">
                            <li ><InlineCodeSnip>{`DirectionDVA`}</InlineCodeSnip>{` — An enumerator object which notes whether the retrieved DVA booking is traveling inbound or outbound.`}</li>
                            <li><InlineCodeSnip>{`OrderStatusDVA`}</InlineCodeSnip>{` — An enumerator object which notes the retrieved status of the order. May be set to either `}<InlineCodeSnip>{`Dispatched`}</InlineCodeSnip>{`, `}<InlineCodeSnip>{`Cancelled`}</InlineCodeSnip>{` or `}<InlineCodeSnip>{`Completed`}</InlineCodeSnip>{`.`}</li>
                            <li><InlineCodeSnip>{`FileNumber`}</InlineCodeSnip>{` — A string which notes the retrieved `}<Link href="/Docs/Dev/Fundamentals/AboutDVAAndPRODA#dva">{`DVA File Number`}</Link>{`to identify the veteran for DVA services.`}</li>
                            <li><InlineCodeSnip>{`OrderNumber`}</InlineCodeSnip>{` — An 8-digit integer that defines the unique identifier of the booking.`}</li>
                            <li><InlineCodeSnip>{`SpecialInstructions`}</InlineCodeSnip>{` — A string to define instructions for the booking agent and driver such as: pickup time, phone numbers, call on approach or pre-booked returns.`}</li>
                        </ul>
                        <p>{`The `}<InlineCodeSnip>{`DVAInfo`}</InlineCodeSnip>{` constructor takes the above fields, as well as the fields it inherits from `}<InlineCodeSnip>{`BookingInfo`}</InlineCodeSnip>{``}</p>

                        <h2 id="scrape-dva" className="">{`ScrapeDVABooking(...)`}</h2>
                        <CustomSynxtaxHighligher language="csharp" code={scrapeDVASnip1}/>

                        <p>{`The `}<InlineCodeSnip>{`ScrapeDVABooking()`}</InlineCodeSnip>{` function is used as the overall controller to actually retrieve a DVA booking from the DVA portal and prepare it for dispatch using Selenium ChromeDriver. The method only requires an order number and file name, and so long as the user has been logged in, and it will find and prepare the desired booking for the user. The object returns a tuple with two `}<InlineCodeSnip>{`DVAInfo?`}</InlineCodeSnip>{` objects and two `}<InlineCodeSnip>{`Address[]?`}</InlineCodeSnip>{` objects. The first `}<InlineCodeSnip>{`DVAInfo?`}</InlineCodeSnip>{` and `}<InlineCodeSnip>{`Address[]?`}</InlineCodeSnip>{` are for the initial booking requested for the user, and the second pair are reserved for the pre-booked return if one is detected and accepted by the agent.`}</p>

                        <CustomSynxtaxHighligher language="csharp" code={scrapeDVASnip2}/>
                        <p>{`First, `}<InlineCodeSnip>{`ScrapeDVABooking()`}</InlineCodeSnip>{` validates the requested order number against a regular expression to ensure the format is correct. If not, the method exits early. After, the `}<InlineCodeSnip>{`(DVAInfo?, Address[]?)`}</InlineCodeSnip>{` which will represent the initial booking is initialised. Then a universal list of `}<InlineCodeSnip>{`IWebDriver`}</InlineCodeSnip>{` objects is submitted to `}<InlineCodeSnip>{`SearchBrowserForBooking(...)`}</InlineCodeSnip>{` which will check through each browser in the list until one found which houses the booking the agent is looking for.`}</p>

                        <p>{`The browser will then be made to return a `}<InlineCodeSnip>{`IWebElement?`}</InlineCodeSnip>{`, specifically the `}<InlineCodeSnip>{`<table>`}</InlineCodeSnip>{` which hosts the booking information. Once this is returned with its information, the state of the chrome instance will not matter since the table stores a copy of the information. if it cannot find a table, this triggers an early return. Then the table will be derived into a `}<InlineCodeSnip>{`DVAInfoCache?`}</InlineCodeSnip>{` object, which is a record that stores all the fields associated with DVA bookings.`}</p>

                        <CustomSynxtaxHighligher language="csharp" code={scrapeDVASnip3}/>

                        <p>{`A second `}<InlineCodeSnip>{`(DVAInfo?, Address[]?)`}</InlineCodeSnip>{` is initialised to prepare for a potential pre-booked return outbound booking. Another `}<InlineCodeSnip>{`DVAInfoCache?`}</InlineCodeSnip>{` object is also created for this potential return.`}</p>

                        <p>{`ADI will check that the order has not already been cancelled before it allows the user to submit it. Bookings can be canceled mere moments after they're received by the agents, and often there may also be delays in receiving notifications of the booking being cancelled. The risk of dispatching already cancelled bookings is eliminated this way.`}</p>

                        <p>{`The first part of constructing the booking for the `}<InlineCodeSnip>{`CreateBooking`}</InlineCodeSnip>{` SOAP request is to determine the appropriate taxi fleet, since this will effect the suburbs available for transport. The name of the suburb and postcode are used in conjunction in a an SQL request discussed more `}<Link href="/Docs/Dev/Fundamentals/SQLParsingObjects">{`here`}</Link>{`. If a fleet object is found, the method will also retrieve the found suburb. Next the method will attempt to find a phone number by checking the contact numbers fields as well as scanning the special instructions, before presenting the agent with a choice to select one. `}</p>

                        <CustomSynxtaxHighligher language="csharp" code={scrapeDVASnip4}/>

                        <p>{`After the contact number has been found, the application will then confirm whether the journey is traveling inbound or outbound. If it is an inbound booking, first it will request the user to provide an outbound order number (since they are typically paired.) Then, if an outbound number has been provided, and a pre-booked return is found (by checking a regular expression), the booking will essentially try to derive a booking table for that pre-booked booking, before returning to the inbound booking. Using `}<InlineCodeSnip>{`GenerateBookingFromCache()`}</InlineCodeSnip>{`, the method sets the output tuple which was defined at the beginning. `}</p>
                        
                        <p>{`The method confirms that the user would like to go ahead with the pre-booked return after printing a summary. Afterwards, a few more steps are repeated for the pre-booked return booking if it is not cancelled and the user confirmed that they would like to dispatch it. Finally, all the retrieved objects are returned in a 4-part tuple.`}</p>


                        <h2 id="derive-booking" className="">{`DeriveBookingFromTable(...)`}</h2>
                        <p>{`This method receives an `}<InlineCodeSnip>{`IWebElement`}</InlineCodeSnip>{` table, a DVA file name, and an order number, and produces the `}<InlineCodeSnip>{`DVAInfoCache?`}</InlineCodeSnip>{` record by checking for `}<InlineCodeSnip>{`XPaths`}</InlineCodeSnip>{` relative to the table which are consistently associated with specific table cells. The info cache allows for simple transfer and printing of the DVA booking information. `}</p>


                        <h2 id="generate-booking" className="">{`GenerateBookingFromCache(...)`}</h2>
                        <CustomSynxtaxHighligher language="csharp" code={generateBookingSnip1}/>
                        
                        <p>{``}</p>


                        <h2 id="determine-prebook" className="">{`DeterminePreBookedPickUpTime(...)`}</h2>
                        <p>{``}</p>


                        <h2 id="get-booking-table" className="">{`GetBookingTable(...)`}</h2>
                        <p>{``}</p>


                        <h2 id="search-browser" className="">{`SearchBrowserForBooking(...)`}</h2>
                        <p>{``}</p>


                        <h2 id="scrape-dva-table" className="">{`ScrapeDVATable(...)`}</h2>
                        <p>{``}</p>
                        

                        <h2 id="desired-pickup" className="">{`DesiredPickUpTime(...)`}</h2>
                        <p>{``}</p>


                        <h2 id="yield-booking-info" className="">{`YieldDVABookingInformation(...)`}</h2>
                        <p>{``}</p>


                        <h2 id="dvabooking" className="">{`DVABooking`}</h2>
                        <p>{``}</p>
                    </div>
                    <div className="h-96">{``}</div>
            </article>

        </>
    )
}