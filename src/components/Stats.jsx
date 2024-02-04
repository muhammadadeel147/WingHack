import React from 'react';

const Stats = () => {
  return (
    <div>
      <div className="text-900 text-3xl font-medium mb-3 mt-8">Explore Our Community Stats</div>
      <div className="grid">
        <div className="col-12 md:col-6 lg:col-3">
          <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-500 font-medium mb-3">Members</span>
                <div className="text-900 font-medium text-xl">15,242</div>
              </div>
              <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                <i className="pi pi-users text-blue-500 text-xl"></i>
              </div>
            </div>
            <span className="text-green-500 font-medium">152 new</span>
            <span className="text-500">members this month</span>
          </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
          <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-500 font-medium mb-3">Activities</span>
                <div className="text-900 font-medium text-xl">3,521</div>
              </div>
              <div className="flex align-items-center justify-content-center bg-orange-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                <i className="pi pi-comment text-orange-500 text-xl"></i>
              </div>
            </div>
            <span className="text-green-500 font-medium">82% increase</span>
            <span className="text-500">in community engagement</span>
          </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
          <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-500 font-medium mb-3">Reports</span>
                <div className="text-900 font-medium text-xl">431</div>
              </div>
              <div className="flex align-items-center justify-content-center bg-cyan-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                <i className="pi pi-exclamation-circle text-cyan-500 text-xl"></i>
              </div>
            </div>
            <span className="text-green-500 font-medium">24 resolved</span>
            <span className="text-500">reports this week</span>
          </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
          <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-500 font-medium mb-3">Positive Impact</span>
                <div className="text-900 font-medium text-xl">87%</div>
              </div>
              <div className="flex align-items-center justify-content-center bg-purple-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                <i className="pi pi-heart text-purple-500 text-xl"></i>
              </div>
            </div>
            <span className="text-green-500 font-medium">Acknowledged</span>
            <span className="text-500">positive contributions</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
