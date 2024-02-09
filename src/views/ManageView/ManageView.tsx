import { Paper, Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { places } from "../../mock/places"

export const ManageView = (): React.ReactElement => {
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
                {places.map(item => (
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