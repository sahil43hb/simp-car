// material-ui
import { Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useState } from 'react';
import { Email } from '@mui/icons-material';
// ==============================|| FORM WIZARD - BASIC  ||============================== //

export default function PaymentForm(props) {
    const [number, setNumber] = useState('us');
    const [name,setName]= useState();
    const { firstName, lastName, street, no, town, postCode, nationality, permit, birthDate, employment, phone, email, gender } = props;

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
        firstName(newFirstName);
        gender(newGender);
        lastName(newlastName);
        street(newStreet);
        no(newNo);
        town(newTown);
        postCode(newPostCode);
        nationality(newNationality);
        permit(newPermit);
        birthDate(newBirthdate);
        employment(newEmployment);
        phone(newPhone);
        email(newEmail);
    };

    return (
        <>
            <Grid container spacing={3} style={{ justifyContent: 'center' }}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="body2" style={{ fontSize: '18px', textAlign: 'center' }}>
                       
Ihre persönliche Information
                    </Typography>

                    <Typography variant="body2" style={{ fontSize: '14px', textAlign: 'center', marginTop: '20px' }}>
                    Bitte geben Sie Ihre persönlichen Daten ein, damit wir Ihr Abonnement öffnen und prüfen können. Um a. herausnehmen zu können
                    Um bei uns ein Auto-Abo abschließen zu können, müssen Sie volljährig sein und über eine akzeptable Bonitätsauskunft verfügen.
                    </Typography>
                </Grid>
            </Grid>

            <Grid container spacing={3} style={{ justifyContent: 'center', marginTop: '20px' }}>
                <Grid item xs={12} sm={10} md={8} lg={8} style={{ background: '#F4F5F8', borderRadius: '5px' }}>
                    <FormControl style={{ paddingLeft: '15px' }}>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            defaultValue={gender}
                            onChange={(event) => gender(event.target.value)}
                            name="gender"
                            required
                        >
                            <FormControlLabel value="Male" control={<Radio />} required label="Männlich" />
                            <FormControlLabel value="Female" control={<Radio />} required label="Weiblich" />
                            <FormControlLabel value="Comapny" control={<Radio />} required label="Unternehmen" />
                        </RadioGroup>
                    </FormControl>

                    <Grid container spacing={2} style={{ padding: '15px 15px' }}>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                required
                                value={name}
                                id="filled-required"
                                name="firstName"
                                defaultValue={firstName}
                                onChange={(event) =>{
                                    setName(event.target.value)
                                    firstName(event.target.value)
                                }}
                                label="Vorname"
                                variant="filled"
                                error={!name}
                                helperText={
                                    !name ?"Dieses Feld ist erforderlich":" "
                                }
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                required
                                id="filled-required"
                                label="Nachname"
                                defaultValue={lastName}
                                onChange={(event) => lastName(event.target.value)}
                                variant="filled"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} lg={6}>
                            <Grid container spacing={2}>
                                <Grid item xs={9}>
                                    <TextField
                                        fullWidth
                                        required
                                        id="filled-required"
                                        label="Adresse"
                                        defaultValue={street}
                                        onChange={(event) => street(event.target.value)}
                                        variant="filled"
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField fullWidth required id="filled-required" label="No." defaultValue={no} onChange={(event) => no(event.target.value)} variant="filled" />
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} sm={6} lg={6}>
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <TextField
                                        fullWidth
                                        required
                                        id="filled-required"
                                        label="   Postleitzahl"
                                        defaultValue={postCode}
                                        onChange={(event) => postCode(event.target.value)}
                                        variant="filled"
                                    />
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField fullWidth required id="filled-required" label="Stadt"  defaultValue={town} onChange={(event) => town(event.target.value)} variant="filled" />
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} sm={6} lg={6}>
                            <TextField
                                fullWidth
                                required
                                id="filled-required"
                                label="Staatsangehörigkeit"
                                defaultValue={nationality}
                                onChange={(event) => nationality(event.target.value)}
                                variant="filled"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={6}>
                            <TextField
                                fullWidth
                                required
                                id="filled-required"
                                label="Aufenthaltsgenehmigung"
                                defaultValue={permit}
                                onChange={(event) => permit(event.target.value)}
                                variant="filled"
                                style={{
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    color: '#8D8E93'
                                }}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} lg={6}>
                            <TextField
                                fullWidth
                                required
                                id="filled-required"
                                label="
                                Geburtsdatum"
                                defaultValue={birthDate}
                                onChange={(event) => birthDate(event.target.value)}
                                variant="filled"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={6}>
                            <TextField
                                fullWidth
                                required
                                id="filled-required"
                                label="Anstellung"
                                defaultValue={employment}
                                onChange={(event) => employment(event.target.value)}
                                variant="filled"
                                style={{
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    color: '#8D8E93'
                                }}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} lg={6}>
                            <PhoneInput
                                country={number}
                                placeholder="Telefonnummer eingeben"
                                defaultValue={phone}
                                onChange={(value) => {
                                    setNumber(value);
                                    phone(value)
                                }}
                                countryCodeEditable={false}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={6}>
                            <TextField
                                fullWidth
                            
                                required
                                id="filled-required"
                                label="
                                E-Mail-Adresse"
                                defaultValue={email}
                                onChange={(event) => email(event.target.value)}
                                variant="filled"
                                style={{
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    color: '#8D8E93'
                                }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}
