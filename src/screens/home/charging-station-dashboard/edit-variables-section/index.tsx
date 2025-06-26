import { Card } from "../../../../shared/card";
import Typography from "../../../../common/components/typography";
import Pill from "../../../../shared/pill";
import { VariableCategory, VariablesBox } from "./styles.tsx";
import { useCallback, useRef, useState } from "react";
import CollapsibleContent from "../../../../shared/collapsible-content";

const variables = {
  categories: [
    {
      name: "Variable Catrgory 1",
      variables: [
        "Carbon 1",
        "Co2 Distribution",
        "Fleet sizing"
      ]
    },
    {
      name: "Variable Catrgory 2",
      variables: [
        "Parking Rate",
        "Border Rate",
        "Request rate"
      ]
    }
  ]
}

export default function  EditVariablesSection() {
  const [selectedVariables, setSelectedVariables] = useState<(number | string)[]>([]);
  const [showMessage, setShowMessage] = useState(false);
  const timerRef = useRef<number | null>(null);

  const handleSelectedVariable = useCallback((variable: number | string) => {
    if (selectedVariables.includes(variable)) {
      const newVariables = selectedVariables.filter((v) => v !== variable);
      setSelectedVariables(newVariables);
    } else {
      setSelectedVariables([...selectedVariables, variable]);
    }
  }, [selectedVariables])

  const handleMouseEnter = useCallback(() => {
    timerRef.current = window.setTimeout(() => {
      setShowMessage(true);
    }, 3000); // 3 seconds
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setShowMessage(false); // Hide message if mouse leaves early
  }, [])

  return (
    <Card>
      {variables.categories.map(({ name, variables }) => {
        return (
          <VariableCategory>
            <Typography variant="bodyMdTight" as="div">{name}</Typography>
            <VariablesBox>
              {variables.map((variable) => {
                return <Pill
                  label={variable}
                  pillKey={variable}
                  onPillClick={handleSelectedVariable}
                  isSelected={selectedVariables.includes(variable)}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              })}
            </VariablesBox>

          </VariableCategory>
        )
      })}
      {showMessage && <Card>
        <CollapsibleContent>{null}</CollapsibleContent>
      </Card>}
    </Card>
  )
}
