import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Grid from '@mui/material/Grid';
import add1 from '../assets/add1.png'
import add2 from '../assets/add2.png'
import add3 from '../assets/add3.png'
import add4 from '../assets/add4.png'
import add5 from '../assets/add5.png'
function Adds() {

    return (
        <>
            <Box
                sx={{
                    background: 'linear-gradient(90deg, #2745EA 2.94%, #CF7BF4 100%)',
                    padding: '20px '
                }}
            >
                <Container>
                    <Typography variant="h3" textAlign='center' >
                        Our Alliances
                    </Typography>
                    <Grid container pt={10} justifyContent='center' textAlign='center' columnSpacing={{ xl: 6, lg: 6, md: 6, sm: 6 }} rowSpacing={{ md: 5, sm: 5, xs: 7 }}>
                        <Grid item lg={2} md={4} sm={6}>
                            <img src={ add1} alt='' />
                        </Grid>
                        <Grid item lg={2} md={4} sm={6}>
                            <img src={ add2} alt='' />

                        </Grid>
                        <Grid item lg={2} md={4} sm={6}>
                            <img src={ add3} alt='' />

                        </Grid>

                        <Grid item lg={2} md={4} sm={6}>
                            <img src={add4 } alt='' />

                        </Grid>
                        <Grid item lg={2} md={4} sm={6}>
                            <img src={ add5} alt='' />

                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default Adds;