import { Link as RouterLink } from 'react-router-dom';
import React, { useState } from 'react';

// material-ui
import { Grid, Typography, Container, Card, InputAdornment, Checkbox, Button, FormControlLabel } from '@mui/material';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import DoneIcon from '@mui/icons-material/Done';
import ProductCard from './ProductCard';

// ==============================|| LANDING - HEADER PAGE ||============================== //

const HeaderSection = () => {
    const cars = [
        {
            id: 0,
            name: 'BMW'
        },
        {
            id: 1,
            name: 'Audi'
        },

        {
            id: 2,
            name: 'Honda'
        },
        {
            id: 3,
            name: 'MINI'
        },
        {
            id: 4,
            name: 'Peugoet'
        },
        {
            id: 5,
            name: 'Skoda'
        },
        {
            id: 6,
            name: 'Volvo'
        },
        {
            id: 7,
            name: 'VW'
        }
    ];

    const secondCar = [
        {
            id: 0,
            name: 'Kleinwagen'
        },
        {
            id: 1,
            name: 'Kombi'
        },

        {
            id: 2,
            name: 'Limousine'
        },
        {
            id: 3,
            name: 'SUV / Geländewagen'
        }
    ];

    const carsAuto = [
        {
            id: 0,
            name: 'Automatik'
        },
        {
            id: 1,
            name: 'Manuell'
        }
    ];

    const carsAus4 = [
        {
            id: 0,
            name: 'Vorderrad'
        },
        {
            id: 1,
            name: 'Hinterrad'
        },
        {
            id: 2,
            name: 'Allrad'
        }
    ];

    const carsAus5 = [
        {
            id: 0,
            name: 'Benzin'
        },
        {
            id: 1,
            name: 'Diesel'
        },
        {
            id: 2,
            name: 'Elektro'
        },
        {
            id: 3,
            name: 'Hybrid'
        }
    ];

    const carsAus6 = [
        {
            id: 0,
            name: '2'
        },
        {
            id: 1,
            name: '4'
        },
        {
            id: 2,
            name: '5'
        },
        {
            id: 3,
            name: '7'
        }
    ];

    const carsAus7 = [
        {
            id: 0,
            name: 'Neuwagen'
        },
        {
            id: 1,
            name: 'Occasion'
        }
    ];
    const headerSX = {
        fontSize: { xs: '2rem', sm: '2rem', md: '2rem', lg: '34px' },
        lineHeight: { lg: '40px', md: '38px', sm: '42px', xs: '45px' }
    };
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const [show, setShow] = useState(false);
    const [showTab, setShowTab] = useState(false);

    const [showDropdown, setShowDropdon] = useState(false);
    const [showDropdown1, setShowDropdon1] = useState(false);
    const [showDropdown2, setShowDropdon2] = useState(false);
    const [showDropdown3, setShowDropdon3] = useState(false);
    const [showDropdown4, setShowDropdon4] = useState(false);
    const [showDropdown5, setShowDropdon5] = useState(false);
    const [showDropdown6, setShowDropdon6] = useState(false);

    // const [showDropdown, setShowDropdon] = useState({
    //     dropDown1: false,
    //     dropdown2: false
    // });
    // const handleDropDown = () => {
    //     console.log('console ', showDropdown.dropDown1);
    //     setShowDropdon(!showDropdown.dropDown1);
    //     console.log('console ccccccccccc ', showDropdown.dropDown1);
    // };

     

    // const Tabs = (showTab === "false") ? "3" : "4";

    return (
      <>
        <Container sx={{ display: 'block', justifyContent: 'center', alignItems: 'center', p: 0 }}>
            <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                sx={{ mt: { xs: 13, sm: 6, md: 18.75 }, mb: { xs: 2.5, md: 10 } }}
            >
                <Grid item xs={12} md={12}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sx={{paddingBottom:"20px"}}>
                            <Typography textAlign={{ xs: 'center' }} variant="body2" sx={headerSX}>
                           
Finden Sie die <span style={{ color: '#92BD44' }}>Auto </span>
das passt zu dir
                            </Typography>
                        </Grid>

                        <Grid sx={{ margin:{xs:'10px 20px',md:"0 10"} }}>
                        <Grid
                           
                            spacing={1}
                            sx={{
                                background: 'white',
                                padding: {xs:'8px 10px',sm:"24px 30px",md:"20px 34px"},
                                borderRadius: {xs:'10px',sm:"10px",md:'100px'},
                                marginTop: '10px',
                                width: {xs:"auto",sm:'100%',md:showTab?"105%":"140%",lg:showTab?"125%":"180%"},
                                boxShadow: '0 6px 3px -6px #00000069',
                                position:'relative',
                            }}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={6} sm={4}  md={showTab?"1.7":"2.3"}>
                                    <Card sx={{ borderRadius: 0, borderRight: '1px solid #909090', position: 'relative',padding:"10px" }}>
                                        <Typography variant="body2" style={{ fontSize: '16px', color: '#909090' }}>
                                          
Markieren
                                        </Typography>
                                        <Grid
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                paddingRight: '12px',
                                                cursor: 'pointer'
                                            }}
                                            onClick={() => setShowDropdon(!showDropdown)}
                                        >
                                            <Typography>Wählen</Typography>
                                            <KeyboardArrowDownIcon fontSize="12px" />
                                        </Grid>
                                    </Card>
                                    {showDropdown && (
                                        <Card sx={{
                                            position: "absolute",
                                            bottom: 0,
                                            left: {xs:"0px",sm:"-10px",md:"-30px"},
                                            borderRadius: "12px",
                                            padding: "16px",
                                            boxShadow:" 0 3px 6px rgba(0, 0, 0, 0.1490196078)",
                                            overflow: "initial",
                                            border: "none",
                                            maxHeight: "initial",
                                            width: "240px",
                                            top: {xs:"75px",sm:"105px",md:"105px"},
                                            height: "444px",
                                            zIndex: 1,
                                        }}>
                                            <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                                                <OutlinedInput
                                                    id="outlined-adornment"
                                                    type="text"
                                                    autoFocus="false"
                                                    placeholder="Search..."
                                                    name="search"
                                                    inputProps={{}}
                                                    iconPrimary={SearchIcon}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <SearchIcon />
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                            <Typography variant="body2" style={{ fontSize: '12px', marginTop: '10px' }}>
                                                Alle auswählen • Zurücksetzen
                                            </Typography>

                                            {cars.map((car, i) => (
                                                <Grid
                                                    key={i}
                                                    style={{
                                                        background: '#f0f0f0',
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        border: '1px solid transparent',
                                                        borderRadius: '11px',
                                                        padding: ' 0px 8px',
                                                        height: '30px',
                                                        marginTop: '5px',
                                                        cursor: 'pointer'
                                                    }}
                                                    onClick={() => setShow((show) => !show)}
                                                >
                                                    <Typography variant="body2" style={{ marginTop: '5px', fontSize: '12px' }}>
                                                        {car.name}
                                                    </Typography>
                                                    {show ? <DoneIcon style={{ fontSize: '16px', marginTop: '5px' }} /> : null}
                                                </Grid>
                                            ))}

                                            <Grid item>
                                                <Button
                                                    target="_blank"
                                                    size="large"
                                                    style={{
                                                        backgroundColor: '#92BD44',
                                                        color: 'white',
                                                        borderRadius: '10px',
                                                        padding: '8px 25px',
                                                        width: '100%',
                                                        marginTop: '10px'
                                                    }}
                                                >
                                                Suchen
                                                </Button>
                                            </Grid>
                                        </Card>
                                    )}
                                </Grid>

                                <Grid item xs={6} sm={4}  md={showTab?"1.7":"2.3"}>
                                    <Card sx={{ borderRadius: 0, borderRight: '1px solid #909090', margin: '0 8px',padding:"10px" }}>
                                        <Typography variant="body2" style={{ fontSize: '16px', color: '#909090' }}>
                                          
