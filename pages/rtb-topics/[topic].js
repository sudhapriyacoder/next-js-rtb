import { useRouter } from "next/router";
import { useEffect } from "react";

const useTopic = () => ({topic: "ddd", loading: false})

const User = () => {
  const router = useRouter(); 
  const topic = useTopic(); 
  const { query } = useRouter();
  // console.log("Router", router);
  useEffect(() => {
    if(topic.topic == "") {
      router.replace("/");
    }
  }, [router, topic.topic])
  return (
    <div>
      <h2>This is a dynamic route Page</h2>
      <h2> Dynamic route value - {query.topic}</h2>
      <button onClick={(e) => router.push("/rtb-topics/user")}>User</button>
      <button onClick={(e) => router.push("/")}>Home</button>
    </div>
  );
};

export default User;
