import ClientLayout from './ClientLayout';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Ampere | Electrical Society | NIT Durgapur",
    description: "Made by Shubhrajyoti Ghosh",
    icons: { icon: "/AmpereIcon.png" },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} cz-shortcut-listen="true">
                <ClientLayout>
                    {children}
                </ClientLayout>
            </body>
        </html>
    );
}
