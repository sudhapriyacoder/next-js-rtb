// import { useEffect, useState } from "react";
import Link from "next/link";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const UserPage = () => {
  const { data, error } = useSWR("https://dummyjson.com/users", fetcher);
  if (error) {
    return <h1>Error Message</h1>;
  }
  if (!data) {
    return <h1>Loading ...</h1>;
  }
  if (data) {
    return (
      <div>
        <h1>Users</h1>
        {data.users &&
          data.users.map((user) => (
            <Link href={`/users/${user.id}`} key={user.id}>
              <div>{user.firstName}</div>
            </Link>
          ))}
      </div>
    );
  }
  // const [users, setUsers] = useState([]);
  // console.log("users", users);
  // useEffect(() => {
  //     async function fetchUsers() {
  //         const data = await fetch("https://dummyjson.com/users");
  //         setUsers(await data.json());
  //     }
  //     fetchUsers();
  // }, []);
  // return (
  //     <div>
  //         <h1>Users</h1>
  //         {users && users.users && users.users.map((user) =>
  //             <Link href={`/users/${user.id}`} key={user.id}>
  //                 <div>{user.firstName}</div>
  //             </Link>) }
  //     </div>
  // )
};

export default UserPage;
