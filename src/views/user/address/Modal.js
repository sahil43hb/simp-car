import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';
// import modal from "assets/images/Modal.png";
import { useNavigate } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    height: '300px',
    width: '350px',
    p: 2,
    borderRadius: '20px'
};

export default function Modals({url, open, handleClose, title,title1, description, btnName, img, showModal = true,OnClick }) {
    //   const [open, setOpen] = React.useState(false);
    //   const handleOpen = () => setOpen(true);
    //   const handleClose = () => setOpen(false);
    const nevigate = useNavigate();

    React.useEffect(() => {
        console.log('Console1233', showModal);
    }, []);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                size="xs"
            >
                <Box sx={style}>
                <Grid style={{ textAlign: 'center',paddingTop: "20px" }}>
                        <Typography variant="h3">{title1}</Typography>
                    </Grid>
                    <Grid lg={12}>
                        <Grid lg={12} style={{ textAlign: 'center' }}>
                            <img alt="not" src={img} style={{ height: 'auto', width: '27%' }} />
                        </Grid>
                    </Grid>
                    <Grid style={{ textAlign: 'center' }}>
                        <Typography variant="h3">{title}</Typography>
                    </Grid>
                    <Grid>
                        <Typography id="modal-modal-description" sx={{ mt: 2, textAlign: 'center' }}>
                            {description}
                        </Typography>
                    </Grid>

                    <Grid sx={{ mt: 2}}>
                        <Button
                            disableElevation
                            onClick={handleClose}
                            type="submit"
                            variant="contained"
                            style={{ background: '#76A81B', width: '100%', alignSelf: 'center', color: '#FFFF' }}
                        >
                            {btnName}
                        </Button>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}
