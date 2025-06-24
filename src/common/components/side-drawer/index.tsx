import React from "react";
import { Content, Drawer, Header, Overlay } from "./styles.ts";
import IconButton from "../icon-button";
import Typography from "../typography";

export type SideDrawerProps =  {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    width?: string;
    position?: 'left' | 'right';
}

const SideDrawer = ({
  isOpen,
  onClose,
  title = 'Drawer',
  children,
  width,
  position = 'right',
}: SideDrawerProps) => {
  return (
    <>
      <Overlay isOpen={isOpen} onClick={onClose} />
      <Drawer isOpen={isOpen} width={width}  position={position}>
        <Header>
          <Typography variant="subheading">{title}</Typography>
          <IconButton onClick={onClose} icon="close" variant="ghost" iconProps={{ width: '16px', height: '16px' }} />
        </Header>
        <Content>{children}</Content>
      </Drawer>
    </>
  );
};
export default SideDrawer;

