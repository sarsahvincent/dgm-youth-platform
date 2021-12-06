import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Layout } from "../components/Layout";
import { NavLink } from "react-router-dom";
import { GridItem, Grid } from "@chakra-ui/layout";

function ProfileDetails() {
  let params = useParams();
  const { allUsers } = useSelector((state) => state.users);
  const getCurretUserDetails = allUsers.filter((user) => user.id === params.id);

  /*   useEffect(() => {
    console.log(params);
  }, []);
 */

  console.log("params id", params.id);
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
          <Grid
            h="200px"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={4}
          >
            {getCurretUserDetails.map((details) => (
              <div key={details.id}>
                <GridItem borderRadius={10} rowSpan={2} colSpan={1} bg="white">
                  <div>
                    <div className="profile__details__small_image"></div>

                    <div>
                      <div>
                        <strong style={{ color:"purple"}}>
                          {details.firstName} {details.firstName}
                        </strong>
                      </div>
                      <div style={{background: "#E7DDE1", color:"blue", borderRadius:8}}>{details.role}</div>
                    </div>
                  </div>
                </GridItem>
                <GridItem colSpan={2} bg="papayawhip" />
                <GridItem colSpan={2} bg="papayawhip" />
                <GridItem colSpan={4} bg="tomato" />
                {/* <p>
                  lastName : <strong>{details.lastName}</strong>
                </p>
                <p>
                  sex : <strong>{details.sex}</strong>
                </p> */}
              </div>
            ))}
          </Grid>
          detial:
          <NavLink to="/dashboard">BACK</NavLink>
        </div>
      </Layout>
    </div>
  );
}

export default ProfileDetails;
