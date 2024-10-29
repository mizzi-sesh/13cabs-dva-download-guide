import { CustomSynxtaxHighligher } from "@/app/ui/customsyntaxhighlighter";
import InlineCodeSnip from "@/app/ui/inlinecodesnip";
import PageContents, { CSFragment } from "@/app/ui/pagecontents";
import SyntaxHighlighter from "react-syntax-highlighter";

export default function Page () { 

    const envKeyCodeTemplate = `"DistanceMatrixKey"; "ENTER KEY",
"NearbyPlacesKey"; "ENTER KEY",
"vicODIKey"; "ENTER KEY",
"nswODIKey"; "ENTER KEY",
"qldODIKey"; "ENTER KEY",
"newKey"; "ENTER KEY",
"SqlUser"; "ENTER KEY",
"SqlPass"; "ENTER KEY",`;

    return (
        <>
            <PageContents id="page-contents">
                <CSFragment content="Variables Used" link="variables-used"/>
                <CSFragment content="Will any keys need to be replaced?" link="replace-keys"/>
                <CSFragment content="How to change environment variables" link="how-to-replace"/>
                    <CSFragment content="Generate a Config File" link="generate-config-file" isLevel2={true}/>
                    <CSFragment content="Delete Previous Config" link="delete-old-config" isLevel2={true}/>
                    <CSFragment content="Run application" link="start-application" isLevel2={true}/>
                <CSFragment content="Back to top" link=""/>

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
                    <div className="pl-10 font-bold">
                        <ul>
                            <li className="pb-2 text-md font-medium">
                                {` • `}<InlineCodeSnip>{`newKey`}</InlineCodeSnip>{``}
                                <div className="pl-8 pt-1 font-medium">
                                    {`The `}<InlineCodeSnip>{`newKey`}</InlineCodeSnip>{` is the current Google Maps API key in use with the ADI project. This key handles both Distance Matrix & Nearby Places APIs. The above two keys should generally be ignored.`}
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
                            <li className="pb-2 text-md font-medium">
                                {` • `}<InlineCodeSnip>{`DistanceMatrixKey`}</InlineCodeSnip>{` (deprecated), `} <InlineCodeSnip>{`NearbyPlacesKey`}</InlineCodeSnip>{` (deprecated)`}
                                <div className="pl-8 pt-1 font-medium">
                                    {`The distance matrix and nearby places keys were responsible for Google Maps API calls, though this was replaced with the singular `}<InlineCodeSnip>{`newKey`}</InlineCodeSnip>{`.`}
                                </div>
                            </li>
                        </ul>
                        <div className="pb-5"></div>
                    </div>
                    <h2 id="replace-keys">{`Will any keys need to be replaced?`}</h2>
                    <p>
                        {`Generally speaking, so long as none of the accounts or keys are disabled or expire, then no key should need to be changed. The ODI keys have been setup for the `}<InlineCodeSnip>{`GenesisIVR`}</InlineCodeSnip>{` dispatch channel, so under MTI maintenance, these keys may need to be replaced.`}
                    </p>
                    <p>
                        {`A few months near the end of the project development lifetime, the SQL password for `}<InlineCodeSnip>{`FleetFinder`}</InlineCodeSnip>{` expired. If this occurs, an error in the daily log file should explain that the SQL account failed to connect. It is recommended to test the SQL username and password by connecting to the database via SSMS to determine whether the password is still valid. Please speak with the IT department should the key need to be refreshed or replaced.`}
                    </p>
                    <p>
                        {`Please note: The `}<InlineCodeSnip>{`newKey`}</InlineCodeSnip>{` for the Google Maps API functions is also currently managed by the IT department, and queries regarding available APIs should be directed to this team if required.`}
                    </p>
                    <h2 id="how-to-replace">{`How to change environment variables`}</h2>
                    <p>{`The ADI project features in built encryption for environment variables, and must have Config files in the root folder configured in order to adjust Environment variable.`}</p>
                    <p>{`Adjusting these variables will require you to complete a few steps, and should only be done in production. When changes are complete, the project will be published with a `}<InlineCodeSnip>{`Config.Locked`}</InlineCodeSnip>{` file and the user will
                    need to supply a password the first time the application is activated. This password has a default set in the repository, though I recommend changing this for future deployments.`}</p>
                    <br/>
                    <ol className="list-decimal ml-4">
                        <li>
                            <h3 id="generate-config-file" className="text-lg">{`Generate a Config File`}</h3>
                            <div className="pl-6">
                                <p>{`Once the desired keys are determined, save a text file named `}<InlineCodeSnip>{`ConfigData.txt`}</InlineCodeSnip>{`. To edit a single key, the config data file must feature all keys listed above.`}</p>
                                <CustomSynxtaxHighligher language="javascript" code={envKeyCodeTemplate}></CustomSynxtaxHighligher>
                                <p>{`Once the `}<InlineCodeSnip>{`ConfigData.txt`}</InlineCodeSnip>{` is prepared, paste in each key into it's designated section before saving the file into your project root directory.`}</p>
                            </div>
                        </li>
                        <li>
                            <h3 id="delete-old-config" className="text-lg">{`Delete Previous Config`}</h3>
                            <div className="pl-6">
                                <p>{`Once the updated file has been saved into the root application folder, you must delete any `} <InlineCodeSnip>{`Config.Locked`}</InlineCodeSnip>{` or `}<InlineCodeSnip>{`Config.Unlocked`}</InlineCodeSnip>{` files before proceeding. Also ensure that the application password used to unlock the encrypted files for the program is ready for the next step.`}</p>
                            </div>
                        </li>
                        <li>
                            <h3 id="start-application" className="text-lg">{`Start the Application`}</h3>
                            <div className="pl-6">
                                <p>{`Finally, run the application, and enter the application password when prompted by the system.`}</p>
                                <p>{`Test that all functionality is working by logging in to DVA with the application, and submit a booking before confirming that the booking dispatched successfully to the server.`}</p>
                                <p>{`After the first run, a `}<InlineCodeSnip>{`password.txt`}</InlineCodeSnip>{` file should load in the root directory, so the application will not request the password in future.`}</p>                              
                            </div>
                        </li>
                    </ol>
                    <div className="h-96">{``}</div>
                    <div className="h-96">{``}</div>

                </div>
            </article>
                
        </>
    )

}