import axios from "axios";
import AuthService from "../services/AuthService";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Cookies from 'js-cookie';
import {API_URL} from "../http";

export const login = createAsyncThunk(
    'authSlice/login',
    async ({usernameOrEmail, password}, thunkAPI)=>{
        try {
            const response = await AuthService.login(usernameOrEmail, password)
            localStorage.setItem('token', response.data['accessToken'])

            return response

        }catch (e){
            console.log(e)
        }
    }
)

export const registration = createAsyncThunk(
    'authSlice/registration',
    async ({username, email, password, form, age}, thunkAPI)=>{
        try {
            // const {currentPage} = movieSlice.getInitialState;
            // console.log(currentPage);
            const response = await AuthService.registration(username, email, password, form, age)
            localStorage.setItem('token', response['accessToken'])
            console.log(thunkAPI.getState())
            console.log(response)
            // isAuth = true
            // user = response.user

        }catch (e){
            console.log(e)
        }
    }
)


export const logout = createAsyncThunk(
    'authSlice/logout',
    async ()=>{
        try {
            const response = await AuthService.logout()
            localStorage.removeItem('token')

            return response

        }catch (e){
            console.log(e)
        }
    }
)

export const checkAuth = createAsyncThunk(
    'authSlice/checkAuth',
    async ()=>{
        try {
            console.log(Cookies.get())
            console.log(localStorage.getItem('token'))
            const response = await axios.post(`${API_URL}/authentication/refresh`, {withCredentials: true, headers: {
                    "Content-Type": "application/json"
                }})
            // const response = await AuthService.refresh()
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);

            return response

        }catch (e){
            console.log(e)
        }
    }
)





const authSlice = createSlice( {
    name:'authSlice',
    initialState: {
        isAuth: false,

        status: null,
        error: null
    },
    reducers:{
        setAuth:(state, action) => {
            // console.log("changeterm: " + action.payload)
            state.isAuth = action.payload;
            // console.log("term: " + state.term)
        },
        // ChangePage:(state, action) => {
        //     state.currentPage = action.payload
        // }
    },
    extraReducers: {
        [login.pending]: (state, action) =>{
            state.status = 'pending'
            state.error = null
        },
        [login.fulfilled]: (state, action) =>{
            state.status = 'fulfilled'
            state.isAuth = true
            // state.movies = action.payload['results']
            // state.total_pages = action.payload['total_pages']
            // console.log(state.total_pages)
        },
        [login.rejected]: (state, action) =>{
            console.log(state)
            console.log(action.payload)
        },
        [registration.pending]: (state, action) =>{
            state.status = 'pending'
            state.error = null
        },
        [registration.fulfilled]: (state, action) =>{
            state.status = 'fulfilled'
            state.isAuth = true
            console.log(action.payload)
            // state.movies = action.payload['results']
            // state.total_pages = action.payload['total_pages']
            // console.log(state.total_pages)
        },
        [registration.rejected]: (state, action) =>{
            console.log(state)
            console.log(action.payload)
        },



        [logout.pending]: (state, action) =>{
            state.status = 'pending'
            state.error = null
        },
        [logout.fulfilled]: (state, action) =>{
            state.status = 'fulfilled'
            state.isAuth = false
            state.user = {}

            console.log(action.payload.data)
        },
        [logout.rejected]: (state, action) =>{
            console.log(state)
            console.log(action.payload)
        },


        [checkAuth.pending]: (state, action) =>{
            state.status = 'pending'
            state.error = null
        },
        [checkAuth.fulfilled]: (state, action) =>{
            console.log(action.payload)
            state.status = 'fulfilled'
            state.isAuth = true

        },
        [checkAuth.rejected]: (state, action) =>{
            console.log(state)
            console.log(action.payload)
        },
    }
})



const authReducer = authSlice.reducer
export const {ChangeTerm, ChangePage} = authSlice.actions

export default authReducer