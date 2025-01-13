import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/employees";

const getHeaders = () => {
  const token = localStorage.getItem("token"); // Get raw token
  return {
    headers: {
      Authorization: `Bearer ${token}`, // Use the raw token
    },
  };
};

export const listOfEmployees = () => axios.get(REST_API_BASE_URL, getHeaders());
export const createEmployee = (employee) => axios.post(REST_API_BASE_URL, employee, getHeaders());
export const getEmployee = (employeeId) => axios.get(`${REST_API_BASE_URL}/${employeeId}`, getHeaders());
export const updateEmployee = (employeeId, employee) =>
  axios.put(`${REST_API_BASE_URL}/${employeeId}`, employee, getHeaders());
export const deleteEmployee = (employeeId) => axios.delete(`${REST_API_BASE_URL}/${employeeId}`, getHeaders());
