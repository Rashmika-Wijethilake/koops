import React, { Component } from 'react'
import "./AdminDashboard.css"
import HeaderWithoutBtns from '../../Header/HeaderWithoutBtns'
import UpdateBtn from './../../Buttons/UpdateBtn'
import RemoveBtn from '../../Buttons/RemoveBtn'
export class AdminDashboard extends Component {
  render() {
    return (
        <div className='Main'>
        <HeaderWithoutBtns/>

            <div className='Text1'>Manage Students</div>
                <div className='flex1'>
                    <div className='StudentDetails'>
                         <UpdateBtn/>
                    </div>
                    <div>
                         <RemoveBtn/>
                    </div>
                </div>

      </div>
    )
  }
}

export default AdminDashboard