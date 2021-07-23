// @ts-nocheck
import React from 'react'
import { useHistory } from 'react-router-dom'
import { Grid, Button, Typography, CssBaseline } from '@material-ui/core';

const Landing: React.FC = () => {
    const history = useHistory();
    return (<>
        <div style={
            {
                minHeight: '100vh',
                backgroundImage: "url(https://images.unsplash.com/photo-1594878462522-f6e3db86d0ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80)",
                backgroundRepeat:'no-repeat',
                backgroundSize: 'cover',
                width: '100%',
                height: '100%'
            }
        }>
            <CssBaseline />
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Typography color='textSecondary' align='center' variant='h1'>
                        <p>Accept Cryptos</p>
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography color='textSecondary' align='center' variant='h1'>
                        <div style={{marginBottom: '50px'}}>in Store Now</div>
                    </Typography>
                </Grid>
                <Grid item sm={4} />
                <Grid item sm={4} xs={12}>
                    <Button size='large' variant='contained' fullWidth onClick={() => history.push('/config')}>
                        Get Started
                    </Button>
                </Grid>
                <Grid item sm={4} />
            </Grid>
        </div>
    </>)
}

export default Landing;
