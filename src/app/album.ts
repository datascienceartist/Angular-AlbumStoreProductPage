import {Track} from './track';

export interface Album {
    name : string;
    releaseData : string;
    coverIamge : string;
    tracks: Track[];
}
