import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
//import Container from '@material-ui/core/Container'

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function createData(name, alamat, umur, carbs, protein) {
  return { name, alamat, umur, carbs, protein };
}

const rows = [
  createData('Lisa', 'Semarang', 16),
  createData('Bambang', 'Jakarta', 29),
  createData('Fajar', 'Bandung', 36),
  createData('Syifa', 'Surabaya', 37),
  createData('Yani', 'Semarang', 43),
];

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    maxWidth: '100%',
    border: '1px solid ',
    paddingLeft: 100,
    paddingRight: 100,
  },
}));

export default function Tables() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>

      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Nama</StyledTableCell>
            <StyledTableCell align="right">Alamat</StyledTableCell>
            <StyledTableCell align="right">Umur</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.alamat}</StyledTableCell>
              <StyledTableCell align="right">{row.umur}</StyledTableCell>
              <StyledTableCell align="center">
              <Button style={{marginRight:5}} size="small" variant="contained" color="primary" className={classes.button}>
                  Edit
              </Button>
              <Button style={{marginLeft:5}} size="small" variant="outlined" color="secondary" className={classes.button}>
                  Delete
              </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>

    </Paper>
  );
}