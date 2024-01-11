import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import man from '../assets/man.png'
import tag from '../assets/tag.png'
function CrestToken() {

    return (
        <>
            <Box sx={{ padding: '50px 0' }}>
                <Container>
                    <Box textAlign="center" pb={5}>
                        <Box display='flex' justifyContent='center' alignItems="center"  >
                            <img src={tag} alt='' height={80} />
                            <Typography variant="h4" color='#fff' sx={{ fontWeight: '600' }}>
                                The Crest Token and Our Training Program
                            </Typography>
                        </Box>
                        <Typography variant="h4" color='#fff' sx={{ fontWeight: '800' }} pb={2} pt={3}>
                            Do you want something more advanced?
                        </Typography>
                        <Typography color='#656776' variant="h6">
                            We've got good news, we've got you covered with higher education materials that will expand your knowledge even further.
                            Personal Overcoming, Coatching, Blockchain, Crypto, Trading, and very soon more topics are coming for personal and business empowerment.
                        </Typography>
                    </Box>
                    <Grid container alignItems='center'>
                        <Grid item lg={6} md={6} sm={12} mb={2}>
                            <img src={man} alt="" width='97%' style={{ borderRadius: '8px' }} />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12}>
                            <Typography variant="h4" color='#fff'>
                                Train and Grow
                            </Typography>
                            <Typography variant="h6" color="#656776" pb={3} pt={3}>
                                All affiliates of The Crestería Plus+ will have the ability to learn from our full range of digital video tutorials.
                            </Typography>
                            <Typography variant="h6" color="#656776">
                                Use any of our growth and development tools to increase your skills to grow in the digital world of our business.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default CrestToken;