import { chakra, Container, Heading } from '@chakra-ui/react'
import React,{ useState, useEffect} from 'react'
import { Layout } from '../components/Layout'
import { useAuth } from '../contexts/AuthContext'
import {useSelector} from 'react-redux'
import { getCurrentUser } from '../services/redux/reducers/UsersSlice'


export default function Profilepage() {

  const [user, setUser] = useState(null)


const signedIn = useSelector((state) => state.users)

  const { currentUser } = useAuth()
  return (
    <Layout>
      {signedIn.currentUser.email}
      <Heading>Profile page</Heading>
      <Container maxW='container.lg' overflowX='auto' py={4}>
        <chakra.pre p={4}>
          {currentUser && <pre> {JSON.stringify(currentUser, null, 2)}</pre>}
        </chakra.pre>
      </Container>
    </Layout>
  )
}
