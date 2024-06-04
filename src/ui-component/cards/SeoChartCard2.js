import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';

// third party
import Chart from 'react-apexcharts';

// project imports
import MainCard from './MainCard';
import { Link } from 'react-router-dom';

// =============================|| SEO CHART CARD ||============================= //
const SeoChartCard = ({ chartData, value, title, icon, type, totalDueDays, totalDueInvoice, totalDue }) => {
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('sm'));
  
    return (
     
        <Grid container justifyContent="space-between" spacing={2} sx={{ padding: { xs: '13px',md:"0px", lg: '0px' } }}>
          <Grid item xs={12}>
            <Grid container direction={type === 1 ? 'column-reverse' : 'column'} spacing={type === 1 ? 0 : 1}>
              {value && (
                <Grid item>
                  <Typography variant={matchDownMd ? 'h4' : 'h3'}>{value}</Typography>
                </Grid>
              )}
              {(title || icon) && (
                <Grid item container justifyContent="flex-start" alignContent="center">
                  {title && <Typography variant="body1">{title}</Typography>}
                  {icon && (
                    <Box sx={{ ml: 1 }}>
                      {icon}
                    </Box>
                  )}
                </Grid>
              )}
            </Grid>
            <Grid container spacing={1} sx={{ marginTop: { xs: '0px', lg: '30px' } }}>
              <Grid item xs={6} lg={4}>
                <p style={{ borderTop: '5px solid #067E39', width: '30px' }} />
                <h1>{totalDueDays} Days</h1>
                <p>Average past due days</p>
                <Link style={{ color: '#222222' }}>See details</Link>
              </Grid>
              <Grid item xs={6} lg={4}>
                <p style={{ borderTop: '5px solid #92BD44', width: '30px' }} />
                <h1>CHF {totalDueInvoice}</h1>
                <p>Total due</p>
                <Link style={{ color: '#222222' }}>{totalDueInvoice} invoice due</Link>
              </Grid>
              {/* <Grid item xs={6} lg={4}>
                <p style={{ borderTop: '5px solid #F2BF80', width: '30px' }} />
                <h1>$1,722</h1>
                <p>Total past due</p>
                <Link style={{ color: '#222222' }}>3 invoice past due</Link>
              </Grid> */}
            </Grid>
          </Grid>
          {chartData && (
            <Grid item xs={12}>
              <Chart {...chartData} />
            </Grid>
          )}
        </Grid>
     
    );
  };

SeoChartCard.propTypes = {
    chartData: PropTypes.object,
    title: PropTypes.string,
    icon: PropTypes.element,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.number
};

export default SeoChartCard;
