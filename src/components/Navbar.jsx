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
    >
      <HStack
        justifyContent="flex-end"
        maxW="container.lg"
        mx="auto"
        spacing={4}
      >
        {currentUser ? (
          <Navlink to="/profile" color="white" name="DGM YOUTH" size="lg" />
        ) : (
          <Navlink color="white" to="/" name="DGM YOUTH" size="lg" />
        )}

        <Spacer />
        {!currentUser && <Navlink color="white" to="/login" name="Login" />}
        {!currentUser && (
          <Navlink color="white" to="/register" name="Register" />
        )}
        {currentUser && <Navlink color="white" to="/profile" name="Profile" />}
        {currentUser && (
          <Navlink
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
