
export const FETCH_SONG = "[SONG] Fetch Song";
export const ADD_SONG = "[SONG] Add Song";
export const DELETE_SONG = "[SONG] Delete Song";
export const LIKE_SONG = "[SONG] Like Song";
export const SORT_SONG = "[SONG] Sort Song";
export const REVERSE_SORT_SONG = "[SONG] Reverse sort Song";
export const SAVE_NAME = "[SONG] Save name";

const initialState = {
    songs: [],
    name: ''
}

export const songReducer = (initialState, action) => {
    switch (action.type) {
        case FETCH_SONG:
            return {
                ...initialState,
                songs: action.payload,
            };
        case ADD_SONG:
            return {
                ...initialState,
                songs: [action.payload.newSongs, ...initialState.songs],
            };
        case DELETE_SONG:
            return {
                ...initialState,
                songs: initialState.songs.filter((song) => song.id !== action.payload.songId)
            };
        case LIKE_SONG:
            return {
                ...initialState,
                songs: initialState.songs.map(song => {
                    if (song.id === action.payload.songId) {
                        return {
                            ...song,
                            isLiked: !song.isLiked,
                        }
                    }
                    return song;
                })
            };
        case SORT_SONG:
            return {
                ...initialState,
                songs: [...initialState.songs].sort((song) => song.isLiked ? -1 : 1),
            };
        case REVERSE_SORT_SONG:
            return {
                ...initialState,
                songs: [...initialState.songs].sort((song) => song.isLiked ? 1 : -1),
            };
        case SAVE_NAME:
            return {
                ...initialState,
                name: action.payload,
            };
        default:
            return state;
    }
}