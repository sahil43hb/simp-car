import * as React from 'react';
import ReactFileReader from 'react-file-reader';
// material-ui
import { OutlinedInput, FormControl, Typography, Button, Grid } from '@mui/material';

import { MdEdit } from 'react-icons/md';
import { GrAdd } from 'react-icons/gr';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { IconSearch } from '@tabler/icons';
import pdf from 'assets/images/pdf.png';
// assets

export default function UploadDoc() {
    const [state, setState] = React.useState([
        { img: pdf, name: 'Lease Signed' },
        { img: pdf, name: 'ID Copy' },
        { img: pdf, name: 'Lease Signed' }
    ]);

    const handleClick1 = (e) => console.log(e);
    return (
        <>
        <Grid container sx={{padding:"10px"}}>
        <Grid item xs={12}>
            <Grid textAlign={{ sm: 'right', lg: 'right' }}>
                <FormControl sx={{ m: 1 }} variant="outlined">
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        placeholder="Search"
                        size='small'
                        endAdornment={<IconSearch />}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight'
                        }}
                    />
                </FormControl>
            </Grid>
            </Grid>
            {state.map((num) => (
                <Grid container spacing={2} marginTop="10px" borderBottom="1px solid #DCDCDC">
                    <Grid item xs={8} display="flex">
                        <img src={num.img} alt="not" style={{ height: '27px', width: '20px' }} />
                        <Typography style={{ paddingTop: '6px', paddingLeft: '20px' }}>{num.name}</Typography>
                    </Grid>
                    <Grid item xs={4} textAlign="right">
                        <Button>
                            <MdEdit style={{ fontSize: '25px' }} />
                        </Button>
                        <Button>
                            <DeleteOutlineOutlinedIcon style={{ fontSize: '25px', color: '#EA4435' }} />
                        </Button>
                    </Grid>
                </Grid>
            ))}

            <Typography variant="h5" paddingTop="20px">
                To Upload Documents
            </Typography>
            <Grid
                container
                spacing={3}
                style={{
                    border: '1px solid #DCDCDC',
                    marginTop: '10px',
                    marginLeft: '-10px',
                    background: '#FAFAFA',
                    borderRadius: '12px',
                
                }}
            >
                {state.map((i) => (
                    <Grid item xs={1} style={{ padding: '10px 15px' }}>
                        <img src={i.img} alt="not" style={{ width: '30px' }} />
                    </Grid>
                ))}
                <ReactFileReader
                // fileTypes={[".png",".tif", ".jpg",]}
                base64="true"
                handleFiles={handleClick1}
            >
                <Grid  style={{ border: '2px dashed #909090', borderRadius: '6px', cursor: 'pointer',width: "40px",padding: '12px',height: '40px',marginTop:"10px" ,marginLeft:"30px"}}>
                
                    <Grid style={{padding:"0px -9px" ,background:"#FFFFFF"}}>
                        <GrAdd />
                       </Grid>
                       </Grid>
                </ReactFileReader>
           

            </Grid>
            </Grid>
        </>
    );
}
