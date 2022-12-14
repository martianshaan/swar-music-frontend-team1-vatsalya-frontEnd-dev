import axios from 'axios';

const songsConstants = {
    GET_ALL_SONGS_REQUEST: 'GET_ALL_SONGS_REQUEST',
    GET_ALL_SONGS_SUCCESS: 'GET_ALL_SONGS_SUCCESS',
    GET_ALL_SONGS_FAILURE: 'GET_ALL_SONGS_FAILURE',
}

export const songsService = {
    getAllSongs
}

export const songsAction = {
    getAllSongsAction
}

export const songsReducer = (songs = [], action) =>{
    switch(action.type){
        case songsConstants.GET_ALL_SONGS_REQUEST:
            console.log("enter")
            return {
                loggingIn: true,
                songs : songs
            };
        case songsConstants.GET_ALL_SONGS_SUCCESS:
            return {
                loggedIn: true,
                 songs: action.songs
            };
        case songsConstants.GET_ALL_SONGS_FAILURE:
                return {};
        default:
            console.log("enter")
            return songs;
   }
}

function getAllSongsAction(){
    return dispatch => {
        dispatch(request());
        songsService.getAllSongs()
        .then(
            users => dispatch(success(users)),
            error => dispatch(failure(error.toString()))
            );
    };
    function request(){
        console.log("enter request")
        return {type: songsConstants.GET_ALL_SONGS_REQUEST}
    }
    function success(songs){
        return {type: songsConstants.GET_ALL_SONGS_SUCCESS, songs}
    }
    function failure(error){
        return {type: songsConstants.GET_ALL_SONGS_FAILURE, error}
    }
}

export async function getAllSongs(){
    return await axios.get("/api/songs",{
        headers: {
          'Authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjdkODRlZWQwY2IwYzAzMWEwZDkzNCIsImlzQWRtaW4iOnRydWUsInVzZXJuYW1lIjoiU3lzQWRtaW43IiwiaWF0IjoxNjYwNTA0Mzc0fQ.mZrTPwWj3MlhrH5MfSunDQVGbpv1d34gr7IrkUFtfTc`
        }}).then(
          (res) => {
            // setUsers(res.data);
            console.log("songs")
            console.log(res.data)
            return res.data;
      
          }
        ).catch((err) => {
          console.log(err);
        })
}