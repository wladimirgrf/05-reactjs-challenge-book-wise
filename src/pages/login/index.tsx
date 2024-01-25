import Image from 'next/image'

import banner from '../../../public/banner.png'
import { Container, LoginBox, LoginItem, LoginSection } from './styles'

import googleIcon from '../../../public/logos/google.svg'
import githubIcon from '../../../public/logos/github.svg'
import rocketIcon from '../../../public/logos/rocket.svg'

export default function Login() {
  return (
    <Container>
      <Image src={banner} alt="" />

      <LoginSection>
        <h1>Welcome!</h1>
        <span>Log in or access as a guest.</span>

        <LoginBox>
          <LoginItem>
            <Image src={googleIcon} alt="google logo" />
            Sign In with Google
          </LoginItem>
          <LoginItem>
            <Image src={githubIcon} alt="github logo" /> Sign In with Github
          </LoginItem>
          <LoginItem>
            <Image src={rocketIcon} alt="rocket logo" />
            Access as a Guest
          </LoginItem>
        </LoginBox>
      </LoginSection>
    </Container>
  )
}
