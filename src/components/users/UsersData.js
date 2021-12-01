import React from "react";
import { Box, Grid } from "@chakra-ui/react";

function UsersData() {
  return (
    <div>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <Box w="100%" h="10" boxShadow="md" p="6" rounded="md" bg="white">
          typeface without
        </Box>
        <Box w="100%" h="10" boxShadow="md" p="6" rounded="md" bg="white" />
        <Box w="100%" h="10" boxShadow="md" p="6" rounded="md" bg="white" />
        <Box w="100%" h="10" boxShadow="md" p="6" rounded="md" bg="white" />
        <Box w="100%" h="10" boxShadow="md" p="6" rounded="md" bg="white" />
      </Grid>
    </div>
  );
}

export default UsersData;
