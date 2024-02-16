import { Avatar, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

export const BookingMenu = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl)

    const onClick = (e: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(e.currentTarget)
    }

    const onClose = () => setAnchorEl(null)

    return (
        <Box sx={{ width: '70%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ cursor: 'pointer' }} onClick={() => navigate("/")}>
                <Avatar sx={{ width: 96, height: 96, bgcolor: 'transparent', opacity: '0.7' }}>Booking paradises</Avatar>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ mr: '10px', cursor: 'pointer' }} onClick={() => navigate("/")}>
                    <Typography color="white">Make a reservation</Typography>
                </Box>
                <Box>
                    <Tooltip title="User account">
                        <IconButton
                            onClick={onClick}
                            size="small"
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <Avatar sx={{ width: 32, height: 32 }}>U</Avatar>
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={onClose}
                onClick={onClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={() => { onClose(); navigate("/manage") }}>
                    Manage bookings
                </MenuItem>
            </Menu>
        </Box>
    )
}