import { React, useState, useEffect } from 'react';
import adminAxios from 'utils/adminAxios';
import { useNavigate } from 'react-router-dom';
// material-ui
import { Grid, Stack, CircularProgress } from '@mui/material';
import simp from 'assets/images/simp.png';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import InvoiceTable from './InvoiceTable';
import Modals from '../../user/auth/Modal';
import picture from 'assets/images/picture.png';

// ==============================|| TABLE - DATA TABLE ||============================== //

export default function ParticularInvoice() {
    const token = window.localStorage.getItem('userServiceToken');
    const url = window.location.pathname;
    const idMatch = url.match(/\/([A-Z0-9-]+)$/i); // Extracts the last part of the URL
    const id = idMatch ? idMatch[1] : null;
    const [invoice, setInvoice] = useState([]);
    const [user, setUser] = useState([]);
    const [address, setAddress] = useState([]);
    const [sub, setSub] = useState([]);
    const [car, setCar] = useState([]);
    const [company, setCompany] = useState([]);
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const [loading, setLoading] = useState(true);
    const [loadingMark, setLoadingMark] = useState(false);
    const navigate = useNavigate();
    const handleOpen = async () => {
        try {
            const response = await adminAxios.post(`/invoice/${id}`, { token });
            console.log(response.data.invoice.sub);
            setInvoice(response.data.invoice);
            setSub(response.data.invoice.sub);
            setCar(response.data.invoice.sub.car);
            setUser(response.data.user);
            setAddress(response.data.user.address);
            setCompany(response.data.invoice.sub.car.car_company);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        handleOpen();
    }, []);

    const handleInvoiceMark = async (id) => {
        setLoadingMark(true);
        try {
            const response = await adminAxios.post(`/mark/invoice/${id}`, { token });
            console.log(response.data);
            if (response.data === 'success') {
                setOpen(true);
                handleOpen();
                setLoadingMark(false);
            }
        } catch (error) {
            console.error(error);
        }
    };

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </div>
        );
    }

    const updatedPrice = parseInt(invoice.price, 10) + 180;
    return (
        <MainCard
            content={false}
            title="Invoices"
            secondary={
                <Stack direction="row" spacing={2} alignItems="center">
                    {loadingMark === true ? (
                        <CircularProgress />
                    ) : (
                        <button
                            onClick={() => handleInvoiceMark(id)}
                            type="button"
                            style={{
                                color: '#76A81B',
                                backgroundColor: '#FFFF',
                                margin: '7px',
                                borderRadius: '6px',
                                border: '1px solid #76A81B',
                                cursor: 'pointer',
                                height: 40,
                                textAlign: 'center',
                                display: `${invoice.status === '0' ? 'block' : 'none'}`
                            }}
                        >
                            + Mard as Paid
                        </button>
                    )}
                </Stack>
            }
        >
            <Grid item style={{ padding: '35px' }} xs={12} md={6}>
                <SubCard>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <img src={simp} alt="no" style={{ height: '30px' }} />
                        </Grid>
                        <Grid
                            item
                            xs={8}
                            sm={6}
                            md={6}
                            lg={6}
                            sx={{ textAlign: { xs: ' -webkit-right', sm: ' -webkit-right', md: ' -webkit-right', lg: ' -webkit-right' } }}
                        >
                            <p
                                style={{
                                    height: '20px',
                                    width: '70px',
                                    background: '#DEF1BB',
                                    textAlign: 'center',
                                    color: `${invoice.status === '0' ? 'red' : '#76A81B'}`,
                                    backgroundColor: `${invoice.status === '0' ? '#FFDAD8' : '#B9F6CA'}`,
                                    padding: '1.7px',
                                    borderRadius: '12px'
                                }}
                            >
                                {invoice.status === '0' ? 'UnPaid' : 'Paid'}
                            </p>
                        </Grid>
                    </Grid>
                    <Grid sx={{ textAlign: { xs: 'center', sm: ' -webkit-right', md: ' -webkit-right', lg: ' -webkit-right' } }}>
                        INV-f1a19506-ebdf-4832-9bee-ebb243adaef8
                    </Grid>
                    <hr style={{ marginTop: '30px', color: '#EDE7F6' }} />

                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Grid>
                                <p color="#9E9E9E">INVOICE FROM</p>
                                <h3>{user === null ? 'N/A' : user.first_name}</h3>
                                <p color="#757575">
                                    {/* {address === null ? "N/A" : address.street_name} {address === null ? 'N/A' : address.street_number} {address === null ? 'N/A' : address.town} {address === null ? 'N/A' : address.residence_permit} */}
                                    {`${address===null}` ? 'No Record Found' : `${address.street_name} ${address.street_number} ${address.town} ${address.residence_permit}`}
                                </p>
                                <p color="#757575"> {address === null ? 'N/A' : address.post_code}</p>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid>
                        <InvoiceTable invoice={invoice} sub={sub} car={car} company={company} />
                    </Grid>
                    <Grid>
                        <p style={{ textAlign: 'right' }}>
                            Sub Total:<span style={{ paddingLeft: '20px' }}>{invoice.price}</span>{' '}
                        </p>
                        <p style={{ textAlign: 'right' }}>
                            Delivery Charges:
                            <span style={{ paddingLeft: '20px', fontWeight: '600', color: invoice.status === 0 ? 'red' : '#76A81B' }}>
                                {sub.pick_from === 'home' ? 'CHF 180.' : `Free`}
                            </span>
                        </p>
                    </Grid>
                    <hr style={{ marginTop: '12px', color: '#EDE7F6' }} />
                    <h3 style={{ textAlign: 'right' }}>
                        Total
                        <span style={{ paddingLeft: '23px' }}>{sub.pick_from === 'home' ? `${updatedPrice}` : `${invoice.price}`}</span>
                    </h3>
                    <hr style={{ marginTop: '12px', color: '#757575' }} />
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <h3>Notes</h3>
                            <p>We appreciate your business. Should you need us to add VAT or extra notes let us know!</p>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={6}
                            lg={6}
                            sx={{ textAlign: { xs: 'left', sm: ' -webkit-right', md: ' -webkit-right', lg: ' -webkit-right' } }}
                        >
                            <h3>Have Question?</h3>
                            <p>Support@Simpcar.com</p>
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Modals
                open={open}
                handleClose={handleClose}
                title={<h3>SuccessFull</h3>}
                description="Record Updated Successfully"
                btnName="Ok"
                url={() => navigate('/admin/payments')}
                img={picture}
            />
        </MainCard>
    );
}
