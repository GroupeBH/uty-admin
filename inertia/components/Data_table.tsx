import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Paper,
  TextField,
  InputAdornment,
  IconButton,
  Pagination,
  Select,
  MenuItem,
  Box,
  Typography,
  useTheme
} from '@mui/material';
import {
  Search,
  Close,
  FirstPage,
  LastPage,
  KeyboardArrowLeft,
  KeyboardArrowRight
} from '@mui/icons-material';

type Column = {
  id: string;
  label: string;
  sortable?: boolean;
  render?: (value: any) => React.ReactNode;
};

type DataTableProps = {
  columns: Column[];
  data: any[];
  rowsPerPageOptions?: number[];
};

const DataTable = ({ columns, data, rowsPerPageOptions = [10, 25, 50] }: DataTableProps) => {
  const theme = useTheme();
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);
  const [orderBy, setOrderBy] = useState<string>('');
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSort = (columnId: string) => {
    const isAsc = orderBy === columnId && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(columnId);
  };

  const filteredData = data.filter(row =>
    columns.some(column =>
      String(row[column.id]).toLowerCase().includes(searchTerm.toLowerCase())
  ));

  const sortedData = filteredData.sort((a, b) => {
    if (!orderBy) return 0;
    
    const aValue = a[orderBy];
    const bValue = b[orderBy];
    
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return order === 'asc' ? aValue - bValue : bValue - aValue;
    }
    
    return order === 'asc' 
      ? String(aValue).localeCompare(String(bValue))
      : String(bValue).localeCompare(String(aValue));
  });

  const paginatedData = sortedData.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <Paper sx={{ p: 2, boxShadow: theme.shadows[3] }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Rechercher..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
            endAdornment: searchTerm && (
              <IconButton onClick={() => setSearchTerm('')}>
                <Close fontSize="small" />
              </IconButton>
            ),
          }}
          sx={{ width: 300 }}
        />
        
        <Select
          value={rowsPerPage}
          onChange={(e) => setRowsPerPage(Number(e.target.value))}
          size="small"
          sx={{ minWidth: 150 }}
        >
          {rowsPerPageOptions.map(option => (
            <MenuItem key={option} value={option}>
              {option} par page
            </MenuItem>
          ))}
        </Select>
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  sortDirection={orderBy === column.id ? order : false}
                  sx={{ fontWeight: 'bold' }}
                >
                  {column.sortable ? (
                    <TableSortLabel
                      active={orderBy === column.id}
                      direction={orderBy === column.id ? order : 'asc'}
                      onClick={() => handleSort(column.id)}
                    >
                      {column.label}
                    </TableSortLabel>
                  ) : (
                    column.label
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          
          <TableBody>
            {paginatedData.map((row, index) => (
              <TableRow hover key={index}>
                {columns.map(column => (
                  <TableCell key={`${index}-${column.id}`}>
                    {column.render ? column.render(row[column.id]) : row[column.id]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, p: 2 }}>
        <Typography variant="body2">
          {filteredData.length} résultats • Page {page} sur {Math.ceil(filteredData.length / rowsPerPage)}
        </Typography>
        
        <Pagination
          count={Math.ceil(filteredData.length / rowsPerPage)}
          page={page}
          onChange={(_, value) => setPage(value)}
          shape="rounded"
          showFirstButton
          showLastButton
          siblingCount={1}
          boundaryCount={1}
        />
      </Box>
    </Paper>
  );
};

export default DataTable;