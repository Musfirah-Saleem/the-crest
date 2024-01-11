import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import people from '../assets/people.png'

function TokenPart2() {

    return (
        <>
            <Box sx={{ padding: '50px 0' }}>
                <Container>
                    <Grid container alignItems="center">
                        <Grid item lg={6} md={6} sm={12} mb={2}>
                            <Typography variant="h4" sx={{fontWeight:'400'}} color="#fff">
                                WHAT ABOUT
                            </Typography>
                            <Typography variant="h4" sx={{fontWeight:'bold'}}  color="#fff" pt={1} pb={1}>
                            Our Affiliate Program?
                            </Typography>
                            <Typography variant="h6" color="#656776">
                            Use your skills to spread the word about the educational materials 
                            and encourage more people to use the program, and at the same time
                             pad your wallet.
                            </Typography>
                            <Typography variant="h6" color="#656776" pt={2}>
                            The Crest Plus affiliate system is designed for you to practice 
                            while you learn and earn money with them. All digital products are 
                            decentralized into smart contracts on the Binance Smart Chain.
                            </Typography>
                        </Grid>
                        <Grid item pt={4.5} lg={6} md={6} sm={12} textAlign='center'>
                            <img src={people} alt="" width='97%' style={{ borderRadius: '8px' }} />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default TokenPart2;