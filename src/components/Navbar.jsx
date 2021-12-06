import {
  Box,
  HStack,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useAuth } from "../contexts/AuthContext";
import Navlink from "./Navlink";

export function Navbar() {
  const { toggleColorMode } = useColorMode();
  // const { logout, currentUser } = useAuth()
  const { logout, currentUser } = useAuth();

  return (
    <Box
      background="purple"
      borderBottom="2px"
      borderBottomColor={useColorModeValue("gray.100", "gray.700")}
      mb={4}
      py={4}
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        marginBottom: "100px",
        zIndex: "1000",
      }}
    >
      <HStack
        justifyContent="flex-end"
        maxW="container.lg"
        mx="auto"
        spacing={4}
      >
        {currentUser ? (
          <Navlink to="/dashboard" color="white" ml={5} name="DGM YOUTH" size="lg" />
        ) : (
          <Navlink color="white" to="/" ml={5} name="DGM YOUTH" size="lg" />
        )}

        <Spacer />
        {!currentUser && <Navlink  ml={5} color="white" to="/login" name="Login" />}
        {!currentUser && (
          <Navlink  ml={5} color="white" to="/register" name="Register" />
        )}
        {currentUser && <Navlink  ml={5} color="white" to="/profile" name="Profile" />}
        {currentUser && (
          <Navlink  ml={5}
            color="white"
            to="/logout"
            name="Logout"
            onClick={async (e) => {
              e.preventDefault();
              await logout();
            }}
          />
        )}
        {/*    <IconButton
          color="white"
          variant="ghost"
          icon={useColorModeValue(<FaSun />, <FaMoon />)}
          onClick={toggleColorMode}
          aria-label="toggle-dark-mode"
        /> */}
      </HStack>
    </Box>
  );
}
