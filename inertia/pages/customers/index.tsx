// import { Link, usePage } from '@inertiajs/react'
import AdminLayout from "../../layouts/admin_layout";
import DataTable from "../../components/Data_table";

const columns = [
  {
    header: 'ID',
    accessor: 'id',
    sortable: true
  },
  {
    header: 'Client',
    accessor: 'customer.name',
    sortable: true
  },
  {
    header: 'Total',
    accessor: 'total',
    sortable: true,
    render: (value: any) => `€${value.toFixed(2)}`
  },
  {
    header: 'Statut',
    accessor: 'status',
    sortable: true,
    render: (value: any) => (
      <span className={`px-2 py-1 rounded-full text-xs ${
        value === 'livré' ? 'bg-green-100 text-green-800' :
        value === 'en cours' ? 'bg-blue-100 text-blue-800' :
        'bg-gray-100 text-gray-800'
      }`}>
        {value}
      </span>
    )
  }
];

export default function index({ users }: any) {
    const customers = users
    console.log(customers?.length)
    return (
      <AdminLayout>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">Clients</h2>
            <button className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Nouveau client
            </button>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 overflow-hidden">
            <div className="overflow-x-auto -mx-4 md:mx-0">
              {/* <DataTable
                columns={columns}
                data={users}
                rowsPerPageOptions={[10, 25, 50]}
                className="mt-6"
              /> */}
              <div className="inline-block min-w-full align-middle">
                <table className="min-w-full">
                  <thead>
                    <tr className="text-left text-sm text-gray-500 border-b">
                      <th className="pb-3 pl-4 md:pl-0">ID</th>
                      <th className="pb-3">Nom</th>
                      <th className="pb-3">Email</th>
                      <th className="pb-3">Commandes</th>
                      <th className="pb-3">Total dépensé</th>
                      <th className="pb-3 pr-4 md:pr-0">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers?.map((customer: any) => (
                      <tr key={customer?._id?.toString()} className="border-b last:border-b-0">
                        <td className="py-4 pl-4 md:pl-0">#{customer?.phone}</td>
                        <td className="py-4 whitespace-nowrap">{customer?.username}</td>
                        <td className="py-4 whitespace-nowrap">{customer?.email}</td>
                        {/* <td className="py-4">{customer.orders}</td>
                        <td className="py-4">{customer.spent}</td> */}
                        <td className="py-4 pr-4 md:pr-0">
                          <button className="text-blue-600 hover:text-blue-700">Modifier</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    );
  }
  