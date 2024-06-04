import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, Stack, Grid, InputAdornment, Menu, MenuItem, OutlinedInput, Pagination, Typography } from '@mui/material';

// project imports
import UserList from './UserList';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// assets
import { IconSearch } from '@tabler/icons';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

// ==============================|| USER LIST STYLE 2 ||============================== //

const Teams = () => {
    const theme = useTheme();
    
    return (
        <MainCard
            title="Roles and Permissions"
            secondary={
                <Stack direction="row" spacing={2} alignItems="center">
                    <Grid container >
                        <Grid item xs={6} sm={12} md={12} lg={12} >
                            <OutlinedInput
                                id="input-search-list-style2"
                                placeholder="Search"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <IconSearch stroke={1.5} size="16px" />
                                    </InputAdornment>
                                }
                                size="small"
                            />
                        </Grid>
                    </Grid>
                </Stack>
            }
        >
            <Grid item xs={12} sx={{ padding: { xs: '20px', sm: '0px', md: '0px', lg: '0px' } }}>
                <UserList />
            </Grid>
        </MainCard>
    );
};

export default Teams;
