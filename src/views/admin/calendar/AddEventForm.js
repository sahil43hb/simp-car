import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Button,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    FormControl,
    FormControlLabel,
    Grid,
    IconButton,
    InputAdornment,
    Radio,
    RadioGroup,
    Stack,
    Switch,
    TextField,
    Tooltip,
    Typography
} from '@mui/material';
import { LocalizationProvider, MobileDateTimePicker } from '@mui/x-date-pickers';
import '@mui/lab';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import adminAxios from 'utils/adminAxios';
// third-party
import _ from 'lodash';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';

// project imports
import ColorPalette from './ColorPalette';
import { gridSpacing } from 'store/constant';

// assets
import DateRangeIcon from '@mui/icons-material/DateRange';
import DeleteIcon from '@mui/icons-material/Delete';

// constant
const getInitialValues = (event, range) => {
    const newEvent = {
        title: '',
        description: '',
        color: '#2196f3',
        textColor: '',
        allDay: false,
        start: range ? new Date(range.start) : new Date(),
        end: range ? new Date(range.end) : new Date()
    };

    if (event || range) {
        return _.merge({}, newEvent, event);
    }

    return newEvent;
};

// ==============================|| CALENDAR EVENT ADD / EDIT / DELETE ||============================== //

const AddEventFrom = ({ event, range, handleDelete, handleCreate, handleUpdate, onCancel }) => {
    const theme = useTheme();
    const isCreating = !event;

    const backgroundColor = [
        {
            value: theme.palette.primary.main,
            color: 'primary.main',
            label: 'Default'
        },
        {
            value: theme.palette.error.main,
            color: 'error.main'
        },
        {
            value: theme.palette.success.dark,
            color: 'success.dark'
        },
        {
            value: theme.palette.secondary.main,
            color: 'secondary.main'
        },
        {
            value: theme.palette.warning.dark,
            color: 'warning.dark'
        },
        {
            value: theme.palette.orange.dark,
            color: 'orange.dark'
        },
        {
            value: theme.palette.grey[500],
            color: 'grey.500'
        },
        {
            value: theme.palette.primary.light,
            color: 'primary.light'
        },
        {
            value: theme.palette.error.light,
            color: 'error.light'
        },
        {
            value: theme.palette.success.light,
            color: 'success.light'
        },

        {
            value: theme.palette.warning.light,
            color: 'warning.light'
        },
        {
            value: theme.palette.orange.light,
            color: 'orange.light'
        }
    ];

    const EventSchema = Yup.object().shape({
        title: Yup.string().max(255).required('Title is required'),
        description: Yup.string().max(5000),
        end: Yup.date().when('start', (start, schema) => start && schema.min(start, 'End date must be later than start date')),
        start: Yup.date(),
        color: Yup.string().max(255),
        textColor: Yup.string().max(255)
    });
    const token = window.localStorage.getItem('userServiceToken');
    const [eventData, setEventData] = useState();
    const handleView = async () => {
        if (event) {
            try {
                const response = await adminAxios.post(`/view-event/${event}`, { token });
                // handleModalClose();
                console.log('Response=>', response.data);
                setEventData(response.data);
            } catch (err) {
                console.error(err);
            }
        }
    };
    useEffect(() => {
        handleView();
    }, [event]);
    const formik = useFormik({
        initialValues: getInitialValues(event, range),
        validationSchema: EventSchema,
        onSubmit: async (values, { resetForm, setSubmitting }) => {
            try {
                if (event) {
                    handleUpdate(event, values);
                } else {
                    handleCreate(values);
                }

                resetForm();
                onCancel();
                setSubmitting(false);
            } catch (error) {
                console.error(error);
            }
        }
    });
    const { values, errors, touched, handleSubmit, isSubmitting, getFieldProps, setFieldValue } = formik;
    return (
        <FormikProvider value={formik}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <DialogTitle>{event ? 'Edit Event' : 'Add Event'}</DialogTitle>
                    <Divider />
                    <DialogContent sx={{ p: 3 }}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Title"
                                    {...getFieldProps('title')}
                                    value={eventData?.title || values.title}
                                    onChange={(e) => setFieldValue('title', e.target.value)}
                                    error={Boolean(touched.title && errors.title)}
                                    helperText={touched.title && errors.title}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={3}
                                    label="Description"
                                    defaultValue={eventData?.description || values.description}
                                    {...getFieldProps('description')}
                                    error={Boolean(touched.description && errors.description)}
                                    helperText={touched.description && errors.description}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Switch defaultChecked={eventData?.allDay || values.allDay} {...getFieldProps('allDay')} />} // Displaying allDay from eventData if available, otherwise from values
                                    label="All day"
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <MobileDateTimePicker
                                    label="Start date"
                                    value={values.start} // Use Formik's values for the value prop
                                    inputFormat="dd/MM/yyyy hh:mm a"
                                    onChange={(date) => setFieldValue('start', date)}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            fullWidth
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <DateRangeIcon />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <MobileDateTimePicker
                                    label="End date"
                                    value={values.end} // Use Formik's values for the value prop
                                    inputFormat="dd/MM/yyyy hh:mm a"
                                    onChange={(date) => setFieldValue('end', date)}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            fullWidth
                                            error={Boolean(touched.end && errors.end)}
                                            helperText={touched.end && errors.end}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <DateRangeIcon />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                    )}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <FormControl>
                                    <RadioGroup
                                        row
                                        aria-label="color"
                                        {...getFieldProps('color')}
                                        onChange={(e) => setFieldValue('color', e.target.value)}
                                        name="color-radio-buttons-group"
                                        sx={{ '& .MuiFormControlLabel-root': { mr: 0 } }}
                                    >
                                        {backgroundColor.map((item, index) => (
                                            <FormControlLabel
                                                key={index}
                                                value={item.value}
                                                control={<Radio color="default" style={{ color: item.value }} />} // Set the radio button color
                                                label={item.label}
                                                defaultChecked={eventData?.color === item.value}
                                            />
                                        ))}
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </DialogContent>

                    <DialogActions sx={{ p: 3 }}>
                        <Grid container justifyContent="space-between" alignItems="center">
                            <Grid item>
                                {!isCreating && (
                                    <Tooltip title="Delete Event">
                                        <IconButton onClick={() => handleDelete(event)} size="large">
                                            <DeleteIcon color="error" />
                                        </IconButton>
                                    </Tooltip>
                                )}
                            </Grid>
                            <Grid item>
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <Button type="button" variant="outlined" onClick={onCancel}>
                                        Cancel
                                    </Button>
                                    <Button type="submit" variant="contained" disabled={isSubmitting}>
                                        {event ? 'Edit' : 'Add'}
                                    </Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </DialogActions>
                </Form>
            </LocalizationProvider>
        </FormikProvider>
    );
};

AddEventFrom.propTypes = {
    event: PropTypes.object,
    range: PropTypes.object,
    handleDelete: PropTypes.func,
    handleCreate: PropTypes.func,
    handleUpdate: PropTypes.func,
    onCancel: PropTypes.func
};

export default AddEventFrom;
