import { Card } from "../../../../shared/card";
import Typography from "../../../../common/components/typography";
import Pill, { type PillProps } from "../../../../shared/pill";
import { VariableCategory, VariablesBox } from "./styles.tsx";
import { useCallback, useState } from "react";

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
  const [selectedVariables, setSelectedVariables] = useState<PillProps['pillKey'][]>([]);

  const handleSelectedVariable = useCallback((variable: PillProps['pillKey']) => {
    if (selectedVariables.includes(variable)) {
      const newVariables = selectedVariables.filter((v) => v !== variable);
      setSelectedVariables(newVariables);
    } else {
      setSelectedVariables([...selectedVariables, variable]);
    }
  }, [selectedVariables])

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
                  onClick={handleSelectedVariable}
                  isSelected={selectedVariables.includes(variable)}
                />
              })}
            </VariablesBox>

          </VariableCategory>
        )
      })}
    </Card>
  )
}
