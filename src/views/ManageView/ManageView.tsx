import { CardMedia, Paper, Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { places } from "../../mock/places"

export const ManageView = (): React.ReactElement => {
    return (
        <TableContainer
            component={Paper}
            sx={{
                minWidth: '70vw',
                width: '70%',
                margin: "20px"
            }}>
            <Table sx={{ minWidth: '60vw' }} aria-label="promotions">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Place</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell align="center">Dates</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>

                </TableHead>
                {places.map(item => (
                    <TableRow key={item.id}>
                        <TableCell sx={{ display: "flex", justifyContent: "center" }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={item.img}
                                alt={item.name}
                                sx={{ width: '128px', height: '128px' }}
                            />
                        </TableCell>
                        <TableCell>{item.description}</TableCell>
                        <TableCell>{item.dates}</TableCell>
                        <TableCell align="center">{item.price}</TableCell>
                        <TableCell align="center">Update - Delete</TableCell>
                    </TableRow>
                ))}
            </Table>
        </TableContainer>
    )
}