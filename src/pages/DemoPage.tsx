import {useState} from "react";
import {Button} from "@components/Button";
import {ThemeProvider} from "@theme/Theme";
import {CssBaseline} from "@theme/CssBaseline";
import {RippleWrapper} from "@components/RippleWrapper";

export const DemoPage = () => {
  const [defaultTheme, setDefaultTheme] = useState({
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

  return (
      <>
        <CssBaseline/>
        <RippleWrapper>
          <div style={{width: '200px', height: '200px', background: 'cyan', display: 'grid', placeItems: 'center'}}>
            Ripple Box
          </div>
        </RippleWrapper>
        <ThemeProvider theme={defaultTheme}>
          <h2>Demo Page</h2>
          <Button onClick={() => changeTheme()}>Text</Button>
        </ThemeProvider>
      </>
  )
}
