import React, { useState, useEffect } from 'react';
import Dropzone from 'react-dropzone';
import adminAxios from 'utils/adminAxios';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';
import ThemeButton from 'ui-component/ThemeButton';

// project imports
import BackupSystem from './BackupSystem';

// ==============================|| USER LIST STYLE 2 ||============================== //

const Backup = () => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClose = () => {
        setAnchorEl(null);
    };
    

    return (
        <Grid>
            <BackupSystem />
        </Grid>
    );
};

export default Backup;
