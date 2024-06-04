import React, { useState, useEffect } from 'react';
// material-ui
import { Button, Step, Stepper, StepLabel, Stack, Typography, Grid } from '@mui/material';

// project imports
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import MainCard from 'ui-component/cards/MainCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { Container } from '@mui/system';
import picture from 'assets/images/picture.png';
import Modals from '../../user/auth/Modal';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import locationImg from 'assets/images/landing/location-car-icon.png';
import myAxios from 'utils/myAxios';
import { Navigate, useNavigate } from 'react-router-dom';
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
    const { company, model, price, transmission, fuel } = props;
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = async () => {
        const url = window.location.pathname;
        const id = parseInt(url.split('/').pop(), 10);
        const date = fulldate;
        const method = radioValue;
        try {
            setResponse(
                await myAxios.post(`/landing_sub/${id}`, {
                    date,
                    price,
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
                    gender
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
                    />
                );
            default:
                throw new Error('Unknown step');
        }
    }

    // ==============================|| FORMS WIZARD - BASIC ||============================== //

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
        if (activeStep === 2 && firstName!== null) {

            handleOpen();
        }
        if (activeStep === 3  && firstName!== null) {
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
                            <Grid xs={12} sm={8} lg={8} style={{ textAlign: 'center' }}>
                                <Typography variant="h5" gutterBottom style={{ color: '#92BD44' }}>
                                    Vielen Dank für deine Registrierung!
                                </Typography>

                                <img src={locationImg} alt="" style={{ width: '100px', marginTop: '20px' }} />

                                <Typography variant="subtitle1" style={{ marginTop: '20px' }}>
                                    Hiermit bestätigen wir, dass deine Registrierung für ein Auto-Abo bei uns eingegangen ist. Unser
                                    Kundendienst bearbeitet deine Anfrage schnellstmöglich und wir dich zwecks Besprechung der nächsten
                                    Schritte telefonisch kontaktieren.
                                </Typography>
                                <Stack direction="row" justifyContent="center">
                                    <Button
                                        variant="contained"
                                        onClick={() => setOpen(true)}
                                        sx={{ my: 3, ml: 1, color: 'white', borderRadius: '30px', paddingX: '20px' }}
                                    >
                                        Back to site
                                        <ArrowForwardIosIcon style={{ fontSize: '14px' }} />
                                    </Button>
                                </Stack>
                            </Grid>
                        </>
                    ) : (
                        <>
                            {getStepContent(activeStep)}
                            <Stack direction="row" sx={{direction:"column",flexDirection:{xs:"column",sm:"row"}}}  justifyContent={activeStep !== 0 ? 'center' : 'center'}>
                                {activeStep !== 0 && (
                                    <Grid sx={{ marginTop: '31px', display: 'flex',justifyContent:{xs:"center",sm:" "} }} onClick={handleBack}>
                                        <ArrowBackIosIcon style={{ color: '#92BD44', marginTop: '0px' }} />
                                        <Typography variant="body2" style={{ fontSize: '16px', margin: '0px 0 0 0' }}>
                                            zurück zum Auto
                                        </Typography>
                                    </Grid>
                                )}

                                <Grid sx={{ display: 'flex',justifyContent:{xs:"center",sm:" "} }}>
                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ my: 3, ml: 1, color: 'white', borderRadius: '30px', padding: '10px 20px' }}
                                    >
                                        {activeStep === steps.length - 1 ? 'Antrag einsenden' : 'Nächster Schritt'}
                                        <ArrowForwardIosIcon style={{ fontSize: '14px' }} />
                                    </Button>
                                </Grid>
                            </Stack>
                        </>
                    )}
                    <Modals
                        open={open}
                        handleClose={handleClose}
                        title={<h3>Recoed Saved Successfully</h3>}
                        description="Please check your email to login"
                        btnName="Ok"
                        url={() => navigate('/login')}
                        img={picture}
                    />
                </>
            </MainCard>
        </Container>
    );
};

export default Tabs;
