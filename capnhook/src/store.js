import React from 'react';
import useGlobalHook from './useGlobalHook';
import * as actions from './actions';

const initialState = {counter: 0};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;