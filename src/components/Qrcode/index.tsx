// @ts-nocheck
import { Typography, Grid } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import qr from './frame.png'

const Qrcode: React.FC = () => {
    const { cost } = useParams();

    const pictureStyle = {
        width: '100%'
    }

    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant='h4' align='center'>
                        QR code for ${cost} to your business
                    </Typography>
                </Grid>

                <Grid item sm={3} />
                <Grid item sm={6} xs={12}>
                    <img src={qr} style={pictureStyle}></img>
                </Grid>
            </Grid>
            
        </>
    );
}

export default Qrcode;