import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline, StyledEngineProvider } from '@mui/material'

// routing
import Routes from 'routes'

// defaultTheme
import themes from 'themes'

// project imports
import NavigationScroll from 'layout/NavigationScroll'
import { useNavigate } from 'react-router'

// ==============================|| APP ||============================== //

const App = () => {
  const customization = useSelector((state) => state.customization)
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const navigate = useNavigate()
  useEffect(() => {
    if (!isLoggedIn) navigate('/login')
    return () => {}
  }, [])
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