Körpertyp
                                        </Typography>
                                        <Grid
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                paddingRight: '12px',
                                                cursor: 'pointer'
                                            }}
                                            onClick={() => setShowDropdon1(!showDropdown1)}
                                        >
                                            <Typography>Wählen</Typography>
                                            <KeyboardArrowDownIcon fontSize="12px" />
                                        </Grid>
                                    </Card>
                                   
                                    {showDropdown1 && (
                                        <Card 
                                         sx={{
                                            position: "absolute",
                                            bottom: 0,
                                            left: {xs:"70px",sm:"170px",md:"120px",lg:showTab?"140px":"190px"},
                                            borderRadius: "12px",
                                            padding: "16px",
                                            boxShadow:" 0 3px 6px rgba(0, 0, 0, 0.1490196078)",
                                            overflow: "initial",
                                            border: "none",
                                            maxHeight: "initial",
                                            width: "240px",
                                            top: {xs:"75px",sm:"105px",md:"95px"},
                                            height: "444px",
                                            zIndex: 1,
                                        }}>
                                            <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                                                <OutlinedInput
                                                    id="outlined-adornment"
                                                    type="text"
                                                    autoFocus="false"
                                                    placeholder="Search..."
                                                    name="search"
                                                    inputProps={{}}
                                                    iconPrimary={SearchIcon}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <SearchIcon />
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                            <Typography variant="body2" style={{ fontSize: '12px', marginTop: '10px' }}>
                                                Alle auswählen • Zurücksetzen
                                            </Typography>

                                            {secondCar.map((item, i) => (
                                                <Grid
                                                    style={{
                                                        background: '#f0f0f0',
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        border: '1px solid transparent',
                                                        borderRadius: '11px',
                                                        padding: ' 0px 8px',
                                                        height: '30px',
                                                        marginTop: '5px',
                                                        cursor: 'pointer'
                                                    }}
                                                    onClick={() => setShow((show) => !show)}
                                                >
                                                    <Typography variant="body2" style={{ marginTop: '5px', fontSize: '12px' }}>
                                                        {item.name}
                                                    </Typography>
                                                    {show ? <DoneIcon style={{ fontSize: '16px', marginTop: '5px' }} /> : null}
                                                </Grid>
                                            ))}

                                            <Grid item>
                                                <Button
                                                    target="_blank"
                                                    size="large"
                                                    style={{
                                                        backgroundColor: '#92BD44',
                                                        color: 'white',
                                                        borderRadius: '10px',
                                                        padding: '8px 25px',
                                                        width: '100%',
                                                        marginTop: '10px'
                                                    }}
                                                >
                                                    Suchen
                                                </Button>
                                            </Grid>
                                        </Card>
                                    )}
                                </Grid>

                                <Grid item xs={6} sm={4}  md={showTab?"1.7":"2.3"}>
                                    <Card sx={{ borderRadius: 0, borderRight: '1px solid #909090', margin: '0 8px' }}>
                                        <Typography variant="body2" style={{ fontSize: '16px', color: '#909090' }}>
                                     
