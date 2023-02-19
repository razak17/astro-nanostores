import { useStore } from "@nanostores/react";
import { User, user, users } from "../store/user";

function Table() {
  const $users = useStore(users);

  const updateUser = (u: User) => {
    user.set(u);
  };

  const deleteUser = (id: string) => {
    users.set([
      ...$users.map((u) => {
        if (u._id !== id) {
          return u;
        }
      }),
    ]);
  };

  return (
    <div className="overflow-x-auto mt-6">
      <table className="border-collapse table-auto w-full">
        <thead>
          <tr>
            <th></th>
            <th className="text-left">Name</th>
            <th className="text-left">Email</th>
            <th className="text-left">Password</th>
            <th className="text-left">Edit</th>
            <th className="text-left">Delete</th>
          </tr>
        </thead>
        <tbody>
          {$users.map(
            (u, i) =>
              u && (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.password}</td>
                  <td>
                    <button
                      onClick={() => updateUser(u)}
                      className="bg-green-700 text-white text-md px-4 py-2 rounded outline-none"
                    >
                      edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => deleteUser(u._id)}
                      className="bg-red-700 text-white text-md px-4 py-2 rounded outline-none"
                    >
                      delete
                    </button>
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
