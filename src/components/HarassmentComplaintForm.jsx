import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';

const HarassmentComplaintForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    harassmentType: '',
    complaint: '',
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  const handleSubmit = () => {
  
    console.log('Form Data:', formData);
   
  };

  return (
    <div>
      <div className="flex align-items-center justify-content-center mt-2">
        <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
          <div className="text-center mb-5">
            <div className="text-900 text-3xl font-medium mb-3">Harassment Complaint</div>
            <span className="text-600 font-medium line-height-3">Have an issue? Let us know!</span>
          </div>

          <div>
            <label htmlFor="name" className="block text-900 font-medium mb-2">Your Name</label>
            <InputText id="name" name="name" value={formData.name} onChange={handleChange} className="w-full mb-3" />

            <label htmlFor="email" className="block text-900 font-medium mb-2">Your Email</label>
            <InputText id="email" name="email" value={formData.email} onChange={handleChange} className="w-full mb-3" />

            <label htmlFor="harassmentType" className="block text-900 font-medium mb-2">Type of Harassment</label>
            <InputText id="harassmentType" name="harassmentType" value={formData.harassmentType} onChange={handleChange} className="w-full mb-3" />

            <label htmlFor="complaint" className="block text-900 font-medium mb-2">Complaint Message</label>
            <InputTextarea
              id="complaint"
              name="complaint"
              rows={3}
              value={formData.complaint}
              onChange={handleChange}
              className="w-full mb-3"
            />

            <div className="flex align-items-center justify-content-between mb-6">
              <div className="flex align-items-center">
                <Checkbox id="consent" name="consent" checked={formData.consent} onChange={handleChange} className="mr-2" />
                <label htmlFor="consent">I consent to processing my complaint</label>
              </div>
            </div>

            <Button label="Submit Complaint" icon="pi pi-check" onClick={handleSubmit} className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HarassmentComplaintForm;
