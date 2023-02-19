import { useStore } from "@nanostores/react";
import { nanoid } from "nanoid";
import { user, users } from "../store/user";

function Form() {
  const $user = useStore(user);
  const $users = useStore(users);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    user.set({ ...$user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if ($user._id === "") {
      // New User
      users.set([...$users, { _id: nanoid(8), ...$user }]);
    } else {
      // Update User
      users.set(
        $users.map((u) => {
          if (u._id === $user._id) {
            return $user;
          } else {
            return u;
          }
        })
      );
    }
    user.set({
      _id: "",
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center gap-4">
      <input
        required
        name="name"
        type="text"
        placeholder="Enter Name"
        onChange={onChange}
        value={$user.name}
        className="text-md rounded-lg border-2 border-gray-100 px-4 py-4 font-medium focus:border-2 focus:border-gray-300 focus:outline-none"
      />
      <input
        required
        name="email"
        type="email"
        placeholder="Enter Email"
        onChange={onChange}
        value={$user.email}
        className="text-md rounded-lg border-2 border-gray-100 px-4 py-4 font-medium focus:border-2 focus:border-gray-300 focus:outline-none"
      />
      <input
        required
        name="password"
        type="password"
        placeholder="Enter Password"
        onChange={onChange}
        value={$user.password}
        className="text-md rounded-lg border-2 border-gray-100 px-4 py-4 font-medium focus:border-2 focus:border-gray-300 focus:outline-none"
      />
      <button className="bg-[#51afef] text-white text-md px-8 py-4 rounded outline-none">
        Submit
      </button>
    </form>
  );
}
export default Form;
