import axios from 'axios'

const API_URL = 'https://assoback.onrender.com/api/minute'

// Create new complaint
const createMinute = async (minuteData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, minuteData, config)

  return response.data
}

// Get user minutes
const getMinutes = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user minute
const deleteMinute = async (minuteId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + minuteId, config)

  return response.data
}

const minuteService = {
  createMinute,
  getMinutes,
  deleteMinute,
}

export default minuteService
