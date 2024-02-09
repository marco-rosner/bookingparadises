import { Slide, Snackbar, Alert, AlertProps } from "@mui/material"
import React, { useEffect, useState } from "react"

interface AlertInterface {
    message: string,
    severity: AlertProps['severity'],
    error: boolean,
    duration?: number
}

export const AlertPopup = ({ error, message, severity, duration = 5000 }: AlertInterface): React.ReactElement => {
    const [open, setOpen] = useState(false);

    useEffect(() => setOpen(error), [error])

    const handleClose = (_: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') return

        setOpen(false)
    }

    return (
        <Snackbar
            open={open}
            autoHideDuration={duration}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            TransitionComponent={Slide}
            sx={{ bgcolor: 'Background.paper' }}
        >
            <Alert severity={severity}>{message}</Alert>
        </Snackbar>
    )
}