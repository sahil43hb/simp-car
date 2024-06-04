import { React, useState, useEffect } from 'react';
import myAxios from 'utils/myAxios';
// material-ui
import { Grid, CircularProgress } from '@mui/material';
import simp from 'assets/images/simp.png';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import InvoiceTable from './InvoiceTable';

// ==============================|| TABLE - DATA TABLE ||============================== //

export default function ParticularInvoice() {
    const token = window.localStorage.getItem('adminServiceToken');
    const url = window.location.pathname;
    const idMatch = url.match(/\/([A-Z0-9-]+)$/i); // Extracts the last part of the URL
    const id = idMatch ? idMatch[1] : null;
    const [loading, setLoading] = useState(true);
    const [invoice, setInvoice] = useState(null);
    const [user, setUser] = useState(null);
    const [address, setAddress] = useState(null);
    const [sub, setSub] = useState(null);
    const [car, setCar] = useState(null);
    const [company, setCompany] = useState(null);

    const handleOpen = async () => {
        try {
            const response = await myAxios.post(`/invoice/${id}`, { token });
            setInvoice(response.data.invoice);
            setSub(response.data.invoice.sub);
            setCar(response.data.invoice.sub.car);
            setUser(response.data.user);
            setAddress(response.data.user);
            setCompany(response.data.invoice.sub.car.car_company);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        handleOpen();
    }, []);
    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </div>
        );
    }
    const updatedPrice = parseInt(invoice.price, 10) + 180;
    return (
        <MainCard content={false} title="Invoices">
            <Grid item sx={{ padding: {xs:'10px',sm:"35px" }}} xs={12} md={6}>
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
                                {`${address===null}` ? 'No Record Found' : `${address.street_name} ${address.street_number} ${address.town} ${address.residence_permit}`}
                                </p>
                                <p color="#757575"> {address===null ? 'N/A' : address.post_code}</p>
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
                        {/* <p style={{ textAlign: 'right' }}>
                            Tax<span style={{ paddingLeft: '35px' }}>$5.00</span>{' '}
                        </p> */}
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
        </MainCard>
    );
}
