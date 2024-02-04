import React from 'react';

const Service = () => {
  return (
    <div>
      <div className="surface-0 text-center mt-4">
        <div className="mb-3 font-bold text-3xl">
          <span className="text-900">Empowering Unity, </span>
          <span className="text-blue-600">Ensuring Safety</span>
        </div>
        <div className="text-700 mb-6">
          Providing a platform designed with care to foster collaboration, security, and ease of use.
        </div>
        <div className="grid">
          <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
              <i className="pi pi-users text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Inclusive Community</div>
            <span className="text-700 line-height-3">
              Embracing diversity, our platform is built for developers from all walks of life.
            </span>
          </div>
          <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
              <i className="pi pi-lock text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Secure & Private</div>
            <span className="text-700 line-height-3">
              End-to-end encryption ensures the privacy and safety of every interaction.
            </span>
          </div>
          <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
              <i className="pi pi-check-circle text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">User-Friendly Experience</div>
            <span className="text-700 line-height-3">
              A platform designed for ease of use, making collaboration accessible to everyone.
            </span>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Service;
