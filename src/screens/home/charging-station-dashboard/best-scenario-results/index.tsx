import Icon from "../../../../common/components/Icon";
import {
  AlertBox,
  AlertText,
} from "./styles.ts";
import CollapsibleContentProps from "../../../../shared/collapsible-content";

export default function  BestScenarioResults() {

  return (
    <CollapsibleContentProps>
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
    </CollapsibleContentProps>
  )
}
