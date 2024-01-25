import { Binoculars, ChartLineUp, SignIn } from '@phosphor-icons/react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import {
  Button,
  LoginBox,
  NavigationBox,
  NavigationLink,
  MenuContainer,
} from './styles'
import Logo from '../../assets/logos/app.svg'

export function NavigationMenu() {
  const pathname = usePathname()

  return (
    <MenuContainer>
      <Image src={Logo} alt="Book Wise Logo" />

      <NavigationBox>
        <NavigationLink href="/home" active={pathname === '/home'}>
          <ChartLineUp size={24} /> Home
        </NavigationLink>
        <NavigationLink href="/explore" active={pathname === '/explore'}>
          <Binoculars size={24} /> Explore
        </NavigationLink>
      </NavigationBox>

      <LoginBox>
        <Button>
          Login <SignIn />
        </Button>
      </LoginBox>
    </MenuContainer>
  )
}
