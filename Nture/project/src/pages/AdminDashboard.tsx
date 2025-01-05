import AdminLayout from '../components/admin/layout/AdminLayout';
import DashboardOverview from '../components/admin/dashboard/DashboardOverview';

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <DashboardOverview />
    </AdminLayout>
  );
}