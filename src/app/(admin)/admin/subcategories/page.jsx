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
        title: "Football",
        description: "Football event for all",
        category: "Sports",
    },
    {
        title: "Cricket",
        description: "Cricket games",
        category: "Sports",
    }
]


function SubCategory() {
    return (
        <div className="h-full w-full pt-8">
            <h1 className="text-center text-5xl font-bold font-sans mb-8">SubCategory PAGE</h1>


            <Table>
                <TableCaption>A list of All Categories.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[400px]">Title</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Category</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        events.map((event) => {
                            return (
                                <TableRow>
                                    <TableCell className="font-medium">{event.title}</TableCell>
                                    <TableCell>{event.description}</TableCell>
                                    <TableCell>{event.category}</TableCell>
                                </TableRow >
                            )
                        })
                    }
                </TableBody>
            </Table>

        </div>
    )
}

export default SubCategory;