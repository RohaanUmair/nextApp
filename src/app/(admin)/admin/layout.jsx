import "../../../app/globals.css";
import Link from "next/link";


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div className="flex w-full justify-evenly text-2xl mt-3">
                    <Link href='/admin/dashboard' className="">
                        <h2>Dashboard</h2>
                    </Link>
                    
                    <Link href='/admin/users'>
                        <h2>Users</h2>
                    </Link>

                    <Link href='/admin/events'>
                        <h2>Events</h2>
                    </Link>

                    <Link href='/admin/categories'>
                        <h2>Categories</h2>
                    </Link>

                    <Link href='/admin/subcategories'>
                        <h2>Sub-Categories</h2>
                    </Link>
                </div>
                {children}
            </body>
        </html>
    );
}
