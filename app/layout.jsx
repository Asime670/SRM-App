import "./globals.css";
import { StudentProvider } from "@/context/StudentContext";
import { UIProvider } from "@/context/UIContext";

export const metadata = {
  title: "Student Result Management App",
  description: "A premium dashboard to manage student results",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <StudentProvider>
          <UIProvider>
            {children}
          </UIProvider>
        </StudentProvider>
      </body>
    </html>
  );
}
