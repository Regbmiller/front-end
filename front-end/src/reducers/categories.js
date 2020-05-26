import {
    FETCH_CATEGORIES_START,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_ERROR,
    POST_CATEGORIES_START,
    POST_CATEGORIES_POST,
    POST_CATEGORIES_SUCCESS,
    POST_CATEGORIES_ERROR
} from "../actions/categories";

const initialState = {
    categories: [],
    isLoading: false,
    error: null
}

export function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_CATEGORIES_START:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload.data,
                isLoading: false,
                error: null
            }
        case FETCH_CATEGORIES_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case POST_CATEGORIES_START:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case POST_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: [...state.categories, action.payload],
                isLoading: false,
                error: null
            }
        case POST_CATEGORIES_ERROR:
            return {
                ...state,
                isLoading: false, 
                error: action.payload
            }
        default:
            return state;
    }
}