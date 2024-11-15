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

const generateBookingSnip1 = `private static async Task<(
                        DVAInfo?,
                        Address[]?)> 
                            GenerateBookingFromCache(
                                DVAInfoCache? dvaInfo,
                                Fleets fleet,
                                int? obOrderNumber = null,
                                string? chosenPhoneNumber = null,
                                bool pbrBooking = false,
                                /*...*/,
                                FoundSuburb? pickUpSuburb = null)
                                
`
const generateBookingSnip2 = `Regex puTimeFirst = new("((1[0-9]|2[0-3]|0?[1-9])\\W?([0-5][0-9])(?! ?\\d{3}) ?([AaPp][Mm])?)((pickup)\\W{0,2}|((pick|p)\\W{0,2}[u][p]?\\W?))");
Regex puTimeLast = new("((pickup)\\W{0,2}|((pick|p)\\W{0,2}[u][p]?\\W?))(time|at|\\W){0,3}((1[0-9]|2[0-3]|0?[1-9])\\W?([0-5][0-9])(?! ?\\d{3}) ?([AaPp][Mm])?)");`
   return  (
        <>
            <PageContents id="page-contents">
                <CSFragment content="DVAInfo" link="dva-info"/>
                <CSFragment content="ScrapeDVABooking(...)" link="scrape-dva"/>
                <CSFragment content="DeriveBookingFromTable(...)" link="derive-booking"/>
                <CSFragment content="GenerateBookingFromCache(...)" link="generate-booking"/>
                <CSFragment content="DesiredPickUpTime(..)" link="desired-pickup"/>
                <CSFragment content="DeterminePreBookedPickUpTime(...)" link="determine-prebook"/>
                <CSFragment content="GetBookingTable(...)" link="get-booking-table"/>
                <CSFragment content="SearchBrowserForBooking(...)" link="search-browser"/>
                <CSFragment content="ScrapeDVATable(...)" link="scrape-dva-table"/>
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
                            <li><InlineCodeSnip>{`FileNumber`}</InlineCodeSnip>{` — A string which notes the retrieved `}<Link href="/Docs/Dev/Fundamentals/AboutDVAAndPRODA#dva">{`DVA File Number`}</Link>{` to identify the veteran for DVA services.`}</li>
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
                        <p>{`This method receives an `}<InlineCodeSnip>{`IWebElement`}</InlineCodeSnip>{` table, a DVA file name, and an order number, and produces the `}<InlineCodeSnip>{`DVAInfoCache?`}</InlineCodeSnip>{` record by checking for `}<InlineCodeSnip>{`XPaths`}</InlineCodeSnip>{` relative to the table which are consistently associated with specific table cells. The info cache allows for simple transfer and printing of the DVA booking information.`}</p>


                        <h2 id="generate-booking" className="">{`GenerateBookingFromCache(...)`}</h2>
                        <br/>
                        <CustomSynxtaxHighligher language="csharp" code={generateBookingSnip1}/>
                        
                        <p>{``}<InlineCodeSnip>{`GenerateBookingFromCache()`}</InlineCodeSnip>{` is response for taking a `}<InlineCodeSnip>{`DVAInfoCache()`}</InlineCodeSnip>{` object, alongside a bookings determined fleet and pickup suburb; as well as an optional outbound order number, phone number and pre-booked return switch. The method returns a tuple which represents all the booking information, and array of addresses which will store the compounded pickup and destinations addresses respectively.`}</p>

                        <p>{`The booking will first try to retrieve information for the dispatch system booking information field. While this field isn't important to the DVA information, it is used in the booking dispatch application to help clarify some useful information to the user. `}<InlineCodeSnip>{`YieldDVABookingInformation()`}</InlineCodeSnip>{` will take a supplied appointment time, booking direction and an outbound order number if there is one and return a single string which summarises the information. `}</p>

                        <p>{`Next, the destination suburb is searched for using the fleet and destination suburb field (string) of the booking information, and then both the pickup and destination suburbs are then converted into the `}<InlineCodeSnip>{`GetSuburbByName`}</InlineCodeSnip>{` suburb variant so it may be compatible with the `}<InlineCodeSnip>{`ForceAddressWithNameAndSuburb()`}</InlineCodeSnip>{` method which is called immediately after. Both the pickup and the destination are requested in parallel across two threads to help speed up the overall booking process.`}</p>

                        <p>{`For each of the pickup and destination, if the force address method yields a result it will be converted into a final address object which has the IDs of all `}<InlineCodeSnip>{`StreetDesignation`}</InlineCodeSnip>{`s set to `}<InlineCodeSnip>{`-1`}</InlineCodeSnip>{`. `}</p>
                        
                        <p>{`An array of addresses stores the final pickup (on index 0) and destination (on index 1) objects.`}</p>

                        <p>{`If at this point, the pickup or destination addresses are still null, the generate booking method will utilise legacy functionality as a back up, which strictly serves SOAP requests for the dispatch server which send and receive messages until an address can be built. This functionality is slower than the force address method as the required field validity is more granular than an object which can ignore most of the ID's required to submit a booking without forcing the address, though sometimes the Google Maps API is not able to return a valid address, and so the mostly retired booking strategies can be used in this case.`}</p>

                        <p>{`The last part of the Generate booking method will set several fields of the pickup and destination objects. The pickup phone number (which is the phone number used by the dispatch service when the driver would like to call the customer), is automatically set to the phone number that the user selected previously, and the optional destination number is set if a destination phone number is available in the original booking.`}</p>

                        <p>{`The primary fields manipulated at this stage are fields which relate to the pickup time and date. First, the appointment date and time are stored in a  `}<InlineCodeSnip>{`DateTimeOffset`}</InlineCodeSnip>{` object, and the method then uses a method from the  `}<InlineCodeSnip>{`TravelTimeEstimation`}</InlineCodeSnip>{` static class located in the booking class, which will submit two addresses to the Google Maps Distance Matrix API, and then return an integer of the travel time in minutes.`}</p>

                        <CustomSynxtaxHighligher language="csharp" code={generateBookingSnip2}/>

                        <p>{`After this has been calculated the address checks through the bookings special instructions field, and uses a complex regular expression to determine if the booking has a specified pickup time. If a requested pickup time is found, the retrieved string will be adjusted and transformed into a `}<InlineCodeSnip>{`DateTimeOffset`}</InlineCodeSnip>{` object.`}</p>

                        <p>{`If the pre-booked return parameter has been set to true, or if the booking is traveling outbound and returns a pre-booked pick up time (which uses a different but similar regular expression to the one above), ADI will store that pre-booked return time, and transform it into a string, and then. In the case that the booking us traveling inbound, it reaches this section by featuring a valid pre-booked return request in the special instructions. Only when it is an inbound booking at this stage does the method  set the booking information field using `}<InlineCodeSnip>{`YieldDVABookingInformation()`}</InlineCodeSnip>{` like earlier, but this time, taking values appropriate for the pre-booked return. The string is similar to the previous  booking information (Appointment time / Travel direction / Outbound order number), except that it also includes the pre-booked return time at the end so agents may more easily search for the pre-booked return using the inbound booking as a reference.`}</p>

                        <p>{`It should be noted that the pre-booked return section does not change or create a new output object, rather, the methods assumes that it will need to perform these steps for both the inbound and outbound process, and modifies each booking type based on the process requirements.`}</p>

                        <p>{`Finally, the various local fields are compiled into a single `}<InlineCodeSnip>{`DVAInfo`}</InlineCodeSnip>{` object, which is returned alongside the forced address array in a tuple.`}</p>

                        <h2 id="desired-pickup" className="">{`DesiredPickUpTime(...)`}</h2>
                        <p>{``}</p>

                        <h2 id="determine-prebook" className="">{`DeterminePreBookedPickUpTime(...)`}</h2>
                        <p>{``}</p>


                        <h2 id="get-booking-table" className="">{`GetBookingTable(...)`}</h2>
                        <p>{``}</p>


                        <h2 id="search-browser" className="">{`SearchBrowserForBooking(...)`}</h2>
                        <p>{``}</p>


                        <h2 id="scrape-dva-table" className="">{`ScrapeDVATable(...)`}</h2>
                        <p>{``}</p>
                        

             

                        <h2 id="dvabooking" className="">{`DVABooking`}</h2>
                        <p>{``}</p>
                    </div>
                    <div className="h-96">{``}</div>
            </article>

        </>
    )
}