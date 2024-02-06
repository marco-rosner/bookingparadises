import { Grid } from "@mui/material"
import React from "react"
import { promotions } from "../../mock/promotions"
import { PromotionCard } from "../PromotionCard/PromotionCard"

export const BookingsBody = (): React.ReactElement => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            {promotions.map(item => (
                <PromotionCard
                    key={item.id}
                    name={item.name}
                    description={item.description}
                    img={item.img}
                    price={item.price} />
            ))}

        </Grid>
    )
}