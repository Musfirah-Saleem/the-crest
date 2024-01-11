import React from "react";
import { Container, Typography, Box,Button } from "@mui/material";
import Grid from '@mui/material/Grid';
import bgfooter from '../assets/bgfooter.png'
import bigcoin from '../assets/biglogo.png'
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
function Adds() {

    return (
        <>
            <Box
                sx={{
                    backgroundImage: `url(${bgfooter})`,
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    padding: '30px 0'
                }}
            >
                <Container>
                    <Grid container pt={10} justifyContent='center' columnSpacing={{ xl: 6, lg: 6, md: 6, sm: 6 }} rowSpacing={{ md: 5, sm: 5, xs: 7 }}>
                        <Grid item lg={3} md={5}>
                            <img src={bigcoin} alt='' height='150' />
                        </Grid>
                        <Grid item lg={3} md={5}>
                            <Typography variant="h5">
                                The Crest +
                            </Typography>
                            <Typography color="#D6DAFF">
                                We are always here for constant support so don't hesitate to reach out if you have any questions or problems!
                            </Typography>
                            <Box paddingTop="20px">
                                <a href="https://www.youtube.com/@ahsanjutt4076" rel="noreferrer" target="_blank" style={{ textDecoration: "none", color: '#fff', }}>
                                    <YouTubeIcon style={{
                                        fontSize: "30px",
                                        cursor: "pointer",
                                    }} />
                                </a>
                                <a href="https://www.instagram.com/ahsanjutt4594/" rel="noreferrer" target="_blank" style={{ textDecoration: "none", color: '#fff', padding: '0 0 0 30px' }}>
                                    <  InstagramIcon style={{
                                        fontSize: "30px",
                                        cursor: "pointer",
                                    }} />
                                </a>
                                <a href="https://twitter.com/ahsanbahoo03" rel="noreferrer" target="_blank" style={{ textDecoration: "none", color: '#fff', padding: '0 30px 0 ' }}>
                                    <  TwitterIcon style={{
                                        fontSize: "30px",
                                        cursor: "pointer",
                                    }} />
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=100053033737834" rel="noreferrer" target="_blank" style={{ textDecoration: "none", color: '#fff' }}>
                                    <  FacebookOutlinedIcon style={{
                                        fontSize: "30px",
                                        cursor: "pointer",
                                        color: "white",
                                    }} />
                                </a>

                            </Box>
                        </Grid>
                        <Grid item lg={3} md={5}>
                            <Typography variant="h5">
                                LEGAL
                            </Typography>
                            <Typography color="#D6DAFF">
                                Income Disclaimer
                                Terms & Services
                                Smart Contract
                            </Typography>

                        </Grid>

                        <Grid item lg={3} md={5}>

                            < Button
                                variant="contained"
                                sx={{
                                    fontWeight: 'boild',
                                    borderRadius: "20px",
                                    color: '#fff',
                                    background: "linear-gradient(90deg, #2745EA 2.94%, #CF7BF4 100%)",
                                    padding: '10px 50px',
                                    margin:'30px 0 0'
                                }}
                            >
                                JOIN THE CREST +
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default Adds;