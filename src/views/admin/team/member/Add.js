import PropTypes from 'prop-types';
import { forwardRef, useEffect, useRef, useState } from 'react';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    InputLabel,
    MenuItem,
    Slide,
    TextField,
    CircularProgress,
    Typography
} from '@mui/material';

// project imports
import { gridSpacing } from 'store/constant';
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import adminAxios from 'utils/adminAxios';
// import Product1 from 'assets/images/widget/prod1.jpg';
// import Product2 from 'assets/images/widget/prod2.jpg';
// import Product3 from 'assets/images/widget/prod3.jpg';
// import Product4 from 'assets/images/widget/prod4.jpg';

// styles
const ImageWrapper = styled('div')(({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '4px',
    cursor: 'pointer',
    width: 55,
    height: 55,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.palette.background.default,
    '& > svg': {
        verticalAlign: 'sub',
        marginRight: 6
    }
}));

// product category options
const categories = [
    {
        value: '1',
        label: 'Iphone 12 Pro Max'
    },
    {
        value: '2',
        label: 'Iphone 11 Pro Max'
    },
    {
        value: '3',
        label: 'Nokia'
    },
    {
        value: '4',
        label: 'Samsung'
    }
];

// animation
const Transition = forwardRef((props, ref) => <Slide direction="left" ref={ref} {...props} />);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250
        }
    },
    chip: {
        margin: 2
    }
};

// tags list & style

function getStyles(name, personName, theme) {
    return {
        fontWeight: personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium
    };
}

// ==============================|| PRODUCT ADD DIALOG ||============================== //

