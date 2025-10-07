import File from "./Widgets/File";
import Folder from "./Widgets/Folder";

interface Request {
  readonly name: string;
  readonly email: string;
  readonly password: string;
}

interface Response {
  readonly message: string;
}

const request: Request = {
  name: "Flame",
  email: "flame@ember.com",
  password: "flame@ember",
};

const response: Response = {
  message: "success",
};

export default function Flame() {
  return (
    <div className="grid cursor-default grid-cols-1 items-center justify-center select-none">
      <div className="flex items-center justify-center">
        <div className="bg-lavender text-crust relative w-[125px] p-0.5 pl-3 text-sm tracking-wide">
          POST
          <div className="bg-base absolute top-0 -right-1 h-full w-[10px] -skew-x-[15deg]" />
        </div>

        <p className="bg-base text-text grow p-0.5 pl-1.5 text-sm font-light tracking-wide">
          https://api.emberx.com/register
        </p>

        <div className="bg-green text-crust relative w-[100px] p-0.5 text-center text-sm tracking-wide">
          Send
          <div className="bg-base absolute top-0 -left-1 h-full w-[10px] -skew-x-[15deg]" />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="bg-crust h-[500px] w-[250px]">
          <div className="grid grid-cols-1 items-center justify-center pt-2">
            <Folder name="Users" open />

            <div className="pl-5">
              <File name="GET Fetch User" />
              <File name="POST Login User" active />
              <File name="POST Register User" />
              <File name="PATCH Update User" />
              <File name="DELETE Remove User" />
            </div>

            <Folder name="Events" open />

            <div className="pl-5">
              <File name="GET Fetch Event By ID" />
              <File name="GET Fetch Events By City" />
              <File name="GET Fetch Events By Artist" />
              <File name="POST Create An Event" />
            </div>

            <Folder name="Tickets" open />

            <div className="pl-5">
              <File name="GET Fetch Ticket By ID" />
              <File name="GET Fetch Tickets By Event" />
              <File name="GET Fetch Tickets By Price" />
              <File name="POST Add Ticket To Event" />
            </div>
          </div>
        </div>

        <div className="bg-mantle h-[500px] grow p-2">
          <div className="grid h-[242px] grid-cols-1 items-start justify-start">
            <div className="grid grid-cols-1 items-start justify-start gap-2">
              <div className="flex items-center justify-start gap-2">
                <p className="bg-lavender/25 text-crust w-[100px] p-0.5 text-center text-sm tracking-wide">
                  HEADERS
                </p>

                <p className="bg-lavender text-crust w-[100px] p-0.5 text-center text-sm tracking-wide">
                  BODY
                </p>

                <p className="bg-lavender/25 text-crust w-[100px] p-0.5 text-center text-sm tracking-wide">
                  QUERY
                </p>

                <p className="bg-lavender/25 text-crust w-[100px] p-0.5 text-center text-sm tracking-wide">
                  INFO
                </p>
              </div>

              <pre>
                <code className="font-geist text-sm font-light">
                  {JSON.stringify(request, null, 2)}
                </code>
              </pre>
            </div>
          </div>

          <div className="grid h-[242px] grid-cols-1 items-start justify-start">
            <div className="grid grid-cols-1 items-start justify-start gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center gap-2">
                  <p className="bg-mauve/25 text-crust w-[100px] p-0.5 text-center text-sm tracking-wide">
                    HEADERS
                  </p>

                  <p className="bg-mauve text-crust w-[100px] p-0.5 text-center text-sm tracking-wide">
                    BODY
                  </p>

                  <p className="bg-mauve/25 text-crust w-[100px] p-0.5 text-center text-sm tracking-wide">
                    COOKIES
                  </p>

                  <p className="bg-mauve/25 text-crust w-[100px] p-0.5 text-center text-sm tracking-wide">
                    TRACE
                  </p>
                </div>

                <div className="flex items-center justify-center gap-2">
                  <p className="bg-peach text-crust w-[100px] p-0.5 text-center text-sm tracking-wide">
                    100.00 ms
                  </p>

                  <p className="bg-green text-crust w-[100px] p-0.5 text-center text-sm tracking-wide">
                    200 OK
                  </p>
                </div>
              </div>

              <pre>
                <code className="font-geist text-sm font-light">
                  {JSON.stringify(response, null, 2)}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
