import React, { useState } from 'react';
import "@/../globals.css";

const UserDetails = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  let listItemsStyle = "border text-xl border-gray-500 px-2 py-2 cursor-pointer"

  return (
    <div className="user-table flex py-4">
      <div className="tab-buttons w-2/12 bg-white shadow-slate-50">
        <ul>
          <li className={listItemsStyle}
            onClick={() => handleTabChange('Dashboard')}>
            <button className={activeTab === 'Dashboard' ? 'active' : ''} >
              Dashboard
            </button>
          </li>
          <li className={listItemsStyle}
            onClick={() => handleTabChange('Orders')}>
            <button className={activeTab === 'Orders' ? 'active' : ''} >
              Orders
            </button>
          </li>
          <li className={listItemsStyle}
            onClick={() => handleTabChange('Downloads')}>
            <button className={activeTab === 'Downloads' ? 'active' : ''} >
              Downloads
            </button>
          </li>
          <li className={listItemsStyle}
            onClick={() => handleTabChange('Address')}>
            <button className={activeTab === 'Address' ? 'active' : ''} >
              Address
            </button>
          </li>
          <li className={listItemsStyle}
            onClick={() => handleTabChange('Accountdetails')}>
            <button className={activeTab === 'Accountdetails' ? 'active' : ''} >
              Account Details
            </button>
          </li>
          <li className={listItemsStyle}
            onClick={() => handleTabChange('Logout')}>
            <button className={activeTab === 'Logout' ? 'active' : ''} >
              Logout
            </button>
          </li>
        </ul>
      </div>
      <div className="user-content w-10/12 px-4 border-gray-500 border">
        {activeTab === 'Dashboard' && <p>Content of Dashboard Tab</p>}
        {activeTab === 'Orders' && <p>Content of Orders Tab</p>}
        {activeTab === 'Downloads' && <p>Content of Downloads Tab</p>}
        {activeTab === 'Address' && <p>Content of Address Tab</p>}
        {activeTab === 'Accountdetails' && <p>Content of Account Details Tab</p>}
        {activeTab === 'Logout' && <p>Content of Logout Tab</p>}
      </div>
    </div>
  );
};

export default UserDetails;
