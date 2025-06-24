import { Nav } from "./styles.ts";
import type { IconType } from "../Icon/action-icons";
import IconButton from "../icon-button";

export type MenuItem = {
    key: string;
    label: string;
    icon: IconType;
}

export type MenuProps = {
    items: MenuItem[];
    selectedKey: MenuItem['key'] | null;
    onMenuItemClick: (key: MenuItem['key']) => void;
}


function SideNav({ items, selectedKey, onMenuItemClick }: MenuProps) {
  return (
    <Nav>
      {items.map(({ key, icon }) => {
        const selected = key === selectedKey;
        return (
          <span>
            <IconButton icon={icon} key={key} variant={selected ? "filled" : 'ghost'} onClick={() => onMenuItemClick(key)}/>
          </span>
        )
      })}
    </Nav>
  )
}

export default SideNav;
