import React from "react";
import "./StudentDetailsUpdatedAdmin.css"
import AdminSidePanel from "../Admin Comp/AdminSidePanel";
import StudentDetailsUpBox from "./StudentDetailsUpBox";
export default function StudentDetailsUpdatedAdmin() {
    return (

      <div className ="StudentDetailsUpdated">
        <AdminSidePanel/>
        <StudentDetailsUpBox/>
           
      </div>
    );
}