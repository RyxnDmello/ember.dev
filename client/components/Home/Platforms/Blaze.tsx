import { FaGitAlt, FaLinux, FaFile } from "react-icons/fa6";

import File from "./Widgets/File";
import Folder from "./Widgets/Folder";

const code: string = `import express from "express";

import authRoutes from "./routes/auth.routes.ts";
import userRoutes from "./routes/user.routes.ts";
import eventRoutes from "./routes/event.routes.ts";
import ticketRoutes from "./routes/ticket.routes.ts";
import orderRoutes from "./routes/ticket.routes.ts";
import paymentsRoutes from "./routes/ticket.routes.ts";

const app = express();

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/event", eventRoutes);
app.use("/api/ticket", ticketRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/payments", paymentsRoutes);

export default app;
`;

export default function Flame() {
  return (
    <div className="grid cursor-default grid-cols-1 items-center justify-center select-none">
      <div className="flex items-center justify-center">
        <div className="bg-crust h-[500px] w-[250px]">
          <div className="grid grid-cols-1 items-center justify-center pt-2">
            <Folder name="src" open />

            <div className="pl-5">
              <Folder name="controllers" open />

              <div className="pl-5">
                <File name="auth.controller.ts" />
                <File name="user.controller.ts" />
                <File name="event.controller.ts" />
                <File name="ticket.controller.ts" />
                <File name="coupon.controller.ts" />
                <File name="order.controller.ts" />
                <File name="payment.controller.ts" />
                <File name="wallet.controller.ts" />
                <File name="wallet.controller.ts" />
              </div>

              <Folder name="database" />
              <Folder name="emails" />
              <Folder name="models" />

              <Folder name="routes" />
              <Folder name="services" />

              <div className="pl-5">
                <File name="auth.service.ts" />
                <File name="staff.service.ts" />
              </div>

              <File name="app.ts" active />
              <File name="server.ts" />
            </div>

            <File name=".gitignore" />
            <File name="nodemon.json" />
            <File name="package.json" />
            <File name="tsconfig.json" />
          </div>
        </div>

        <div className="bg-mantle h-[500px] w-fit grow p-2">
          <div className="grid grid-cols-1 items-start justify-start">
            <pre>
              <code className="font-geist text-sm font-light">{code}</code>
            </pre>
          </div>
        </div>
      </div>

      <div className="bg-base flex items-center justify-between">
        <div className="flex items-center justify-center">
          <div className="bg-lavender flex items-center justify-center gap-1 px-2 py-0.5">
            <p className="text-crust text-sm">EDITING</p>
          </div>

          <div className="bg-red flex items-center justify-center gap-1 px-2 py-0.5">
            <FaGitAlt className="text-crust h-3.5 w-3.5" />
            <p className="text-crust text-sm">master</p>
          </div>

          <div className="bg-surface0 flex items-center justify-center gap-1 px-2 py-0.5">
            <FaFile className="text-text h-3 w-3" />
            <p className="text-text text-sm">app.ts</p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="bg-surface0 flex items-center justify-center gap-1 px-2 py-0.5">
            <p className="text-text text-sm">UTF-8</p>
          </div>

          <div className="bg-green flex items-center justify-center gap-1 px-2 py-0.5">
            <FaLinux className="text-crust h-3 w-3" />
            <p className="text-crust text-sm">Linux</p>
          </div>
        </div>
      </div>
    </div>
  );
}
