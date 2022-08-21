import React,{useState,useEffect, useMemo} from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useSelector,useDispatch } from 'react-redux';
import "./SongsClient.css"
import { songsAction } from '../../Admin/Songs/Utils/songsReducer';


const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
  
    const toggle = () => setPlaying(!playing);
  
    useEffect(() => {
        playing ? audio.play() : audio.pause();
      },
      [playing]
    );  
    return [playing, toggle];
  };

  const columns = [
    
    {
      field: 'name',
      headerName: 'Name',
      width: 300,
      editable: true,
    },
    {
      field: 'language',
      headerName: 'Language',
      width: 300,
      editable: true,
    },
    {
      field: 'artist',
      headerName: 'Artists',
      type: 'number',
      width: 300,
      editable: true,
    },
    {
        field: 'action',
        headerName: 'Action',
        width: 200,
        renderCell: (params) =>{
            return(
                <>
                
                </>
            )
        }
      },
  ];
  
  

function SongsClient() {
    const [playing, toggle] = useAudio("https://swar-app.s3.ap-south-1.amazonaws.com/Kesari01"); 
    const songsData = useSelector((state) => {
        console.log("songs selector")
      console.log(state.songsReducer);
      return state.songsReducer
      })
      
      const dispatch = useDispatch();
      useMemo( () => {
        dispatch(songsAction.getAllSongsAction())
      },[])

      return(
      <div>
    <Box sx={{ height: 800, width: '95%' }}>
      <DataGrid
      disableSelectionOnClick
        rows={songsData.songs}
        columns={columns}
        getRowId ={(row) => row._id}
        pageSize={15}
        rowsPerPageOptions={[15]}
        components={{ Toolbar: GridToolbar }}
        checkboxSelection
      />
    </Box>
</div>
      )
}

export default SongsClient