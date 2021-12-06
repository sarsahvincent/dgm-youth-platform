import React, { useState } from "react";
import {
  Button,
  useDisclosure,
  ModalBody,
  FormLabel,
  Input,
  chakra,
  ModalFooter,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  FormControl,
  ModalHeader,
  Modal,
  Stack,
  Radio,
  RadioGroup,
  Text,
  Box,
} from "@chakra-ui/react";
import { CloseIcon, RepeatIcon, AddIcon } from "@chakra-ui/icons";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../utils/init-firebase";
import { FaSave } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {

  getAllUsers,

} from "../services/redux/reducers/UsersSlice";

function UserForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef();
  const finalRef = React.useRef();
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [number, setnumber] = useState("");
  const [othername, setothername] = useState("");
  const [address, setaddress] = useState("");
  const [age, setage] = useState("");
  const [sexvalue, setSexValue] = React.useState("Male");
  const [rolevalue, setRoleValue] = React.useState("Member");

  const { userId } = useSelector((state) => state.users);
  const userCollection = collection(db, "users");
  const [isSubmitting, setIsSubmitting] = useState(false)
  const dispatch = useDispatch();
  const resetData = () => {
    setfirstName("");
    setlastName("");
    setnumber("");
    setothername("");
    setaddress("");
    setage("");
    setSexValue("Male");
    setRoleValue("Member");
  };

  const createUser = async () => {
    setIsSubmitting(true)
    await addDoc(userCollection, {
      userId: userId,
      firstName: firstName,
      lastName: lastName,
      othername: othername,
      phoneNumber: number,
      address: address,
      age: age,
      sex: sexvalue,
      role: rolevalue,
    });
    setIsSubmitting(false)
    resetData();
    onClose()
  };

  return (
    <>
      <Button background="purple" color="white" onClick={onOpen}>
        <AddIcon w={4} h={4} color="white" mr={2} /> Add User
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent background="purple">
          <ModalHeader color="white" textAlign="center">
            {" "}
            Create New User
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody pb={6}>
            <chakra.form onSubmit={createUser}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 15,
                }}
              >
                <FormControl mr={3}>
                  <FormLabel color="white"> First name</FormLabel>
                  <Input
                    color="white"
                    ref={initialRef}
                    placeholder="First name"
                    vlaue={firstName}
                    onChange={(event) => setfirstName(event.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel color="white">Last name</FormLabel>
                  <Input
                    vlaue={lastName}
                    onChange={(event) => setlastName(event.target.value)}
                    color="white"
                    placeholder="Last name"
                  />
                </FormControl>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 15,
                }}
              >
                <FormControl mr={3}>
                  <FormLabel color="white">Other name(s)</FormLabel>
                  <Input
                    color="white"
                    ref={initialRef}
                    placeholder="Other name(s)"
                    vlaue={othername}
                    onChange={(event) => setothername(event.target.value)}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel color="white">Age</FormLabel>
                  <Input
                    vlaue={age}
                    onChange={(event) => setage(event.target.value)}
                    color="white"
                    type="number"
                    placeholder="Age"
                  />
                </FormControl>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 15,
                }}
              >
                <FormControl>
                  <FormLabel color="white">Sex</FormLabel>
                  <RadioGroup onChange={setSexValue} value={sexvalue}>
                    <Stack direction="row">
                      <Radio color="white" value="Male">
                        <Text color="white" fontSize="md">
                          Male
                        </Text>
                      </Radio>
                      <Radio color="white" value="Female">
                        <Text color="white" fontSize="md">
                          Female
                        </Text>
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>

                <FormControl>
                  <FormLabel color="white">Role</FormLabel>
                  <RadioGroup onChange={setRoleValue} value={rolevalue}>
                    <Stack direction="row">
                      <Radio color="white" value="Member">
                        <Text color="white" fontSize="md">
                          Member
                        </Text>
                      </Radio>
                      <Radio color="white" value="Executive">
                        <Text color="white" fontSize="md">
                          Executive
                        </Text>
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 15,
                }}
              >
                <FormControl mr={3}>
                  <FormLabel color="white">Phone Number</FormLabel>
                  <Input
                    value={number}
                    onChange={(event) => setnumber(event.target.value)}
                    color="white"
                    type="number"
                    ref={initialRef}
                    placeholder="Phone number"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel color="white">Address</FormLabel>
                  <Input
                    value={address}
                    onChange={(event) => setaddress(event.target.value)}
                    color="white"
                    placeholder="Address"
                  />
                </FormControl>
              </div>
            </chakra.form>
            <ModalFooter justifyContent="space-between">
              <Button
                onClick={createUser}
                colorScheme="purple"
                mr={3}
                w="23"
                type="submit"
                isLoading={isSubmitting}
              >
                <FaSave color="white" />
                <Text ml={1}>Save</Text>
               
              </Button>
              <Button
                onClick={resetData}
                colorScheme="pink"
                mr={3}
                type="submit"
              >
                <RepeatIcon w={4} h={4} color="white" mr={2} />
                Reset
              </Button>
              <Button colorScheme="red" onClick={onClose}>
                {" "}
                <CloseIcon w={3} h={3} color="white" mr={2} />
                Cancel
              </Button>
            </ModalFooter>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default UserForm;
