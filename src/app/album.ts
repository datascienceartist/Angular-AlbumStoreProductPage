import {Track} from './track';

export interface Album {
    name : string;
    releaseDate : string;
    coverIamge : string;
    tracks: Track[];
}
