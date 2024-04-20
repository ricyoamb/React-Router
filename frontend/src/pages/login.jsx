import { useState } from 'react'
import { Box, AbsoluteCenter, Input, Stack, Button } from '@chakra-ui/react'
import { loginUser } from '../modules/fetch'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async () => {
    try {
      await loginUser({ email, password })
    } catch (err) {
      const { response } = err
    }
  }
  return (
    <Box h="100%">
      <AbsoluteCenter>
        <Stack>
          <Input
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleSubmit}>Submit</Button>
        </Stack>
      </AbsoluteCenter>
    </Box>
  )
}

export default Login
