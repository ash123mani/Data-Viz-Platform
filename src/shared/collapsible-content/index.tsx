import Icon from "../../common/components/Icon";
import {
  CollapseHeader,
  Container,
  ExpandedContentContainer,
  StyledIconButton,
  Title
} from "./styles.ts";
import { type ReactNode, useState } from "react";

export type CollapsibleContentProps = {
    children: ReactNode;
}

export default function  CollapsibleContent({ children }: CollapsibleContentProps) {
  const [expand, setExpand] = useState(true);

  const handleToggleClick = () => {
    setExpand((prevExpand) => !prevExpand);
  }

  return (
    <Container>
      <CollapseHeader>
        <div>
          <Icon icon="stars"/>
          <Title variant="headingMd">
                        Best Scenario Results
          </Title>
        </div>
        <StyledIconButton icon="chevronDown" onClick={handleToggleClick} isExpanded={expand}/>
      </CollapseHeader>
      {expand &&
        <ExpandedContentContainer>
          {children}
        </ExpandedContentContainer>
      }

    </Container>
  )
}
