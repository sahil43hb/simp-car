import React, { useState } from 'react';
import { Box, Grid, Button, Typography } from '@mui/material';
import Dropzone from 'react-dropzone';
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import car from 'assets/images/car.png';
import axios from 'axios';
import adminAxios from 'utils/adminAxios';
import { useNavigate } from 'react-router-dom';
import Modals from 'views/user/auth/Modal';
import picture from 'assets/images/picture.png';
import { Container, textAlign } from '@mui/system';
import { useTheme } from '@mui/material/styles';

export default function Bilde() {
    const theme = useTheme();
    const navigate = useNavigate();
    const [value, setValue] = useState(0);
    const [selectedImages, setSelectedImages] = useState([]);
    const token = window.localStorage.getItem('userServiceToken');
    const url = window.location.pathname;
    const id = parseInt(url.split('/').pop(), 10);
    const [open, setOpen] = useState(false);
    const handleModalClose = () => setOpen(false);
    const [err,setErr] = useState();

    const handleImageChange = (images) => {
        setSelectedImages(images);
    };
    console.log("dasf=>",selectedImages.length)

    const handleImageUpload = async () => {
        try {
            const formData = new FormData();
            formData.append('token', window.localStorage.getItem('userServiceToken'));
            selectedImages.forEach((image) => {
                formData.append('images[]', image);
            });

            const response = await adminAxios.post(`/add-car-images/${id}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
                token
            });
            if (response.data === 'success') {
                setOpen(true);
            }
        } catch (error) {
            console.error('Error uploading images:', error);
            setErr(error.response.data);
        }
    };

   

    return (
        <MainCard container content={false} title="Car Images" >
        <Container maxWidth="">
            <SubCard content={false}  sx={{padding:"50px"}}>
           
                <Grid container spacing={2} align="center" lg={10}>
                    {/* Display selected images */}
                    {selectedImages.map((image, index) => (
                        <Grid item xs={6} sm={6} md={3} lg={3} style={{ paddingTop: '0px', marginRight: '-90px' }} key={index}>
                            <img src={URL.createObjectURL(image)} alt="not" style={{ width: '50%', boxShadow: theme.shadows[8], height: '100%', content: 'fill' }} />
                        </Grid>
                    ))}
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={12}>
                    {/* Use Dropzone to allow image selection */}
                    <Dropzone onDrop={handleImageChange}>
                        {({ getRootProps, getInputProps }) => (
                            <section>
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                
                                    <Button type='button' sx={{background:"#92bd44",color:"#FFFF" ,'&:hover': {color: '#92bd44',},marginTop: '30px'}} >Upload Images</Button>
                                </div>
                            </section>
                        )}
                    </Dropzone>
                   
                </Grid>
             {selectedImages.length === 0 || selectedImages.length < 3 ? <Typography variant='h5' sx={{textAlign:"center",color:"red"}}>Min Upload Images:3,Max Upload Images:6</Typography> : " "}
             {selectedImages.length > 6 ? <Typography variant='h5' sx={{textAlign:"center",color:"red"}}>Min Upload Images:3,Max Upload Images:6</Typography> : " "}
            </SubCard>
           
            </Container>

            <Grid container sx={{ justifyContent: 'end', padding: '20px' }}>
            <Grid>
                <AnimateButton>
                    <Button variant="contained" size="large" onClick={handleImageUpload}>
                        Save
                    </Button>
                </AnimateButton>
            </Grid>
        </Grid>
        <Grid>
            <p style={{color: 'red'}}>{err}</p>
        </Grid>
            <Modals
                open={open}
                handleClose={handleModalClose}
                title={<h3>SuccessFull</h3>}
                description="Car Added Successfully"
                btnName="Ok"
                url={() => navigate('/admin/listing')}
                img={picture}
            />
        </MainCard>
    );
}
