import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { PERMISSION_ENABLED_LOCATION } from '../../configuration/const';
import { get } from '../../services/searchLocation/get';

export const Success = ():JSX.Element=> {
    

    return (
        <div>
            <h2>Success screen</h2>
        </div>
    )
}   