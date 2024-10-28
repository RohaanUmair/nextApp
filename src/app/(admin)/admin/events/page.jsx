import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


const events = [
    {
        title: "Cycling Event",
        description: "Cycling event for all",
        location: 'Karachi',
        date: new Date().toLocaleDateString()
    },
    {
        title: "Indoor Games",
        description: "Indoor games event for all",
        location: 'Lahore',
        date: new Date().toLocaleDateString()
    },
    {
        title: "Outdoor Games",
        description: "Outdoor games event for all",
        location: 'Karachi',
        date: new Date().toLocaleDateString()
    }
]


function Events() {
    return (
        <div className="h-full w-full pt-8">
            <h1 className="text-center text-5xl font-bold font-sans mb-8">Events PAGE</h1>


            <Table>
                <TableCaption>A list of All Events.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[400px]">Title</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead className="text-right">Date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        events.map((event) => {
                            return (
                                <TableRow>
                                    <TableCell className="font-medium">{event.title}</TableCell>
                                    <TableCell>{event.description}</TableCell>
                                    <TableCell>{event.location}</TableCell>
                                    <TableCell className="text-right">{event.date}</TableCell>
                                </TableRow >
                            )
                        })
                    }
                </TableBody>
            </Table>

        </div>
    )
}

export default Events;