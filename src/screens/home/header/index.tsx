
import Tabs, { type TabItem } from "../../../components/tabs";
import { useCallback, useState } from "react";

const items: TabItem[] =  [
  {
    key: 'sub1',
    label: 'Navigation One',
  },
  {
    key: 'sub2',
    label: 'Navigation One',
  }
]

export default function Header() {
  const [selectedTabKey, setSelectedTabKey] = useState<TabItem['key']>('sub1');

  const handleTabItemClick= useCallback((key: TabItem['key']) => {
    setSelectedTabKey(key);
  }, [selectedTabKey]);

  return (
    <Tabs items={items} onTabItemClick={handleTabItemClick} selectedKey={selectedTabKey}/>
  )
}
