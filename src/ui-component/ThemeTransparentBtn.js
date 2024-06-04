import React from 'react';
import { Button, Grid } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';

function ThemeTransparentBtn({ title, OnClick }) {
    return (
        <>
            <Grid item>
                <Button
                    size="large"
                    style={{
                        border: '1px solid #92BD44',
                        backgroundColor: 'white',
                        color: '#92BD44',
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

export default ThemeTransparentBtn;
