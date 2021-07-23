// @ts-nocheck
import { Typography, Grid, Button } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import qr from './frame.png'
import { useHistory } from 'react-router-dom'

const Qrcode: React.FC = () => {
    const { cost } = useParams();
    const history = useHistory();

    const pictureStyle = {
        width: '50%',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
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
                    <img src={qr} style={pictureStyle} alt='qr code'></img>
                </Grid>
                <Grid item sm={3} />
                <Grid item sm={3} />
                <Grid item sm={6} xs={12}>
                    <Button align='center' fullWidth onClick={()=>{history.push('/transaction')}}>Make another transaction</Button>
                </Grid>
                <Grid item sm={3} />
            </Grid>
            
        </>
    );
}

export default Qrcode;