import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Drawer, Fab, Grid, IconButton, Tooltip, Button } from '@mui/material';
import { IconSettings } from '@tabler/icons';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports

import { gridSpacing } from 'store/constant';
import ModalData from './ModalData';

// ==============================|| LIVE CUSTOMIZATION ||============================== //

const ModalDetail = () => {
    const theme = useTheme();

    // drawer on/off
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <>
            {/* toggle button */}

            <Grid>
                <Button
                    onClick={handleToggle}
                    size="large"
                    style={{
                        backgroundColor: '#ffffff',
                        color: '#92B D44',
                        borderRadius: '30px',
                        padding: '10px 25px',
                        width: '100%'
                    }}
                >
                  
Anfrage Angebot
                </Button>
            </Grid>

            <Drawer
                anchor="right"
                onClose={handleToggle}
                open={open}
                PaperProps={{
                    sx: {
                        width: 800
                    }
                }}

                // sx={{ width: { xs: 100, sm: 500, md: 600,lg:800 } }}


            >
                {open && (
                    <PerfectScrollbar component="div">
                        <Grid container spacing={gridSpacing} sx={{ p: 3 }}>
                            <ModalData />
                        </Grid>
                    </PerfectScrollbar>
                )}
            </Drawer>
        </>
    );
};

export default ModalDetail;
