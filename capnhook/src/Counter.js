import React from 'react';
import useGlobal from './store';

const Counter = () => {
    const [globalState, globalActions] = useGlobal();

    return (
        <div>
            <p>
                counter:
                {globalState.counter}
            </p>
            <button type="button" onClick={()=> globalActions.addToCounter(1)}>
                +1 to global
            </button>
            <p></p>

        </div>
    );
};

export default Counter;