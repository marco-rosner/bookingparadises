import React from "react";
import { Skeleton } from "@mui/material";

export const ContentSkeleton = (): React.ReactElement => (
    <>
        <Skeleton
            variant="rectangular"
            sx={{ maxWidth: "350px", margin: "20px" }}
            width={350}
            height={252}
        />
        <Skeleton
            variant="rectangular"
            sx={{ maxWidth: "350px", margin: "20px" }}
            width={350}
            height={252}
        />
        <Skeleton
            variant="rectangular"
            sx={{ maxWidth: "350px", margin: "20px" }}
            width={350}
            height={252}
        />
    </>
)