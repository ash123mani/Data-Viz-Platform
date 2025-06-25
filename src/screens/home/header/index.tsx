
import Tabs, { type TabItem } from "../../../common/components/tabs";
import { useCallback, useState } from "react";
import { useAuth } from "../../../hooks";

const items: TabItem[] =  [
  {
    key: 'sub1',
    label: 'Navigation One',
  },
  {
    key: 'sub2',
    label: 'Navigation One',
  },
  {
    key: 'logout',
    label: 'Logout',
  }
]

export default function Header() {
  const [selectedTabKey, setSelectedTabKey] = useState<TabItem['key']>('sub1');
  const { logout } = useAuth();

  const handleTabItemClick= useCallback(async (key: TabItem['key']) => {
    if (key === 'logout') {
      await logout()
    } else {
      setSelectedTabKey(key);
    }
  }, [selectedTabKey]);

  return (
    <Tabs items={items} onTabItemClick={handleTabItemClick} selectedKey={selectedTabKey}/>
  )
}
