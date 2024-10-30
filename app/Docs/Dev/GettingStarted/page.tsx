import InlineCodeSnip from "@/app/ui/inlinecodesnip";
import PageContents, { CSFragment } from "@/app/ui/pagecontents";
import Link from "next/link";
// `}<InlineCodeSnip>{` `}</InlineCodeSnip>{` 
export default function Page () {

 

   return  (
        <>
            <PageContents id="page-contents">
                <CSFragment content="Requirements" link="requirements"/>
                <CSFragment content="Install Visual Studio" link="install-visual-studio"/>
                <CSFragment content="Clone Github Repository" link="clone-github"/>
                <CSFragment content="Submit Environment Variables" link="setup-build"/>
                <CSFragment content="Run the Project" link="run-project"/>
            </PageContents>
            <article className="mt-4 w-full min-w-0 max-w-6x1 px-1 md:px-6 min-height-[calc(-103px + 100vh)]">
                <div className="-mt-4 mb-7 md:mb-10 md:mt-2">
                {/* TODO: Make a page pass which links current chapter > chapter section > section page */}
                </div>
                <div className="prose prose-documentation max-w-none">
                <h1 id="" className="break-words">{`Getting Started with Development`}</h1>
                <br/>
                <h2 id="requirements">{`Requirements`}</h2>

                <p>
                    <ul className="list-disc ml-6">
                        <li className="pb-2">
                           {`It is required for the developer to have Legal access to a PRODA portal account.`} 
                        </li>
                        <li className="pb-2 ml-6">
                            {`This PRODA account also must have access to a 13cabs-owned DVA transport service account.`}
                        </li>
                        <li className="pb-2 ml-6">
                            {`Access to an email address or mobile phone which can receive their 2-Factor authentication code when logging in to an account.`}
                        </li>
                        <li className="pb-2">
                            {`A machine connected to the 13cabs business FortiClient VPN network, or is otherwise within the office network.`}
                        </li>
                        <li className="pb-2">
                            {`A repository fork of the ADI project.`}
                        </li>
                        <li className="pb-2">
                            {`Access to the list of required environment variables.`}
                        </li>
                        {`  `}
                    </ul>
                </p>
                <p>{`To get started with development, simply follow these steps:`}</p>
                <ol className="list-decimal">
                    <li className="pb-4">
                        <h2 id="install-visual-studio">{`Install Visual Studio`}</h2>
                        <p>{`First install `}<Link href="https://visualstudio.microsoft.com/downloads/" target="blank">{`Visual Studio 2022 Community Edition`}</Link>{` and select `}<InlineCodeSnip>{`.NET desktop development`}</InlineCodeSnip>{`, under Desktop & Mobile, before clicking Install.`}</p>
                    </li>
                    <li className="pb-4">
                        <h2 id="clone-github">{`Clone Github Repository`}</h2>
                        {` Upon opening Visual studio, select "Clone a repository", then go to your ADI repo and paste `}<InlineCodeSnip>{`https://github.com/[YOUR-GITHUB]/ThreadSeleniumTesting.git`}</InlineCodeSnip>{` with the path `}<InlineCodeSnip>{`/Source/Repos/ThreadSeleniumTesting`}</InlineCodeSnip>{`, before clicking Clone. Visual Studio will automatically download dependencies when the project is loaded. If it does not after a few minutes, it is recommended to prompt a build with `}<InlineCodeSnip>{`Ctrl+F5`}</InlineCodeSnip>{`, and then seeing what error it gives. Any configuration error should be quite minimal.`}
                    </li>
                    <li className="pb-4">
                        <h2 id="setup-build">{`Submit Environment Variables`}</h2>
                        {`After the project has been cloned and there are no errors when building the project, (Ensure that the application runs but do not go further), search in the `}<InlineCodeSnip>{`bin`}</InlineCodeSnip>{` directory, and then for both the `}<InlineCodeSnip>{`Debug`}</InlineCodeSnip>{` and `}<InlineCodeSnip>{`Release`}</InlineCodeSnip>{` directories, go into their respective `}<InlineCodeSnip>{`win-x64`}</InlineCodeSnip>{` directories, and paste a fully completed `}<InlineCodeSnip>{`ConfigData.txt`}</InlineCodeSnip>{` file.`}
                    </li>
                    <li className="pb-4">
                        <h2 className="" id="run-project">{`Run the Project`}</h2>
                        <p className="pl-4">{`To run the project and confirm the system is working by submitting a booking, simply follow these steps:`}</p>
                        <ol className="pl-8 list-decimal">
                            <li className="pb-1">
                                {`Run the application by pressing `}<InlineCodeSnip>{`Ctrl+F5`}</InlineCodeSnip>{` in Visual Studio. `}
                            </li>
                            <li className="pb-1">
                                {`When the program runs, click on the terminal and enter the text command `}<InlineCodeSnip>{`ch`}</InlineCodeSnip>{` (short for 'Choose'), and the Terminal mode will automatically change to `}<InlineCodeSnip>{`DVAStarterMenu`}</InlineCodeSnip>{` since there is no other account type setup for ADI.`}
                            </li>
                            <li className="pb-1">
                                {`After this, the application will prompt the developer for the access password. This password can be found in the `}<InlineCodeSnip>{`Program.cs`}</InlineCodeSnip>{` file within the `}<InlineCodeSnip>{`SetupProgramConfig()`}</InlineCodeSnip>{` function.`}
                            </li>
                            <li className="pb-1">
                                {`After the password has been entered successfully and the menu has changed, enter the command `}<InlineCodeSnip>{`s`}</InlineCodeSnip>{` (short for 'Start) to begin the Chrome Driver and Chrome browser instances. This should change the menu to the `}<InlineCodeSnip>{`DVAActivatedMenu`}</InlineCodeSnip>{``}
                            </li>
                            <li className="pb-1">
                                {`After, the developer should submit the command `}<InlineCodeSnip>{`l`}</InlineCodeSnip>{` (short for 'Login'), to initiate the login sequence. `}
                            </li>
                            <li className="pb-1">
                                {`Next, the developer will be prompted to login to their PRODA account using the console. Password character inputs are intentionally hidden from the console view during this process. A 2-factor authentication code will need to be retrieved and submitted to finalise the authentication sequence.`}
                            </li>
                            <li className="pb-1">
                                {`Once ADI has prompted a successful login, the developer will be prompted to confirm which transport organisations within their account that they would like to login to. Any additional account logged in beyond the first will prompt the developer for a new 2-factor authentication code, since ADI achieves access to multiple accounts by generating additional headless chrome instances through ChromeDriver.`}
                            </li>
                            <li className="pb-1">
                                {`Lastly, the application will finally change to the `}<InlineCodeSnip>{`DVALoggedIn`}</InlineCodeSnip>{` menu, and the developer will be ready for booking submissions. Enter `}<InlineCodeSnip>{` s`}</InlineCodeSnip>{` (short for 'Submit' in this menu), to begin submitting a booking. Lastly, find a DVA booking fax for any booking submitted to a logged-in account scheduled for today or later, as well as the Veteran File number, to begin the booking submission sequence.`}
                            </li>
                        </ol>
                        {` `}
                    </li>
                </ol>
                </div>
            </article>
        </>
    )

}