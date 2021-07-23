// @ts-nocheck
import React from 'react'
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom'

interface State {
    itemName: string;
    cost: string;
}

const Configure: React.FC = () => {
    const history = useHistory();

    const [values, setValues] = React.useState<State>({
        itemName: '',
        cost: '',
        items: []
    })

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (<>
        <Grid container spacing={3} >
            <Grid item xs={12}>
                <Typography variant='h2' align='center'>
                    Add your menu
                </Typography>
            </Grid>
            <Grid item xs={3} />
            <Grid item xs={6}>
                <TextField fullWidth label="Name of Item" onChange={handleChange('itemName')} />
            </Grid>
            <Grid item xs={3} />
            <Grid item xs={3} />
            <Grid item xs={6}>
                <TextField fullWidth label="Cost of Item" onChange={handleChange('itemName')} />
            </Grid>
            <Grid item xs={3} />

            <Grid item xs={3} />
            <Grid item xs={6}>
                {
                    //TODO add functionality to add items to an array that you will display on transactions page
                }
                <Button fullWidth size='large'>
                    Add item
                </Button>
            </Grid>
            <Grid item xs={3} />

            <Grid item xs={3} />
            <Grid item xs={6}>
                {
                    //TODO add passing of items to transaction page
                    // use params or headers? or pass as obj?
                }
                <Button fullWidth size='large' onClick={() => history.push('/transaction')}>
                    Make your first transaction
                </Button>
            </Grid>
            <Grid item xs={3} />
        </Grid>
    </>)
}

export default Configure
