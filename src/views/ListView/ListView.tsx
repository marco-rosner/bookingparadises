import { CardMedia, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useParams } from "react-router-dom"
import { useProperties } from "../../hooks/useProperties"
import { Property } from "../../mock/properties"

export const ListView = (): React.ReactElement => {
    const { data: properties } = useProperties()
    let { placeId } = useParams()
    const filteredProperties = properties.filter(property => property.placeId === Number(placeId))

    return (
        <TableContainer
            component={Paper}
            sx={{
                minWidth: '70vw',
                width: '70%',
                margin: "20px"
            }}>
            <Table sx={{ minWidth: '60vw' }}>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell align="center">Property</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>

                </TableHead>
                <TableBody>
                    {filteredProperties.length === 0 ? (
                        <TableRow>
                            <TableCell align="center" colSpan={6}>No properties available</TableCell>
                        </TableRow>
                    ) : filteredProperties.map(({ id, name, description, price, img }: Property) => (
                        <TableRow key={id}>
                            <TableCell>{id}</TableCell>
                            <TableCell>{name}</TableCell>
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