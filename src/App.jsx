
import { Container } from '@mui/material'
import { useState } from 'react'
import Search from './components/Search/Search'

function App() {

  const [userState, setUserState] = useState('octocat');
  const [inputUser, setInputUser] = useState(userState);
  // console.log('despues del click', inputUser)


  return (
    <Container
      sx={{
        background: 'whitesmoke',
        width: '80vw',
        height: '500px',
        borderRadius: '16px',
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
      <Search inputUser={inputUser} setInputUser={setInputUser} />
    </Container>
  )
}

export default App
