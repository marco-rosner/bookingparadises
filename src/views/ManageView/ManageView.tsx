import { CardMedia, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useProperties } from "../../hooks/useProperties"

export const ManageView = (): React.ReactElement => {
    const { data: properties } = useProperties()

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
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>

                </TableHead>
                <TableBody>
                    {properties.map(({ id, img, name, description, price }) => (
                        <TableRow key={id}>
                            <TableCell sx={{ display: "flex", justifyContent: "center" }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={img}
                                    alt={name}
                                    sx={{ width: '128px', height: '128px' }}
                                />
                            </TableCell>
                            <TableCell>{description}</TableCell>
                            <TableCell align="center">{price}</TableCell>
                            <TableCell align="center">Update - Delete</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}