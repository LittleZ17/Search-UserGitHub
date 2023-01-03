import urlFetch from '../constant/urlFetch'

const getUserGH = async (user) => {
    const response = await fetch(`${urlFetch}${user}`,{
        method:'GET'
    })
    const payload = response.json()
    return payload
}

export default getUserGH