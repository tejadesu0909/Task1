import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/employees";

const getHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };
};

export const listOfEmployees = async () => {
  try {
    return await axios.get(REST_API_BASE_URL, getHeaders());
  } catch (error) {
    console.error("Error fetching employees:", error);
    throw error; // Ensure promise rejection is caught properly
  }
};

export const createEmployee = async (employee) => {
  try {
    return await axios.post(REST_API_BASE_URL, employee, getHeaders());
  } catch (error) {
    console.error("Error creating employee:", error);
    throw error;
  }
};

export const getEmployee = async (employeeId) => {
  try {
    return await axios.get(`${REST_API_BASE_URL}/${employeeId}`, getHeaders());
  } catch (error) {
    console.error("Error fetching employee details:", error);
    throw error;
  }
};

export const updateEmployee = async (employeeId, updatedFields) => {
  try {
    return await axios.patch(`${REST_API_BASE_URL}/${employeeId}`, updatedFields, getHeaders());
  } catch (error) {
    console.error("Error updating employee:", error);
    throw error;
  }
};

export const deleteEmployee = async (employeeId) => {
  try {
    return await axios.delete(`${REST_API_BASE_URL}/${employeeId}`, getHeaders());
  } catch (error) {
    console.error("Error deleting employee:", error);
    throw error;
  }
};
