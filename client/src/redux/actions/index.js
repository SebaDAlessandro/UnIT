import axios from 'axios'

export const CreateCandidate = (create) => async () => {

    return await axios.post(`http://localhost:3001/candidates/`, create)

}