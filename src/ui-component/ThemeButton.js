import React from 'react';
import { Button, Grid } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';

function ThemeButton({ title, OnClick }) {
    return (
        <>
            <Grid item>
                <Button
                    target="_blank"
                    size="large"
                    style={{
                        backgroundColor: '#92BD44',
                        color: 'white',
                        borderRadius: '30px',
                        padding: '10px 25px',
                        width: '100%'
                    }}
                    onClick={OnClick}
                >
                    {title}
                </Button>
            </Grid>
        </>
    );
}

export default ThemeButton;
