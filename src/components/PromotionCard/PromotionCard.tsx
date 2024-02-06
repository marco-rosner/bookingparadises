import { ButtonBase, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

interface PlaceInterface {
    name: string,
    description: string,
    img: string,
    price: number,
}

const ImgStyled = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export const PromotionCard = ({ name, description, img, price }: PlaceInterface): React.ReactElement => {
    return (
        <Paper
            sx={{
                p: 2,
                marginLeft: '20px',
                marginBottom: '20px',
                maxWidth: '300px',
                flexGrow: 1,
            }}
        >
            <Grid container spacing={2} sx={{ minWidth: '200px', minHeight: '108px' }}>
                <Grid item>
                    <ButtonBase sx={{ width: '128px', height: '128px' }} >
                        <ImgStyled alt={name} src={img} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={6} sm alignContent='center' container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item sm>
                            <Typography variant="subtitle1" component="div">
                                {name}
                            </Typography>
                            <Typography variant="body2" component="div">
                                {description}
                            </Typography>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item xs={2} sx={{ minWidth: '40px', marginLeft: '4px' }}>
                    <Typography variant="caption" component="div">
                        ${price} per person
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}