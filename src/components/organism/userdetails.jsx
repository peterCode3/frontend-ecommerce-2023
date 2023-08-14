import React, { Component } from 'react';
import "@/../globals.css"



class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'Dashboard'
    };
  }

  handleTabChange = (Dashboard) => {
    this.setState({ activeTab: Dashboard });
  };

  render() {
    const { activeTab } = this.state;

    return (
      <div className="user-table">
        <div className="tab-buttons w-3/12 shadow-slate-50	">
          <button
            onClick={() => this.handleTabChange('Dashboard')}
            className={activeTab === 'Dashboard' ? 'text-left w-full active' : ''}
          >
            Dashboard
          </button>
          <button
            onClick={() => this.handleTabChange('Orders')}
            className={activeTab === 'Orders' ? 'text-left w-full active' : ''}
          >
            Orders
          </button>
          <button
            onClick={() => this.handleTabChange('Downloads')}
            className={activeTab === 'Downloads' ? 'text-left w-full active' : ''}
          >
            Downloads
          </button>
          <button
            onClick={() => this.handleTabChange('Address')}
            className={activeTab === 'Address' ? 'text-left w-full active' : ''}
          >
            Address
          </button>
          <button
            onClick={() => this.handleTabChange('Accountdetails')}
            className={activeTab === 'Accountdetails' ? 'text-left w-full active' : ''}
          >
            Account Details
          </button>
          <button
            onClick={() => this.handleTabChange('Logout')}
            className={activeTab === 'Logout' ? 'text-left w-full active' : ''}
          >
            Logout
          </button>
        </div>
        <div className="user-content">
          {activeTab === 'Dashboard' && <p>Content of Tab 1</p>}
          {activeTab === 'Orders' && <p>Content of Tab 2</p>}
          {activeTab === 'Downloads' && <p>Content of Tab 3</p>}
          {activeTab === 'Address' && <p>Content of Tab 4</p>}
          {activeTab === 'Accountdetails' && <p>Content of Tab 5</p>}
          {activeTab === 'Logout' && <p>Content of Tab 6</p>}
        </div>
      </div>
    );
  }
}

export default UserDetails;
