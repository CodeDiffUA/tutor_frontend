import axios from "axios";
import LectureService from "../services/LectureService";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Cookies from 'js-cookie';
import {API_URL} from "../http";

export const getSidebarInfo = createAsyncThunk(
    'lectureSlice/getSidebarInfo',
    async ({subject})=>{
        try {
            return await LectureService.getSidebarInfo(subject)

        }catch (e){
            console.log(e)
        }
    }
)

export const getContentOfGlobalName = createAsyncThunk(
    'lectureSlice/getContentOfGlobalName',
    async ({globalName})=>{
        try {
            // const {currentPage} = movieSlice.getInitialState;
            // console.log(currentPage);
            return await LectureService.getContentOfGlobalName(globalName)

        }catch (e){
            console.log(e)
        }
    }
)


export const getContentOfLecture = createAsyncThunk(
    'lectureSlice/getContentOfLecture',
    async ({themeName})=>{
        try {
            return await LectureService.getContentOfLecture(themeName)

        }catch (e){
            console.log(e)
        }
    }
)





const lectureSlice = createSlice( {
    name:'lectureSlice',
    initialState: {
        sidebar_themes: [],
        global_name_content: {},
        lecture_content: {},
        active_global_name: [],

        status: null,
        error: null
    },
    reducers:{
        setActiveGlobalName:(state, action) => {
            state.active_global_name = action.payload;
        },
    },
    extraReducers: {
        [getSidebarInfo.pending]: (state) =>{
            state.status = 'pending'
            state.error = null
        },
        [getSidebarInfo.fulfilled]: (state, action) =>{
            state.status = 'fulfilled'
            if (action.payload)
                state.sidebar_themes = action.payload.data
        },
        [getSidebarInfo.rejected]: (state, action) =>{
            console.log(action.payload)
        },


        [getContentOfGlobalName.pending]: (state, action) =>{
            state.status = 'pending'
            state.error = null
        },
        [getContentOfGlobalName.fulfilled]: (state, action) =>{
            state.status = 'fulfilled'
            state.global_name_content = action.payload.data
        },
        [getContentOfGlobalName.rejected]: (state, action) =>{
            console.log(action.payload)
        },



        [getContentOfLecture.pending]: (state, action) =>{
            state.status = 'pending'
            state.error = null
        },
        [getContentOfLecture.fulfilled]: (state, action) =>{
            state.status = 'fulfilled'
            state.lecture_content = action.payload.data

        },
        [getContentOfLecture.rejected]: (state, action) =>{
            console.log(action.payload)
        }
    }
})



const lectureReducer = lectureSlice.reducer
export const {setActiveGlobalName} = lectureSlice.actions

export default lectureReducer