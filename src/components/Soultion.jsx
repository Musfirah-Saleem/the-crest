import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import office3 from '../assets/office3.png'

function Soultion() {

    return (
        <>
            <Box sx={{ padding: '50px 0' }}>
                <Container>
                    <Grid container alignItems="center">
                        <Grid item lg={6} md={6} sm={12} >
                            <Typography variant="h5" color="#fff" pt={1} pb={1}>
                                The Crest Solution
                            </Typography>
                            <Typography variant="h6" color="#656776">
                                •THECREST token was born with the vision and premise of being part of and being
                                a fundamental player in the new era of Blockchain technology; making room by co
                                mbining two important agents such as "raw materials" and "Blockchain Technology"
                                to break into the heart of all countries and standardize a value at the regional
                                level for a currency of use daily global reach.
                                •For years the Referral Marketing Industry had unsuccessfully tried to be part of t
                                he crypto market, giving rise to pyramid schemes, fraud, ponzi scams, dubious busin
                                esses such as Madoff, EverGrande in 2021 and.
                            </Typography>
                        </Grid>
                        <Grid item pt={4.5} lg={6} md={6} sm={12} textAlign='center'>
                            <img src={office3} alt="" width='90%' style={{ borderRadius: '8px' }} />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default Soultion;