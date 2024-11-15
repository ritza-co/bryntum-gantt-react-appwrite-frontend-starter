import { BryntumGantt } from '@bryntum/gantt-react';
import { useRef } from 'react';
import { ganttProps } from '../lib/ganttConfig';


function Gantt() {
    const ganttRef = useRef<BryntumGantt>(null);

    return (
        <BryntumGantt
            ref={ganttRef}
            {...ganttProps}
        />
    );
}

export default Gantt;