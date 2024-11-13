import { radio_canada } from "@/app/layout";
import InlineCodeSnip, { fira_code } from "@/app/ui/inlinecodesnip";
import PageContents, { CSFragment } from "@/app/ui/pagecontents";
import Link from "next/link";
import Image from "next/image"
import adiScreenCap from '../../../../public/AutomaticDispatchInterfaceProject_DLpzHPhEOD.png'
import { CustomSynxtaxHighligher } from "@/app/ui/customsyntaxhighlighter";
// `}<InlineCodeSnip>{` `}</InlineCodeSnip>{` 

// const UnoptimisedLogo = (props: any) => {
//     return <Image {...props} unoptimized className="" alt="PFP"/>
// }

function GradientBorder({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return(
        <div className="rounded-3xl transition transition-all duration-300 scale-75 h-full w-full p-1 bg-gradient-to-r from-red-600 from-1% via-orange-900 via-50% to-yellow-500 to-99%">
        <div className="flex h-full w-full items-center justify-center dark:bg-black bg-white p-10 rounded-[calc(1.5rem-1px)]  back">
            {children}
        </div>
    </div>
    )
}

const menuManageSnip_2 = `public void PerformFunction(object? param, string input)
{
    foreach (MenuFunction f in _functions)
    {
        if (f.ShortCuts.Contains(input.ToLower().Trim()))
        {
            f.Invoke(param, input.ToLower().Trim());
            break;
        }
    }
}`

export default function Page () {

   return  (
        <>
            <PageContents id="page-contents">
                <CSFragment content="Menu" link="menu"/>
                <CSFragment content="Menu Functions" link="menu-functions"/>
                <CSFragment content="ChooseTerminalMode" link="choose-terminal-mode" isLevel2={true}/>
                <CSFragment content="Config" link="config" isLevel2={true}/>
                <CSFragment content="Quit" link="quit" isLevel2={true}/>
                <CSFragment content="StartDVA_Service" link="startdva" isLevel2={true}/>
                <CSFragment content="LoginDVA_Service" link="logindva" isLevel2={true}/>
                <CSFragment content="SubmitDVA_Service" link="submitdva" isLevel2={true}/>
                <CSFragment content="StopDVA_Service" link="stopdva" isLevel2={true}/>
                <CSFragment content="ViewDVABookingHistory" link="viewdva" isLevel2={true}/>
                <CSFragment content="Back to top" link="/"/>

            </PageContents>
            <article className="mt-4 w-full min-w-0 max-w-6x1 px-2 md:px-6 min-height-[calc(-103px + 100vh)]">
                <div className="-mt-4 mb-7 md:mb-10 md:mt-2">
                    </div>
                    <div className="prose prose-documentation max-w-none">
                    <div className="h-[15px]">{``}</div>
                    <h1 id="" className="break-words">{`MenuManagement`}</h1>
                    <br/>
                    <p>{`ADI menu management uses a loop which reads a `}<InlineCodeSnip>{`Menu`}</InlineCodeSnip>{` object to print the `}<InlineCodeSnip>{`MenuFunction`}</InlineCodeSnip>{` objects available within the current menu. In addition to the list of `}<InlineCodeSnip>{`MenuFunction`}</InlineCodeSnip>{` objects, each menu has a name, as well as some diagnostic information that helps the agent to keep track of their work and ensure that all bookings are submitted successfully.`}</p>
                    <p>{`The user can select a function by entering a command alias into the terminal. These command alias' are shown in menu at all times, so the user can easily see and enter any given command quickly. `}</p>
                    <GradientBorder>
                        <Image className="md:scale-[100%] scale-125" src={adiScreenCap} alt="Image of ADI Menu"/>
                    </GradientBorder>
                    <p>{`In this image, the various methods which are available within the `}<InlineCodeSnip>{`DVALoggedIn()`}</InlineCodeSnip>{` menu can be seen. The currently active menu can be seen on the top left and the mode is visible in the top right. After this, each `}<InlineCodeSnip>{`MenuFunction`}</InlineCodeSnip>{` available to the currently active menu can be seen. In this example, the following `}<InlineCodeSnip>{`MenuFunction`}</InlineCodeSnip>{`s are available: `}<InlineCodeSnip>{`SubmitDVA_Booking`}</InlineCodeSnip>{`, `}<InlineCodeSnip>{`ViewDVABookingHistory`}</InlineCodeSnip>{`, `}<InlineCodeSnip>{`StopDVA_Service`}</InlineCodeSnip>{`, `}<InlineCodeSnip>{`Config`}</InlineCodeSnip>{` and `}<InlineCodeSnip>{`Quit`}</InlineCodeSnip>{`.`}</p>
                    <p>{`Each menu function has a list of valid shortcuts shown next to it, which can be entered into the terminal input by the user to access the method's function.`}</p>
                    <h2 id="menu" className="mb-2">{`Menu`}</h2>
                    <p>{`Here is a breakdown of each available menu, if it were to be understood only by the `}<InlineCodeSnip>{`MenuFunction`}</InlineCodeSnip>{` objects available to it: `}</p>
                    <div className="ml-4 mb-4">
                        <p id="" className={`text-md  dark:border-gray-700 border-gray-400 inline ${fira_code.className}`}>{`StartingMenu()`}<span className={`inline ${radio_canada.className}`}>{` — `}<InlineCodeSnip>{`ChooseTerminalMode`}</InlineCodeSnip>{`, `}<InlineCodeSnip>{`Config`}</InlineCodeSnip>{`, `}<InlineCodeSnip>{`Quit`}</InlineCodeSnip>{``}</span></p>
                        <br/>
                        <p id="" className={`text-md dark:border-gray-700 border-gray-400 inline ${fira_code.className}`}>{`DVAStarterMenu()`}<span className={`inline ${radio_canada.className}`}>{` — `}<InlineCodeSnip>{`StartDVA_Service`}</InlineCodeSnip>{`,  `}<InlineCodeSnip>{`ChooseTerminalMode`}</InlineCodeSnip>{`, `}<InlineCodeSnip>{`Config`}</InlineCodeSnip>{`, `}<InlineCodeSnip>{`Quit`}</InlineCodeSnip>{` `}</span></p>
                        <br/>
                        <p id="" className={`text-md dark:border-gray-700 border-gray-400 inline ${fira_code.className}`}>{`DVAActivatedMenu()`}<span className={`inline ${radio_canada.className}`}>{` — `}<InlineCodeSnip>{`LoginDVA_Service`}</InlineCodeSnip>{`, `}<InlineCodeSnip>{`StopDVA_Service`}</InlineCodeSnip>{`, `}<InlineCodeSnip>{`Config`}</InlineCodeSnip>{`, `}<InlineCodeSnip>{`Quit`}</InlineCodeSnip>{`  `}</span></p>
                        <br/>
                        <p id="" className={`text-md dark:border-gray-700 border-gray-400 inline ${fira_code.className}`}>{`DVALoggedIn()`}<span className={`inline ${radio_canada.className}`}>{` — `}<InlineCodeSnip>{`SubmitDVA_Booking`}</InlineCodeSnip>{`, `}<InlineCodeSnip>{`ViewDVABookingHistory`}</InlineCodeSnip>{`, `}<InlineCodeSnip>{`StopDVA_Service`}</InlineCodeSnip>{`, `}<InlineCodeSnip>{`Config`}</InlineCodeSnip>{`, `}<InlineCodeSnip>{`Quit`}</InlineCodeSnip>{` `}</span></p>
                        <br/>
                    </div>
                    <p className="">{`Once the user enters text into the console, ADI will parse the entered text using the `}<InlineCodeSnip>{`PerformFunction(object? param, string input)`}</InlineCodeSnip>{` method.`}</p>
                    <div className="py-2">
                        <CustomSynxtaxHighligher language="csharp" code={menuManageSnip_2}/>
                    </div>
                    <p className="">{`The menu has its functions searched for the first method which contains the users input, before invoking that method.`}</p>

                    <h2 id="menu-functions" className="">{`Menu Functions`}</h2>
                    <p>{`Each menu function is defined by a few key objects: A list of strings for each command shortcut, a name, a `}<InlineCodeSnip>{`ConsoleColor`}</InlineCodeSnip>{` object. Each method has an invoke definition which runs the Function if a successful key is entered, or sets the `}<InlineCodeSnip>{`EffectOfLastOperationRef`}</InlineCodeSnip>{` field to express that the entered command did not return a function.`}</p>
                    <p>{`If valid function is able to be discerned from the entered text, the ADI will invoke its `}<InlineCodeSnip>{`Function(object? param)`}</InlineCodeSnip>{` method. Since `}<InlineCodeSnip>{`MenuFunction`}</InlineCodeSnip>{` is an abstract class, it is up to each implementation of this class to implement a different function. Below is a brief summary of the function of each  `}<InlineCodeSnip>{`MenuFunction`}</InlineCodeSnip>{`.`}</p>
                    <h2 id="choose-terminal-mode" className="">{`ChooseTerminalMode`}</h2>
                    <p className="">{`Function: Prepares a list of `}<InlineCodeSnip>{`ITerminalMode`}</InlineCodeSnip>{` objects, and presents the options for the user to select. After parsing the users choice by finding a terminal mode with a name that matches the returned string of the choice the user makes, it then changes the mode and sets its initial menu to the current menu of the  `}<InlineCodeSnip>{`TerminalHandler`}</InlineCodeSnip>{` instance.`}</p>
                    <p>{` `}<InlineCodeSnip>{`FindModeMenu(ITerminalMode mode)`}</InlineCodeSnip>{` is a unique method of the  `}<InlineCodeSnip>{`ChooseTerminalMode`}</InlineCodeSnip>{` class. This method sets up the environmennt variables if it is the first time loading a menu, and then also ensures that a log file path has been set up. Next, this function sets the available modes paired with their starter menus in a  `}<InlineCodeSnip>{`Dictionary<ITerminalMode, Menu>`}</InlineCodeSnip>{` object. Lastly, the method will attempt to search through the available menus for the one given by the user, before returning it, (which allows the `}<InlineCodeSnip>{`Function()`}</InlineCodeSnip>{` method to determine the mode and menu to set (simply returns the menu value by using searching the mode as a key.)`}</p>
                    <p>{`Currently, the only available mode is `}<InlineCodeSnip>{`PRODAManager`}</InlineCodeSnip>{`, so the  `}<InlineCodeSnip>{`ChooseTerminalMode`}</InlineCodeSnip>{` will select this upon every call.`}</p>
                    <h2 id="config" className="">{`Config`}</h2>
                    <p>{`The config menu function was made to allow for configuration of the application where possible. Primarily, it used to allow the user to choose turn off the Outlook Interop feature which automatically scan their inbox for 2-Factor authentication code (back when five codes had to be parsed for all the accounts), but since this has been reduced to one code, the interop functionality is not needed. Furthermore, the feature was not consistent as the Outlook Interop library is not a recommended by Microsoft, and as such could not be relied upon in the long run. `}</p>
                    <p>{`Any future configuration options could be defined in this `}<InlineCodeSnip>{`Function(object? param)`}</InlineCodeSnip>{` method.`}</p>
                    <h2 id="quit" className="">{`Quit`}</h2>
                    <p>{`Calls the ADI  `}<InlineCodeSnip>{`Quit()`}</InlineCodeSnip>{` function. This function will cause the currently activated mode to call its  `}<InlineCodeSnip>{`StopTerminalMode()`}</InlineCodeSnip>{` function, where each mode has a defined exit procedure. After this has been completed and the resources have been packed up, the application should close.`}</p>
                    <h2 id="startdva" className="">{`StartDVA_Service`}</h2>
                    <p>{`This method will attempt to activate the `}<InlineCodeSnip>{`ChromeDriverGenerator`}</InlineCodeSnip>{` servicer, which defines the parameters that each ChromeDriver may be defined. More information about the servicer can be found on the `}<Link href="/Docs/Dev/ODICommands">{`ODI Commands page`}</Link>{`.`}</p>
                    <p>{`After this, `}<InlineCodeSnip>{`StartDVA_Service`}</InlineCodeSnip>{` calls the `}<InlineCodeSnip>{`StartTerminalMode()`}</InlineCodeSnip>{` function currently active mode (in this case PRODAManager). Similar to the  `}<InlineCodeSnip>{`Quit()`}</InlineCodeSnip>{` function above, this calls a generic interface method which is implemented by all terminal modes. In the case of `}<InlineCodeSnip>{`PRODAManager`}</InlineCodeSnip>{` the definition of `}<InlineCodeSnip>{`StartTerminalMode()`}</InlineCodeSnip>{` will run a method that Starts the ChromeDriver service, and activates the provided list of Chrome instances. Following this, the method uses several `}<Link href="/Docs/Dev/Fundamentals/UtilityMethods">{`windows utility dll functions`}</Link>{` to set up the console for the desired booking environment. A generous section of this method is dedicated towards catching any potential errors and releasing the resources of and closing the application  in the case that the setup failed.`}</p>
                    <p>{`If successful, the mode will be changed to the `}<InlineCodeSnip>{`Menu.DVAActivatedMenu()`}</InlineCodeSnip>{` menu.`}</p>
                    <p>{``}</p>
                    <h2 id="logindva" className="">{`LoginDVA_Service`}</h2>
                    <p>{`This function simply navigates each opened Chrome instance to the PRODA login page, before requesting the username and password of the user. This function is deemed successful if the user manages to login to their PRODA account, once the browser has reached the destination page which stores all DVA bookings.`}</p>
                    <p>{`If successful, the mode will be changed to the `}<InlineCodeSnip>{`Menu.DVALoggedIn()`}</InlineCodeSnip>{` menu.`}</p>
                    <h2 id="submitdva" className="">{`SubmitDVA_Booking`}</h2>
                    <p>{`This function will attempt to receive an order number and DVA file number before searching for and submitting the booking if one is found.`}</p>
                    <h2 id="stopdva" className="">{`StopDVA_Service`}</h2>
                    <p>{`Terminates the current ChromeDriver (alongside any Chrome instances it may have generated) before releasing any other resource associated with the DVA mode.`}</p>
                    <h2 id="viewdva" className="">{`ViewDVABookingHistory`}</h2>
                    <p>{`Prints a list of which shows all DVA bookings submitted by the user during the current session. First, it provides a preview of each booking, before allowing the user to select from a given booking to print its full details to the console.`}</p>
                    {/* Enter content here */}
                    </div>
                    <div className="h-96">{``}</div>
                    <div className="h-96">{``}</div>
            </article>

        </>
    )
}