import Image from 'next/image'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'

import banner from '../../../public/banner.png'
import googleIcon from '../../../public/logos/google.svg'
import githubIcon from '../../../public/logos/github.svg'
import rocketIcon from '../../../public/logos/rocket.svg'
import { Container, LoginBox, LoginItem, LoginSection } from './styles'

export default function Login() {
  const router = useRouter()

  async function handleGoogleSignIn() {
    await signIn('google', { callbackUrl: '/home' })
  }

  async function handleGithubSignIn() {
    await signIn('github', { callbackUrl: '/home' })
  }

  async function handleGuestSignIn() {
    await router.push('/home')
  }

  return (
    <Container>
      <Image src={banner} alt="" />

      <LoginSection>
        <h1>Welcome!</h1>
        <span>Log in or access as a guest.</span>

        <LoginBox>
          <LoginItem onClick={handleGoogleSignIn}>
            <Image src={googleIcon} alt="google logo" />
            Sign In with Google
          </LoginItem>
          <LoginItem onClick={handleGithubSignIn}>
            <Image src={githubIcon} alt="github logo" /> Sign In with Github
          </LoginItem>
          <LoginItem onClick={handleGuestSignIn}>
            <Image src={rocketIcon} alt="rocket logo" />
            Access as a Guest
          </LoginItem>
        </LoginBox>
      </LoginSection>
    </Container>
  )
}
