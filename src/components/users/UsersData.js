import React from "react";
import {
  Box,
  AccordionIcon,
  AccordionPanel,
  AccordionButton,
  Accordion,
  AccordionItem,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function UsersData({ allUsers }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "80vh",
        verflowY: "scroll",
      }}
    >
      {allUsers.map((user) => (
        <div key={user.id} className="dasboard__profile__container">
          <Box w="100%" boxShadow="md" p="3" rounded="md" bg="white">
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      <b style={{ color: "purple", fontWeight: "bold" }}>
                        {user.firstName} {user.lastName}
                      </b>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <NavLink to={"/profile-details/" + user.id}>
                  <AccordionPanel
                    display="flex"
                    className="dasboard__profile__desplay"
                    pb={4}
                  >
                    <div style={{ flex: 3, alignItems: "center" }}>
                      <div className="dasboard__profile__image"></div>
                      <div className="dasboard__profile__names">
                        <h3 color="purple" className="dasboard__profile__name">
                          First Name :<span>{user.firstName}</span>
                        </h3>
                        <h3 className="dasboard__profile__name">
                          Last Name : <span>{user.lastName}</span>
                        </h3>
                      </div>
                    </div>
                    <div
                      className="dasboard__profile__description"
                      style={{ flex: 3 }}
                    >
                      <p>
                        Other Name : <span>{user.othername}</span>{" "}
                      </p>
                      <p>
                        Sex: <span>{user.sex}</span>
                      </p>
                      <p>
                        Phone : <span>{user.phoneNumber}</span>
                      </p>
                      <p>
                        Role : <span>{user.role}</span>
                      </p>
                      <p>
                        Address : <span>{user.address}</span>
                      </p>
                    </div>
                  </AccordionPanel>
                </NavLink>
              </AccordionItem>
            </Accordion>
          </Box>
          {/* <Box w="100%" boxShadow="md" p="6" rounded="md" bg="white">
            <h3>First Name: {user.firstName}</h3>
            <p>Last Name: {user.lastName}</p>
            <p>
              Other Name: {user.otherName}
              {user.othername}
            </p>
            <p>Sex: {user.sex}</p>
            <p>
              Phone: {user.phone}
              {user.phoneNumber}
            </p>
            <p>Role :{user.role}</p>
            <p>Address: {user.address}</p> 
          </Box> */}
        </div>
      ))}
    </div>
  );
}

export default UsersData;
