
import { Container } from '@mui/material'
import { useEffect, useState } from 'react'
import Search from './components/Search/Search'
import getUserGH from './service/user'

function App() {
  const [inputUser, setInputUser] = useState('octocat');
  const [userState, setUserState] = useState('inputUser');
 
  // console.log('despues del click', inputUser)

  const getUser = async (user) => {
    const userResponse = await getUserGH(user)
    console.log(userResponse);
  }

  useEffect(()=>{
    getUser(inputUser)
  }, [])


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
