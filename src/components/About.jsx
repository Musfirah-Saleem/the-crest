import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import office2 from '../assets/office2.png'

function About() {

    return (
        <>
            <Box sx={{ padding: '50px 0' }}>
                <Container>
                    <Box textAlign="center" pb={5}>
                        <Typography variant="h5" color='#fff'>
                            WHY The Crest Plus
                        </Typography>
                        <Typography variant="h6" color='#fff' sx={{ fontWeight: 'bold' }}>
                            •The problem and fraud with cryptos, tokens, icos, idos, etc.
                        </Typography>
                    </Box>
                    <Grid container>
                        <Grid item lg={6} md={6} sm={12} mb={4} >
                            <img src={office2} alt="" width='90%' style={{ borderRadius: '8px' }} />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12}>
                            <Typography variant="h6" color="#656776">
                                •Although a huge revolution has arrived in the world of cryptocurrencies and tokens,
                                 it is also true that the use of cybercrime has prospered without limits and has aff
                                 ected one of the best industries, Network Marketing, and tokenization businesses have
                                  returned. where the creators only seek personal performance and abandon their own community.
                                •Also the use of bad practices and misleading information to offer cryptocurrency or 
                                token projects where packages of worthless.
                                •For this reason, the market has become more demanding when  a sustainable project.

                            </Typography>

                            <Box>
                                < Button
                                    variant="contained"
                                    sx={{
                                        fontWeight: 'boild',
                                        borderRadius: "20px",
                                        color: '#fff',
                                        background: "linear-gradient(90deg, #2745EA 2.94%, #CF7BF4 100%)",
                                        padding: '10px 50px',
                                        margin: '30px 0 0'
                                    }}
                                >
                                    Begins Your Journey
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default About;