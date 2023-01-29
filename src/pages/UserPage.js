import { Divider } from "@mui/material";
import React, { useState } from "react";
import Footer from "../components/home/Footer";
import NavUser from "../components/user/NavUser";
import UserDetails from "../components/user/UserDetails";
import { useEffect } from "react";
import { getUserDetails } from "../hooks/userHttp";

function UserPage() {
  const [user, setuser] = useState({});

  useEffect(() => {
    (async function () {
      const result = await getUserDetails();
      if (result?.error) {
        console.error(result.error);
      }
      if (result?.clientError) {
        console.error(result.clientError);
      }
      setuser(result);
    })();
  }, []);
  return (
    <div>
      <NavUser goback={true} />
      <Divider />
      <UserDetails
        firstName={user?.firstName}
        lastName={user?.lastName}
        age={user?.age}
        dateOfBirth={user?.dateOfBirth}
        gender={user?.gender}
        email={user?.email}
        userName={user?.userName}
        phoneNo={user?.phoneNo}
        verified={user?.verified}
      />
      <Divider />
      <Footer />
    </div>
  );
}

export default UserPage;
