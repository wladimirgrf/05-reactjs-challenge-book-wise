import Image from 'next/image'

import banner from '../../../public/banner.png'
import { Container, LoginBox, LoginItem, LoginSection } from './styles'

export default function Login() {
  return (
    <Container>
      <Image src={banner} alt="" />

      <LoginSection>
        <h1>Welcome!</h1>
        <span>Log in or access as a guest.</span>

        <LoginBox>
          <LoginItem>Sign In with Google</LoginItem>
          <LoginItem>Sign In with Github</LoginItem>
          <LoginItem>Access as a Guest</LoginItem>
        </LoginBox>
      </LoginSection>
    </Container>
  )
}
