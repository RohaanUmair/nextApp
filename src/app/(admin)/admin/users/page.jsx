import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


const users = [
    {
        fullname: "Ali Ahmed",
        email: "ali@email.com",
        location: 'Karachi',
        events: 5
    },
    {
        fullname: "Bilal Raza",
        email: "bilal@email.com",
        location: 'Lahore',
        events: 2
    },
    {
        fullname: "Shehzad Umar",
        email: "shehzad@email.com",
        location: 'Karachi',
        events: 1
    },
    {
        fullname: "Usman Tahir",
        email: "usman@email.com",
        location: 'Multan',
        events: 2
    },
]


function Users() {
    return (
        <div className="h-full w-full pt-8">
            <h1 className="text-center text-5xl font-bold font-sans mb-8">Users PAGE</h1>


            <Table>
                <TableCaption>A list of your Users.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[200px]">Fullname</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead className="text-right">Events</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        users.map((user) => {
                            return (
                                <TableRow>
                                    <TableCell className="font-medium">{user.fullname}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.location}</TableCell>
                                    <TableCell className="text-right">{user.events}</TableCell>
                                </TableRow >
                            )
                        })
                    }
                </TableBody>
            </Table>

        </div>
    )
}

export default Users;