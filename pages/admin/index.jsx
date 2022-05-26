import React from "react";
import Layout from "@/components/layouts/Admin";
import TableDashboard from "@/components/elements/Dashboard/Table";
import Breadcumb from "@/components/UI/Breadcumb/Breadcumb";

function Dashboard() {
  return (
    <Layout>
      <div>
        <Breadcumb />
      </div>
      <div>
        <h1 className="heading-dashboard-h1">Dashboard</h1>
      </div>
      <div>
        <div className="my-4">
          <span
            className="absolute w-1 h-6 bg-primaryDarkBlue-400 "
            aria-hidden="true"
          ></span>
          <h2 className="text-md font-semibold ml-2">List Orders</h2>
        </div>
        <TableDashboard />
      </div>
    </Layout>
  );
}

export default Dashboard;
