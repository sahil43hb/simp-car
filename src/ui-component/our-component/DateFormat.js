import { formatDistanceToNow } from 'date-fns';

const DateFormat = ({ time }) => {
    // Check if the provided time is null or not a valid string
    if (time === null || typeof time !== 'string') {
        return 'N/A';
    }

    const date = new Date(time);

    // Check if the date is valid after conversion
    // if (isNaN(date)) {
    //     return 'Invalid time value';
    // }

    const distance = formatDistanceToNow(date, { includeSeconds: false, addSuffix: true });

    // Remove the word "about" if present at the beginning
    return distance.startsWith('about ') ? distance.slice(6) : distance;
};

export default DateFormat;