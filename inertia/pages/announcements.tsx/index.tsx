// import { Link, usePage } from '@inertiajs/react'

export default function Announcements({ users }: any) {
    const customers = users
    return (
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Clients</h2>
          <button className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Nouveau client
          </button>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 overflow-hidden">
          <div className="overflow-x-auto -mx-4 md:mx-0">
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
                  {customers.map((customer: any) => (
                    <tr key={customer.id} className="border-b last:border-b-0">
                      <td className="py-4 pl-4 md:pl-0">#{customer._id}</td>
                      <td className="py-4 whitespace-nowrap">{customer.username}</td>
                      <td className="py-4 whitespace-nowrap">{customer.email}</td>
                      <td className="py-4">{customer.orders}</td>
                      <td className="py-4">{customer.spent}</td>
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
    );
  }
  