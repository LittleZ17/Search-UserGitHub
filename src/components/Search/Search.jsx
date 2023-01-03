import React from 'react'
import { IconButton, Stack, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const Search = () => {

    const handleSubmit = (props) => {

    }

    return (

        <Stack
            direction='row'
            sx={{
                marginTop: '30px',
                width: '80%',
            }}>
            <TextField
                id="outlined-basic"
                label="GitHub User"
                placeholder="Octocat"
                variant="outlined"
                size='small'
                sx={{
                    width: '90%',
                }}></TextField>
            <IconButton
                onClick={handleSubmit}
                sx={{
                    left:'-45px'
                }}>
                <SearchIcon />
            </IconButton>
            
        </Stack>
    )
}

export default Search