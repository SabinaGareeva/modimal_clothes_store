
import { useState, useEffect } from "react";
import { authConfig } from "../../configs/auth";
import { getServerSession } from "next-auth/next";
import { useSession,signOut } from "next-auth/react";
const UserInformation =  () => {
  // const [user, setUser] = useState(null);
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const session = await getServerSession(authConfig);
  //     setUser(session?.user || null);
  //   };
  //   fetchUser();
  // }, []);

  // const session = await getServerSession(authConfig);
  const session = useSession();

  return (
    <div>
     <h2>{session?.data?.user?.name}</h2>
       <p>{session?.data?.user?.email}</p> 
      <button onClick={()=>signOut({callbackUrl:'/'})}>Log Out</button>
    </div>
  );
};

export default UserInformation;
