import axios from 'axios'

const instance = axios.create({
  baseURL: 'localhost:/3002'
})

export default instance
