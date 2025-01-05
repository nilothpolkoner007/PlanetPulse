import { TreePine, Users, Flag, DollarSign } from 'lucide-react';
import StatsCard from './StatsCard';



interface AdminStats {
  totalTrees: number;
  totalCampaigns: number;
  totalUsers: number;
  totalDonations: number;
}

const SAMPLE_STATS: AdminStats = {
  totalTrees: 15420,
  totalCampaigns: 24,
  totalUsers: 1250,
  totalDonations: 45600
};

export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
          Download Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          icon={TreePine}
          label="Trees Planted"
          value={SAMPLE_STATS.totalTrees}
          trend={12}
          color="green"
        />
        <StatsCard
          icon={Flag}
          label="Active Campaigns"
          value={SAMPLE_STATS.totalCampaigns}
          trend={5}
          color="blue"
        />
        <StatsCard
          icon={Users}
          label="Total Users"
          value={SAMPLE_STATS.totalUsers}
          trend={8}
          color="purple"
        />
        <StatsCard
          icon={DollarSign}
          label="Total Donations"
          value={SAMPLE_STATS.totalDonations}
          trend={15}
          color="yellow"
        />
      </div>
    </div>
  );
}