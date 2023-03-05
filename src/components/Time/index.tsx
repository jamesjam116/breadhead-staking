import React, { Component } from 'react'
import { useState } from 'react';
export const useDate = () => {
    const locale = 'en';
    const [today, setDate] = React.useState(new Date()); // Save the current date to be able to trigger an update
    const [value, setValue] = useState('');
    const [count, setCount] = useState(-1);
    React.useEffect(() => {
        const timer = setInterval(() => { // Creates an interval which will update the current data every minute
            // This will trigger a rerender every component that uses the useDate hook.
            setDate(new Date());
        }, 100);

        return () => {
            clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
        }
    }, [new Date()]);

    const day = today.toLocaleDateString(locale, { weekday: 'long' });
    const date = `${today.toLocaleDateString(locale, { month: 'long' }).substring(0, 3)} ${today.getDate()}` + '  ';

    const hour = today.getHours();
    const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, `;

    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric', second: 'numeric' });

    return {
        date,
        time,
        wish,
    };
};