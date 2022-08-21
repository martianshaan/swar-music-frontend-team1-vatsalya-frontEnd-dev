import React from "react"
import { createStore,applyMiddleware } from "redux"
import { combineReducers } from 'redux'
import thunk from "redux-thunk" 
import { usersReducer } from '../Admin/Users/Utils/usersReducer'
import { songsReducer } from "../Admin/Songs/Utils/songsReducer"


export const store = createStore(combineReducers({usersReducer,songsReducer}), applyMiddleware(thunk)); 
