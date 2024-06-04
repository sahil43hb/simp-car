import React, { useState, useEffect } from 'react';

// material-ui
import { Button, Step, Stepper, StepLabel, Stack, Typography, Grid } from '@mui/material';

// project imports
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { Container } from '@mui/system';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import lamoisineImg from 'assets/images/landing/Limousine.png';
import { useNavigate } from 'react-router-dom';
import myAxios from 'utils/myAxios';
import Modals from 'views/user/auth/Modal';
import picture from 'assets/images/picture.png';

// step options
const steps = ['Dein Abo', 'Mieterdaten', 'Abschluss'];
const Tabs = (props) => {
    const [inputDate, setInputDate] = useState();
    const [radioValue, setRadioValue] = useState();
    const [response, setResponse] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [street, setStreet] = useState();
    const [no, setNo] = useState();
    const [postCode, setPostCode] = useState();
    const [town, setTown] = useState();
    const [nationality, setNationality] = useState();
    const [permit, setPermit] = useState();
    const [birthDate, setBirthDate] = useState();
    const [employment, setEmployment] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [gender, setGender] = useState();

    const handleInputChange = (newDate, newRadio) => {
        // setInputDate(newDate);
        // setInputDate((prevData) => ({ ...prevData, ...data }));
        setInputDate(newDate);
        setRadioValue(newRadio);
    };
    const date = new Date(inputDate);
    const date1 = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const fulldate = `${month < 10 ? `0${month}` : `${month}`}${'/'}${date1}${'/'}${year}`;
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handlePaymentForm = (
        newFirstName,
        newGender,
        newlastName,
        newStreet,
        newNo,
        newPostCode,
        newTown,
        newNationality,
        newPermit,
        newBirthdate,
        newEmployment,
        newPhone,
        newEmail
    ) => {
        setFirstName(newFirstName);
        setGender(newGender);
        setLastName(newlastName);
        setStreet(newStreet);
        setNo(newNo);
        setPostCode(newPostCode);
        setTown(newTown);
        setNationality(newNationality);
        setPermit(newPermit);
        setBirthDate(newBirthdate);
        setEmployment(newEmployment);
        setPhone(newPhone);
        setEmail(newEmail);
    };
    const { company, model, price, transmission, fuel, kiloMeter, monthly, calculatedPrice } = props;
    const handleOpen = async () => {
        const token = window.localStorage.getItem('adminServiceToken');
        const url = window.location.pathname;
        const urlParts = url.split('/');
        const id = parseInt(urlParts[2], 10);
        const kiloMeter = parseInt(urlParts[3], 10);
        const monthly = parseInt(urlParts[4], 10);
        const calculatedPrice = parseInt(urlParts[5], 10);
        const date = fulldate;
        const method = radioValue;

        try {
            setResponse(
                await myAxios.post(`/sub/${id}`, {
                    token,
                    price,
                    date,
                    method,
                    firstName,
                    lastName,
                    street,
                    no,
                    postCode,
                    town,
                    nationality,
                    permit,
                    birthDate,
                    employment,
                    phone,
                    email,
                    gender,
                    kiloMeter,
                    monthly,
                    calculatedPrice
                })
            );
        } catch (error) {
            console.error(error);
        }
    };

    function getStepContent(step) {
        switch (step) {
            case 0:
                return <AddressForm company={company} model={model} price={price} inputDate={setInputDate} inputMethod={setRadioValue} />;
            case 1:
                return (
                    <PaymentForm
                        firstName={setFirstName}
                        lastName={setLastName}
                        street={setStreet}
                        no={setNo}
                        town={setTown}
                        postCode={setPostCode}
                        nationality={setNationality}
                        permit={setPermit}
                        birthDate={setBirthDate}
                        employment={setEmployment}
                        phone={setPhone}
                        email={setEmail}
                        gender={setGender}
                    />
                );
            case 2:
                return (
                    <Review
                        company={company}
                        model={model}
                        price={price}
                        firstName={firstName}
                        lastName={lastName}
                        street={street}
                        no={no}
                        town={town}
                        postCode={postCode}
                        nationality={nationality}
                        permit={permit}
                        birthDate={birthDate}
                        employment={employment}
                        phone={phone}
                        email={email}
                        gender={gender}
                        transmission={transmission}
                        fuel={fuel}
                        kiloMeter={kiloMeter}
                        monthly={monthly}
                        calculatedPrice={calculatedPrice}
                        pickMethod={radioValue}
                    />
                );
            default:
                throw new Error('Unknown step');
        }
    }

    // ==============================|| FORMS WIZARD - BASIC ||============================== //

    const [activeStep, setActiveStep] = React.useState(0);
    console.log(activeStep, fulldate, radioValue);
    const handleNext = () => {
        setActiveStep(activeStep + 1);
        if (activeStep === 2) {
            handleOpen();
            setOpen(true);
        }
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <Container>
            <MainCard secondary={<SecondaryAction link="https://next.material-ui.com/components/steppers/#main-content" />}>
                <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <>
                    {activeStep === steps.length ? (
                        <>
                            <Grid xs={12} sm={8} lg={8} sx={{ textAlign: {xs:'left',sm:"center"} }}>
                                <Typography variant="h3" gutterBottom style={{ color: '#000' }}>
                                    Thank you for registering!
                                </Typography>
                            <Grid sx={{width:{xs:"141%",sm:"100%"}}}> 
                            <img src={lamoisineImg} alt="" style={{ marginTop: '20px' ,width:"70%"}} />
                            </Grid>
                                

                                <Typography variant="subtitle1" style={{ marginTop: '20px' }}>
                                    We hereby confirm that we have received your registration for a car subscription. Our customer service
                                    will process your request as soon as possible and we will contact you by phone to discuss the next
                                    steps.
                                </Typography>
                                <Stack direction="row" justifyContent="center">
                                    <Button
                                        variant="contained"
                                        onClick={() => navigate('/book-a-car')}
                                        sx={{ my: 3, ml: 1, color: 'white', borderRadius: '30px', paddingX: '20px' }}
                                    >
                                        Back to Site
                                        <ArrowForwardIosIcon style={{ fontSize: '14px' }} />
                                    </Button>
                                </Stack>
                            </Grid>
                        </>
                    ) : (
                        <>
                            {getStepContent(activeStep)}
                            <Stack direction="row" justifyContent={activeStep !== 0 ? 'center' : 'center'}>
                                {activeStep !== 0 && (
                                    <Grid style={{ marginTop: '31px', display: 'flex' }} onClick={handleBack}>
                                        <ArrowBackIosIcon style={{ color: '#92BD44', marginTop: '0px' }} />
                                        <Typography variant="body2" style={{ fontSize: '16px', margin: '0px 0 0 0' }}>
                                            Back the car
                                        </Typography>
                                    </Grid>
                                )}

                                <Grid style={{ display: 'flex' }}>
                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ my: 3, ml: 1, color: 'white', borderRadius: '30px', padding: '10px 20px' }}
                                    >
                                        {activeStep === steps.length - 1 ? 'Submit application' : 'Next Step'}
                                        <ArrowForwardIosIcon style={{ fontSize: '14px' }} />
                                    </Button>
                                </Grid>
                            </Stack>
                        </>
                    )}
                </>
            </MainCard>
            <Modals
                open={open}
                handleClose={handleClose}
                title={<h3>SuccessFull</h3>}
                description="Record Updated Successfully"
                btnName="Ok"
                url={handleClose}
                img={picture}
            />
        </Container>
        
    );
};

export default Tabs;
