import axios from 'axios'

export const GET_ALL_CANDIDATES = 'GET_ALL_CANDIDATES'

export const CreateCandidate = (create) => async () => {

    console.log(create)

    const res = await axios.post(`http://localhost:3001/candidates/`, create)

    console.log(res.data)

}

export const getAllCandidates = () => async dispatch => {
    let json = await axios.get('http://localhost:3001/candidates')
    dispatch({
        type: GET_ALL_CANDIDATES,
        payload: json.data
    })

    console.log(json.data)
}