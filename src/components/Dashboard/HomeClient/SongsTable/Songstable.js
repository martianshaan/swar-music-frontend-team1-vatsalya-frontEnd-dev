import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow,Paper} from '@mui/material'
import React from 'react'


function SongsTable() {
  return (
    <TableContainer >
       <Table aria-label='simple table' sx={{ maxWidth: 650 }} size="small">
        <TableHead>
           <TableRow>
             <TableCell>id</TableCell>
             <TableCell>Title</TableCell>
             <TableCell>Artist</TableCell>
             <TableCell>Time</TableCell>
             <TableCell>Album</TableCell>
           </TableRow>
        </TableHead>
        <TableBody>
        {tableData.map((row) => (
            <TableRow key={row.id}sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
              <TableCell component="th" scope="row"> {row.id}</TableCell>
              <TableCell >{row.Title}</TableCell>
              <TableCell>{row.Artist}</TableCell>
              <TableCell>{row.Time}</TableCell>
              <TableCell >{row.Album}</TableCell>
            </TableRow>
          ))}
        </TableBody>
       </Table>
    </TableContainer>
  )
}

export default SongsTable


const tableData= [{
    "id": 1,
    "Title": "Kurt",
    "Artist": "Eggle",
    "Time": "keggle0@theglobeandmail.com",
    "Album": "Male"
  }, {
    "id": 2,
    "Title": "Rriocard",
    "Artist": "Tamblyn",
    "Time": "rtamblyn1@meetup.com",
    "Album": "Male"
  }, {
    "id": 3,
    "Title": "Waly",
    "Artist": "Steely",
    "Time": "wsteely2@yellowbook.com",
    "Album": "Female"
  }, {
    "id": 4,
    "Title": "Hubey",
    "Artist": "Iwanicki",
    "Time": "hiwanicki3@archive.org",
    "Album": "Male"
  }, {
    "id": 5,
    "Title": "Codie",
    "Artist": "Asple",
    "Time": "casple4@e-recht24.de",
    "Album": "Male"
  }];