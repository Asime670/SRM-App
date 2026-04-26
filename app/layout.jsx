import "./globals.css";
import { StudentProvider } from "@/context/StudentContext";

export const metadata = {
  title: "Student Result Management App",
  description: "A premium dashboard to manage student results",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <StudentProvider>
          {children}
        </StudentProvider>
      </body>
    </html>
  );
}
