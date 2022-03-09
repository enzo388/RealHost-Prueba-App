import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../redux/actions/users'
import "./home.css"
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


export default function Home() {
    const users = useSelector((state) => state.users.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUser())

    }, [dispatch])
    return (
        <div className="home-Cointainer" >
            {
                users.length > 0 ?
                    <div className="TableCointainer">
                        <TableContainer component={Paper}>
                            <Table className="TableCointainer" sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Name</StyledTableCell>
                                        <StyledTableCell >Email</StyledTableCell>
                                        <StyledTableCell >City</StyledTableCell>
                                        <StyledTableCell >Street</StyledTableCell>
                                        <StyledTableCell >Phone</StyledTableCell>
                                        <StyledTableCell >Website</StyledTableCell>
                                        <StyledTableCell>Company</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {users.map((el) => (
                                        <StyledTableRow key={el.name}>
                                            <StyledTableCell component="th" scope="row">
                                                {el.name}
                                            </StyledTableCell>
                                            <StyledTableCell>
                                                <Link href={`mailto:${el.email}`} target="_blank">
                                                    {el.email}
                                                </Link>
                                            </StyledTableCell>
                                            <StyledTableCell >{el.address.city}</StyledTableCell>
                                            <StyledTableCell >{el.address.street}</StyledTableCell>
                                            <StyledTableCell >{el.phone}</StyledTableCell>
                                            <StyledTableCell >
                                                <Link href={`http://${el.website}`} target="_blank">{el.website}</Link>
                                            </StyledTableCell>
                                            <StyledTableCell >{el.company.name}</StyledTableCell>

                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    :
                    <div className="div-loading">
                        <img
                            src="https://camo.githubusercontent.com/a1a81b0529517027d364ee8432cf9a8bd309542a/687474703a2f2f692e696d6775722e636f6d2f56446449444f522e676966"
                            alt="Img Not Found" />
                    </div>
            }
        </div>

    )
}