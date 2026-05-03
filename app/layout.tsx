import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "./BootstrapClient";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}