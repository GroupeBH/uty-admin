// components/DataTable.tsx
import { useState, useEffect } from 'react';
import { 
  ChevronUp, 
  ChevronDown, 
  ChevronFirst, 
  ChevronLast, 
  ChevronLeft, 
  ChevronRight,
  Search,
  X
} from 'lucide-react';

type Column = {
  header: string;
  accessor: string;
  sortable?: boolean;
  render?: (value: any) => React.ReactNode;
};

type Props = {
  columns: Column[];
  data: any[];
  className?: string;
  rowsPerPageOptions?: number[];
};

type RowData = {
  [key: string]: any;
};

const DataTable = ({ columns, data, className, rowsPerPageOptions = [10, 25, 50] }: Props) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortField, setSortField] = useState<string>('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(rowsPerPageOptions[0]);
  
  // Filtrage des données
  const filteredData: any = data.filter(row => 
    Object.values(row).some(value => 
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Tri des données
  const sortedData: any = [...filteredData].sort((a: RowData, b: RowData) => {
    
      if (!sortField) return 0;
      const valueA = a[sortField];
      const valueB = b[sortField];
      
      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return sortDirection === 'asc' ? valueA - valueB : valueB - valueA;
      }
      
      return sortDirection === 'asc' 
        ? String(valueA).localeCompare(String(valueB), 'fr') 
        : String(valueB).localeCompare(String(valueA), 'fr');
    });
  
  // Pagination
  const totalItems = sortedData.length;
  const totalPages = Math.ceil(totalItems / rowsPerPage);
  const paginatedData = sortedData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // Réinitialiser la page quand les filtres changent
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, sortField, sortDirection, rowsPerPage]);

  const handleSort = (accessor: string) => {
    if (!columns.find(c => c.accessor === accessor)?.sortable) return;
    
    setSortField(accessor);
    setSortDirection(prev => 
      accessor === sortField && prev === 'asc' ? 'desc' : 'asc'
    );
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSortField('');
    setSortDirection('asc');
  };

  return (
    <div className={`bg-white rounded-lg shadow ${className}`}>
      {/* Barre de contrôle */}
      <div className="p-4 border-b flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="relative flex-1 max-w-md w-full">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <select
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
            className="px-3 py-2 border rounded-lg"
          >
            {rowsPerPageOptions.map(option => (
              <option key={option} value={option}>
                {option} par page
              </option>
            ))}
          </select>
          
          <button
            onClick={resetFilters}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
          >
            <X className="h-4 w-4" />
            Réinitialiser
          </button>
        </div>
      </div>

      {/* Tableau */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.accessor}
                  className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                    column.sortable ? 'cursor-pointer hover:bg-gray-100' : ''
                  }`}
                  onClick={() => column.sortable && handleSort(column.accessor)}
                >
                  <div className="flex items-center gap-2">
                    {column.header}
                    {column.sortable && (
                      <span className="flex flex-col">
                        <ChevronUp
                          className={`h-3 w-3 ${
                            sortField === column.accessor && sortDirection === 'asc'
                              ? 'text-blue-600'
                              : 'text-gray-300'
                          }`}
                        />
                        <ChevronDown
                          className={`h-3 w-3 -mt-1 ${
                            sortField === column.accessor && sortDirection === 'desc'
                              ? 'text-blue-600'
                              : 'text-gray-300'
                          }`}
                        />
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {paginatedData.map((row: any, rowIndex: any) => (
              <tr key={rowIndex} className="hover:bg-gray-50">
                {columns.map((column: any) => (
                  <td key={column?.accessor} className="px-6 py-4 whitespace-nowrap text-sm">
                    {column?.render
                      ? column?.render(row[column?.accessor])
                      : row[column?.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-3 border-t gap-4">
        <div className="text-sm text-gray-700">
          {totalItems === 0 ? 'Aucun résultat' : (
            `Affichage de ${(currentPage - 1) * rowsPerPage + 1} à 
            ${Math.min(currentPage * rowsPerPage, totalItems)} sur 
            ${totalItems} résultats`
          )}
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="p-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronFirst className="h-4 w-4" />
          </button>
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          
          <span className="px-3">
            Page {currentPage} sur {totalPages}
          </span>
          
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className="p-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLast className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
