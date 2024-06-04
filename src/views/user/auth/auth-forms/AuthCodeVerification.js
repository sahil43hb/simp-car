
import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, Grid} from '@mui/material';
import picture from 'assets/images/picture.png';
import close from 'assets/images/close.png';
import Modals from '../Modal';
// third-party
import OtpInput from 'react18-input-otp';
import myAxios from 'utils/myAxios';
import { useNavigate } from 'react-router-dom';


// ============================|| STATIC - CODE VERIFICATION ||============================ //

const AuthCodeVerification = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false);
    const handleClose = () => setOpen(false);
    const handleError = () => setError(false);
    const [otp, setOtp] = useState();
    const handleOpen = async() =>  {
    
        try {
            const response = await myAxios.post('/verify',{otp});
            console.log(response.data.data);
            if(response.data.data === 'success'){
                setOpen(true);
            }
            else if(response.data.data === 'error'){
                setError(true);
            }    
        } catch (error) {
          console.error(error);
        }
    }

    const theme = useTheme();
    const borderColor = theme.palette.mode === 'dark' ? theme.palette.grey[200] : theme.palette.grey[300];
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <OtpInput
                    value={otp}
                    onChange={(otp) => setOtp(otp)}
                    name="otp"
                    numInputs={4}
                    containerStyle={{ justifyContent: 'space-between' }}
                    inputStyle={{
                        width: '60%',
                        margin: '8px',
                        padding: '10px',
                        border: `1px solid ${borderColor}`,
                        borderRadius: 4,
                        ':hover': {
                            borderColor: theme.palette.primary.main
                        }
                    }}
                    focusStyle={{
                        outline: 'none',
                        border: `2px solid ${theme.palette.primary.main}`
                    }}
                />
            </Grid>
            <Grid item xs={12}>
                {/* <Modals/> */}
                <Button
                    disableElevation
                    onClick={handleOpen}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    style={{ color: '#FFFF' }}
                >
                    Submit
                </Button>
                {setOpen && (
                    <Modals
                        open={open}
                        handleClose={handleClose}
                        title={<h3>Verified the account</h3>}
                        description="You have Successfully verified the account "
                        btnName="Ok"
                        url={()=>navigate('/login')}
                        img={picture}
                    />
                )}
                {setError && (
                    <Modals
                        open={error}
                        handleClose={handleError}
                        title={<h3>Otp Code Error</h3>}
                        description="Your Otp code is incorrect"
                        btnName="Close"
                        url={()=>navigate('/check-mail')}
                        img={close}
                    />
                )}
            </Grid>
        </Grid>
    );
};
export default AuthCodeVerification;
