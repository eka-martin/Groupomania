import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axios } from '../../axios';

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (params) => {
    const { data } = await axios.post('auth/login', params);
    return data;
})

export const fetchRegister = createAsyncThunk('auth/fetchRegister', async (params) => {
    const { data } = await axios.post('auth/signup', params);
    return data;
})

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
    axios.interceptors.request.use((config) => {
        config.headers.Authorization = 'Bearer ' + window.localStorage.getItem('token');
        return config;
    })
    const { data } = await axios.get(`auth/me`);
    //const isAuth = true
    return data;
})


const initialState = {
    data: null,
    status: 'loading',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null;
        }
    },
    extraReducers: {
        //login
        [fetchAuth.pending]: (state) => {
            state.data = null;
            state.status = 'loading';
        },
        [fetchAuth.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.status = 'loaded';
        },
        [fetchAuth.rejected]: (state) => {
            state.data = [];
            state.status = 'error';
        },

        //registration
        [fetchRegister.pending]: (state) => {
            state.data = null;
            state.status = 'loading';
        },
        [fetchRegister.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.status = 'loaded';
        },
        [fetchRegister.rejected]: (state) => {
            state.data = [];
            state.status = 'error';
        },

        //me
        [fetchAuthMe.pending]: (state) => {
            state.data = null;
            state.status = 'loading';
        },
        [fetchAuthMe.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.status = 'loaded';
        },
        [fetchAuthMe.rejected]: (state) => {
            state.data = [];
            state.status = 'error';
        },
    }
})

// export const selectIsAuth = (state) => { 
//     if(state.auth.data) {     
//     return true
// } else { 
//     return false}
//      }


export const selectIsAuth = (state) =>
    
Boolean(state.auth?.data?.length);

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;