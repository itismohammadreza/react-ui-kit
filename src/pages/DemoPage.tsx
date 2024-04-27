import { useState } from "react";
import { Button } from "@components/Button";
import { ThemeProvider } from "@styles-engine/Theme";
import { CssBaseline } from "@styles-engine/CssBaseline";
import { Ripple } from "@components/Ripple";
import { Input } from "@components/Input";
import { FormHandler } from "@forms-engine/FormHandler";
import { DefaultTheme, SafeAny } from "@models/data.model";
import { Radio } from "@components/Radio";
import { RadioGroup } from "@components/RadioGroup";

export const DemoPage = () => {
  const [defaultTheme, setDefaultTheme] = useState<DefaultTheme>({
    colors: {
      primaryBlue: 'rgb(25, 118, 210)'
    }
  })

  const changeTheme = () => {
    const newTheme = {
      colors: {
        primaryBlue: 'red'
      }
    }
    setDefaultTheme(prev => ({...prev, ...newTheme}))
  };

  const onSubmit = (data: SafeAny) => {
    console.log(data);
  }

  return (
      <>
        <Ripple>
          <div style={{width: '200px', height: '200px', background: 'cyan', display: 'grid', placeItems: 'center'}}>
            Ripple Box
          </div>
        </Ripple>
        <ThemeProvider theme={defaultTheme}>
          <>
            <CssBaseline/>
            <h2>Demo Page</h2>
            <Button onClick={() => changeTheme()}>Text</Button>
            <FormHandler formId="sample-form" mode="onChange" onSubmit={onSubmit}>
              <>
                <h3>In Form</h3>
                <Input
                    label="label"
                    name="firstName"
                    validation={{required: 'is required', minLength: {value: 3, message: 'min length'}}}/>

                <RadioGroup
                    options={[{label: 'o1', value: 'o1'}, {label: 'o2', value: 'o2'}]}
                    name={"lastName"}
                    defaultValue={"o2"}
                    validation={{required: 'is required'}}/>
                <Button type="submit">Submit</Button>
              </>
            </FormHandler>
            <h3>Out Form</h3>
            <Input label="label" defaultValue={"asdasddd"}/>
            <Radio name={"x1"}/>
            <Radio name={"x1"}/>
            <Radio name={"x1"}/>
          </>
        </ThemeProvider>
      </>
  )
}
