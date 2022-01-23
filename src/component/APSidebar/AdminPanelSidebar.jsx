import React from "react";
import { Link } from "react-router-dom";

import "./adminPanelSidebar.css";

const AdminPanelSidebar = () => {
  const adminLinks = [
    { title: "Dashboard", link: "/dashboard" },
    { title: "Manage User", link: "/manage-user" },
    { title: "Manage Product", link: "/manage-product" },
    { title: "Add Product", link: "/add-product" },
    { title: "Manage Orders", link: "/manage-orders" },
  ];
  return (
    <div className="admin__panel-nav">
      {adminLinks.map((adminLink, index) => (
        <Link to={`/admin${adminLink.link}`}>
          <div className="admin__panel-navlinks">{adminLink.title}</div>
        </Link>
      ))}
    </div>
  );
};

export default AdminPanelSidebar;
