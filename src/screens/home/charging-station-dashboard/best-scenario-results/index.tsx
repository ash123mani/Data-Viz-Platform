import Icon from "../../../../common/components/Icon";
import {
  AlertBox,
  AlertText,
  CollapseHeader,
  Container,
  ExpandedContentContainer,
  StyledIconButton,
  Title
} from "./styles.ts";
import { useState } from "react";

export default function  BestScenarioResults() {
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
      {expand && <div>
        <ExpandedContentContainer>
          <AlertBox>
            <AlertText variant="bodyMd">The best found configuration based on profit is characterized by
                    11 zones (max) with charging stations and 48 total number of poles.</AlertText>
            <Icon icon="options"/>
          </AlertBox>
          <AlertBox>
            <AlertText variant="bodyMd">The best found configuration based on profit is characterized by
                    11 zones (max) with charging stations and 48 total number of poles.</AlertText>
            <Icon icon="options"/>
          </AlertBox>
        </ExpandedContentContainer>
      </div>}

    </Container>
  )
}
