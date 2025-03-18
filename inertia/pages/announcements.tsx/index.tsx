// import { Link, usePage } from '@inertiajs/react'

export default function Announcements({ announcements }: any) {
    // const customers = users
    return (
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Les annonces</h2>
          <button className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Ajouter une annonce
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
                    <th className="pb-3">description</th>
                    <th className="pb-3">Publié par</th>
                    <th className="pb-3">Date de création</th>
                    <th className="pb-3 pr-4 md:pr-0">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {announcements.map((announcement: any) => (
                    <tr key={announcement.id} className="border-b last:border-b-0">
                      <td className="py-4 pl-4 md:pl-0">#{announcement._id}</td>
                      <td className="py-4 whitespace-nowrap">{announcement.username}</td>
                      <td className="py-4 whitespace-nowrap">{announcement.email}</td>
                      <td className="py-4">{announcement.orders}</td>
                      <td className="py-4">{announcement.spent}</td>
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
  