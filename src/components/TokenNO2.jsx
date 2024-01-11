import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import React from "react";
import card from '../assets/card.png'

function TokenNO2() {

    return (
        <>
            <Box padding='0 0 30px'>
                <Container>
                    <Grid container pt={3}>
                        <Grid item lg={6} md={6} sm={12} pb={5}>
                            <Stack>
                                <img src={card} alt="" width='95%' style={{ borderRadius: '8px' }} />
                            </Stack>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12}>
                            <Typography variant="h6" color="#656776">
                                •4. Marketplace from the web, you can exchange tokens for coffee or other raw materials, items with a discount price for a possible resale, example: you buy 50 kilos in the Marketplace (online coffee store that accepts cryptocurrencies) at a price "with a discount" than in the international market and sells the product nationally or internationally by having a prior license and barista course with us.
                                •5. The intention is to create an ecosystem that works around coffee and other raw materials with the token, so in the Marketplace you will be able to buy a wide range of items with tokens.
                                •6. Telegram bot. A service of how to unite buyers and sellers with a P2P system
                                •7. Physical points such as 3 points of sale already available (one of them in Bogotá) or different points of sale in the future in the Colombian country or others countries when we expand (conditions and the possibility of creating franchises apply).
                                
                                
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>

            </Box>
        </>
    );
}

export default TokenNO2;