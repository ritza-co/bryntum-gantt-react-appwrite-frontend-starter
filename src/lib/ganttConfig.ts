import { BryntumGanttProps } from '@bryntum/gantt-react';

const header = {
    'Content-Type'  : 'application/json',
    'Authorization' : `${sessionStorage.getItem('accountJWT')}`
};


const ganttProps : BryntumGanttProps = {
    weekStartDay : 1,
    viewPreset   : 'weekAndDayLetter',
    columns      : [{ type : 'name', field : 'name', width : 250 }],
    project      : {
        taskStore : {
            transformFlatData : true
        },
        transport : {
            load : {
                url         : import.meta.env.VITE_PROJECT_FUNCTION_DOMAIN_URL,
                method      : 'GET',
                headers     : header,
                credentials : 'omit'
            },
            sync : {
                url         : import.meta.env.VITE_PROJECT_FUNCTION_DOMAIN_URL,
                method      : 'POST',
                headers     : header,
                credentials : 'omit'
            }
        },
        autoLoad         : true,
        autoSync         : true,
        // This config enables response validation and dumping of found errors to the browser console.
        // It's meant to be used as a development stage helper only so please set it to false for production.
        validateResponse : true
    }
};

export { ganttProps };