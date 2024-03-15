import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const UserInfoPage = () => {
  const { query } = useRouter();
  const { data, error } = useSWR(
    `https://dummyjson.com/users/${query.id}`,
    fetcher
  );
  console.log(data);
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
        {data && (
          <>
            <div>First Name : {data.firstName}</div>
            <div>Last Name : {data.lastName}</div>
            <div>Gender : {data.gender}</div>
            <div>Age : {data.age}</div>
          </>
        )}
      </div>
    );
  }
};

export default UserInfoPage;
