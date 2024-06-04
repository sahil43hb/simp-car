// material-ui
import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';
import adminAxios from 'utils/adminAxios';
import GmailModel from './GmailModel';
import SmsModel from './SmsModel';
import SignatureModel from './SignatureModel';
import QrModel from './QrCodeInvoiceModel';
// project imports

import UserSimpleCard from 'ui-component/cards/UserSimpleCard';

import SubCard from 'ui-component/cards/SubCard';
import { gridSpacing } from 'store/constant';

// assets

// this
const simpleCard = {
    id: '#Mail_Settings',
    avatar: 'mail.png',
    name: 'Mail Setting',
    status: 'Active',
    col: '#02B100',
    btnName: 'Update'
};
const simpleCard2 = {
    id: '#SMS',
    avatar: 'Smspluging.png',
    name: 'SMS  ',
    status: 'Active',
    col: '#635BFF',
    btnName: 'Update'
};
const simpleCard3 = {
    id: '#Signature',
    avatar: 'SignPluging.png',
    name: 'Signature',
    status: 'Active',
    col: '#635BFF',
    btnName: 'Update'
};
const simpleCard4 = {
    id: '#QRcodeinvoiceAPI',
    avatar: 'QrPluging.png',
    name: 'QR code invoice API',
    status: 'Active',
    col: '#635BFF',
    btnName: 'Update'
};
// ===============================|| UI CARDS ||=============================== //

const AdminPlugings = () => {
    const theme = useTheme();
    const [openModal, setModalOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [smsEdit, setSmsEdit] = useState(false);
    const [openSignatureEdit, setSignatureEdit] = useState(false);
    const [qrEdit, setQrEdit] = useState(false);
    const token = window.localStorage.getItem('userServiceToken');
    const handleopenEdit = () => {
        setOpenEdit(true);
    };
    const handleSmsEdit = () => {
        setSmsEdit(true);
    };
    const handleSignatureEdit = () => {
        setSignatureEdit(true);
    };
    const handleQrEdit = () => {
        setQrEdit(true);
    };
    const handleOpen = async () => {
        try {
            const response = await adminAxios.get('/get-users', { token });
        } catch (error) {
            console.error(error);
        }
    };
    // useEffect(() => {
    //     handleOpen();
    // }, []);
    const handleopenEditClose = () => {
        setOpenEdit(false);
        handleOpen();
    };
    const handleOpenSmsClose = () => {
        setSmsEdit(false);
        handleOpen();
    };
    const handleOpenSignatureClose = () => {
        setSignatureEdit(false);
        handleOpen();
    };
    const handleOpenQrClose = () => {
        setQrEdit(false);
        handleOpen();
    };

    const cardStyle = {
        background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[50],
        border: '1px solid',
        borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[100]
    };

    return (
        <>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={6} md={4}>
                    <SubCard style={{ background: '#EFFAEF' }}>
                        <UserSimpleCard {...simpleCard} url={handleopenEdit} />
                        {openEdit && (
                            <GmailModel
                                open={openEdit}
                                handleClose={handleopenEditClose}
                                editId={1}
                                btnName="Save"
                                url={handleopenEditClose}
                            />
                        )}
                    </SubCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <SubCard style={{ background: '#EFFAEF' }}>
                        <UserSimpleCard {...simpleCard2} url={handleSmsEdit}/>
                        {smsEdit && (
                            <SmsModel
                                open={setSmsEdit}
                                handleClose={handleOpenSmsClose}
                                editId={1}
                                btnName="Ok"
                                url={handleOpenSmsClose}
                            />
                        )}
                    </SubCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <SubCard style={{ background: '#EFFAEF' }}>
                        <UserSimpleCard {...simpleCard3} url={handleSignatureEdit}/>
                        {openSignatureEdit && (
                            <SignatureModel
                                open={openSignatureEdit}
                                handleClose={handleOpenSignatureClose}
                                editId={1}
                                btnName="Ok"
                                url={handleOpenSignatureClose}
                            />
                        )}
                    </SubCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <SubCard style={{ background: '#EFFAEF' }}>
                        <UserSimpleCard {...simpleCard4} url={handleQrEdit}/>
                        {qrEdit && (
                            <QrModel
                                open={qrEdit}
                                handleClose={handleOpenQrClose}
                                editId={1}
                                btnName="Ok"
                                url={handleOpenQrClose}
                            />
                        )}
                    </SubCard>
                </Grid>
            </Grid>
        </>
    );
};

export default AdminPlugings;
