import { Box, Button, Container, Grid, Typography, Stack } from "@mui/material";
import React from "react";
import coffee from "../assets/cofee.png";
import card from '../assets/card.png'

function Token() {

    return (
        <>
            <Box sx={{ padding: '50px 0' }}>
                <Container>
                    <Box textAlign="center" pb={3}>
                        <Typography variant="h4" color='#fff'>
                            Monetization and use of the TCT Token
                        </Typography>
                        <Typography variant="h6" pt={3} pb={3} color='#656776' >
                            •Don't worry, we have thought of everything. We have covered all the aspects to make the project grow so you can monetize it. We solve one of the biggest problems that exists and that is how to convert my earnings and profits into local money (FIAT) or into tangible products such as COFFEE.
                        </Typography>
                        <Box>
                            < Button
                                variant="contained"
                                sx={{
                                    fontWeight: 'boild',
                                    borderRadius: "20px",
                                    color: '#fff',
                                    background: "linear-gradient(90deg, #2745EA 2.94%, #CF7BF4 100%)",
                                    padding: '15px 40px',
                                    // margin: '30px 0 0'
                                }}
                            >
                                Start Learning How to
                            </Button>
                        </Box>
                    </Box>
                    <Grid container pt={3}>
                        <Grid item lg={6} md={6} sm={12}>
                            <Stack>
                                <img src={coffee} alt="" width='100%' />
                            </Stack>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12}>
                            <Typography variant="h4" textAlign='center'>
                                Ways to Monetize
                            </Typography>
                            <Typography variant="h6">
                                For the token investor there are several ways to Monetize:
                            </Typography>
                            <Typography variant="h6" color="#656776">
                                1. You can monetize on the Blockchain through our web 3.0 from the page www.mycoffee.pro Through the private Exchange (in process and tests... and if the tests are positive it will be launched in 2023) where you will exchange your tokens for BUSD and other pairs on the Binance Chain (BC).
                                •2. In the DEX (such as PancakeSwap (https://pancakeswap.finance) among others, it is the technological evolution of a traditional decentralized Exchange which transfers all its operation to the Blockchain running on powerful Smart contracts, with which everything is managed within the platform… when there is a large community because starting at the beginning is not advantageous and is very risky.
                                •3. Monetize it through the official wallet and the store www.mycoffee.pro/store
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>

            </Box>
        </>
    );
}

export default Token;