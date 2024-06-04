import { useState } from 'react';

// material-ui

import { Drawer, Grid, Button } from '@mui/material';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports

import { gridSpacing } from 'store/constant';

import ModalForm from './ModalForm';

// ==============================|| LIVE CUSTOMIZATION ||============================== //

const SidebarModal = () => {
    // drawer on/off
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <>
            {/* toggle button */}

            <Grid>
                <Button className="btnTransprant" onClick={handleToggle}>
                    FORMULAR AUSFÜllen
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
            >
                {open && (
                    <PerfectScrollbar component="div">
                        <Grid container spacing={gridSpacing} sx={{ p: 3 }}>
                            <ModalForm />
                        </Grid>
                    </PerfectScrollbar>
                )}
            </Drawer>
        </>
    );
};

export default SidebarModal;
