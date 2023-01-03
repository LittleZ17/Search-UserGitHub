import React, { useState } from 'react'
import { IconButton, Stack, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const Search = (props) => {

    const { setInputUser } = props;

    const [valueInput, setValueInput] = useState('')

    const onSearchValueChange = (event) => {
        const inputValue = event.target.value;
        setValueInput(inputValue)
    }

    // console.log('valor inicial', valueInput)

    const handleSubmit = () => {
        setInputUser(valueInput);
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
                value={valueInput}
                onChange={onSearchValueChange}
                sx={{
                    width: '90%',
                }}></TextField>
            <IconButton
                onClick={handleSubmit}
                sx={{
                    left: '-45px'
                }}>
                <SearchIcon />
            </IconButton>

        </Stack>
    )
}

export default Search