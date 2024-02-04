import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

const VictimsTable = () => {
  const [victimsData, setVictimsData] = useState([
    { id: 1, name: 'John Doe', issue: 'Harassment at Workplace', harassType: 'Verbal' },
    { id: 2, name: 'Jane Smith', issue: 'Online Bullying', harassType: 'Cyberbullying' },
    { id: 3, name: 'Alice Johnson', issue: 'Stalking', harassType: 'Physical' },
    { id: 4, name: 'Bob Williams', issue: 'Discrimination', harassType: 'Verbal' },
    { id: 5, name: 'Emily Davis', issue: 'Online Harassment', harassType: 'Cyberbullying' },
    { id: 6, name: 'Michael Brown', issue: 'Sexual Harassment', harassType: 'Physical' },
    { id: 7, name: 'Olivia Miller', issue: 'Bullying', harassType: 'Verbal' },
    { id: 8, name: 'Daniel Wilson', issue: 'Privacy Invasion', harassType: 'Cyberbullying' },
    { id: 9, name: 'Sophia Smith', issue: 'Workplace Discrimination', harassType: 'Verbal' },
    { id: 10, name: 'Matthew Johnson', issue: 'Online Stalking', harassType: 'Cyberbullying' },
  
  ]);
  

  return (
    <div>
      <div className="text-900 text-3xl font-medium mb-3">Victims Information</div>
      <DataTable value={victimsData} paginator rows={10} className="p-datatable-sm">
        <Column field="id" header="ID" />
        <Column field="name" header="Name" />
        <Column field="issue" header="Issue" />
        <Column field="harassType" header="Harassment Type" />
      </DataTable>
    </div>
  );
};

const DonationTable = () => {
  const [donationData, setDonationData] = useState([
    { id: 1, donorName: 'Dean', amount: 50 },
    { id: 2, donorName: 'John Smith', amount: 100 },
    { id: 3, donorName: 'Emma Johnson', amount: 75 },
    { id: 4, donorName: 'Ryan Davis', amount: 200 },
    { id: 5, donorName: 'Sophia Brown', amount: 30 },
    { id: 6, donorName: 'Mia Wilson', amount: 150 },
    { id: 7, donorName: 'Ethan Miller', amount: 80 },
    { id: 8, donorName: 'Ava Jones', amount: 120 },
    { id: 9, donorName: 'Liam Smith', amount: 60 },
    { id: 10, donorName: 'Olivia Davis', amount: 90 },
   
  ]);
  

  return (
    <div>
      <div className="text-900 text-3xl font-medium mb-3">Donation Information</div>
      <DataTable value={donationData} paginator rows={10} className="p-datatable-sm">
        <Column field="id" header="ID" />
        <Column field="donorName" header="Donor Name" />
        <Column field="amount" header="Donation Amount" />
      </DataTable>
    </div>
  );
};

const DonationAndVictims = () => {
  return (
    <div className="grid grid-cols-1 gap-8 ml-4 mr-4">
      <div className='col-12'>
        <VictimsTable />
      </div>
      <div className='col-12'>
        <DonationTable />
      </div>
    </div>
  );
};

export default DonationAndVictims;
