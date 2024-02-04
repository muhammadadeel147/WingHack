import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

const DonateSection = () => {
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    donationAmount: '',
    message: '',
  });

  const handleDonate = () => {
    console.log('Donor Information:', donorInfo);
  };

  return (
    <div>
      <div className="flex align-items-center justify-content-center mt-6">
        <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
          <div className="text-center mb-5">
            <div className="text-900 text-3xl font-medium mb-3">Donate to Support</div>
            <span className="text-600 font-medium line-height-3">
              Help those affected by harassment.
            </span>
          </div>

          <div>
            <label htmlFor="name" className="block text-900 font-medium mb-2">
              Your Full Name
            </label>
            <InputText
              id="name"
              name="name"
              value={donorInfo.name}
              onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
              className="w-full mb-3"
            />

            <label htmlFor="email" className="block text-900 font-medium mb-2">
              Your Email
            </label>
            <InputText
              id="email"
              name="email"
              value={donorInfo.email}
              onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
              className="w-full mb-3"
            />

            <label htmlFor="donationAmount" className="block text-900 font-medium mb-2">
              Donation Amount (USD)
            </label>
            <InputText
              id="donationAmount"
              name="donationAmount"
              value={donorInfo.donationAmount}
              onChange={(e) => setDonorInfo({ ...donorInfo, donationAmount: e.target.value })}
              className="w-full mb-3"
            />

            <label htmlFor="message" className="block text-900 font-medium mb-2">
              Leave a Message (optional)
            </label>
            <InputTextarea
              id="message"
              name="message"
              rows={5}
              value={donorInfo.message}
              onChange={(e) => setDonorInfo({ ...donorInfo, message: e.target.value })}
              className="w-full mb-3"
            />

            <Button
              label="Donate Now via Fidelity"
              icon="pi pi-credit-card"
              onClick={handleDonate}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateSection;
