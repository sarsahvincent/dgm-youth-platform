import React from "react";
import { Stack, InputGroup, Input, InputLeftElement } from "@chakra-ui/react";
import { Search2Icon, PhoneIcon } from "@chakra-ui/icons";

function Search() {
  return (
    <div>
      <Stack spacing={4}>
        <InputGroup border={2}>
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon color="gray.300" />}
          />
          <Input type="tel" placeholder="Search Name" />
        </InputGroup>
      </Stack>
    </div>
  );
}

export default Search;
