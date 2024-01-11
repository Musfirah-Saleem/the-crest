import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import office from '../assets/ofice.png'
function Behind() {

    return (
        <>
            <Box
                sx={{
                    backgroundImage: `url(${office})`,
                    backgroundPosition: '100% 100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    padding: '150px 0',
                    width:'100%'
                }}
            >
                <Container>
                    <Grid container>
                        <Typography variant="h4" color='#656776'>
                            Who's Behind The Crest Plus +?
                        </Typography>
                        <Typography pt={2} variant="h6" color="#656776">
                            <Typography variant="h6" color="#656776">
                            •Although a huge revolution has arrived in the world of cryptocurrencies
                            </Typography>
                            <Typography variant="h6" color="#656776">
                            and tokens, it is also true that the use of cybercrime has prospered with
                            </Typography>
                            <Typography variant="h6" color="#656776">
                            out limits and has affected one of the best industries, Network Marketin
                            </Typography>
                            <Typography variant="h6" color="#656776">
                            g, and tokenization businesses have returned. where the creators only s
                            </Typography>
                            <Typography variant="h6" color="#656776">
                            •Also the use of bad practices and misleading information to offer crypt
                            </Typography>
                            <Typography variant="h6" color="#656776">
                            currency or token projects where packages of worthless coins are sold t
                            </Typography>
                            at do not prosper in the market and multiple businesses, exchanges and<br />
                            •For this reason, the market has become more demanding when  a sustle.
                            <Typography variant="h4" color='#656776' pt={3}>
                                WE ARE THE CREST +
                            </Typography>
                        </Typography>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default Behind;