import React, { useEffect, useState } from "react";
import { deleteEmployee, listOfEmployees } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import { useConfirm } from "material-ui-confirm";

const ListEmployeeComponent = () => {
  const [employees, setEmployee] = useState([]);
  const confirm = useConfirm();
  const navigator = useNavigate();

  // Fetch employees on component mount
  useEffect(() => {
    getAllEmployees();
  }, []);

  useEffect(() => {
    document.title = "List Of Employees";
  }, []);

  // Function to fetch employees from the API
  function getAllEmployees() {
    listOfEmployees()
      .then((response) => {
        console.log("Employee data fetched successfully:", response.data);
        setEmployee(response.data); // Populate employees state with API data
      })
      .catch((error) => {
        console.error(
          "Error fetching employee data:",
          error.response || error.message
        );
      });
  }

  // Navigate to add new employee page
  function addNewEmployee() {
    navigator("/add-employee");
  }

  // Navigate to update employee page
  function updateEmployee(id) {
    navigator(`/edit-Employee/${id}`);
  }

  // Handle remove employee with confirmation
  // async function removeEmployee(id) {
  //   try {
  //     // Show confirmation dialog
  //     await confirm({
  //       description:
  //         "Are you sure you want to delete this employee? This action cannot be undone.",
  //     });

  //     // Proceed with delete
  //     console.log("Deleting employee with ID:", id);
  //     await deleteEmployee(id);

  //     // Refresh the list after deletion
  //     getAllEmployees();
  //   } catch (error) {
  //     console.log("Deletion cancelled.");
  //   }
  // }

  async function removeEmployee(id) {
    try {
      // Show confirmation dialog
      await confirm({
        description:
          "Are you sure you want to delete this employee? This action cannot be undone.",
      });

      // Proceed with delete
      console.log("Deleting employee with ID:", id);

      try {
        await deleteEmployee(id);
        console.log(`Employee with ID ${id} deleted successfully.`);

        // Refresh the list after deletion
        getAllEmployees();
      } catch (deleteError) {
        console.error("Error deleting employee:", deleteError);

        // Log additional error details
        if (deleteError.response) {
          console.error("Response Data:", deleteError.response.data);
          console.error("Status Code:", deleteError.response.status);
        } else if (deleteError.request) {
          console.error("No response received:", deleteError.request);
        } else {
          console.error("Request Error:", deleteError.message);
        }
      }
    } catch (confirmError) {
      console.log("Deletion cancelled by user.");
    }
  }

  // Render component
  return (
    <div className="container">
      <h2 className="text-center">List Of Employees</h2>
      <button className="btn btn-primary mb-2" onClick={addNewEmployee}>
        Add Employee
      </button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Technology</th>
            <th>Years Of Experience</th>
            <th>Salary</th>
            <th>Location</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Employment Type</th>
            <th>Actions</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.technology}</td>
              <td>{employee.yearsOfExperience}</td>
              <td>{employee.salary}</td>
              <td>{employee.location}</td>
              <td>{employee.email}</td>
              <td>{employee.phoneNumber}</td>
              <td>{employee.employmentType}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => updateEmployee(employee.id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => removeEmployee(employee.id)}
                  style={{ marginBlock: "9px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
