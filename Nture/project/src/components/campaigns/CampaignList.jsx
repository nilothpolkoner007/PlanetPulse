import React, { useEffect } from 'react';
import { useCampaigns } from '../../hooks/useCampaigns';
import { Tree, MapPin, Calendar } from 'lucide-react';

export default function CampaignList() {
  const { campaigns, loading, error, fetchCampaigns } = useCampaigns();

  useEffect(() => {
    fetchCampaigns();
  }, [fetchCampaigns]);

  if (loading) {
    return (
      <div className='flex justify-center p-8'>
        <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-green-600' />
      </div>
    );
  }

  if (error) {
    return <div className='text-red-600 p-4'>Error loading campaigns: {error.message}</div>;
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {campaigns.map((campaign) => (
        <div
          key={campaign.id}
          className='bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6'
        >
          <div className='flex items-center justify-between mb-4'>
            <h3 className='text-lg font-semibold text-gray-900'>{campaign.title}</h3>
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                campaign.status,
              )}`}
            >
              {campaign.status}
            </span>
          </div>

          <div className='space-y-2 text-gray-600'>
            <div className='flex items-center'>
              <MapPin className='w-4 h-4 mr-2' />
              {campaign.location}
            </div>
            <div className='flex items-center'>
              <Tree className='w-4 h-4 mr-2' />
              {campaign.plantedTrees} / {campaign.targetTrees} trees planted
            </div>
            <div className='flex items-center'>
              <Calendar className='w-4 h-4 mr-2' />
              {new Date(campaign.startDate).toLocaleDateString()} -{' '}
              {new Date(campaign.endDate).toLocaleDateString()}
            </div>
          </div>

          <div className='mt-4 pt-4 border-t border-gray-100'>
            <div className='h-2 bg-gray-100 rounded-full'>
              <div
                className='h-2 bg-green-500 rounded-full'
                style={{
                  width: `${(campaign.plantedTrees / campaign.targetTrees) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function getStatusColor(status) {
  const colors = {
    draft: 'bg-gray-100 text-gray-800',
    active: 'bg-green-100 text-green-800',
    completed: 'bg-blue-100 text-blue-800',
    cancelled: 'bg-red-100 text-red-800',
  };
  return colors[status] || colors.draft;
}
