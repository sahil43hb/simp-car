import React from 'react';
import { Container, Grid, Card } from '@mui/material';
import Header from './HeaderTabs';
import FilterBar from './FilterBar';
import ProductCard from './ProductCard';

export default function BookCar() {
    return (
        <Grid>
            <Grid>
                <Header />
            </Grid>
            <Grid>
                <FilterBar />
            </Grid>
            <Grid sx={{ marginTop: { xs: '150px', sm: '0px' } }}>
                <ProductCard />
            </Grid>
        </Grid>
    );
}
