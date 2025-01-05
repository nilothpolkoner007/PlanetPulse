import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import LoginForm from './LoginForm';

export default function ProtectedRoute({ children, requiredPermissions = [] }) {
  const { user, loading, initialized } = useAuth();

  if (!initialized || loading) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-green-600' />
      </div>
    );
  }

  if (!user) {
    return <LoginForm />;
  }

  const hasRequiredPermissions = requiredPermissions.every(({ resource, action }) =>
    user.role?.permissions[resource]?.includes(action),
  );

  if (!hasRequiredPermissions) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold text-gray-900 mb-2'>Access Denied</h2>
          <p className='text-gray-600'>
            You don't have the required permissions to access this page.
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
