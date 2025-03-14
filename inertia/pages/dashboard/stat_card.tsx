import { LucideIcon } from 'lucide-react';

const StatCard = ({ 
  icon: Icon, 
  title, 
  value 
}: { 
  icon: LucideIcon; 
  title: string; 
  value: string; 
}) => (
  <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 hover:shadow-md transition-shadow">
    <div className="flex items-center">
      <div className="p-3 bg-blue-50 rounded-xl">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <div className="ml-4">
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-xl font-semibold text-gray-800">{value}</p>
      </div>
    </div>
  </div>
);

export default StatCard;