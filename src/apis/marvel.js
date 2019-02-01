import React from 'react';
import axios from 'axios';

const KEY = '430edfdf9501f91d382b30a9feb42788';

export default axios.create({
    baseURL: 'http(s)://gateway.marvel.com/',
    params: {
        apikey: KEY
    }
});

/* Notes:
    When using the orderby feature, some of the entries
    into the database don't have proper onsaleDates and
    will say something like "-0001-11-30T00:00:00-500".
    These will need to be filtered out when trying to get
    an ordered list.
*/