const Add = ({ open, handleCloseDialog, success }) => {
    const theme = useTheme();

    const token = window.localStorage.getItem('userServiceToken');
    const [role, setRole] = useState();
    const [firstName,setFirstName] = useState();
    const [lastName,setLastName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [phone,setPhone] = useState();
    const [streetName,setStreetName] = useState();
    const [streetNum,setStreetNum] = useState();
    const [postCode,setPostCode] = useState();
    const [town,setTown] = useState();
    const [nationality,setNationality] = useState();
    const [permit,setPermit] = useState();
    const [birthDate,setBirthDate] = useState('01/01/2000');
    const [employment,setEmployment] = useState();
    const [error,setError] = useState();
    
    const [currency, setCurrency] = useState();
    const [image, setImage] = useState();
    const [selectedImageSrc, setSelectedImageSrc] = useState(''); // New state to store selected image source

    const handleImage = (event) => {
        const selectedImage = event.target.files[0]; // Get the selected image file
        if (selectedImage) {
            setImage(selectedImage);
            const reader = new FileReader();
            reader.onload = (e) => {
                setSelectedImageSrc(e.target.result); // Update the selected image source
            };
            reader.readAsDataURL(selectedImage);
        } else {
            setImage(''); // Clear the image state
            setSelectedImageSrc(''); // Clear the selected image source
        }
    };
    
    console.log("Image=>",image);
    const handleSelectChange = (event) => {
        setCurrency(event?.target.value);
    };

    const handleOpen = async () => {
        try {
            const response = await adminAxios.get('/team', { token });
           setRole(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(()=>{
        handleOpen()
    },[]);

    const handleStore = async () => {
        try {
            const formData = new FormData();
            formData.append('image', image); // Append the image to the FormData
    
            const data = {
                token,
                firstName,
                lastName,
                email,
                password,
                phone,
                streetName,
                streetNum,
                postCode,
                town,
                nationality,
                birthDate,
                employment,
                permit,
                currency,
            };
    
            // Append other data to the FormData
            Object.keys(data).forEach((key) => {
                formData.append(key, data[key]);
            });
    
            const response = await adminAxios.post('/add-admin', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
    
            if (response.data === 'success') {
                handleCloseDialog();
            }
        } catch (error) {
            console.error(error);
            setError(error);
        }
    };
    
    // handle category change dropdown
   
    // set image upload progress
    const [progress, setProgress] = useState(0);
    const progressRef = useRef(() => {});
    useEffect(() => {
        progressRef.current = () => {
            if (progress > 100) {
                setProgress(0);
            } else {
                const diff = Math.random() * 10;
                setProgress(progress + diff);
            }
        };
    });

    useEffect(() => {
        const timer = setInterval(() => {
            progressRef.current();
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    // handle tag select
    const [personName, setPersonName] = useState([]);
    
    const handleTagSelectChange = (event) => {
        setPersonName(event?.target.value);
    };
  
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleCloseDialog}
            sx={{
                '&>div:nth-of-type(3)': {
                    justifyContent: 'flex-end',
                    '&>div': {
                        m: 0,
                        borderRadius: '0px',
                        maxWidth: 450,
                        maxHeight: '100%'
                    }
                }
            }}
        >
            {open && (
                <>
                {role === null ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '50vh'}}>
                    <CircularProgress />
                </div> :
                <>
                    <DialogTitle>Add Member</DialogTitle>
                    <DialogContent>
                        <Grid container spacing={gridSpacing} sx={{ mt: 0.25 }}>
                            <Grid item xs={12}>
                                <TextField id="outlined-basic1" fullWidth label="Enter First Name*" onChange={(event)=>setFirstName(event.target.value)} value={firstName} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-basic2"
                                    fullWidth
                                    onChange={(event)=>setLastName(event.target.value)}
                                    label="Enter Last Name"
                                    value={lastName}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="standard-select-currency"
                                    select
                                    label="Select Role*"
                                    value={currency}
                                    fullWidth
                                    onChange={handleSelectChange}
                                    helperText="Please select Category"
                                >
                                    {role.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.value}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="outlined-basic3" type='email' fullWidth label="Email*" onChange={(event)=>setEmail(event.target.value)} value={email} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="outlined-basic4" fullWidth type='password' onChange={(event)=>setPassword(event.target.value)} label="Password*" value={password} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="outlined-basic4" fullWidth type='number' onChange={(event)=>setPhone(event.target.value)} label="Phone*" value={phone} />
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField
                                    label="Street Name*"
                                    id="filled-start-adornment1"
                                    value={streetName}
                                    onChange={(event)=>setStreetName(event.target.value)}
                                />
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField
                                    label="Street Number"
                                    onChange={(event)=>setStreetNum(event.target.value)}
                                    id="filled-start-adornment2"
                                    value={streetNum}
                                />
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField type="number" id="outlined-basic5" onChange={(event)=>setPostCode(event.target.value)} fullWidth label="Zip code*" value={postCode} />
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField id="outlined-basic6" fullWidth label="Town*" onChange={(event)=>setTown(event.target.value)} value={town} />
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField
                                    label="Nationality"
                                    value={nationality}
                                    onChange={(event)=>setNationality(event.target.value)}
                                />
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField type="number" id="outlined-basic7" onChange={(event)=>setPermit(event.target.value)} fullWidth label="Residence Permit" value={permit} />
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField type="date" id="outlined-basic7" fullWidth onChange={(event)=>setBirthDate(event.target.value)} label="Date Of birth" value={birthDate} />
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField type="text" id="outlined-basic7" fullWidth label="Employment" onChange={(event)=>setEmployment(event.target.value)} value={employment} />
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Typography variant="subtitle1" align="left">
                                            User Image
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        {/* Display the selected image */}
                                        {selectedImageSrc && (
                                            <ImageWrapper style={{height: '60px'}}>
                                                <img id="selected-image" src={selectedImageSrc} alt="Selected" style={{width: '100px', height: 'auto'}} />
                                            </ImageWrapper>
                                        )}
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div>
                                            <TextField type="file" id="file-upload" onChange={handleImage} fullWidth label="Click here to upload" sx={{ display: 'none' }} />
                                            <InputLabel
                                                htmlFor="file-upload"
                                                sx={{
                                                    background: theme.palette.background.default,
                                                    py: 3.75,
                                                    px: 0,
                                                    textAlign: 'center',
                                                    borderRadius: '4px',
                                                    cursor: 'pointer',
                                                    mb: 3,
                                                    '& > svg': {
                                                        verticalAlign: 'sub',
                                                        mr: 0.5
                                                    }
                                                }}
                                            >
                                                <CloudUploadIcon /> Click here to upload
                                            </InputLabel>
                                        </div>
                                    </Grid>
                                    
                                </Grid>
                            </Grid>
                    <Typography label={error} />
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <AnimateButton>
                            <Button variant="contained" onClick={handleStore}>Create</Button>
                        </AnimateButton>
                        <Button variant="text" color="error" onClick={handleCloseDialog}>
                            Close
                        </Button>
                    </DialogActions>
                </>
                }
                </>
            )}
        </Dialog>
    );
};

Add.propTypes = {
    open: PropTypes.bool,
    handleCloseDialog: PropTypes.func
};

export default Add;
