import axios from 'axios'

const API_URL = 'https://assoback.onrender.com/complaints'

// Create new complaint
const createComplaint = async (complaintData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, complaintData, config)

  return response.data
}

// Get user complaints
const getComplaints = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user complaint
const deleteComplaint = async (complaintId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + complaintId, config)

  return response.data
}

const complaintService = {
  createComplaint,
  getComplaints,
  deleteComplaint,
}

export default complaintService
