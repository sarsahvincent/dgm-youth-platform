import { chakra, Container, Heading, useToast } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Layout } from "../components/Layout";
import { useAuth } from "../contexts/AuthContext";
import { getAllUsers } from "../services/redux/reducers/UsersSlice";
import UserForm from "../components/UserForm";
import { db } from "../utils/init-firebase";
import { collection, getDocs } from "firebase/firestore";
import Search from "../components/Search";
import UsersData from "../components/users/UsersData";
import { useSelector, useDispatch } from "react-redux";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const usersCollectiion = collection(db, "users");
  const toast = useToast();
  const dispatch = useDispatch();
  const { allUsers } = useSelector((state) => state.users);
  console.log("allUsers", allUsers);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectiion);
   
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      dispatch(getAllUsers(users));
    };

    getUsers();
  }, []);

  setTimeout(function () {
    dispatch(getAllUsers(users));
  }, 500);
  //getting data of the current users loggedin
  //const { currentUser } = useAuth();
  return (
    <div style={{ background: "#eff3f4", height: "100vh" }}>
      <Layout>
        <div
          style={{
            justifyContent: "space-around",
            marginTop: 80,
            marginBottom: 20,
          }}
        >
          <div className="dasboard__header">
            <div className="dasboard__header__btn__total">
              <div style={{ margin: 20 }}>
                <UserForm />
              </div>
              <div style={{ margin: 25 }}>
                <Search />
              </div>
              <div style={{ margin: 25 }}>
                <b style={{ color: "purple" }}>
                  Total Members : {allUsers.length}
                </b>
              </div>
            </div>
            <div style={{ paddingBottom: "20px" }}></div>
          </div>
        </div>

        <Container maxW="container.xl" overflowX="auto" py={4}>
          <UsersData allUsers={allUsers} />
        </Container>
      </Layout>
    </div>
  );
}
