import React, { Component } from 'react'
import "./AdminDashboard.css"
import UpdateBtn from './../../Buttons/UpdateBtn'
import RemoveBtn from '../../Buttons/RemoveBtn'
import HeaderWithAdminGreet from '../../Header/HeaderWithAdminGreet'
import AdminSidePanel from '../Admin Comp/AdminSidePanel'
export class AdminDashboard extends Component {
  render() {
    return (
        <div className='Main'>
          <div className='HeaderSection'>
            <HeaderWithAdminGreet/>
          </div>
            <div className='Text1'>
              <h1>Manage Students</h1>
              </div>
              <div className='Body-Admin'>
                    <div className='AdminSidePanel'>
                    <AdminSidePanel/>
                    
                    </div>
                      <div className='flex1'>
                          {/* <div className='StudentDetails'> */}
                              <UpdateBtn/>
                              <RemoveBtn/>
                          {/* </div> */}
                        
                    </div>
              </div>
      </div>
    )
  }
}

export default AdminDashboard