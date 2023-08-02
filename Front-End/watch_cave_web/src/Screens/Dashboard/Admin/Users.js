import React from 'react';
import Table2 from"../../../Components/Table2";
import SideBar from '../SideBar';
import{UserData} from"../../Data/MovieData";

function Users() {
  return (
    <SideBar>

  <div className="flex flex-col gap-6">
    <h2 className="text-xl font-bold">Users</h2>

    <Table2 data={UserData} users={true}></Table2>

  </div>

    </SideBar>
 
  );
}

export default Users;