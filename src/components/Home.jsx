import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import {
    Grid,
    Button,
    Container,
    Stack
} from "@mui/material";
import cardimg from '../assets/cardimg.png'
function Home() {
    return (
        <>
            <Box >
                <Container maxWidth="xl">
                    <Grid container justifyContent='space-evenly' alignItems="center">
                        <Grid item lg={6} md={6}>
                            <Typography variant="h6" color='#fff'>
                                WELCOME TO
                            </Typography>
                            <Typography variant='h2' pt={3} color='primary'>
                                THE <Typography variant="span" color="#4B50EC" > CREST+</Typography>
                            </Typography>
                            <Typography variant="h6" color='#fff' sx={{ padding: '30px 0' }}>
                                The first decentralized network that tokenizes products.
                                Click here to enjoy it!
                            </Typography>
                            <Box display="flex">
                                < Button
                                    variant="contained"
                                    sx={{
                                        fontWeight: 'boild',
                                        borderRadius: "20px",
                                        color: '#fff',
                                        background: "linear-gradient(90deg, #2745EA 2.94%, #CF7BF4 100%)",
                                        padding: '10px 50px',
                                        mr: "20px"
                                    }}
                                >
                                    Join Now
                                </Button>
                                < Button
                                    variant="contained"
                                    sx={{
                                        fontWeight: 'boild',
                                        borderRadius: "20px",
                                        color: '#fff',
                                        border: '1px solid #fff',
                                        background: "transparent",
                                        padding: '10px 50px',
                                    }}
                                >
                                    Learn More
                                </Button>
                            </Box>
                            <Box paddingTop="20px" marginBottom='10px'>
                                <a href="https://www.youtube.com/@ahsanjutt4076" rel="noreferrer" target="_blank" style={{ textDecoration: "none", color: '#fff', }}>
                                    <YouTubeIcon style={{
                                        fontSize: "38px",
                                        cursor: "pointer",
                                    }} />
                                </a>
                                <a href="https://www.instagram.com/ahsanjutt4594/" rel="noreferrer" target="_blank" style={{ textDecoration: "none", color: '#fff', padding: '0 0 0 30px' }}>
                                    <  InstagramIcon style={{
                                        fontSize: "38px",
                                        cursor: "pointer",
                                    }} />
                                </a>
                                <a href="https://twitter.com/ahsanbahoo03" rel="noreferrer" target="_blank" style={{ textDecoration: "none", color: '#fff', padding: '0 30px 0 ' }}>
                                    <  TwitterIcon style={{
                                        fontSize: "38px",
                                        cursor: "pointer",
                                    }} />
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=100053033737834" rel="noreferrer" target="_blank" style={{ textDecoration: "none", color: '#fff' }}>
                                    <  FacebookOutlinedIcon style={{
                                        fontSize: "38px",
                                        cursor: "pointer",
                                        color: "white",
                                        
                                    }} />
                                </a>

                            </Box>
                        </Grid>
                        <Grid item lg={4}>
                            <Stack>
                                <img src={cardimg} alt=""  width='100%'/>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default Home;








