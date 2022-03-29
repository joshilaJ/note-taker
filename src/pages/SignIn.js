import React from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const createTable=(name, show, age)=>{
    return {name, show, age};
}
 const rows=[
     createTable('aarya', 'game of throne', 21),
     createTable('natalie','prison breake', 29),
     createTable('aarya', 'game of throne', 21),
     createTable('natalie','prison breake', 29),
     createTable('aarya', 'game of throne', 21),
     createTable('natalie','prison breake', 29)
 ]
const SignIn = () => {
  return (
   
       <TableContainer component={Paper} sx={{textColor:'secondary'}}>
           <Table sx={{minWidth:890}}>
               <TableHead>
                   <TableRow>
                       <TableCell>name</TableCell>
                       <TableCell>show</TableCell>
                       <TableCell>age</TableCell>
                   </TableRow>
               </TableHead>
               <TableBody >
                   {rows.map((row)=>(
                       <TableRow
                       key={row.name}
                       sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                     >
                           <TableCell align='left' >{row.name}</TableCell>
                           <TableCell align='left'>{row.show}</TableCell>
                           <TableCell align='left'>{row.age}</TableCell>
                       </TableRow>
                   ))}
               </TableBody>
           </Table>
       </TableContainer>
       
  )
}

export default SignIn