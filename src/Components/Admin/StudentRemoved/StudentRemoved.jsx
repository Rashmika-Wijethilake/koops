import React from "react";
import "./StudentRemoved.css";
import AdminSidePanel from "../Admin Comp/AdminSidePanel";
import "./StudentRemovedDialogBox";
import StudentRemovedDialogBox from "./StudentRemovedDialogBox";

export default function StudentRemoved() {
    return (
      <div className ="StudentRemoved">
        <AdminSidePanel/>
        <StudentRemovedDialogBox/>
           
      </div>
    );
}