import React, { useEffect, useState } from "react"
import { Slide, Snackbar, Alert, AlertProps } from "@mui/material"

interface AlertInterface {
    message: string,
    severity: AlertProps['severity'],
    open: boolean,
    duration?: number
}

export const AlertPopup = ({ open, message, severity, duration = 5000 }: AlertInterface): React.ReactElement => {
    const [isOpen, setOpen] = useState(false);

    useEffect(() => setOpen(open), [open])

    const handleClose = (_: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') return

        setOpen(false)
    }

    return (
        <Snackbar
            open={isOpen}
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