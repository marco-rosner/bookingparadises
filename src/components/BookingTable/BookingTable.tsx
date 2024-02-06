import { Paper, Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { promotions } from "../../mock/promotions"

export const BookingTable = (): React.ReactElement => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="promotions">
                <TableHead>
                    <TableRow>
                        <TableCell>Place</TableCell>
                        <TableCell>Dates</TableCell>
                        <TableCell>Price</TableCell>
                    </TableRow>

                </TableHead>
                {promotions.map(item => (
                    <TableRow key={item.id}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.dates}</TableCell>
                        <TableCell align="right">{item.price}</TableCell>
                    </TableRow>
                ))}
            </Table>
        </TableContainer>
    )
}