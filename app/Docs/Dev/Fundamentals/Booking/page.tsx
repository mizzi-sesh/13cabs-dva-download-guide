import { CustomSynxtaxHighligher } from "@/app/ui/customsyntaxhighlighter";
import InlineCodeSnip from "@/app/ui/inlinecodesnip";
import PageContents, { CSFragment } from "@/app/ui/pagecontents";
import Link from "next/link";
// `}<InlineCodeSnip>{` `}</InlineCodeSnip>{` 
export default function Page () {

const findPointAsync_snip1 = `public static async Task<T?> FindPointAsync<T>(Fleets fleet,
    string suburbName,
    string streetName,
    string? placeName = null,
    /*...,*/
    Suburb? pickUpSuburb = null
) where T : TravelPoint 
{
    ODICommands.CrBook_Rq_Env_Cl.CreateBookingBookingLocationsLocationAddressSuburb? suburb;
    Suburb convertedSuburb = new();
    if (pickUpSuburb != null)
    {
        convertedSuburb = pickUpSuburb;
        suburb = new() { ID = convertedSuburb.ID, Name = convertedSuburb.Name };
    }
    else
    {
        suburb = await ODICommands.CrBook_Rq_Env_Cl.CreateBookingBookingLocationsLocationAddressSuburb.FindSuburbAsync(suburbName, fleet);
        if (suburb == null)
        {
            return null;
        }
        else
        {
            convertedSuburb.ID = suburb.ID;
            convertedSuburb.Name = suburb.Name;
        }
    }

    var foundResult = await ODICommands.CrBook_Rq_Env_Cl.
    CreateBookingBookingLocationsLocationAddressStreet.
    FindStreetAsync(fleet, suburb, streetName, fakeInput);
    Street? street = foundResult.Item1;

    if (foundResult.Item2 != null)
    {
        if (foundResult.Item2.ID != -2 && foundResult.Item2.ID != convertedSuburb.ID)
        {
            convertedSuburb = new() { ID = foundResult.Item2.ID, Name = foundResult.Item2.Name };
        }
    }

    if (street == null)
    {
        return null;
    }

    Place? place = null;

    if (placeName != null)
    {
        place = new Place() { Name = placeName, ID = -2 };
    }

    if (typeof(T) == typeof(PickUp))
    {
        return (T)(object)new PickUp("unnamed", "", fleet, convertedSuburb, street, place);
    }
    else if (typeof(T) == typeof(Destination))
    {
        return (T)(object)new Destination("", fleet, convertedSuburb, street, place);
    }
    //..
}`


   return  (
        <>
            <PageContents id="page-contents">
                <CSFragment content="BookingInfo" link="booking-info"/>
                <CSFragment content="BookingInfoCache" link="booking-info-cache" isLevel2/>
                <CSFragment content="TravelPoint" link="travel-point"/>
                <CSFragment content="BookingAddressValidation" link="booking-validation"/>
                <CSFragment content="Back to top" link="/"/>

            </PageContents>
            <article className="mt-4 w-full min-w-0 max-w-6x1 px-2 md:px-6 min-height-[calc(-103px + 100vh)]">
                <div className="-mt-4 mb-7 md:mb-10 md:mt-2">
                    </div>
                    <div className="prose prose-documentation max-w-none">
                    <div className="h-[15px]">{``}</div>
                    <h1 id="" className="break-words">{`BookingRedux`}</h1>
                    <p>{`The `}<InlineCodeSnip>{`BookingRedux`}</InlineCodeSnip>{` class defines all ADI functionality associated with generating bookings which are dispatched to booking servers. In addition to generating a payload of booking data, this class is also responsible for adapting and adjusting data for generating bookings as well. `}<InlineCodeSnip>{`BookingRedux`}</InlineCodeSnip>{` strictly contains functionality to be inherited and used by defined booking classes, such as the `}<InlineCodeSnip>{`DVABooking`}</InlineCodeSnip>{` class.`}</p>
                    <p>{`Alongside the `}<InlineCodeSnip>{`BookingRedux`}</InlineCodeSnip>{` class, there are many classes defined within the `}<InlineCodeSnip>{`BookingRedux.cs`}</InlineCodeSnip>{` file. Understanding each of the classes and their overall role in generating bookings is critical to comprehend the  ADI core architecture and design.`}</p>
                    <h2 id="booking-info" className="">{`BookingInfo`}</h2>
                    <p>{`The BookingInfo class designates the skeleton of the booking class. It defines each field associated with each booking request with a private and public variant of each field, as well as a constructor which takes each field as an argument. This does lead to the constructor definition being long, but this allows for efficient generation and transfer during execution.`}</p>
                    <p>{`The fields are as follows: `}</p>
                    <div>
                        <ul className="ml-6 mb-4 list-disc">
                            <li>{``}<InlineCodeSnip>{`CustomerName`}</InlineCodeSnip>{` — The name of the customer`}</li>
                            <li>{``}<InlineCodeSnip>{`Fleet`}</InlineCodeSnip>{` — The booking region, which specifically provides the suburbs and taxi pools available to the booking `}</li>
                            <li>{``}<InlineCodeSnip>{`CarType`}</InlineCodeSnip>{` — Defined by a custom enum that specifies whether the taxi required is a wheelchair accessible taxi, or a sedan.`}</li>
                            <li>{``}<InlineCodeSnip>{`PickUp`}</InlineCodeSnip>{` — The entire in-fleet pickup address for the booking. `}</li>
                            <li>{``}<InlineCodeSnip>{`Destination`}</InlineCodeSnip>{` — The entire in-fleet destination address for the booking. `}</li>
                            <li>{``}<InlineCodeSnip>{`AppointmentTime`}</InlineCodeSnip>{` — The scheduled time of appointment for the booking. This is not the actual pickup time but is used in calculations.`}</li>
                            <li>{``}<InlineCodeSnip>{`PreDeterminedPickupTime`}</InlineCodeSnip>{` — This `}<InlineCodeSnip>{`DateTimeOffset (optional)`}</InlineCodeSnip>{` is set if a client has an explicitly requested pickup time (parsed through regular expression elsewhere). `}</li>
                            <li>{``}<InlineCodeSnip>{`PreBookedReturn`}</InlineCodeSnip>{` — This is a`}<InlineCodeSnip>{`BookingInfoCache (optional)`}</InlineCodeSnip>{` object, which may be set if a there is an explicitly requested pickup time for the return journey of a given transport (parsed through regular expression elsewhere). `}</li>
                        </ul>
                    </div>
                    <p>{`It may be noted that BookingInfo contains two overloads. One takes each booking info field in explicitly defined parameters, and one receives another booking info object and populates the information using that. The second constructor is used to simplify the submission and generation of pre-booked returns, since not every single field needs to be explicitly mentioned to proceed.`}</p>
                    <p>{`While it may seem productive to just use the original object rather than making a shallow copy, it's important that each booking be made separately for logging and error-correction.`}</p>
                    <h2 id="booking-info-cache" className="">{`BookingInfoCache`}</h2>
                    <p>{`The `}<InlineCodeSnip>{`BookingInfoCache`}</InlineCodeSnip>{` class is an abstract record which contains a method to print the cached booking information. This exists so that bookings of any type can print all associated fields, and simply stores them as a record. In the case of `}<InlineCodeSnip>{`BookingRedux.cs`}</InlineCodeSnip>{`, it doesn't have an explicit implementation, as it's only designed to be invoked as a record of a concrete `}<InlineCodeSnip>{`BookingRedux`}</InlineCodeSnip>{` class, which it will print to the console when called. Since only one account was able to be implemented, this is only used for DVA bookings.`}</p>
                    <h2 id="travel-point" className="">{`TravelPoint`}</h2>
                    <p>{`The `}<InlineCodeSnip>{`TravelPoint`}</InlineCodeSnip>{` class is a super class which defines behaviour for any journey point to be traveled from or to during a booking. The class is designed to have interoperability with the SOAP `}<InlineCodeSnip>{`CreateBooking`}</InlineCodeSnip>{` function, where a travel point has a `}<InlineCodeSnip>{`Location`}</InlineCodeSnip>{`, `}<InlineCodeSnip>{`Address`}</InlineCodeSnip>{`, `}<InlineCodeSnip>{`Suburb`}</InlineCodeSnip>{`, `}<InlineCodeSnip>{`Designation`}</InlineCodeSnip>{`, `}<InlineCodeSnip>{`Place`}</InlineCodeSnip>{` objects. Each field is stored in the `}<InlineCodeSnip>{`TravelPoint`}</InlineCodeSnip>{` object and be accessed through public getter and setter fields. Each getter and setter ensures that the fields are set or that the value provided is appropriate, and also reports errors in the case that a travel point is created with maladapted data. `}</p>
                    <p>{`The travel point exposes these fields so they can be accessed on behalf of the pickup and destination objects. `}</p>
                    <p>{`It should be noted that the travel point class stores the street number and postcode as strings, which are also accessed during the booking generation process.`}</p>
                    <p>{`While each booking field is in some way required or used, some of them do not require as much configuration, and can even be circumvented by taking advantage of the create booking SOAP request option to force an address. When an address is forced into the dispatch server, only the fleet, suburbs and a latitude and longitude are required to submit a booking. Any information beyond this will only exist for record keeping and informational purposes to clarify the booking requirements to the driver. Before this functionality was implemented for ADI, the each field from fleet, all the way down to the street name and type had to be picked apart by the application, and meticulously found in the server through various requests. Fortunately the process is much more simple now, so now those legacy fields are present purely to submit their content to either Google Maps, or to be copied into the booking data.`}</p>
                    <p>{``}<InlineCodeSnip>{`ExtractStreetNumber()`}</InlineCodeSnip>{` is a method used to take a finished street object, and compare it with its the initial string name. This is done as one of the last steps when setting up the booking travel points, as it parses out any information in a street object except the street number. This is because DVA bookings often have the street number and street names in different fields, so ADI combines the street number and street name for most of the address detection process. This method helps resolve this by separating just the street name (and designation) from the number, before returning it. `}</p>
                    <p>{``}<InlineCodeSnip>{`GetLatLong()`}</InlineCodeSnip>{` uses the Google Maps validate address API to receive latitude and longitude co-ordinates of a given travel point. This method takes many fields of a travel point object, and fills out a JSON request to send to their server. `}</p>
                    <p>{``}<InlineCodeSnip>{`ForceAddressWithNameAndSuburb()`}</InlineCodeSnip>{` is essentially a controller that sequences the the Travel Point validation fields and returns an `}<InlineCodeSnip>{`Address`}</InlineCodeSnip>{` object which contains the latitude and longitude and other address details required for travel point definition. Lastly, the `}<InlineCodeSnip>{`FindPointAsync<T>()`}</InlineCodeSnip>{` will find either a `}<InlineCodeSnip>{`Pickup`}</InlineCodeSnip>{` or `}<InlineCodeSnip>{`Destination`}</InlineCodeSnip>{` which are both used to build the location and pickup time for the booking. It must be noted that this method is only used as a back-up for DVA bookings if the forcing an address with a name and suburb method fails.`}</p>
                    <CustomSynxtaxHighligher language="csharp" code={findPointAsync_snip1}/>
                    <p>{`The code above requires a TravelPoint in its declaration. First, it should be noted that the method takes an optional `}<InlineCodeSnip>{`Suburb`}</InlineCodeSnip>{` object. If one isn't provided, then the method will call the static method `}<InlineCodeSnip>{`FindSuburbAsync(string suburbName, Fleets fleet)`}</InlineCodeSnip>{`. This method is defined in the `}<InlineCodeSnip>{`CrBook_Rq_Env_Cl.CreateBookingBookingLocationsLocationAddressSuburb`}</InlineCodeSnip>{` class. It must be noted that the Suburb objects that are being mentioned are actually referring to one of two definitions. There is a suburb definition for the `}<InlineCodeSnip>{`CreateBooking`}</InlineCodeSnip>{` SOAP request, and a Suburb defined by the `}<InlineCodeSnip>{`GetSuburbsByName`}</InlineCodeSnip>{` result class. At times, these classes will need to be translated between one another into new objects since they have a slightly different variables. `}</p>
                    <p>{`While this method can return null, any method which calls this method will parse a null result as an error. The nullability is present so that procedures which call this method can handle the failure in different ways.`}</p>
                    <p>{`Once the suburb has been found, the method attempts to find the street with the `}<InlineCodeSnip>{`FindStreetAsync(Fleets fleet, Suburbs suburb, string streetName, ...)`}</InlineCodeSnip>{` method, which will return a tuple object that stores a suburb and a street. The tuple is returned to ensure that the suburb can be converted from the Create Booking variant to the Get Suburbs By Name variant. The methods called by this class can be found in the `}<InlineCodeSnip>{`ODICommands.CrBook_Rq_Env_Cl.cs`}</InlineCodeSnip>{` file and more information about them is explained `}<Link href="/Docs/Dev/ODICommands/CreateBookingController/BookingLocations">{`here`}</Link>{`.`}</p>
                    <p>{`In the above code snip at line 37, it can be seen that the street ID is checked to ensure that it's not equal to negative two during the object conversion process. `}<InlineCodeSnip>{`-2`}</InlineCodeSnip>{` is set for failed results rather than `}<InlineCodeSnip>{`-1`}</InlineCodeSnip>{` since `}<InlineCodeSnip>{`-1`}</InlineCodeSnip>{` in the dispatch server is specifically used in the place of leaving a field absent, so `}<InlineCodeSnip>{`-2`}</InlineCodeSnip>{` has been used so that ADI can distinguish if an ID has returned an erroneous result, whilst still allowing fields to be left empty for other operations. This is particularly important when attempting to submit a forced booking, because forced bookings street ID fields need to be set to `}<InlineCodeSnip>{`-1`}</InlineCodeSnip>{` for a successful booking submission.`}</p>
                    <p>{`After some guard returns which ensure that a street has been found before continuing, the method finally returns a newly generated pickup or destination based on the type parameter set, before typecasting it to a generic object, and then once again to type T. This is because type T has a separate configuration from the actual desired type, and so they're regarded as separate types (since T can be a Destination or a Pickup) which will be required to return a result.`}</p>
                    <h2 id="booking-validation" className="">{`BookingAddressValidation`}</h2>
                    <p>{``}<InlineCodeSnip>{`BookingAddressValidation`}</InlineCodeSnip>{` is a static class which provides methods that determine the appropriate `}<InlineCodeSnip>{`Fleets`}</InlineCodeSnip>{` object for a given booking. `}</p>
                    <p>{`The important method is `}<InlineCodeSnip>{`GetFleetFromSuburbAndPostCode(string suburbName, int postCode)`}</InlineCodeSnip>{`, which the application uses to determine the fleet and appropriate suburb details before any other step in the booking process. It should be noted, that this should only be used for the pickup address since that is the determining factor for fleet definition.`}</p>
                    <p>{`The class utilises a custom object which builds the SQL server query called `}<InlineCodeSnip>{`A2bSQLServerQueryBuilder`}</InlineCodeSnip>{`, which makes an SQL request to a fleet information server by substituting the postcode and suburb name into a larger query before eliminating as many results as possible.`}</p>
                    </div>
                    <div className="h-96">{``}</div>

            </article>

        </>
    )
}