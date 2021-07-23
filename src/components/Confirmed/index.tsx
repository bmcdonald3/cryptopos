// @ts-nocheck
import { Grid, Typography, Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';

const Confirmed: React.FC = () => {
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
                    <Typography align='center' variant='h3'>
                        Transaction Confirmed
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <img 
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Eo_circle_green_white_checkmark.svg/1200px-Eo_circle_green_white_checkmark.svg.png'
                        style={pictureStyle}
                    />
                </Grid>
                <Grid item sm={3} />
                <Grid item sm={6} xs={12}>
                    <Button align='center' fullWidth onClick={()=>{history.push('/transaction')}}>Make another transaction</Button>
                </Grid>
                <Grid item sm={3} />
            </Grid>
            
        </>
    );
}

export default Confirmed;