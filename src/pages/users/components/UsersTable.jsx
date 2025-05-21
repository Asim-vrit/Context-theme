import { useEffect } from "react";
import { toast } from "react-toastify";
import { deleteUser } from "../../../api/routes/users";
import { Link } from "react-router";

function UsersTable(props) {
  const { userData, fetchUsersData, setSelectedUsers } = props;

  async function deleteUserFunction(id) {
    try {
      await deleteUser(id);
      toast.success("Deleted user with id: " + id);
      fetchUsersData();
    } catch (error) {
      console.log(error);
      toast.error("Error while deleting user");
    }
  }

  useEffect(() => {
    fetchUsersData();
  }, []);
  return (
    <div className="flex justify-center">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xl text-medium text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 ">
                SN
              </th>
              <th scope="col" className="px-6 py-3 ">
                User Id
              </th>
              <th scope="col" className="px-6 py-3">
                User Name
              </th>
              <th scope="col" className="px-6 py-3">
                Password
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {userData.map((items, index) => (
              <tr
                key={items.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td scope="row" className="px-6 py-4">
                  {items.id}
                </td>
                <td className="px-6 py-4">{items.username}</td>
                <td className="px-6 py-4">{items.password}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <Link to={"/users/" + items.id}>
                      <button
                        onClick={() => {
                          setSelectedUsers(items);
                        }}
                        className="!text-blue-500 border px-2 py-1 rounded-2xl hover:cursor-pointer"
                      >
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={() => deleteUserFunction(items.id)}
                      className="!text-red-500 border px-2 py-1 rounded-2xl hover:cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersTable;
