// @ts-nocheck
import { Button, Card, CardActions, CardContent, Grid, TextField, Typography } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';

interface State {
    amount: string;
}

const Transaction: React.FC = () => {
    const totalCost = 5;

    const [values, setValues] = React.useState<State>({
        amount: ''
    })

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant='h2' align='center'>
                        Order
                    </Typography>
                </Grid>
                <Grid item sm={3} />
                <Grid item sm={9} xs={12}>
                    <Typography variant='h3'>
                        total: ${totalCost}
                    </Typography> 
                </Grid>

                <Grid item sm={3} />
                <Grid item sm={6} xs={12}>
                    <TextField fullWidth label="Custom Amount" onChange={handleChange('amount')} />
                </Grid>
                <Grid item sm={3} />

                <Grid item sm={3} />
                <Grid item sm={9}>
                    <Button size="small">Add to transaction</Button>
                </Grid>

                <Grid item sm={3} />
                <Grid item xs={12} sm={6}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                            Menu Item
                            </Typography>
                            <Typography variant="h5" component="h2">
                                Bread
                            </Typography>
                            <Typography color="textSecondary">
                            $1.50
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Add to transaction</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item sm={3} />

                <Grid item sm={3} />
                <Grid item xs={12} sm={6}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                            Menu Item
                            </Typography>
                            <Typography variant="h5" component="h2">
                                Bread
                            </Typography>
                            <Typography color="textSecondary">
                            $1.50
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Add to transaction</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item sm={3} />

                <Grid item sm={3} />
                <Grid item sm={6} xs={12}>
                    <Link to={`/qr/${totalCost}`}>
                        <Button size='large' variant='contained' fullWidth>
                            Generate QR Code
                        </Button>
                    </Link>
                </Grid>
                <Grid item sm={1} />
            </Grid>
        </>
    );
}

export default Transaction;

