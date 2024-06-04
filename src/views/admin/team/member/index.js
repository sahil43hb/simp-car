import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Box, Tab, Tabs, Grid, Typography } from '@mui/material';

// project imports

import MainCard from 'ui-component/cards/MainCard';
import All from './All';

// ==============================|| PROFILE 3 ||============================== //

const RolesPermissions = () => {
    const [value, setValue] = React.useState(0);
   

    return (
        <MainCard title="Members">
            <All />
        </MainCard>
    );
};

export default RolesPermissions;
