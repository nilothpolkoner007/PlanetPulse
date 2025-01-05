import { useEffect } from 'react';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { useAuth } from './hooks/useAuth';

function App() {
  const { initialize } = useAuth();

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <div className='min-h-screen'>
      <ProtectedRoute>
        <AdminDashboard />
      </ProtectedRoute>
    </div>
  );
}

export default App;
