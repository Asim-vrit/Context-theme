import { useState } from "react";
import { getUsers } from "../../api/routes/users";
import HookForm from "./components/HookForm";
import UsersTable from "./components/UsersTable";
import { toast } from "react-toastify";

function Users() {
  const [userData, setUserData] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState(null);

  async function fetchUsersData() {
    try {
      const data = await getUsers();
      setUserData(data.data);
      toast.success("users fetched successfully");
    } catch (e) {
      console.log(e);
      toast.error("something went wrong");
    }
  }
  return (
    <div>
      <HookForm
        setSelectedUsers={setSelectedUsers}
        selectedUsers={selectedUsers}
        fetchUsersData={fetchUsersData}
      />
      <UsersTable
        fetchUsersData={fetchUsersData}
        setSelectedUsers={setSelectedUsers}
        userData={userData}
      />
    </div>
  );
}

export default Users;
