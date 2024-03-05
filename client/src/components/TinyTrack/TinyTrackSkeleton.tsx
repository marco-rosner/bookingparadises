import { CardContent, Grid, Skeleton } from "@mui/material";

export const TinyTrackSkeleton = () => (
    <>
        <Skeleton width="30%" sx={{ marginLeft: '30px', fontSize: '2rem' }} />
        <CardContent>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Skeleton
                    variant="rectangular"
                    sx={{ maxWidth: "350px", margin: "20px" }}
                    width={350}
                    height={150}
                />
                <Skeleton
                    variant="rectangular"
                    sx={{ maxWidth: "350px", margin: "20px" }}
                    width={350}
                    height={150}
                />
                <Skeleton
                    variant="rectangular"
                    sx={{ maxWidth: "350px", margin: "20px" }}
                    width={350}
                    height={150}
                />
            </Grid>
        </CardContent>
    </>
)