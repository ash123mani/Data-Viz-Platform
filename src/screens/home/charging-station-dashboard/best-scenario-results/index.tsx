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
  const [expand, setExpand] = useState(false);

  const handleToggleClick = () => {
    setExpand((prevExpand) => !prevExpand);
  }

  return (
    <Container>
      <CollapseHeader>
        <div>
          <Icon icon="stars"/>
          <Title style={{   fontFamily: 'Roobert TRIAL',
            fontWeight: 600,
            fontSize: '24px',
            lineHeight: '150%',
            letterSpacing: '0%', }}>
                  Best Scenario Results
          </Title>
        </div>
        <StyledIconButton icon="chevronDown" onClick={handleToggleClick} isExpanded={expand}/>
      </CollapseHeader>
      {expand && <div>
        <ExpandedContentContainer>
          <AlertBox>
            <AlertText>The best found configuration based on profit is characterized by
                    11 zones (max) with charging stations and 48 total number of poles.</AlertText>
            <Icon icon="options"/>
          </AlertBox>
          <AlertBox>
            <AlertText>The best found configuration based on profit is characterized by
                    11 zones (max) with charging stations and 48 total number of poles.</AlertText>
            <Icon icon="options"/>
          </AlertBox>
        </ExpandedContentContainer>
      </div>}

    </Container>
  )
}
