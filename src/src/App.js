import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { pink, purple } from '@mui/material/colors'
import Layout from './Components/Layout'
import BoxPaper from './pages/BoxPaper'
import SignIn from './pages/SignIn'
import LogIn from './pages/LogIn'


const theme=createTheme({
  palette:{
    primary:{
      main:'#00838f'
    },
    secondary:pink
  },
  typography:{
    fontFamily:'Inspiration',
    fontWeightBold:700,
    fontWeightRegular:600,
    fontWeightMedium:500,
    fontWeightLight:400
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Layout>
      <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/paper">
          <BoxPaper></BoxPaper>
        </Route>
        <Route path="/signin"><SignIn></SignIn></Route>
        <Route path="/login"><LogIn></LogIn></Route>
      </Switch>
      </Layout>
    </Router>
    </ThemeProvider>
  );
}

export default App;
