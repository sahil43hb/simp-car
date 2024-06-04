import { useEffect, useRef, useState } from 'react';
import adminAxios from 'utils/adminAxios';
// material-ui
import { Button, Dialog, useMediaQuery } from '@mui/material';

// third-party
import FullCalendar from '@fullcalendar/react';
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import timelinePlugin from '@fullcalendar/timeline';
import interactionPlugin from '@fullcalendar/interaction';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import CalendarStyled from './CalendarStyled';
import Toolbar from './Toolbar';
import AddEventForm from './AddEventForm';

// assets
import AddAlarmTwoToneIcon from '@mui/icons-material/AddAlarmTwoTone';

// ==============================|| APPLICATION CALENDAR ||============================== //

const Calendar = () => {
    const calendarRef = useRef(null);
    const matchSm = useMediaQuery((theme) => theme.breakpoints.down('md'));

    // fetch events data
    const [events, setEvents] = useState([]);

    const token = window.localStorage.getItem('userServiceToken');
    const handleOpen = async () => {
        try {
            const response = await adminAxios.get('/events', { token });
            setEvents(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        handleOpen();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [date, setDate] = useState(new Date());
    const [view, setView] = useState(matchSm ? 'listWeek' : 'dayGridMonth');

    // calendar toolbar events
    const handleDateToday = () => {
        const calendarEl = calendarRef.current;

        if (calendarEl) {
            const calendarApi = calendarEl.getApi();

            calendarApi.today();
            setDate(calendarApi.getDate());
        }
    };

    const handleViewChange = (newView) => {
        const calendarEl = calendarRef.current;

        if (calendarEl) {
            const calendarApi = calendarEl.getApi();

            calendarApi.changeView(newView);
            setView(newView);
        }
    };

    // set calendar view
    useEffect(() => {
        handleViewChange(matchSm ? 'listWeek' : 'dayGridMonth');
    }, [matchSm]);

    const handleDatePrev = () => {
        const calendarEl = calendarRef.current;

        if (calendarEl) {
            const calendarApi = calendarEl.getApi();

            calendarApi.prev();
            setDate(calendarApi.getDate());
        }
    };

    const handleDateNext = () => {
        const calendarEl = calendarRef.current;

        if (calendarEl) {
            const calendarApi = calendarEl.getApi();

            calendarApi.next();
            setDate(calendarApi.getDate());
        }
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRange, setSelectedRange] = useState(null);
    const [selectedEvent, setSelectedEvent] = useState(null);

    // calendar event select/add/edit/delete
    const handleRangeSelect = (arg) => {
        const calendarEl = calendarRef.current;
        if (calendarEl) {
            const calendarApi = calendarEl.getApi();
            calendarApi.unselect();
        }

        setSelectedRange({
            start: arg.start,
            end: arg.end
        });
        setIsModalOpen(true);
    };

    const handleEventSelect = (arg) => {
        if (arg.event.id) {
            const selectEvent = arg.event.id;
            setSelectedEvent(selectEvent);
        } else {
            setSelectedEvent(null);
        }
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedEvent(null);
        setSelectedRange(null);
    };

    const handleEventCreate = async (data) => {
        const response = await adminAxios.post('/create-events', { token, data });
        handleModalClose();
        if(response.data === 'success') handleOpen();
    };

    const handleUpdateEvent = async (event, update) => {
        const response = await adminAxios.post(`/update-events/${event}`, { token, update });
        handleModalClose();
        if(response.data === 'success') handleOpen();
    };

    const handleEventUpdate = async ({ event }) => {
        try {
            const  update = {
                allDay: event.allDay,
                start: event.start,
                end: event.end
            };
            const response = await adminAxios.post(`/drag-update-events/${event.id}`, { token, update });
            if(response.data === 'success') handleOpen();
        } catch (err) {
            console.error(err);
        }
    };

    
    const handleEventDelete = async (id) => {
        try {
            const response = await adminAxios.delete(`/delete-event/${id}`, { token});
            handleModalClose();
            if(response.data === 'success') handleOpen();
        } catch (err) {
            console.error(err);
        }
    };

    const handleAddClick = () => {
        setIsModalOpen(true);
    };

    return (
        <MainCard
            title="Event Calendar"
            secondary={
                <Button variant="contained" onClick={handleAddClick} style={{ color: 'white' }}>
                    <AddAlarmTwoToneIcon fontSize="small" sx={{ mr: 0.75 }} />
                    Add New Event
                </Button>
            }
        >
            <CalendarStyled>
                <Toolbar
                    date={date}
                    view={view}
                    onClickNext={handleDateNext}
                    onClickPrev={handleDatePrev}
                    onClickToday={handleDateToday}
                    onChangeView={handleViewChange}
                />
                <SubCard>
                    <FullCalendar
                        weekends
                        editable
                        droppable
                        selectable
                        events={events}
                        ref={calendarRef}
                        rerenderDelay={10}
                        initialDate={date}
                        initialView={view}
                        dayMaxEventRows={3}
                        eventDisplay="block"
                        headerToolbar={false}
                        allDayMaintainDuration
                        eventResizableFromStart
                        select={handleRangeSelect}
                        eventDrop={handleEventUpdate}
                        eventClick={handleEventSelect}
                        eventResize={handleEventUpdate}
                        height={matchSm ? 'auto' : 720}
                        plugins={[listPlugin, dayGridPlugin, timelinePlugin, timeGridPlugin, interactionPlugin]}
                    />
                </SubCard>
            </CalendarStyled>

            {/* Dialog renders its body even if not open */}
            <Dialog maxWidth="sm" fullWidth onClose={handleModalClose} open={isModalOpen} sx={{ '& .MuiDialog-paper': { p: 0 } }}>
                {isModalOpen && (
                    <AddEventForm
                        event={selectedEvent}
                        range={selectedRange}
                        onCancel={handleModalClose}
                        handleDelete={handleEventDelete}
                        handleCreate={handleEventCreate}
                        handleUpdate={handleUpdateEvent}
                    />
                )}
            </Dialog>
        </MainCard>
    );
};

export default Calendar;
