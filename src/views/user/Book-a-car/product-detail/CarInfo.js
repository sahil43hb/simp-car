import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// material-ui
import { Grid, Typography, Container, Box } from '@mui/material';
import ProductSlider from './ProductSlider';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ThemeButton from 'ui-component/ThemeButton';
import profileIocn from 'assets/images/headphone.png';

import Slider from '@mui/material/Slider';
import ModalDetail from './ModalDetail';


const marks = [
    {
      value: 850,
      label: '850',
    },
    {
      value: 1250,
      label: '1250',
    },
    {
      value: 1850,
      label: '1850',
    },
    {
      value: 2500,
      label: '2500',
    },
    {
      value: 3200,
      label: '3200',
    },
  ];
const marks1 = [
    {
      value: 3,
      label: '3',
    },
    {
      value: 6,
      label: '6',
    },
    {
      value: 12,
      label: '12',
    },
    {
      value: 24,
      label: '24',
    },
    {
      value: 36,
      label: '36',
    },
  ];
// ==============================|| LANDING - HEADER PAGE ||============================== //

const CarInfo = (props) => {

    const [firstvalue, setfirstvalue] = useState();
    const [secondvalue, setsecondvalue] = useState();
    let calculatedPrice = firstvalue/1.25;
    calculatedPrice *= secondvalue; 

   

    const navigate = useNavigate();
    const { company, model, description, type, tranmission, engine, fuel, drive, seats, furnishing, id } = props;

    return (
        <Container sx={{ p: 0 }}>
            <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                sx={{ mb: { xs: 2.5, md: 10 } }}
                style={{ marginTop: '-70px' }}
            >
                <Grid item xs={12} md={12}>
                    <Grid>
                        <Grid container spacing={2}>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <Typography variant="body2" sx={{ fontSize: '24px', color: '#92BD44',paddingTop:{xs:"80px",sm:"0px"} ,textAlign:{xs:"center",sm:"left"}}}>
                                    Vehicle data for {company} {model}
                                </Typography>

                                <Typography variant="body2" sx={{ fontSize: '16px', marginTop:{xs: '10px',sm:"60px"} ,textAlign:{xs:"center",sm:"left"}}}>
                                    {description}.
                                </Typography>

                                <Typography variant="body2" sx={{ fontSize: '22px', marginTop: '20px',textAlign:{xs:"center",sm:"left"} }}>
                                    Technical <span style={{ color: '#76A81B' }}>Specifications</span>
                                </Typography>

                                <Grid container spacing={2} style={{ marginTop: '20px' }}>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <Grid sx={{ display: 'flex',paddingLeft:{xs:"20px",sm:"0px"} }}>
                                            <Grid style={{ border: '2px solid #F2F1F0', borderRadius: '6px', padding: '0px 11px' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="50" viewBox="0 0 127.3 84.879">
                                                    <path
                                                        id="car"
                                                        d="M142.907,143.8c-.955-10.719-2.528-12.806-3.122-13.591-1.366-1.814-3.552-3-5.865-4.244a.955.955,0,0,1-.241-1.507,4.225,4.225,0,0,0,1.2-3.324,4.316,4.316,0,0,0-4.337-3.918h-4.138a4.511,4.511,0,0,0-.53.034,2.254,2.254,0,0,0-.374-.125c-2.451-5.18-5.806-12.273-12.761-15.734C102.425,96.265,83.423,96,79.709,96s-22.716.265-33.018,5.387c-6.955,3.461-10.31,10.554-12.761,15.734l-.021.042a1.729,1.729,0,0,0-.358.09,4.511,4.511,0,0,0-.53-.034H28.875a4.316,4.316,0,0,0-4.337,3.918,4.225,4.225,0,0,0,1.217,3.308.955.955,0,0,1-.241,1.507c-2.313,1.252-4.509,2.438-5.865,4.244-.594.8-2.164,2.873-3.122,13.591a95.275,95.275,0,0,0-.194,16.3A71.206,71.206,0,0,0,18.912,173.7a4.244,4.244,0,0,0,3.5,2.883v.053a4.244,4.244,0,0,0,4.244,4.244H41.511a4.244,4.244,0,0,0,4.244-4.244,20.247,20.247,0,0,0,5.557-.843,42.13,42.13,0,0,1,7.427-1.3c8.093-.772,16.14-1.037,20.97-1.037,4.732,0,13.135.265,21.241,1.037a42.217,42.217,0,0,1,7.456,1.308,21.089,21.089,0,0,0,5.262.836,4.244,4.244,0,0,0,4.244,4.244h14.854a4.244,4.244,0,0,0,4.244-4.244V176.6a4.244,4.244,0,0,0,3.512-2.883A71.207,71.207,0,0,0,143.1,160.1a94.768,94.768,0,0,0-.194-16.3ZM41.6,120.75c2.122-4.509,4.549-9.613,8.87-11.764,6.244-3.109,19.185-4.509,29.238-4.509s22.994,1.39,29.238,4.509c4.321,2.151,6.737,7.257,8.87,11.764l.265.576a2.122,2.122,0,0,1-1.973,3.029c-8.814-.239-27.381-1-36.4-1s-27.586.782-36.413,1.021a2.122,2.122,0,0,1-1.973-3.029c.093-.2.191-.4.279-.594Zm3.164,21.122a113.3,113.3,0,0,1-13.75.812c-2.812,0-5.711-.8-6.249-3.3a7.837,7.837,0,0,1-.13-3.583c.167-.809.432-1.4,1.759-1.6,3.448-.531,5.377.135,11.021,1.8a25.633,25.633,0,0,1,7.981,3.729A1.256,1.256,0,0,1,44.766,141.872Zm58.72,21.75c-3.491.4-10.472.252-23.7.252s-20.2.146-23.694-.252c-3.6-.4-8.193-3.806-5.058-6.841,2.087-2,6.957-3.5,13.443-4.337a97.847,97.847,0,0,1,15.284-1.273,82.765,82.765,0,0,1,15.284,1.276c6.764,1.011,11.875,2.525,13.443,4.337,2.859,3.247-1.4,6.416-5,6.854Zm31.166-24.241c-.53,2.515-3.448,3.3-6.249,3.3a121.05,121.05,0,0,1-14.044-.815c-.784-.074-1.16-1.5-.338-2.145A24.783,24.783,0,0,1,122,135.991c5.644-1.663,8.9-2.329,11.695-1.775a1.525,1.525,0,0,1,1.085,1.326,10.78,10.78,0,0,1-.13,3.841Z"
                                                        transform="translate(-16.068 -96)"
                                                        fill="#92bd44"
                                                    />
                                                </svg>
                                            </Grid>
                                            <Grid style={{ padding: '7px 15px' }}>
                                                <Typography variant="body2" style={{ fontSize: '12px', marginTop: '5px' }}>
                                                    Category
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    style={{ fontSize: '14px', fontWeight: 'bold', color: '#8D8E93' }}
                                                >
                                                    {type}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <Grid sx={{ display: 'flex',paddingLeft:{xs:"20px",sm:"0px"} }}>
                                            <Grid style={{ border: '2px solid #F2F1F0', borderRadius: '6px', padding: '0px 11px' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" viewBox="0 0 124.526 84.5">
                                                    <g id="car-engine" transform="translate(-2 -11)">
                                                        <path
                                                            id="Pfad_1189"
                                                            data-name="Pfad 1189"
                                                            d="M65.342,36.671A6.671,6.671,0,0,0,58.671,30H54.224A2.224,2.224,0,0,0,52,32.224V63.355a2.224,2.224,0,0,0,2.224,2.224h4.447a6.671,6.671,0,0,0,6.671-6.671Z"
                                                            transform="translate(61.184 23.25)"
                                                            fill="#92bd44"
                                                        />
                                                        <path
                                                            id="Pfad_1190"
                                                            data-name="Pfad 1190"
                                                            d="M6,31h6.671v8.895H6Z"
                                                            transform="translate(4.895 24.474)"
                                                            fill="#92bd44"
                                                        />
                                                        <path
                                                            id="Pfad_1191"
                                                            data-name="Pfad 1191"
                                                            d="M48,34h4.447V51.789H48Z"
                                                            transform="translate(56.289 28.145)"
                                                            fill="#92bd44"
                                                        />
                                                        <path
                                                            id="Pfad_1192"
                                                            data-name="Pfad 1192"
                                                            d="M6.447,26.224a2.224,2.224,0,0,0-4.447,0V61.8a2.224,2.224,0,1,0,4.447,0Z"
                                                            transform="translate(0 15.908)"
                                                            fill="#92bd44"
                                                        />
                                                        <path
                                                            id="Pfad_1193"
                                                            data-name="Pfad 1193"
                                                            d="M86.605,33.342H79.934a6.671,6.671,0,0,1-6.671-6.671V22.224A2.224,2.224,0,0,0,71.039,20H28.789a2.224,2.224,0,0,0-2.224,2.224,6.671,6.671,0,0,1-6.671,6.671H13.224A2.224,2.224,0,0,0,11,31.118v37.8a2.224,2.224,0,0,0,2.224,2.224H22.5A6.631,6.631,0,0,1,27.217,73.1L37.953,83.835a2.224,2.224,0,0,0,1.572.652h47.08a2.224,2.224,0,0,0,2.224-2.224v-46.7a2.224,2.224,0,0,0-2.224-2.224Z"
                                                            transform="translate(11.013 11.013)"
                                                            fill="#92bd44"
                                                        />
                                                        <path
                                                            id="Pfad_1194"
                                                            data-name="Pfad 1194"
                                                            d="M26,15H39.342v6.671H26Z"
                                                            transform="translate(29.368 4.895)"
                                                            fill="#92bd44"
                                                        />
                                                        <path
                                                            id="Pfad_1195"
                                                            data-name="Pfad 1195"
                                                            d="M64.7,11H20.224a2.224,2.224,0,1,0,0,4.447H64.7A2.224,2.224,0,0,0,64.7,11Z"
                                                            transform="translate(19.579 0)"
                                                            fill="#92bd44"
                                                        />
                                                    </g>
                                                </svg>
                                            </Grid>
                                            <Grid style={{ padding: '7px 15px' }}>
                                                <Typography variant="body2" style={{ fontSize: '12px', marginTop: '5px' }}>
                                                    Engine
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    style={{ fontSize: '14px', fontWeight: 'bold', color: '#8D8E93' }}
                                                >
                                                    {engine}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <Grid sx={{ display: 'flex' ,paddingLeft:{xs:"20px",sm:"0px"}}}>
                                            <Grid style={{ border: '2px solid #F2F1F0', borderRadius: '6px', padding: '0px 11px' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="50" viewBox="0 0 93.584 84.879">
                                                    <g id="Gruppe_1108" data-name="Gruppe 1108" transform="translate(-215.935 -2076.621)">
                                                        <g id="Icon" transform="translate(214.685 2074.371)">
                                                            <path
                                                                id="Pfad_1172"
                                                                data-name="Pfad 1172"
                                                                d="M13.22,2.25A11.97,11.97,0,1,0,25.19,14.22,11.974,11.974,0,0,0,13.22,2.25Zm0,6.529A5.441,5.441,0,1,1,7.779,14.22,5.443,5.443,0,0,1,13.22,8.779Z"
                                                                transform="translate(0 0)"
                                                                fill="#92bd44"
                                                            />
                                                            <path
                                                                id="Pfad_1173"
                                                                data-name="Pfad 1173"
                                                                d="M13.22,16.25A11.97,11.97,0,1,0,25.19,28.22,11.974,11.974,0,0,0,13.22,16.25Zm0,6.529A5.441,5.441,0,1,1,7.779,28.22,5.443,5.443,0,0,1,13.22,22.779Z"
                                                                transform="translate(0 46.939)"
                                                                fill="#92bd44"
                                                            />
                                                            <path
                                                                id="Pfad_1174"
                                                                data-name="Pfad 1174"
                                                                d="M21.22,2.25A11.97,11.97,0,1,0,33.19,14.22,11.974,11.974,0,0,0,21.22,2.25Zm0,6.529a5.441,5.441,0,1,1-5.441,5.441A5.443,5.443,0,0,1,21.22,8.779Z"
                                                                transform="translate(26.822 0)"
                                                                fill="#92bd44"
                                                            />
                                                            <path
                                                                id="Pfad_1175"
                                                                data-name="Pfad 1175"
                                                                d="M21.22,16.25A11.97,11.97,0,1,0,33.19,28.22,11.974,11.974,0,0,0,21.22,16.25Zm0,6.529a5.441,5.441,0,1,1-5.441,5.441A5.443,5.443,0,0,1,21.22,22.779Z"
                                                                transform="translate(26.822 46.939)"
                                                                fill="#92bd44"
                                                            />
                                                            <path
                                                                id="Pfad_1176"
                                                                data-name="Pfad 1176"
                                                                d="M29.22,2.25A11.97,11.97,0,1,0,41.19,14.22,11.974,11.974,0,0,0,29.22,2.25Zm0,6.529a5.441,5.441,0,1,1-5.441,5.441A5.443,5.443,0,0,1,29.22,8.779Z"
                                                                transform="translate(53.644 0)"
                                                                fill="#92bd44"
                                                            />
                                                            <path
                                                                id="Pfad_1178"
                                                                data-name="Pfad 1178"
                                                                d="M3.25,9.515V53.042a3.265,3.265,0,0,0,6.529,0V9.515a3.265,3.265,0,1,0-6.529,0Z"
                                                                transform="translate(6.706 13.411)"
                                                                fill="#92bd44"
                                                            />
                                                            <path
                                                                id="Pfad_1179"
                                                                data-name="Pfad 1179"
                                                                d="M11.25,9.515V53.042a3.265,3.265,0,0,0,6.529,0V9.515a3.265,3.265,0,1,0-6.529,0Z"
                                                                transform="translate(33.528 13.411)"
                                                                fill="#92bd44"
                                                            />
                                                            <path
                                                                id="Pfad_1180"
                                                                data-name="Pfad 1180"
                                                                d="M72.894,9.515V26.926a1.089,1.089,0,0,1-1.088,1.088H6.515a3.265,3.265,0,0,0,0,6.529H71.806a7.617,7.617,0,0,0,7.617-7.617V9.515a3.265,3.265,0,1,0-6.529,0Z"
                                                                transform="translate(6.706 13.411)"
                                                                fill="#92bd44"
                                                            />
                                                        </g>
                                                    </g>
                                                </svg>
                                            </Grid>
                                            <Grid style={{ padding: '7px 15px' }}>
                                                <Typography variant="body2" style={{ fontSize: '12px', marginTop: '5px' }}>
                                                    Transmission
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    style={{ fontSize: '14px', fontWeight: 'bold', color: '#8D8E93' }}
                                                >
                                                    {tranmission}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <Grid sx={{ display: 'flex',paddingLeft:{xs:"20px",sm:"0px"}}}>
                                            <Grid style={{ border: '2px solid #F2F1F0', borderRadius: '6px', padding: '9px 4px' }}>
                                                <svg
                                                    id="fuel-station"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="50"
                                                    height="30"
                                                    viewBox="0 0 77.198 84.879"
                                                >
                                                    <path
                                                        id="Pfad_1185"
                                                        data-name="Pfad 1185"
                                                        d="M343.177,94.293H332.656v5.134h7.954v7.408a11.547,11.547,0,0,0,8.962,11.237V148.6a3.074,3.074,0,0,1-6.148,0V122.236a8.217,8.217,0,0,0-8.208-8.207h-2.561v5.133h2.561a3.078,3.078,0,0,1,3.075,3.074V148.6a8.208,8.208,0,0,0,16.415,0V105.822A11.543,11.543,0,0,0,343.177,94.293Zm0,0"
                                                        transform="translate(-277.509 -78.661)"
                                                        fill="#92bd44"
                                                    />
                                                    <path
                                                        id="Pfad_1186"
                                                        data-name="Pfad 1186"
                                                        d="M84.4,81.563H106.43V96.39H84.4Zm0,0"
                                                        transform="translate(-70.407 -68.041)"
                                                        fill="#92bd44"
                                                    />
                                                    <path
                                                        id="Pfad_1187"
                                                        data-name="Pfad 1187"
                                                        d="M128.426,319.488a3.717,3.717,0,1,0,7.434,0c0-1.285-1.682-5.37-3.717-9.594C130.108,314.118,128.426,318.2,128.426,319.488Zm0,0"
                                                        transform="translate(-107.135 -258.52)"
                                                        fill="#92bd44"
                                                    />
                                                    <path
                                                        id="Pfad_1188"
                                                        data-name="Pfad 1188"
                                                        d="M41.958,0H8.056A8.066,8.066,0,0,0,0,8.056V82.312a2.567,2.567,0,0,0,2.567,2.567h44.88a2.567,2.567,0,0,0,2.567-2.567V8.056A8.066,8.066,0,0,0,41.958,0ZM11.425,33.482a2.567,2.567,0,0,1-2.567-2.566V10.955a2.567,2.567,0,0,1,2.567-2.567H38.59a2.567,2.567,0,0,1,2.567,2.567V30.916a2.567,2.567,0,0,1-2.567,2.566ZM33.858,60.968a8.85,8.85,0,1,1-17.7,0c0-3.814,5.04-13.58,6.585-16.483a2.567,2.567,0,0,1,4.532,0C28.818,47.388,33.858,57.154,33.858,60.968Zm0,0"
                                                        fill="#92bd44"
                                                    />
                                                </svg>
                                            </Grid>
                                            <Grid style={{ padding: '7px 15px' }}>
                                                <Typography variant="body2" style={{ fontSize: '12px', marginTop: '5px' }}>
                                                    Fuel
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    style={{ fontSize: '14px', fontWeight: 'bold', color: '#8D8E93' }}
                                                >
                                                    {fuel}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <Grid sx={{ display: 'flex' ,paddingLeft:{xs:"20px",sm:"0px"}}}>
                                            <Grid style={{ border: '2px solid #F2F1F0', borderRadius: '6px', padding: '0px 11px' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" viewBox="0 0 99.492 84.878">
                                                    <g id="racing" transform="translate(0 -37.6)">
                                                        <g id="Gruppe_1095" data-name="Gruppe 1095" transform="translate(52.186 75.173)">
                                                            <g id="Gruppe_1094" data-name="Gruppe 1094" transform="translate(0 0)">
                                                                <path
                                                                    id="Pfad_1196"
                                                                    data-name="Pfad 1196"
                                                                    d="M273.422,230.954a4.867,4.867,0,1,0,4.867,4.867A4.872,4.872,0,0,0,273.422,230.954Z"
                                                                    transform="translate(-268.555 -230.954)"
                                                                    fill="#92bd44"
                                                                />
                                                            </g>
                                                        </g>
                                                        <g id="Gruppe_1097" data-name="Gruppe 1097" transform="translate(60.276 60.42)">
                                                            <g id="Gruppe_1096" data-name="Gruppe 1096" transform="translate(0 0)">
                                                                <path
                                                                    id="Pfad_1197"
                                                                    data-name="Pfad 1197"
                                                                    d="M310.189,155.037v8.776a11.353,11.353,0,0,1,6.089,4.428l8.347-2.712A19.938,19.938,0,0,0,310.189,155.037Z"
                                                                    transform="translate(-310.189 -155.037)"
                                                                    fill="#92bd44"
                                                                />
                                                            </g>
                                                        </g>
                                                        <g id="Gruppe_1099" data-name="Gruppe 1099" transform="translate(66.031 77.042)">
                                                            <g id="Gruppe_1098" data-name="Gruppe 1098">
                                                                <path
                                                                    id="Pfad_1198"
                                                                    data-name="Pfad 1198"
                                                                    d="M350.481,240.574l-8.35,2.713c0,.095.007.189.007.284a11.254,11.254,0,0,1-2.336,6.873l5.155,7.1a19.871,19.871,0,0,0,5.523-16.966Z"
                                                                    transform="translate(-339.803 -240.574)"
                                                                    fill="#92bd44"
                                                                />
                                                            </g>
                                                        </g>
                                                        <g id="Gruppe_1101" data-name="Gruppe 1101" transform="translate(0 37.6)">
                                                            <g id="Gruppe_1100" data-name="Gruppe 1100">
                                                                <path
                                                                    id="Pfad_1199"
                                                                    data-name="Pfad 1199"
                                                                    d="M57.052,37.6H17.836a3.223,3.223,0,0,0,0,6.447H34.592a42.755,42.755,0,0,0-9.46,8.057H3.223a3.224,3.224,0,0,0,0,6.447H20.469a42.355,42.355,0,0,0,1.948,45.988H13.271a3.223,3.223,0,0,0,0,6.447H28.043a42.708,42.708,0,0,0,6.549,5.046H3.556a3.223,3.223,0,0,0,0,6.447h53.5a42.439,42.439,0,1,0,0-84.879ZM72.71,101.193c-.059.05-.118.1-.182.147s-.146.1-.22.147a26.278,26.278,0,0,1-30.512,0q-.112-.068-.22-.147c-.064-.046-.123-.1-.182-.147a26.329,26.329,0,1,1,31.316,0Z"
                                                                    transform="translate(0 -37.6)"
                                                                    fill="#92bd44"
                                                                />
                                                            </g>
                                                        </g>
                                                        <g id="Gruppe_1103" data-name="Gruppe 1103" transform="translate(39.393 60.42)">
                                                            <g id="Gruppe_1102" data-name="Gruppe 1102" transform="translate(0 0)">
                                                                <path
                                                                    id="Pfad_1200"
                                                                    data-name="Pfad 1200"
                                                                    d="M202.722,165.528l8.347,2.712a11.357,11.357,0,0,1,6.089-4.428v-8.776A19.939,19.939,0,0,0,202.722,165.528Z"
                                                                    transform="translate(-202.722 -155.036)"
                                                                    fill="#92bd44"
                                                                />
                                                            </g>
                                                        </g>
                                                        <g id="Gruppe_1105" data-name="Gruppe 1105" transform="translate(48.13 90.707)">
                                                            <g id="Gruppe_1104" data-name="Gruppe 1104" transform="translate(0 0)">
                                                                <path
                                                                    id="Pfad_1201"
                                                                    data-name="Pfad 1201"
                                                                    d="M260.373,310.894a11.284,11.284,0,0,1-7.531,0l-5.156,7.1a19.852,19.852,0,0,0,17.844,0Z"
                                                                    transform="translate(-247.685 -310.894)"
                                                                    fill="#92bd44"
                                                                />
                                                            </g>
                                                        </g>
                                                        <g id="Gruppe_1107" data-name="Gruppe 1107" transform="translate(37.17 77.042)">
                                                            <g id="Gruppe_1106" data-name="Gruppe 1106" transform="translate(0 0)">
                                                                <path
                                                                    id="Pfad_1202"
                                                                    data-name="Pfad 1202"
                                                                    d="M199.852,243.571c0-.1,0-.189.007-.284l-8.35-2.713a19.871,19.871,0,0,0,5.523,16.966l5.155-7.1A11.255,11.255,0,0,1,199.852,243.571Z"
                                                                    transform="translate(-191.283 -240.574)"
                                                                    fill="#92bd44"
                                                                />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </Grid>
                                            <Grid style={{ padding: '7px 15px' }}>
                                                <Typography variant="body2" style={{ fontSize: '12px', marginTop: '5px' }}>
                                                    Drive
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    style={{ fontSize: '14px', fontWeight: 'bold', color: '#8D8E93' }}
                                                >
                                                    {drive}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <Grid sx={{ display: 'flex',paddingLeft:{xs:"20px",sm:"0px"} }}>
                                            <Grid style={{ border: '2px solid #F2F1F0', borderRadius: '6px', padding: '0px 11px' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="50" viewBox="0 0 93.584 84.879">
                                                    <g id="Gruppe_1108" data-name="Gruppe 1108" transform="translate(-215.935 -2076.621)">
                                                        <g id="Icon" transform="translate(214.685 2074.371)">
                                                            <path
                                                                id="Pfad_1172"
                                                                data-name="Pfad 1172"
                                                                d="M13.22,2.25A11.97,11.97,0,1,0,25.19,14.22,11.974,11.974,0,0,0,13.22,2.25Zm0,6.529A5.441,5.441,0,1,1,7.779,14.22,5.443,5.443,0,0,1,13.22,8.779Z"
                                                                transform="translate(0 0)"
                                                                fill="#92bd44"
                                                            />
                                                            <path
                                                                id="Pfad_1173"
                                                                data-name="Pfad 1173"
                                                                d="M13.22,16.25A11.97,11.97,0,1,0,25.19,28.22,11.974,11.974,0,0,0,13.22,16.25Zm0,6.529A5.441,5.441,0,1,1,7.779,28.22,5.443,5.443,0,0,1,13.22,22.779Z"
                                                                transform="translate(0 46.939)"
                                                                fill="#92bd44"
                                                            />
                                                            <path
                                                                id="Pfad_1174"
                                                                data-name="Pfad 1174"
                                                                d="M21.22,2.25A11.97,11.97,0,1,0,33.19,14.22,11.974,11.974,0,0,0,21.22,2.25Zm0,6.529a5.441,5.441,0,1,1-5.441,5.441A5.443,5.443,0,0,1,21.22,8.779Z"
                                                                transform="translate(26.822 0)"
                                                                fill="#92bd44"
                                                            />
                                                            <path
                                                                id="Pfad_1175"
                                                                data-name="Pfad 1175"
                                                                d="M21.22,16.25A11.97,11.97,0,1,0,33.19,28.22,11.974,11.974,0,0,0,21.22,16.25Zm0,6.529a5.441,5.441,0,1,1-5.441,5.441A5.443,5.443,0,0,1,21.22,22.779Z"
                                                                transform="translate(26.822 46.939)"
                                                                fill="#92bd44"
                                                            />
                                                            <path
                                                                id="Pfad_1176"
                                                                data-name="Pfad 1176"
                                                                d="M29.22,2.25A11.97,11.97,0,1,0,41.19,14.22,11.974,11.974,0,0,0,29.22,2.25Zm0,6.529a5.441,5.441,0,1,1-5.441,5.441A5.443,5.443,0,0,1,29.22,8.779Z"
                                                                transform="translate(53.644 0)"
                                                                fill="#92bd44"
                                                            />
                                                            <path
                                                                id="Pfad_1178"
                                                                data-name="Pfad 1178"
                                                                d="M3.25,9.515V53.042a3.265,3.265,0,0,0,6.529,0V9.515a3.265,3.265,0,1,0-6.529,0Z"
                                                                transform="translate(6.706 13.411)"
                                                                fill="#92bd44"
                                                            />
                                                            <path
                                                                id="Pfad_1179"
                                                                data-name="Pfad 1179"
                                                                d="M11.25,9.515V53.042a3.265,3.265,0,0,0,6.529,0V9.515a3.265,3.265,0,1,0-6.529,0Z"
                                                                transform="translate(33.528 13.411)"
                                                                fill="#92bd44"
                                                            />
                                                            <path
                                                                id="Pfad_1180"
                                                                data-name="Pfad 1180"
                                                                d="M72.894,9.515V26.926a1.089,1.089,0,0,1-1.088,1.088H6.515a3.265,3.265,0,0,0,0,6.529H71.806a7.617,7.617,0,0,0,7.617-7.617V9.515a3.265,3.265,0,1,0-6.529,0Z"
                                                                transform="translate(6.706 13.411)"
                                                                fill="#92bd44"
                                                            />
                                                        </g>
                                                    </g>
                                                </svg>
                                            </Grid>
                                            <Grid style={{ padding: '7px 15px' }}>
                                                <Typography variant="body2" style={{ fontSize: '12px', marginTop: '5px' }}>
                                                    Seats
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    style={{ fontSize: '14px', fontWeight: 'bold', color: '#8D8E93' }}
                                                >
                                                    {seats}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid style={{ marginTop: '10px' }}>
                                    <Typography variant="body2" sx={{ fontSize: '22px', marginTop: '20px' ,textAlign:{xs:"center",sm:"left"} }}>
                                        Pictures
                                    </Typography>
                                    <ProductSlider />
                                </Grid>

                                <Grid style={{ marginTop: '50px' }}>
                                    <Typography variant="body2" sx={{ fontSize: '20px',paddingLeft:{xs:"30px",sm:"0px"} }}>
                                        Furnishing
                                    </Typography>
                                </Grid>
                                <Grid container spacing={2} style={{ marginTop: '1px' ,}}>
                                    {furnishing.map((data) => (
                                        <Grid item lg={6} md={6} sm={6} xs={12} sx={{ marginTop: '20px' ,}}>
                                            <Grid sx={{ display: 'flex', marginTop: '-25px',paddingLeft:{xs:"20px",sm:"0px"} }}>
                                                <CheckCircleIcon style={{ color: '#91bd44', fontSize: '200%' }} />
                                                <Typography variant="body2" style={{ paddingLeft: '10px', paddingTop: '3px' }}>
                                                    {data}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Grid
                                sx={{
                                    border: '1px solid #92BD44',
                                    backgroundColor: '#ECF3DF',
                                    borderRadius: {xs:'0px',sm:"30px"},
                                    width: '100%',
                                    padding: {xs:'10px 15px',sm:"40px 22px"},
                                    float: 'right'
                                }}
                            >
                                <Typography variant="body2" style={{ fontSize: '22px' }}>
                                    <span style={{ color: '#92BD44' }}>Configure</span> Subcriptions and{' '}
                                    <span style={{ color: '#92BD44' }}>Calculate</span> Rent
                                </Typography>

                                <Grid>
                                    <Typography variant="body2" style={{ marginTop: '20px', fontSize: '16px' }}>
                                    Monthly mileage package
                                    </Typography>

                                    <Box sx={{ width: '100%' }}>
                                        <Slider
                                            aria-label="Temperature"
                                            defaultValue={30}
                                            getAriaValueText={(value)=>{setfirstvalue(value)}}
                                            valueLabelDisplay="auto"
                                            step={50}
                                            marks={marks}
                                            min={850}
                                            max={3200}
                                        />
                                    </Box>

                                    <Typography variant="body2" style={{ marginTop: '20px', fontSize: '16px' }}>
                                    Rental period in months
                                    </Typography>

                                    <Box sx={{ width: '100%' }}>
                                        <Slider
                                            aria-label="Temperature"
                                            defaultValue={3}
                                            getAriaValueText={(value)=>{setsecondvalue(value)}}
                                            valueLabelDisplay="auto"
                                            step={3}
                                            marks={marks1}
                                            min={3}
                                            max={36}
                                        />
                                    </Box>
                                </Grid>

                                <Grid container spacing={2}>
                                    <Grid item xs={8}>
                                        <Typography variant="body2" style={{ fontSize: '22px' }}>
                                        Your monthly rate <span style={{ fontSize: '12px' }}>in CHF</span>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant="body2" style={{ fontSize: '22px', textAlign: 'right' }}>
                                        {calculatedPrice}
                                        </Typography>
                                    </Grid>
                                </Grid>

                                <Grid style={{ display: 'flex', marginTop: '10px' }}>
                                    <CheckCircleIcon style={{ color: '#92BD44' }} />
                                    <Typography variant="body2" style={{ marginTop: '2px', paddingLeft: '10px' }}>
                                    All subscription services included
                                    </Typography>
                                </Grid>

                                <Grid style={{ display: 'flex', marginTop: '10px' }}>
                                    <CheckCircleIcon style={{ color: '#92BD44' }} />
                                    <Typography variant="body2" style={{ marginTop: '2px', paddingLeft: '10px' }}>
                                    No hidden costs
                                    </Typography>
                                </Grid>

                                <Grid style={{ display: 'flex', marginTop: '10px' }}>
                                    <CheckCircleIcon style={{ color: '#92BD44' }} />
                                    <Typography variant="body2" style={{ marginTop: '2px', paddingLeft: '10px' }}>
                                    Fast, reliable and fair
                                    </Typography>
                                </Grid>

                                <Grid container spacing={2} style={{ marginTop: '20px' }}>
                                    <Grid item lg={6} md={6} sm={12} xs={12}>
                                        <ThemeButton title="Online booking" OnClick={() => navigate(`/check-out-step/${id}/${firstvalue}/${secondvalue}/${calculatedPrice}`)} />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={12} xs={12}>
                                        <ModalDetail />
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid container spacing={2} style={{ marginTop: '20px' ,}}>
                                <Grid item lg={3} md={12} sm={4} xs={12} sx={{display:"flex",justifyContent:"center"}}>
                                    <img src={profileIocn} alt="" style={{ width: '100px' }} />
                                </Grid>
                                <Grid item lg={9} md={12} sm={8} xs={12} sx={{textAlign:{xs:"center",sm:"left"}}}>
                                    <Typography variant="body2" style={{ fontSize: '22px', marginTop: '10px' }}>
                                        Do you <span style={{ color: '#92BD44' }}>have questions</span> and need{' '}
                                        <span style={{ color: '#92BD44' }}>advice</span>?
                                    </Typography>
                                    <Typography variant="body2" style={{ fontSize: '16px' }}>
                                    Our customer service is looking forward to hearing from you. → To the contact page
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default CarInfo;
