import { Box, Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import logo from '../assets/biglogo.png'
import probgimg from "../assets/probgimg.png"
import map1 from "../assets/map1.png"

function Project() {

    return (
        <>
            <Box
                sx={{
                    backgroundImage: `url(${probgimg})`,
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    padding: '30px 0'
                }}
            >
                <Container>
                    <Box textAlign="center" pb={5}>
                        <Typography variant="h5" color='#fff'>
                            <img src={logo} alt="" />
                        </Typography>
                        <Typography variant="h4" color='#fff' sx={{ fontWeight: 'bold' }}>
                            THE  KEYS TO PROJECT SUCCESS
                        </Typography>
                        <Box sx={{ textAlign: 'center' }}>

                            <Typography color="#D6DAFF" mt={3} mb={3}>
                                Exchange value and payments in a natural, simple way, anywhere in the world and
                                that gives you control and not any intermediary. At the same time, its adoption
                                and use make it a strong option to increase and protect our
                                personal and business assets with both physical and online private wallets
                            </Typography>

                            <Typography color="#D6DAFF">
                                Its decentralized origin allows the elimination of expensive and unnecessary additions that
                                make any movement that we want to do with our money more expensive.
                                THECREST's global expansion brings the singular of people closer to Blockchain, finance,
                                technologies and the new digital era.
                            </Typography>
                        </Box>
                    </Box>
                    <Stack justifyContent='center'>

                  <img src={map1} alt="" width='100%'/>  
                    </Stack>
                </Container>


            </Box>
        </>



    )
}


export default Project; 