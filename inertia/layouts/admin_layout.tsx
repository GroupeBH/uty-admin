import { Link, usePage } from '@inertiajs/react'
import { LayoutDashboard, ShoppingBag, Users, Package, Settings } from 'lucide-react'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { url } = usePage()

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: ShoppingBag, label: 'Commandes', path: '/admin/orders' },
    { icon: Users, label: 'Clients', path: '/admin/customers' },
    { icon: Package, label: 'Produits', path: '/admin/products' },
    { icon: Settings, label: 'Paramètres', path: '/admin/settings' },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r">
        <div className="p-6">
          <Link href="/admin" className="text-2xl font-bold text-gray-800">
            Admin
          </Link>
        </div>
        <nav className="mt-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center px-6 py-3 ${
                url === item.path
                  ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">{children}</div>
      </main>
    </div>
  )
}