import React from "react";
import { Container, Button, Typography, Box } from "@mui/material";
import Grid from '@mui/material/Grid';
import ButtonGroup from '@mui/material/ButtonGroup';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SettingsIcon from '@mui/icons-material/Settings';
import Rotate90DegreesCwIcon from '@mui/icons-material/Rotate90DegreesCw';
import bigcoin from '../assets/bigcoin.png'
const buttons = [
    <Button key="one"
        style={{
            borderRadius: '30px 0  0 30px',
            padding: '10px 30px', background: '#fff', color: 'black'
        }}
    >BUY</Button>,
    <Button key="two" style={{
        padding: '0 30px', background: '#A29AB3', color: 'black'
    }}
    >SWAP</Button>,
    <Button key="three"
        style={{
            borderRadius: '0px 30px  30px 0px',
            padding: '0 10px', background: '#fff', color: 'black'
        }}
    >LIQUIDITY</Button>,
];

export default function GroupSizesColors() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > *': {
                    // m: 1,
                    padding: '50px 0'
                },
            }}
        >
            <ButtonGroup size="large" aria-label="large button group">
                {buttons}
            </ButtonGroup>

            <Container>
                <Grid container pt={10} justifyContent='center' alignItems='center' columnSpacing={{ xl: 6, lg: 6, md: 6, sm: 6 }} rowSpacing={{ md: 5, sm: 5, xs: 7 }}>
                    <Grid item lg={4} md={4}>
                        <Typography variant='h3' pt={3} color='primary'>
                            THE<Typography variant="span" color="#4B50EC" > CREST+ </Typography>SWAP
                        </Typography>
                    </Grid>

                    <Grid item lg={4} md={4}>
                        <Box
                            sx={{
                                border: '2.5px solid #212125',
                                borderRadius: '20px',
                                padding: '10px 0'
                            }}
                        >
                            <Box display='flex' justifyContent='space-between' alignItems='center' sx={{ padding: '10px 15px 20px' }}>
                                <Typography >
                                    Swap
                                </Typography>
                                <Box display='flex'>
                                    <AccessTimeIcon style={{ color: '#8B58B7' }} />
                                    <SettingsIcon style={{ color: '#8B58B7' }} />
                                </Box>
                            </Box>
                            <Typography borderBottom='2px solid #1F1F22'>
                            </Typography>
                            <Box padding='0 30px'>
                                <Typography pt={4}>
                                    <label htmlFor="">From</label>
                                    <input type='text' min='0' style={{
                                        outline: 'none', border: 'none', borderRadius: '8px',
                                        background: '#0C0C0C', color: 'white', fontSize: '20px', width: '100%', padding: '13px 8px'
                                    }} />
                                </Typography >
                                <Typography mb={5} pt={3} variant="h6">
                                    <label htmlFor="">To</label>
                                    <input type='text' min='0' style={{
                                        outline: 'none', border: 'none', borderRadius: '8px',
                                        background: '#0C0C0C', color: 'white', fontSize: '20px', width: '100%', padding: '13px 8px'

                                    }} />
                                </Typography >
                            </Box>
                            <Typography borderBottom='2px solid #1F1F22'>
                            </Typography>
                            <Box padding='20px 10px 10px'>
                                < Button
                                    variant="contained"
                                    sx={{
                                        fontWeight: 'boild',
                                        borderRadius: "20px",
                                        color: '#fff',
                                        background: "linear-gradient(90deg, #2745EA 2.94%, #CF7BF4 100%)",
                                        width: '100%',
                                        padding: '10px 0'
                                    }}
                                >
                                    <Rotate90DegreesCwIcon
                                        style={{
                                            fontSize: '18px',
                                            margin: '0 2px 0 0'
                                        }} />  Convert
                                </Button>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item lg={4} md={4}>
                        <img src={bigcoin} alt="" />
                    </Grid>
                </Grid>
            </Container>

        </Box>
    );
}