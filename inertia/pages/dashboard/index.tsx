import AdminLayout from '../../layouts/admin_layout';
import StatCard from './stat_card';
import { Link } from '@inertiajs/react';
import { DollarSign, ShoppingBag, Users, Package } from 'lucide-react';

const Dashboard = ({ recentOrders, statistics }: { 
  recentOrders: any[];
  statistics: any;
}) => {
  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          <StatCard icon={DollarSign} title="Ventes totales" value={statistics.ventes} />
          <StatCard icon={ShoppingBag} title="Commandes" value={statistics.commandes} />
          <StatCard icon={Users} title="Clients" value={statistics.clients} />
          <StatCard icon={Package} title="Produits" value={statistics.produits} />
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Commandes récentes</h3>
            <Link href="/admin/orders" className="text-blue-600 hover:text-blue-700">
              Voir tout
            </Link>
          </div>
          {/* Tableau des commandes */}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;