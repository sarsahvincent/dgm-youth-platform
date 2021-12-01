import { chakra, Container, Heading } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Layout } from "../components/Layout";
import { useAuth } from "../contexts/AuthContext";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../services/redux/reducers/UsersSlice";
import UserForm from "../components/UserForm";
import { db } from "../utils/init-firebase";
import { collection, getDocs } from "firebase/firestore";
import Search from "../components/Search";
import UsersData from "../components/users/UsersData";

export default function Profilepage() {
  const [users, setUsers] = useState([]);
  const usersCollectiion = collection(db, "users");
  console.log("uers", users);

  //const signedIn = useSelector((state) => state.users);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectiion);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  //getting data of the current users loggedin
  //const { currentUser } = useAuth();
  return (
    <div style={{ background: "#eff3f4", height: "100vh"}}>
      <Layout>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <UserForm />
          <Search style={{ paddingRight: "20px" }} />
        </div>
        <Container maxW="container.xl" overflowX="auto" py={4}>
          <chakra.pre p={4}>
            <UsersData />
          </chakra.pre>
        </Container>
      </Layout>
    </div>
  );
}
