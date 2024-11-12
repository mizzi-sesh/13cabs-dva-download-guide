import { CustomSynxtaxHighligher } from "@/app/ui/customsyntaxhighlighter";
import InlineCodeSnip from "@/app/ui/inlinecodesnip";
import PageContents, { CSFragment } from "@/app/ui/pagecontents";
import Link from "next/link";
// `}<InlineCodeSnip>{` `}</InlineCodeSnip>{` 
export default function Page () {

const prodaMan_snip01 = `private bool PrepareConsoleForHandlingChrome()
 {
     try
     {
         if (_runningServicer)
         {

             System.Console.Clear();
             nint mainWindowHandle = FindMainWindowHandle();

             if (!SetChromeDriverCtrlHandler())
                 return false;

             if (!AllocateConsoleForProgram(mainWindowHandle))
                 return false;

             if (!ConfirmConsoleWindowAvailable())
                 return false;

             return true;

         }
         else
         {
             ADIUtilities.Logger.Log(Microsoft.Extensions.Logging.LogLevel.Error, 
             AutomaticDispatchProject.LogEvents.WebDriver, 
             "Failed to PrepareConsole. ChromeDriver was not started.", 
             null,
             (state, ex) => state);
             return false;
         }
     }
     catch (Exception ex)
     {
        //...
     }
 }`

 const prodaMan_snip02 = `public bool StartDVAServicer()
{
    DEBUGONLY_QuitAllChromesBeforeRunning();
    try
    {
        if (!StartDrivers()) return false;
        if (!PrepareConsoleForHandlingChrome()) return false;
    }
    catch (ArgumentException e)
    {
        Logger.Log(Microsoft.Extensions.Logging.LogLevel.Error, 
        LogEvents.IO, 
        "START DVA SERVICER FAILED: " + e.Message,
        e, 
        (state, e) => state);
        _webDrivers.Clear();
        _runningServicer = false;
        _driversInUse = 0;
        _driverPID.Clear();
        Instance.StopDVAServicer();
        DEBUGONLY_QuitAllChromesBeforeRunning();
    }
    return true;
}`

const prodaMan_snip03 = `public async Task<bool> SubmitBooking(object? arg)
{
    int orderNumber = InputDVAOrderNumber();
    if (orderNumber == 0) return false;
    string fileName = InputDVAFileNumber();
    if (fileName == string.Empty) return false;

    var booking = await DVAInfo.ScrapeDVABooking(orderNumber, fileName);

    //...
}`

const prodaMan_snip4 = `
//...

if (booking.Item1 != null)
{

    DVAInfo initial = booking.Item1;
    initial.PrintBookingInfoForODI();
    CreateDvaBookingRequest searchedBooking = new(initial.Fleet.Server);
    await searchedBooking.PrepareBookingForODI(initial);

    if (!DVAInfo.ConfirmContinueProcedure(DVAInfo.ProcedureMode.Finish))
    {
        TerminalHandler.Instance.CurrentMenu.EffectOfLastOperationRef +=
            "Booking " + orderNumber + 
            " not submitted.\\n Operation cancelled by user.";
        return false; }

    if (booking.Item3 != null && booking.Item3.Length >= 2)
    {
        await searchedBooking.PrepareBookingForODI(initial, booking.Item3);
    }

    await searchedBooking.SendRequest();
    var res = await searchedBooking.ParseResponse();

    if (res != null &&
        res.Body.CreateBookingResponse.CreateBookingResult.Succeeded &&
        res.Body.CreateBookingResponse.CreateBookingResult.BookingID != 0
        )
    {
        DVAInfo.DVABookingHistory.Add(
        res.Body.CreateBookingResponse.CreateBookingResult.BookingID.ToString() +
        " - "  + initial.CustomerName +
        " - " + initial.OrderNumber + 
        "\\n" + initial.Direction +
        " - " + initial.Fleet.Name, initial
        );

        var iR = new AddBookingRemarkController(
            ADIUtilities.RetrieveAuthTokenAsync(
                initial.Fleet,
                ADIUtilities.HttpClient).Result,
            int.Parse(res
                      .Body
                      .CreateBookingResponse
                      .CreateBookingResult
                      .BookingID
                      .ToString()),
            "Booking submitted by Agent: " + ProdaUserNameParser(),
             initial.Fleet.Server
             );

        await iR.SendRequest();
    }
    else
    {
        // Return error, error handling code removed for brevity
    }

}
    //...
`

   return  (
        <>
            <PageContents id="page-contents">
                <CSFragment content="StartDVAServicer" link="start-dva"/>
                <CSFragment content="PrepareConsoleForHandlingChrome" link="prepare-console"/>
                <CSFragment content="StartupLogin" link="startup-login"/>
                <CSFragment content="SubmitBooking" link="submit-booking"/>
                <CSFragment content="Back to top" link="/"/>
            </PageContents>
            <article className="mt-4 w-full min-w-0 max-w-6x1 px-1 md:px-6 min-height-[calc(-103px + 100vh)]">
                <div className="-mt-4 mb-7 md:mb-10 md:mt-2">
                    </div>
                    <div className="prose prose-documentation max-w-none">
                        <h1 id="" className="break-words">{`PRODAManager`}</h1>
                        <br/>
                        <p>{`The PRODA manager class is an `}<InlineCodeSnip>{`ITerminalMode`}</InlineCodeSnip>{` which manages the resources and functions available to the DVA terminal mode. PRODA manager takes advantage of various `}<InlineCodeSnip>{`win32.dll`}</InlineCodeSnip>{` and `}<InlineCodeSnip>{`user32.dll`}</InlineCodeSnip>{` utilities to support the DVA workflow, primarily to allow `}<InlineCodeSnip>{`Ctrl+C`}</InlineCodeSnip>{` commands to not close the terminal or the Chrome instances associated with it during application run time.`}</p>
                        <p>{`The PRODA manager class stores and manages the ChromeDriver object. Initially, five separate ChromeDriver instances were made, with the intent of issuing commands to each with an asynchronous extension to Selenium, though this was not feasible. In the first stages of development, there were five separate accounts which distributed 13cabs DVA bookings, though this was reduced to one when the accounts were combined. The old `}<InlineCodeSnip>{`IWebDriver`}</InlineCodeSnip>{` instances are present in the PRODA manager class, though they are not used. `}</p>

                        <h2 id="start-dva" className="">{`StartDVAServicer`}</h2>
                        <p>{`This method invokes two functions. One starts the ChromeDriver process as well as the associated Google Chrome instances, before preparing the console for ChromeDriver use. If this process fails, ADI will attempt to free the resources associated with ChromeDriver and quit each instance in the application.  `}</p>
                        <CustomSynxtaxHighligher language="csharp" code={prodaMan_snip02}/>
                        <p>{``}</p>

                        <h2 id="prepare-console" className="">{`PrepareConsoleForHandlingChrome`}</h2>
                        <p>{``}<InlineCodeSnip>{`PrepareConsoleForHandlingChrome()`}</InlineCodeSnip>{` is called during the DVA login process. The procedure can be broken down as follows:`}</p>
                        <p>{`First, the application finds the main window handle of the ADI process. To do this, the application takes advantage of unmanaged windows function calls, defined in`}<InlineCodeSnip>{`/DVA/KernalUtilities/KernalIncludes.cs`}</InlineCodeSnip>{` to invoke various operating system utilities. `}<InlineCodeSnip>{`GetStdHandle()`}</InlineCodeSnip>{` retrieves the application console standard input, output and error, to ensure that these variables are up to date.`}</p> <p>{` The `}<InlineCodeSnip>{`MainWindowHandle`}</InlineCodeSnip>{` of the current process is then retrieved, and checked to ensure that it is not set to zero. If it is zero, a GUID is generated before setting the title. This step is done to ensure that the current console process can be be retrieved when the application closes the second console instance. The GUID is then searched in the processes, and stored in the class variable `}<InlineCodeSnip>{`_originalHandle`}</InlineCodeSnip>{`, which is returned at the end of the function.`}</p>
                        <p>{`This window handle is then input into the method `}<InlineCodeSnip>{`AllocateConsoleForProgram(nint windowHandle)`}</InlineCodeSnip>{`, which will try top get get the original `}<InlineCodeSnip>{`Rectangle`}</InlineCodeSnip>{` object of the console process (searching via windowHandle), before calling `}<InlineCodeSnip>{`AllocConsole()`}</InlineCodeSnip>{` to attach the ADI process to a new console. Once the new console is available, `}<InlineCodeSnip>{`SetConsoleCtrlHandler(CtrlHandler, true)`}</InlineCodeSnip>{` is called to disable `}<InlineCodeSnip>{`Ctrl+C`}</InlineCodeSnip>{` from closing the application. Since the agent will need to frequently copy and paste information from the application to other tools, this step is mandatory.  `}</p>
                        <p>{``}<CustomSynxtaxHighligher language="csharp" code={prodaMan_snip01}/></p>

                        <h2 id="startup-login" className="">{`StartupLogin`}</h2>
                        <p>{`The `}<InlineCodeSnip>{`StartupLogin(object? arg = null)`}</InlineCodeSnip>{` method sends several commands to ChromeDriver which login the browser into the desired DVA portal.`}</p>
                        <p>{`First, the method will attempt to login to the chrome instance available. It does this by navigating to the DVA portal before clicking on the Transport services login button. If the browser reaches page which contains certain URL, then the operation is considered successful, and ADI will then ask the user to input their 2-factor authentication code. If this step is successful, the application will ask the user which accounts they would like to login to for DVA (by checking each account available on the orginsation selection page). `}</p>
                        <p>{`If the user says no, then the application will navigate to the transport bookings portal and prepare to search for any bookings from the current day up until 10 days in the future. If the user approves of signing into additional accounts, then additional chrome instances are generated and the login procedure is repeated for each of these services.`}</p>
                        <p>{`It should be noted that the methods which quit the DVA servicing mode will first free the Chrome instances, close the ChromeDriver and then close the new console and re-allocate it to the original console which was hidden from view when the DVA mode was entered.`}</p>
                        <h2 id="submit-booking" className="">{`SubmitBooking`}</h2>
                        <p>{`Submit booking has many steps and requires breaking down to be fully understood.`}</p>
                        <CustomSynxtaxHighligher language="csharp" code={prodaMan_snip03}/>
                        <p>{`First, the function reads the booking order number and DVA file number with `}<InlineCodeSnip>{`InputDVAOrderNumber()`}</InlineCodeSnip>{` and `}<InlineCodeSnip>{`InputDVAFileNumber()`}</InlineCodeSnip>{`, before searching for the booking information and attempting to derive a `}<InlineCodeSnip>{`Task<(DVAInfo?, DVAInfo?, Address[]?, Address[]?)>`}</InlineCodeSnip>{` object. This tuple returns the DVAInfo (derived from BookingInfo) of a booking, and has an additional slot to store a pre-booked return if one is found. The Address array's are present so that each booking can store the addresses of both the pickup and destination in a single object.`}</p>
                        <CustomSynxtaxHighligher language="csharp" code={prodaMan_snip4}/>
                        <p>{`After the booking information has been prepared, its information is printed to the console, and a  `}<InlineCodeSnip>{`CreateDvaBookingRequest`}</InlineCodeSnip>{` object is created to prepare it for submission to the MTI server. The agent is given an opportunity to confirm that they would like to submit the booking before it is finally dispatched.`}</p>
                        <p>{`Next, the SOAP object is prepared with the booking info and the address array of the first booking, before finally dispatching the request to the server. After this, the response is parsed, and its information added to the application booking history if the response confirms the booking was successful, and then a `}<InlineCodeSnip>{`AddBookingRemarkController`}</InlineCodeSnip>{` is generated and sent to the server to notify which agent submitted the booking. (Using their PRODA username as an alias to help identify the booking submitter when necessary.)`}</p>
                        <p>{`After an inbound booking is submitted If ADI identifies a outbound booking wth a pre-booked return time (referred to generally as pre-booked return), the application will repeat the above process, but for the pre-booked return.`}</p>


                    </div>
                    <div className="h-96">{``}</div>
            </article>

        </>
    )
}