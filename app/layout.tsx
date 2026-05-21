import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"
import Link from "next/link";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontSans.variable, "font-mono", jetbrainsMono.variable)}
    >
      <body>
        <header className="flex justify-between pr-4 pt-4">
          <div className="flex place-items-center">
            <img src="/images/moggerLogo.png" className="w-25"/>
            <h1 className="text-6xl">Milton Moggers</h1>
          </div>
          <div className="flex place-items-center gap-4">
            <Link href="/logInPage">
              <Button size="lg" variant="outline" className="rounded-lg">GM Management</Button>
            </Link>
            <Button size="lg" variant="outline" className="rounded-lg">Sign In</Button>
          </div>
        </header>

        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
