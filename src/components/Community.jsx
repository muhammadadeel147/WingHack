import React from 'react';
import { Button } from 'primereact/button';

const Community = () => {
  return (
    <div>
      <div className="surface-0 text-700 text-center mt-4">
        <div className="text-blue-600 font-bold mb-3">
          <i className="pi pi-discord"></i>&nbsp;POWERED BY Adeel
        </div>
        <div className="text-900 font-bold text-5xl mb-3">Join Our Respectful Community</div>
        <div className="text-700 text-2xl mb-5">
          Connect with like-minded individuals and contribute to a positive and harassment-free environment. </div>
        <Button
          label="Join Now"
          icon="pi pi-discord"
          className="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"
        />
      </div>
    </div>
  );
};

export default Community;
