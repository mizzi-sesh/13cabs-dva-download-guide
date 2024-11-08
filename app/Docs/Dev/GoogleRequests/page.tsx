// 'use client';
import InlineCodeSnip from "@/app/ui/inlinecodesnip";
import PageContents, { CSFragment } from "@/app/ui/pagecontents";
import Link from "next/link";
import { useEffect } from "react";
// `}<InlineCodeSnip>{` `}</InlineCodeSnip>{` 
 export default function Page () {
   return  (
        <>
            <PageContents id="page-contents">
                <CSFragment content="JSONRequestAddressValidation" link="validation"/>
                <CSFragment content="JSONSerializedMatrixResult" link="matrix"/>
                <CSFragment content="PlacesJSON" link="places"/>
                <CSFragment content="Back to top" link="/"/>
            </PageContents>
            <article className="mt-4 w-full min-w-0 max-w-6x1 px-1 md:px-6 min-height-[calc(-103px + 100vh)]">
                <div className="-mt-4 mb-7 md:mb-10 md:mt-2">
                    </div>
                    <div className="prose prose-documentation max-w-none">
                        <h1 id="" className="break-words">{`Google Requests`}</h1>
                        <p>{`Google Requests are made using various functions of the `}<Link href="https://developers.google.com/maps" target="_blank">{`Google Maps Platform APIs`}</Link>{`. More documentation regarding the use and implementation of each can be found on their linked website. The implementation of the Google Maps APIs is standardised, and uses a similar form of serialisation to the SOAP messages in this project, though uses JSON format instead of XML.`}</p>
                        <p>{`In addition to a different message format, Google Requests also require an API key. The key used for the ADI project is stored in the environment variable file, and is used to service all API requests made for Google services.`}</p>
                        <p>{`Each of the files in the Google Request directory only defines the object definition for requests and results of Google Maps API services. These classes have no functionality beyond representing the shape of the Google Requests and responses.`}</p>
                        <br/>
                        <h2 id="validation">{`JSONRequestAddressValidation`}</h2>
                        <p>{`The address validation request is used to validate any given address in Google, often resulting in corrections and specifications to the address names provided in booking requests. In addition to this, the address validation API also returns a latitude & longitude object which is crucial in plotting the pickup and drop off points for taxi driver GPS systems.`}</p>
                        <h2 id="matrix">{`JSONSerializedMatrixResult`}</h2>
                        <p>{`The distance matrix request is vital for estimating a pickup time for a booking by taking the estimated travel time between two points and then adding 30 minutes by default to provide enough time to ensure the veteran arrives before their appointment is due. If there are special instructions which specify that a pickup time for the veteran, then this field is not used.`}</p>
                        <h2 id="places">{`PlacesJSON`}</h2>
                        <p>{`The Nearby Places API was used initially as a back up to find surrounding suburbs if the SOAP requests could not find the street within a defined suburb on the ODI server. However, the architecture was changed to instead use a latitude and longitude from Google Maps, and force the address with the points plotted based on the returned coordinates. the Nearby Places API is only used as a backup if the suburb cannot be found on Google Maps Validation API.`}</p>
                    </div>
                    <div className="h-96">{``}</div>
            </article>

        </>
    )
}