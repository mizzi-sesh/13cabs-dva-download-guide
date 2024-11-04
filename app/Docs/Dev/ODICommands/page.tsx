import { CustomSynxtaxHighligher } from "@/app/ui/customsyntaxhighlighter";
import InlineCodeSnip from "@/app/ui/inlinecodesnip";
import PageContents, { CSFragment } from "@/app/ui/pagecontents";
import Link from "next/link";
// `}<InlineCodeSnip>{``}</InlineCodeSnip>{` 
export default function Page () {


const soapRequest_Snip1 = `public class SOAPRequest<T>
{
    protected T? _value { get; set; }

    protected HttpClient _httpClient;
    protected HttpResponseMessage? response;
    internal protected string password;

    protected ODIServer requestServer;


    private XmlSerializer serializer = new(typeof(T));

    protected string _action = string.Empty;
    protected byte[] message_bytes = Array.Empty<byte>();
   
    //...
}`

const odiServer_Snip1 =`public class ODIServer
{
    private ODIServer(string value, string? pw) 
    {   Value = value; Password = pw; 
        if (string.IsNullOrEmpty(pw)) 
        { throw new ArgumentNullException
            ("No password found. 
            Check environment variables have loaded correctly."); }
    }

    public string Value { get; private set; }
    public string? Password { get; private set; }
    public static ODIServer VIC { get 
        { return new ODIServer("09", 
            Environment.GetEnvironmentVariable("vicODIKey")); } }
    public static ODIServer NSW { get 
        { return new ODIServer("10", 
            Environment.GetEnvironmentVariable("nswODIKey")); } }
    public static ODIServer QLD { get 
        { return new ODIServer("11",
            Environment.GetEnvironmentVariable("qldODIKey")); } }

    public override string ToString()
    {
        return Value;
    }
}`

const parseResponse_Snip1 = `public virtual async Task<U?> ParseResponse<U>()
{
    string responseBody;
    if (response != null)
    {
        responseBody = await response.Content.ReadAsStringAsync();
    }
    else
    {
        return default;
    }

    XmlSerializer deserializer = new(typeof(U));

    if (!string.IsNullOrEmpty(responseBody))
    {
        OutFile(LogEvents.ODIError, null, responseBody, true);
    }

    using (var rqStream = new MemoryStream())
    {
        StreamWriter rqWriter = new(rqStream);
        rqWriter.Write(responseBody);

        rqWriter.Flush();
        rqStream.Position = 0;

        TextReader reader = new StreamReader(rqStream);
        U? yield = (U?)deserializer.Deserialize(reader);
        if (yield != null)
        {
            return yield;
        }
    }
    return default;
}`

   return  (
        <>
            <PageContents id="page-contents">
                <CSFragment content="SOAPRequest<T>" link="soap-request"/>
                <CSFragment content="ODIServer" link="odi-server"/>
                <CSFragment content="ParseResponse<U>( )" link="parse-response"/>
                <CSFragment content="AuthController" link="auth-controller"/>
                <CSFragment content="CreateBookingController" link="create-booking"/>
                <CSFragment content="SuburbsByName" link="sub-by-name"/>
                <CSFragment content="Back to top" link="/"/>

            </PageContents>
            <article className="mt-4 w-full min-w-0 max-w-6x1 px-1 md:px-6 min-height-[calc(-103px + 100vh)]">
                <div className="-mt-4 mb-7 md:mb-10 md:mt-2">
                    </div>
                    <div className="prose prose-documentation max-w-none">
                        <h1 id="" className="break-words">{`ODI Commands`}</h1>
                        <br/>
                        <p>{`Each SOAP request takes advantage of a pre-defined API methods described `}<Link href="/Docs/Dev/Fundamentals#soap-request">{`here`}</Link>{`. Each request targets a specific ODI Server (Victoria, New South Wales or Queensland) which submits booking requests using pre-requisite information.`}</p>
                        <p>{`The .NET process for submitting SOAP requests relies upon objects defined for XML serialization, which are converted to XML, with an object designed for reception, which is de-serailized via the server response. `}</p>
                        <h2 id='soap-request' className=''>{`SOAPRequest<T>`}</h2>
                        <p>{`The SOAP Request generic class is defined like this: `}</p>
                        <CustomSynxtaxHighligher language="csharp" code={soapRequest_Snip1}/>
                        <p>{`The type `}<InlineCodeSnip>{`T`}</InlineCodeSnip>{` is used to define the request type, e.g. Authentication or Creating a booking. Each SOAP request uses a `}<InlineCodeSnip>{`HttpClient`}</InlineCodeSnip>{`to submit `}<InlineCodeSnip>{`HttpRequestMessage`}</InlineCodeSnip>{` objects and receive `}<InlineCodeSnip>{`HttpResponseMessage`}</InlineCodeSnip>{` objects. While the request message is not defined explicitly, it is instead defined by the byte array `}<InlineCodeSnip>{`message_bytes`}</InlineCodeSnip>{`, which must be first configured with the appropriate message data before being sent.`}</p>
                        <p>{`Each soap request is constructed with an `}<InlineCodeSnip>{`ODIServer`}</InlineCodeSnip>{` and a `}<InlineCodeSnip>{`HttpClient`}</InlineCodeSnip>{`, although in practice, there is only one HttpClient at any given time, which is defined in `}<Link href="/Docs/Dev/Fundamentals/UtilityMethods"><InlineCodeSnip>{`UtilityMethods.cs`}</InlineCodeSnip></Link>{`.`}</p>
                        <p>{`A serializer is defined of the given request type. The action pertains to the request type which the user wants to submit, which are defined on each API page. The SOAP request will use the prescribed ODI server, and the action of the request type to configure where and what each SOAP message ends up doing. Naturally, this requires inheritance so that each request can meet its specific requirements.`}</p>
                        <p>{`Before a message can be sent to receive a response, it first must have its fields prepared, serialized and sent using the virtual `}<InlineCodeSnip>{`RequestParams()`}</InlineCodeSnip>{`, and `}<InlineCodeSnip>{`SendRequest()`}</InlineCodeSnip>{` methods to prompt a valid response from the server. `}</p>
                        <p>{`It should also be noted that each each ODI server will return its own password, which must be defined in the `}<Link href="/Docs/Dev/GettingStarted/EnvironmentVariables"><InlineCodeSnip>{`Config.Locked`}</InlineCodeSnip></Link>{` file to work.`}</p>
                        <h2 id='odi-server' className=''>{`ODIServer`}</h2>
                        <p>{`The ODI server class merely returns string values that help determine the password and domain fragment to construct the desired URL and password for any given SOAP request.`}</p>
                        <CustomSynxtaxHighligher language="csharp" code={odiServer_Snip1}/>
                        <h2 id='parse-response' className=''>{`ParseResponse<U>( )`}</h2>
                        <p>{` `}<InlineCodeSnip>{`ParseResponse<U>()`}</InlineCodeSnip>{` is a virtual method with generic argument `}<InlineCodeSnip>{`U`}</InlineCodeSnip>{`, which is defined as the response type that the method is parsing. This method reads the response message body, before de-serializing it to response type `}<InlineCodeSnip>{`U`}</InlineCodeSnip>{`. To accomplish this, the method takes advantage of a memory stream, which it writes the entire response body to, before creating a text reader from a stream reader which receives the written stream. Finally, the message is deserialized to the object type before being returned in a `}<InlineCodeSnip>{`Task<U>`}</InlineCodeSnip>{` object. `}</p>

                        <CustomSynxtaxHighligher language="csharp" code={parseResponse_Snip1}/>
                        <h2 id='auth-controller' className=''>{`AuthController`}</h2>
                        <p>{`SOAP dispatch messages require an authentication token to submit valid methods. Therefore, the authentication request could be considered the most significant and prime SOAP request type. As a result of this paradigm, other SOAP requests are designed to make an authentication request first to ensure that a token is available for the request.`}</p>
                        <p>{`It can be noted that each ODI server requires its own authentication token, but seeing as each SOAP request already requires its own ODI server for construction, this condition is always satisfied.`}</p>
                        <p>{`More information about authentication requests can be found `}<Link href="/Docs/Dev/ODICommands/AuthController">{`here`}</Link>{`.`}</p>
                        <h2 id='create-booking' className=''>{`CreateBookingController`}</h2>
                        <p>{`The `}<InlineCodeSnip>{`CreateBookingController`}</InlineCodeSnip>{` class is the key class for the entire application. This class is responsible with preparing all the fields for the serializable `}<InlineCodeSnip>{`CreateDvaBookingRequest`}</InlineCodeSnip>{` class, and then sending the booking to the server for submission. The `}<InlineCodeSnip>{`CreateDVABookingRequest`}</InlineCodeSnip>{` class is by far the largest serializable class in the project, requiring more than 1,500 lines of code to define all variables available to booking messages.`}</p>
                        <p>{`More information about booking requests can be found `}<Link href="/Docs/Dev/ODICommands/CreateBookingController">{`here`}</Link>{`.`}</p>

                        <h2 id='sub-by-name' className=''>{`SuburbsByName`}</h2>
                        <p>{`The `}<InlineCodeSnip>{`SuburbByNameRequest`}</InlineCodeSnip>{` class uses the `}<InlineCodeSnip>{`GetSuburbsByName`}</InlineCodeSnip>{` method in order to search for suburb objects based on a given name and fleet. This function is critical to each booking as two suburb IDs (pickup and destination) will be required to submit bookings to a server. The request itself is very rudimentary, and merely provides the fleet and string required to find a list of valid suburbs.`}</p>
                        <p>{`More information about the SuburbsByName requests can be found `}<Link href="/Docs/Dev/ODICommands/SuburbsByName">{`here`}</Link>{`.`}</p>

                    </div>
                    <div className="h-96">{``}</div>
                    <div className="h-96">{``}</div>
            </article>

        </>
    )
}