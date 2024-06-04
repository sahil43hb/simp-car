import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';
import { useNavigate } from 'react-router-dom';
import { Stack, Grid, Button } from '@mui/material';
import adminAxios from 'utils/adminAxios';
import SubCard from 'ui-component/cards/SubCard';
import Modals from '../../user/auth/Modal';
import picture from 'assets/images/picture.png';

function TemplatePage(props) {
    const editor = useRef(null);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const { row, id, status, successCallback } = props;

    const [content, setContent] = useState();
    const token = window.localStorage.getItem('userServiceToken');
    const handleOpen = async () => {
        try {
            const response = await adminAxios.post(`/save-invoice-templates/${id}`, { token, content });
            if (response.data === 'success') {
                setOpen(true);
                successCallback(true);

            }
        } catch (error) {
            console.error(error);
        }
    };
    const handleActive = async () => {
        try {
            const response = await adminAxios.post(`/active-invoice-template/${id}`, { token, content });
            if (response.data === 'success') {
                setOpen(true);
                successCallback(true);

            }
        } catch (error) {
            console.error(error);
        }
    };
    
    // console.log("Status=>",status);

    return (
        <SubCard>
            <Stack spacing={2}>
                <JoditEditor ref={editor} value={row} onChange={(newContent) => setContent(newContent)} />

                <Grid item xs={12} md={12} lg={12}>
                    <Grid item xs={12} md={12} lg={12} style={{ textAlign: 'right', height: '50vh' }}>
                        {status === '1' ? (
                            <Button disabled style={{ background: '#76a81b', border: 'none', color: '#FFFFFF', marginRight: '8px' }}>
                                Active
                            </Button>
                        ) : (
                            <Button
                                style={{ background: '#76a81b', border: 'none', color: '#FFFFFF', marginRight: '8px' }}
                                onClick={handleActive}
                            >
                                Mark as active
                            </Button>
                        )}
                        <Button style={{ background: '#76a81b', border: 'none', color: '#FFFFFF' }} onClick={handleOpen}>
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </Stack>
            <Modals
                open={open}
                handleClose={handleClose}
                title={<h3>SuccessFull</h3>}
                description="Record Updated Successfully"
                btnName="Ok"
                url={handleClose}
                img={picture}
            />
        </SubCard>
    );
}

export default TemplatePage;
