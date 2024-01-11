import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Grid from '@mui/material/Grid';
import plan from '../assets/bgcard.png'
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import line from '../assets/line.png'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 30,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
        '& .MuiSwitch-thumb': {
            width: 15,
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
        },
    },
    '& .MuiSwitch-switchBase': {
        padding: 2,
        '&.Mui-checked': {
            transform: 'translateX(12px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? 'linear-gradient(90deg, #2745EA 2.94%, #CF7BF4 100%)' : 'linear-gradient(90deg, #2745EA 2.94%, #CF7BF4 100%)',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
        width: 12,
        height: 12,
        borderRadius: 6,
        transition: theme.transitions.create(['width'], {
            duration: 200,
        }),
    },
    '& .MuiSwitch-track': {
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor:
            theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
        boxSizing: 'border-box',
    },
}));

function Plan() {

    return (
        <>
            <Box
                sx={{
                    backgroundImage: `url(${plan})`,
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    padding: '30px 0'
                }}
            >
                <Container>
                    <Typography variant="h4" textAlign='center' >
                        Our Pricing Plan
                        <br/>
                        <img src={ line} alt='' />
                    </Typography>
                    <Typography variant="h6" textAlign='center' fontSize='15px' pt={2} pb={3} color="#C8CEFE">
                        Pay securely online and manage the booking via desktop or via the mobile app.
                    </Typography>
                    <Stack direction="row" spacing={1} justifyContent='center' alignItems="center">
                        <Typography>Montly</Typography>
                        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                        <Typography>Annualy</Typography>
                    </Stack>
                    <Grid container pt={10} justifyContent='center' columnSpacing={{ xl: 6, lg: 6, md: 6, sm: 6 }} rowSpacing={{ md: 5, sm: 5, xs: 7 }}>
                        <Grid item lg={3} md={5}>
                            <Box
                                sx={{
                                    border: 'none',
                                    borderRadius: '10px',
                                    padding: '20px 30px ',
                                    background: '#271F2F'
                                }}
                            >
                                <Box display="flex" alignItems='center'>
                                    <Typography variant="h4">
                                        500$
                                    </Typography>
                                    <Typography pl={2}>
                                        / month
                                    </Typography>
                                </Box>
                                <Typography pt={2} variant="h5" color="#1552F0">
                                    FOUNDERS +++
                                </Typography>
                                <Typography pt={2} fontSize='15px'>
                                    The national average cost of buying coin easy.
                                </Typography>
                                <Typography pt={2} borderBottom='1px solid gray'>
                                </Typography>
                                <Box display='flex' alignItems='center' >
                                    <Typography>
                                        <Checkbox {...label} defaultChecked size="small" style={{ color: 'blue' }} />
                                    </Typography>
                                    <Typography fontSize='15px'>
                                        Anti-Bankrupt
                                    </Typography>
                                </Box>
                                <Box display='flex' alignItems='center' >
                                    <Typography>
                                        <Checkbox {...label} defaultChecked size="small" style={{ color: 'blue' }} />
                                    </Typography>
                                    <Typography fontSize='15px'>
                                        Group Consulting
                                    </Typography>
                                </Box>
                                <Box display='flex' alignItems='center' >
                                    <Typography>
                                        <Checkbox {...label} defaultChecked size="small" style={{ color: 'blue' }} />
                                    </Typography>
                                    <Typography fontSize='15px'>
                                        Free Etherum
                                    </Typography>
                                </Box>
                                <Box display='flex' alignItems='center' >
                                    <Typography>
                                        <Checkbox {...label} defaultChecked size="small" style={{ color: 'gray' }} />
                                    </Typography>
                                    <Typography fontSize='15px' color='gray'>
                                        Instanly Echange
                                    </Typography>
                                </Box>
                                <Box display='flex' alignItems='center' >
                                    <Typography>
                                        <Checkbox {...label} defaultChecked size="small" style={{ color: 'gray' }} />
                                    </Typography>
                                    <Typography fontSize='15px' color='gray'>
                                        House Meeting
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item lg={3} md={5}>
                            <Box
                                sx={{
                                    border: 'none',
                                    borderRadius: '10px',
                                    padding: '20px 30px ',
                                    background: 'linear-gradient(90deg, #2745EA 2.94%, #CF7BF4 100%)'
                                }}
                            >
                                <Box display="flex" alignItems='center'>
                                    <Typography variant="h4">
                                        300$
                                    </Typography>
                                    <Typography pl={5}>
                                        / month
                                    </Typography>
                                </Box>
                                <Typography pt={2} variant="h5" color="#fff">
                                    CO-FOUNDERS++
                                </Typography>
                                <Typography pt={2} fontSize='15px'>
                                    The national average cost of buying coin easy.
                                </Typography>
                                <Typography pt={2} borderBottom='1px solid #fff'>
                                </Typography>
                                <Box display='flex' alignItems='center' >
                                    <Typography>
                                        <Checkbox {...label} defaultChecked size="small" style={{ color: 'Black' }} />
                                    </Typography>
                                    <Typography fontSize='15px'>
                                        Group consulting
                                    </Typography>
                                </Box>
                                <Box display='flex' alignItems='center' >
                                    <Typography>
                                        <Checkbox {...label} defaultChecked size="small" style={{ color: 'Black' }} />
                                    </Typography>
                                    <Typography fontSize='15px'>
                                        Free bitcoin
                                    </Typography>
                                </Box>
                                <Box display='flex' alignItems='center' >
                                    <Typography>
                                        <Checkbox {...label} defaultChecked size="small" style={{ color: 'Black' }} />
                                    </Typography>
                                    <Typography fontSize='15px'>
                                        new relation
                                    </Typography>
                                </Box>
                                <Box display='flex' alignItems='center' >
                                    <Typography>
                                        <Checkbox {...label} defaultChecked size="small" style={{ color: 'Black' }} />
                                    </Typography>
                                    <Typography fontSize='15px'>
                                        instanly exchange
                                    </Typography>
                                </Box>
                                <Box display='flex' alignItems='center' >
                                    <Typography>
                                        <Checkbox {...label} defaultChecked size="small" style={{ color: 'Black' }} />
                                    </Typography>
                                    <Typography fontSize='15px'>
                                        House Meeting
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item lg={3} md={5}>
                            <Box
                                sx={{
                                    border: 'none',
                                    borderRadius: '10px',
                                    padding: '20px 30px ',
                                    background: '#271F2F'
                                }}
                            >
                                <Box display="flex" alignItems='center'>
                                    <Typography variant="h4">
                                        100$
                                    </Typography>
                                    <Typography pl={2}>
                                        / month
                                    </Typography>
                                </Box>
                                <Typography pt={2} variant="h5" color="#1552F0">
                                    NETWORKER +++
                                </Typography>
                                <Typography pt={2} fontSize='15px'>
                                    The national average cost of buying coin easy.
                                </Typography>
                                <Typography pt={2} borderBottom='1px solid gray'>
                                </Typography>
                                <Box display='flex' alignItems='center' >
                                    <Typography>
                                        <Checkbox {...label} defaultChecked size="small" style={{ color: 'blue' }} />
                                    </Typography>
                                    <Typography fontSize='15px'>
                                        Anti-Bankrupt
                                    </Typography>
                                </Box>
                                <Box display='flex' alignItems='center' >
                                    <Typography>
                                        <Checkbox {...label} defaultChecked size="small" style={{ color: 'blue' }} />
                                    </Typography>
                                    <Typography fontSize='15px'>
                                        Group Consulting
                                    </Typography>
                                </Box>
                                <Box display='flex' alignItems='center' >
                                    <Typography>
                                        <Checkbox {...label} defaultChecked size="small" style={{ color: 'blue' }} />
                                    </Typography>
                                    <Typography fontSize='15px'>

                                        Free Etherum
                                    </Typography>
                                </Box>
                                <Box display='flex' alignItems='center' >
                                    <Typography>
                                        <Checkbox {...label} defaultChecked size="small" style={{ color: 'blue' }} />
                                    </Typography>
                                    <Typography fontSize='15px' color='#fff'>

                                        instanly exchange
                                    </Typography>
                                </Box>
                                <Box display='flex' alignItems='center' >
                                    <Typography>
                                        <Checkbox {...label} defaultChecked size="small" style={{ color: 'blue' }} />
                                    </Typography>
                                    <Typography fontSize='15px' color='#fff'>
                                        Free House Meeting
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default Plan;