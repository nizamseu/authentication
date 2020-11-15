import { Button, Grid, Typography } from '@material-ui/core';
import React  from 'react';
import { useHistory } from 'react-router-dom';


const ProductPage = () => {
    const history= useHistory();
    const handleProceed =()=> {
       history.push("/shipment")
        
    }


    return (
        <div>
            <h1>This Is product Page</h1>
           
            <Grid container alignItems="center" justify="center" >
                <Button onClick={()=> handleProceed()} color="primary" size="large" >
                    <Typography variant="h1">Proceeed To Shipment</Typography>
                    </Button>
            </Grid>
          
        </div>
    );
};

export default ProductPage;