Übertragung
                                        </Typography>
                                        <Grid
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                paddingRight: '12px',
                                                cursor: 'pointer'
                                            }}
                                            onClick={() => setShowDropdon2(!showDropdown2)}
                                        >
                                            <Typography>Wählen</Typography>
                                            <KeyboardArrowDownIcon fontSize="12px" />
                                        </Grid>
                                    </Card> 
                                    {showDropdown2 && (
                                        <Card 
                                        sx={{
                                            position: "absolute",
                                            bottom: 0,
                                            left: {xs:"0px",sm:"370px",md:showTab?"250px":"280px",lg:showTab?"320px":"400px"},
                                            borderRadius: "12px",
                                            padding: "16px",
                                            boxShadow:" 0 3px 6px rgba(0, 0, 0, 0.1490196078)",
                                            overflow: "initial",
                                            border: "none",
                                            maxHeight: "initial",
                                            width: "240px",
                                            top: {xs:"135px",sm:"105px",md:"95px"},
                                            height: "444px",
                                            zIndex: 1,
                                        }}>
                                            <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                                                <OutlinedInput
                                                    id="outlined-adornment"
                                                    type="text"
                                                    autoFocus="false"
                                                    placeholder="Search..."
                                                    name="search"
                                                    inputProps={{}}
                                                    iconPrimary={SearchIcon}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <SearchIcon />
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                            <Typography variant="body2" style={{ fontSize: '12px', marginTop: '10px' }}>
                                                Alle auswählen • Zurücksetzen
                                            </Typography>

                                            {carsAuto.map((item, i) => (
                                                <Grid
                                                    style={{
                                                        background: '#f0f0f0',
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        border: '1px solid transparent',
                                                        borderRadius: '11px',
                                                        padding: ' 0px 8px',
                                                        height: '30px',
                                                        marginTop: '5px',
                                                        cursor: 'pointer'
                                                    }}
                                                    onClick={() => setShow((show) => !show)}
                                                >
                                                    <Typography variant="body2" style={{ marginTop: '5px', fontSize: '12px' }}>
                                                        {item.name}
                                                    </Typography>
                                                    {show ? <DoneIcon style={{ fontSize: '16px', marginTop: '5px' }} /> : null}
                                                </Grid>
                                            ))}

                                            <Grid item>
                                                <Button
                                                    target="_blank"
                                                    size="large"
                                                    style={{
                                                        backgroundColor: '#92BD44',
                                                        color: 'white',
                                                        borderRadius: '10px',
                                                        padding: '8px 25px',
                                                        width: '100%',
                                                        marginTop: '10px'
                                                    }}
                                                >
                                                    Suchen
                                                </Button>
                                            </Grid>
                                        </Card>
                                    )}
                                </Grid>

                                <Grid item xs={6} sm={4}  md={showTab?"1.7":"2.3"}>
                                    <Card sx={{ borderRadius: 0, borderRight: '1px solid #909090', margin: '0 8px' }}>
                                        <Typography variant="body2" style={{ fontSize: '16px', color: '#909090' }}>
                                        
                                        fahren
                                        </Typography>
                                        <Grid
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                paddingRight: '12px',
                                                cursor: 'pointer'
                                            }}
                                            onClick={() => setShowDropdon3(!showDropdown3)}
                                        >
                                            <Typography>Wählen</Typography>
                                            <KeyboardArrowDownIcon fontSize="12px" />
                                        </Grid>
                                    </Card>
                                   
                                    {showDropdown3 && (
                                        <Card 
                                        sx={{
                                            position: "absolute",
                                            bottom: 0,
                                            left: {xs:"110px",sm:"0px",md:showTab?"380px":"440px",lg:showTab?"450px":"600px"},
                                            borderRadius: "12px",
                                            padding: "16px",
                                            boxShadow:" 0 3px 6px rgba(0, 0, 0, 0.1490196078)",
                                            overflow: "initial",
                                            border: "none",
                                            maxHeight: "initial",
                                            width: "240px",
                                            top: {xs:"135px",sm:"150px",md:"95px"},
                                            height: "444px",
                                            zIndex: 1,
                                        }}>
                                            <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                                                <OutlinedInput
                                                    id="outlined-adornment"
                                                    type="text"
                                                    autoFocus="false"
                                                    placeholder="Search..."
                                                    name="search"
                                                    inputProps={{}}
                                                    iconPrimary={SearchIcon}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <SearchIcon />
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                            <Typography variant="body2" style={{ fontSize: '12px', marginTop: '10px' }}>
                                                Alle auswählen • Zurücksetzen
                                            </Typography>

                                            {carsAus4.map((item, i) => (
                                                <Grid
                                                    style={{
                                                        background: '#f0f0f0',
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        border: '1px solid transparent',
                                                        borderRadius: '11px',
                                                        padding: ' 0px 8px',
                                                        height: '30px',
                                                        marginTop: '5px',
                                                        cursor: 'pointer'
                                                    }}
                                                    onClick={() => setShow((show) => !show)}
                                                >
                                                    <Typography variant="body2" style={{ marginTop: '5px', fontSize: '12px' }}>
                                                        {item.name}
                                                    </Typography>
                                                    {show ? <DoneIcon style={{ fontSize: '16px', marginTop: '5px' }} /> : null}
                                                </Grid>
                                            ))}

                                            <Grid item>
                                                <Button
                                                    target="_blank"
                                                    size="large"
                                                    style={{
                                                        backgroundColor: '#92BD44',
                                                        color: 'white',
                                                        borderRadius: '10px',
                                                        padding: '8px 25px',
                                                        width: '100%',
                                                        marginTop: '10px'
                                                    }}
                                                >
                                                    Suchen
                                                </Button>
                                            </Grid>
                                        </Card>
                                    )}
                                </Grid>

                                <Grid item xs={6} sm={4}  md={showTab?"1.7":"2.3"}>
                                    <Card sx={{ borderRadius: 0, margin: '0 8px' }}>
                                        <Typography variant="body2" style={{ fontSize: '16px', color: '#909090' }}>
                                        Kraftstoff
                                        </Typography>
                                        <Grid
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                paddingRight: '12px',
                                                cursor: 'pointer'
                                            }}
                                            onClick={() => setShowDropdon4(!showDropdown4)}
                                        >
                                            <Typography>Wählen</Typography>
                                            <KeyboardArrowDownIcon fontSize="12px" />
                                        </Grid>
                                    </Card>
                                    
                                    {showDropdown4 && (
                                        <Card
                                        sx={{
                                            position: "absolute",
                                            bottom: 0,
                                            left: {xs:"0px",sm:"190px",md:showTab?"500px":"620px",lg:showTab?"620px":"820px"},
                                            borderRadius: "12px",
                                            padding: "16px",
                                            boxShadow:" 0 3px 6px rgba(0, 0, 0, 0.1490196078)",
                                            overflow: "initial",
                                            border: "none",
                                            maxHeight: "initial",
                                            width: "240px",
                                            top: {xs:"195px",sm:"150px",md:"95px"},
                                            height: "444px",
                                            zIndex: 1,
                                        }}>
                                            <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                                                <OutlinedInput
                                                    id="outlined-adornment"
                                                    type="text"
                                                    autoFocus="false"
                                                    placeholder="Search..."
                                                    name="search"
                                                    inputProps={{}}
                                                    iconPrimary={SearchIcon}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <SearchIcon />
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                            <Typography variant="body2" style={{ fontSize: '12px', marginTop: '10px' }}>
                                                Alle auswählen • Zurücksetzen
                                            </Typography>

                                            {carsAus5.map((item, i) => (
                                                <Grid
                                                    style={{
                                                        background: '#f0f0f0',
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        border: '1px solid transparent',
                                                        borderRadius: '11px',
                                                        padding: ' 0px 8px',
                                                        height: '30px',
                                                        marginTop: '5px',
                                                        cursor: 'pointer'
                                                    }}
                                                    onClick={() => setShow((show) => !show)}
                                                >
                                                    <Typography variant="body2" style={{ marginTop: '5px', fontSize: '12px' }}>
                                                        {item.name}
                                                    </Typography>
                                                    {show ? <DoneIcon style={{ fontSize: '16px', marginTop: '5px' }} /> : null}
                                                </Grid>
                                            ))}

                                            <Grid item>
                                                <Button
                                                    target="_blank"
                                                    size="large"
                                                    style={{
                                                        backgroundColor: '#92BD44',
                                                        color: 'white',
                                                        borderRadius: '10px',
                                                        padding: '8px 25px',
                                                        width: '100%',
                                                        marginTop: '10px'
                                                    }}
                                                >
                                                    Suchen
                                                </Button>
                                            </Grid>
                                        </Card>
                                    )}
                                </Grid>
                              

                                {showTab && (
                                    <>
                                        <Grid item xs={6} sm={4}  md={showTab?"1.7":"2.3"}>
                                            <Card sx={{ borderRadius: 0, borderLeft: '1px solid #909090', padding: '8px' }}>
                                                <Typography variant="body2" style={{ fontSize: '16px', color: '#909090' }}>
                                                    Treibstoff
                                                </Typography>
                                                <Grid
                                                    style={{
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        paddingRight: '12px',
                                                        cursor: 'pointer'
                                                    }}
                                                    onClick={() => setShowDropdon5(!showDropdown5)}
                                                >
                                                    <Typography>Mercedes-Benz</Typography>
                                                    <KeyboardArrowDownIcon fontSize="12px" />
                                                </Grid>
                                            </Card>

                                            {showDropdown5 && (
                                                <Card sx={{
                                                    position: "absolute",
                                                    bottom: 0,
                                                    left: {xs:"150px",sm:"440px",md:"640px",lg:"790px"},
                                                    borderRadius: "12px",
                                                    padding: "16px",
                                                    boxShadow:" 0 3px 6px rgba(0, 0, 0, 0.1490196078)",
                                                    overflow: "initial",
                                                    border: "none",
                                                    maxHeight: "initial",
                                                    width: "240px",
                                                    top: {xs:"195px",sm:"150px",md:"95px"},
                                                    height: "444px",
                                                    zIndex: 1,
                                                }}>
                                                    <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                                                        <OutlinedInput
                                                            id="outlined-adornment"
                                                            type="text"
                                                            autoFocus="false"
                                                            placeholder="Search..."
                                                            name="search"
                                                            inputProps={{}}
                                                            iconPrimary={SearchIcon}
                                                            endAdornment={
                                                                <InputAdornment position="end">
                                                                    <SearchIcon />
                                                                </InputAdornment>
                                                            }
                                                        />
                                                    </FormControl>
                                                    <Typography variant="body2" style={{ fontSize: '12px', marginTop: '10px' }}>
                                                        Alle auswählen • Zurücksetzen
                                                    </Typography>

                                                    {carsAus5.map((item, i) => (
                                                        <Grid
                                                            style={{
                                                                background: '#f0f0f0',
                                                                display: 'flex',
                                                                justifyContent: 'space-between',
                                                                border: '1px solid transparent',
                                                                borderRadius: '11px',
                                                                padding: ' 0px 8px',
                                                                height: '30px',
                                                                marginTop: '5px',
                                                                cursor: 'pointer'
                                                            }}
                                                            onClick={() => setShow((show) => !show)}
                                                        >
                                                            <Typography variant="body2" style={{ marginTop: '5px', fontSize: '12px' }}>
                                                                {item.name}
                                                            </Typography>
                                                            {show ? <DoneIcon style={{ fontSize: '16px', marginTop: '5px' }} /> : null}
                                                        </Grid>
                                                    ))}

                                                    <Grid item>
                                                        <Button
                                                            target="_blank"
                                                            size="large"
                                                            style={{
                                                                backgroundColor: '#92BD44',
                                                                color: 'white',
                                                                borderRadius: '10px',
                                                                padding: '8px 25px',
                                                                width: '100%',
                                                                marginTop: '10px'
                                                            }}
                                                        >
                                                            Suchen
                                                        </Button>
                                                    </Grid>
                                                </Card>
                                            )}
                                        </Grid>

                                        <Grid item xs={6} sm={4}  md={showTab?"1.7":"2.3"}>
                                            <Card sx={{ borderRadius: 0, borderLeft: '1px solid #909090', padding: '0 8px' }}>
                                                <Typography variant="body2" style={{ fontSize: '16px', color: '#909090' }}>
                                                    Treibstoff
                                                </Typography>
                                                <Grid
                                                    style={{
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        paddingRight: '12px',
                                                        cursor: 'pointer'
                                                    }}
                                                    onClick={() => setShowDropdon6(!showDropdown6)}
                                                >
                                                    <Typography>Mercedes-Benz</Typography>
                                                    <KeyboardArrowDownIcon fontSize="12px" />
                                                </Grid>
                                            </Card>

                                            {showDropdown6 && (
                                                <Card sx={{
                                                    position: "absolute",
                                                    bottom: 0,
                                                    left: {xs:"0px",sm:"0px",md:"740px",lg:"970px"},
                                                    borderRadius: "12px",
                                                    padding: "16px",
                                                    boxShadow:" 0 3px 6px rgba(0, 0, 0, 0.1490196078)",
                                                    overflow: "initial",
                                                    border: "none",
                                                    maxHeight: "initial",
                                                    width: "240px",
                                                    top: {xs:"270px",sm:"220px",md:"95px"},
                                                    height: "444px",
                                                    zIndex: 1,
                                                }}>
                                                    <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                                                        <OutlinedInput
                                                            id="outlined-adornment"
                                                            type="text"
                                                            autoFocus="false"
                                                            placeholder="Search..."
                                                            name="search"
                                                            inputProps={{}}
                                                            iconPrimary={SearchIcon}
                                                            endAdornment={
                                                                <InputAdornment position="end">
                                                                    <SearchIcon />
                                                                </InputAdornment>
                                                            }
                                                        />
                                                    </FormControl>
                                                    <Typography variant="body2" style={{ fontSize: '12px', marginTop: '10px' }}>
                                                        Alle auswählen • Zurücksetzen
                                                    </Typography>

                                                    {carsAus7.map((item, i) => (
                                                        <Grid
                                                            style={{
                                                                background: '#f0f0f0',
                                                                display: 'flex',
                                                                justifyContent: 'space-between',
                                                                border: '1px solid transparent',
                                                                borderRadius: '11px',
                                                                padding: ' 0px 8px',
                                                                height: '30px',
                                                                marginTop: '5px',
                                                                cursor: 'pointer'
                                                            }}
                                                            onClick={() => setShow((show) => !show)}
                                                        >
                                                            <Typography variant="body2" style={{ marginTop: '5px', fontSize: '12px' }}>
                                                                {item.name}
                                                            </Typography>
                                                            {show ? <DoneIcon style={{ fontSize: '16px', marginTop: '5px' }} /> : null}
                                                        </Grid>
                                                    ))}

                                                    <Grid item>
                                                        <Button
                                                            target="_blank"
                                                            size="large"
                                                            style={{
                                                                backgroundColor: '#92BD44',
                                                                color: 'white',
                                                                borderRadius: '10px',
                                                                padding: '8px 25px',
                                                                width: '100%',
                                                                marginTop: '10px'
                                                            }}
                                                        >
                                                            Suchen
                                                        </Button>
                                                    </Grid>
                                                </Card>
                                            )}
                                        </Grid>
                                    </>
                                )}
                                </Grid>
                            </Grid>
                        </Grid>





                       

                        <Grid container spacing={2} style={{ marginTop: '15px', justifyContent: 'center' }}>
                            <Grid style={{ display: 'flex', marginRight: '10px' }} onClick={() => setShowTab(!showTab)}>
                                <SearchIcon style={{ fontSiz: '14px', color: '#92BD44' }} />
                                <Typography>Detailierte Suche</Typography>
                            </Grid>

                            <Grid style={{ display: 'flex' }} onClick={() => setShowTab(!showTab)}>
                                <CloseIcon style={{ fontSize: '18px', color: '#92BD44' }} />
                                <Typography>Filter zurücksetzen</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>


        <Grid style={{ backgroundColor: '#f4f5f8',zIndex:0 }}>
                <ProductCard />
            </Grid>
        </>


    );
};

export default HeaderSection;
