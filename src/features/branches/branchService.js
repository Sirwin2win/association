import axios from 'axios'

const API_URL = 'https://assoback.onrender.com/branches'

// Create new branch
const createBranch = async (branchData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, branchData, config)

  return response.data
}

// Get user branches
const getBranches = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user branch
const deleteBranch = async (branchId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + branchId, config)

  return response.data
}

const branchService = {
  createBranch,
  getBranches,
  deleteBranch,
}

export default branchService
