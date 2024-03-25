import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Avatar, Box, CardMedia, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material"
import { useTranslation } from "react-i18next";

export const BookingMenu = (): React.ReactElement => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl)
    const { i18n, t } = useTranslation()

    const onClick = (e: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(e.currentTarget)
    }

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language)
    }

    const onClose = () => setAnchorEl(null)

    return (
        <Box sx={{ width: '70%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ cursor: 'pointer' }} onClick={() => navigate("/")}>
                <Avatar sx={{ width: 96, height: 96, bgcolor: 'transparent', opacity: '0.7' }}>Booking paradises</Avatar>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ mr: '10px', cursor: 'pointer' }} onClick={() => navigate("/")}>
                    <Typography color="white">{t('menu.reservation')}</Typography>
                </Box>
                <Box sx={{ mr: '10px', cursor: 'pointer', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <CardMedia
                        component="img"
                        height="20"
                        image="/src/assets/br-flag.png"
                        sx={{ width: '19px', height: '19px' }}
                        onClick={() => changeLanguage('pt-BR')}
                    />

                    <CardMedia
                        component="img"
                        height="30"
                        image="/src/assets/us-flag.png"
                        sx={{ ml: '5px', width: '25px', height: '25px' }}
                        onClick={() => changeLanguage('en-US')}
                    />
                </Box>
                <Box>
                    <Tooltip title="User account">
                        <IconButton
                            onClick={onClick}
                            data-cy="user-menu"
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
                <MenuItem data-cy="manage-user-menu" onClick={() => { onClose(); navigate("/manage") }}>
                    {t('menu.manageBookings')}
                </MenuItem>
            </Menu>
        </Box>
    )
}