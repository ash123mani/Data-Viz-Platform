import { Container } from "../../../screens/home/header/styles.tsx";
import Button from "../button";
import Typography from "../typography";

export type TabItem = {
    key: string;
    label: string;
}


type TabProps = {
    items: TabItem[];
    onTabItemClick: (key: TabItem['key']) => void;
    selectedKey: string | null;
}

export default function Tabs({ items, onTabItemClick, selectedKey }: TabProps) {
  return (
    <Container>
      {items.map(({ key, label }) => {
        const isSelected = selectedKey === key;
        return (
          <Button
            key={key}
            onClick={() => onTabItemClick(key)}
            variant={isSelected ? 'filled' : 'ghost'}
          >
            <Typography variant="bodyMdTight" as="span">
              {label}
            </Typography>
          </Button>
        )
      })}
    </Container>
  )
}
