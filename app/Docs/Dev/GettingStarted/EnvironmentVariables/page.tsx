import { CustomSynxtaxHighligher } from "@/app/ui/customsyntaxhighlighter";
import InlineCodeSnip from "@/app/ui/inlinecodesnip";
import PageContents, { CSFragment } from "@/app/ui/pagecontents";




export default function Page () { 

    return (
        <>
            <PageContents id="page-contents">
                <CSFragment content="Variables Used" link="variables-used"/>
                <CSFragment content="Will any keys need to be replaced?" link="replace-keys"/>
                <CSFragment content="How to change environment variables" link="how-to-replace"/>
                {/* <CSFragment content="Tools Used" link="tools-used"/> */}
            </PageContents>
            <article className="mt-4 w-full min-w-0 max-w-6x1 px-1 md:px-6 min-height-[calc(-103px + 100vh)]">
                <div className="-mt-4 mb-7 md:mb-10 md:mt-2">
                {/* TODO: Make a page pass which links current chapter > chapter section > section page */}
                </div>
                <div className="prose prose-documentation max-w-none">
                    <h1 id="adi" className="break-words">{`Environment Variables`}</h1>
                    <p>{`ADI utilises a custom made encryption strategy to store it's environment variables in a `}<InlineCodeSnip>{`Config.Locked`}</InlineCodeSnip>{` file, which may be found in the the root project directory. `}</p>
                    <h2 id="variables-used">{`Variables used in the project`}</h2>
                    <br/>
                    {/* <p>{`
                        
                    `}</p> */}
                    <div className="pl-10 font-bold">
                        <ul>
                            <li className="pb-2 text-md font-medium">
                                {` • `}<InlineCodeSnip>{`newKey`}</InlineCodeSnip>{``}
                                <div className="pl-8 pt-1 font-medium">
                                    {`The `}<InlineCodeSnip>{`newKey`}</InlineCodeSnip>{` is the current Google Maps API key in use with the ADI project. This key handles both Distance Matrix & Nearby Places APIs. The above two keys should generally be ignored.`}
                                </div>
                            </li>
                            <li className="pb-2 text-md font-medium">
                                {` • `}<InlineCodeSnip>{`DistanceMatrixKey`}</InlineCodeSnip>{` (deprecated)`}
                                <div className="pl-8 pt-1 font-medium">
                                    {`The distance matrix key was responsible for Google Maps Distance Matrix API calls, though this was replaced with the singular `}<InlineCodeSnip>{`newKey`}</InlineCodeSnip>{`.`}
                                </div>
                            </li>
                            <li className="pb-2 text-md font-medium">
                                {` • `}<InlineCodeSnip>{`NearbyPlacesKey`}</InlineCodeSnip>{` (deprecated)`}
                                <div className="pl-8 pt-1 font-medium">
                                    {`The nearby palces key was responsible for Google Maps Nearby Places API calls, though this was replaced with the singular `}<InlineCodeSnip>{`newKey`}</InlineCodeSnip>{`.`}
                                </div>
                            </li>
                            <li className="pb-2 text-md font-medium">
                                {` • `}<InlineCodeSnip>{`vicODIKey`}</InlineCodeSnip>{`, `}<InlineCodeSnip>{`nswODIKey`}</InlineCodeSnip>{`, `}<InlineCodeSnip>{`qldODIKey`}</InlineCodeSnip>{``}
                                <div className="pl-8 pt-1 font-medium">
                                    {`The ODI keys are responsible for generating authentication codes for SOAP requests based on their regional Booking Dispatch Server. Please procure these passwords from the IT team if required.`}
                                </div>
                            </li>

                            <li className="pb-2 text-md font-medium">
                                {` • `}<InlineCodeSnip>{`sqlUser`}</InlineCodeSnip>{`, `}<InlineCodeSnip>{`sqlPass`}</InlineCodeSnip>{``}
                                <div className="pl-8 pt-1 font-medium">
                                    {`Username & passwords to access the SQL server used for fleet detection.`}
                                </div>
                            </li>
                        </ul>
                        <div className="pb-5"></div>
                    </div>
                    <h2 id="replace-keys">{`Will any keys need to be replaced?`}</h2>
                    <p>
                        {`Generally speaking, so long as none of the accounts or keys are disabled or expire, then no key should need to be changed. The ODI keys have been setup for the `}<InlineCodeSnip>{`GenesisIVR`}</InlineCodeSnip>{` dispatch channel, so under MTI maintenance,
                        these keys may need to be replaced.`}
                    </p>
                    <p>
                        {`A few months near the end of the project development lifetime, the SQL password for `}<InlineCodeSnip>{`FleetFinder`}</InlineCodeSnip>{` expired. If this occurs, an error in the daily log file should explain that the SQL account failed to connect. It is recommended to test the SQL username and password by connecting to the database via SSMS to determine whether the password is still valid. Please speak with the IT department should the key need to be refreshed or replaced.`}
                    </p>
                    <p>
                        {`Please note: The `}<InlineCodeSnip>{`newKey`}</InlineCodeSnip>{` for the Google Maps API functions is also currently managed by the IT department, and queries regarding available APIs should be directed to this team if required.`}
                    </p>
                    <h2 id="how-to-replace">{`How to change environment variables`}</h2>
                    <p>{`The ADI project features in built encryption for environment variables, and must have Config files in the root folder configured in order to adjust Environment variable.`}</p>
                </div>
            </article>
                
        </>
    )

}