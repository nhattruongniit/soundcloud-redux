import { ActionTypes } from './core/constants';
import { setTracks } from '../actions';

const initialState = [];

export default function(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.TRACKS_SET:
            return setTracks(state, action);
    }

    return state;
}

function setTracks(state, action) {
    const { tracks } = action;
    return [...state, ...tracks];
}