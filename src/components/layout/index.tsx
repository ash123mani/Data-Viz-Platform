import { Outlet } from "react-router";
import { Container, Main } from "./style.tsx";
import SideNav, { type MenuItem } from "../side-nav";
import { useCallback, useState } from "react";

const items: MenuItem[] =  [
  {
    key: 'sub1',
    label: 'Navigation One',
    icon: 'hamburger',
  },
  {
    key: 'sub2',
    label: 'Navigation One',
    icon: 'home',
  }
]


export default function Layout() {
  const [selectedMenuKey, setSelectedMenuKey] = useState<MenuItem['key']>('sub1');

  const handleMenuItemClick= useCallback((key: MenuItem['key']) => {
    setSelectedMenuKey(key)
  }, [])

  return (
    <Container>
      <SideNav items={items} selectedKey={selectedMenuKey} onMenuItemClick={handleMenuItemClick}/>
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
}
