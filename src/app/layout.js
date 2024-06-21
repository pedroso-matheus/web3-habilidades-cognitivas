import 'bootstrap-icons/font/bootstrap-icons.css';
import "./globals.css";

import { subHeadline } from "@/config/siteInfo";
import AnalyticsTags from "@/analytics/AnalyticsTags";

export const metadata = {
  title: "Habilidades Cognitivas | Desenvolva Todo seu Potêncial | Matheus Pedroso",
  description: subHeadline,
  link: "/Favicon.png"
};

export default function RootLayout({ children }) {

  return (
    <html lang="pt-br">
      <body>
        {children}
        <AnalyticsTags />
      </body>      
    </html>
  );
}
