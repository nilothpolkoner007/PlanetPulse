import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  TreePine, 
  BookOpen,
  MessageSquare,
  DollarSign,
  BarChart3,
  Settings
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/admin' },
  { icon: TreePine, label: 'Campaigns', href: '/admin/campaigns' },
  { icon: Users, label: 'Users', href: '/admin/users' },
  { icon: BookOpen, label: 'Blog', href: '/admin/blog' },
  { icon: MessageSquare, label: 'Tips', href: '/admin/tips' },
  { icon: DollarSign, label: 'Donations', href: '/admin/donations' },
  { icon: BarChart3, label: 'Analytics', href: '/admin/analytics' },
  { icon: Settings, label: 'Settings', href: '/admin/settings' },
];

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-white shadow-sm min-h-screen">
      <nav className="p-4 space-y-1">
        {menuItems.map((item) => (
          <SidebarLink key={item.href} {...item} />
        ))}
      </nav>
    </aside>
  );
}

function SidebarLink({ icon: Icon, label, href }: { icon: React.ComponentType<{ className?: string }>; label: string; href: string }) {
  const isActive = false; // TODO: Implement route matching

  return (
    <a
      href={href}
      className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
        isActive
          ? 'bg-green-50 text-green-700'
          : 'text-gray-700 hover:bg-gray-50'
      }`}
    >
      <Icon className="w-5 h-5 mr-3" />
      {label}
    </a>
  );
}