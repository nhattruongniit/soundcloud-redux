import { ActionsType } from '../core/constants';

export function setTracks(tracks) {
    return {
        type: ActionsType.TRACKS_SET,
        tracks
    }
}