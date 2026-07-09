import React, { createContext, useContext, useReducer } from "react";
import employeesData from "../data/employees";

const EmployeeContext = createContext();

const employeeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return [...state, action.payload];

    case "UPDATE_EMPLOYEE":
      return state.map((employee) =>
        employee.id === action.payload.id ? action.payload : employee
      );

    case "DELETE_EMPLOYEE":
      return state.filter((employee) => employee.id !== action.payload);

    default:
      return state;
  }
};

export const EmployeeProvider = ({ children }) => {
  const [employees, dispatch] = useReducer(employeeReducer, employeesData);

  // Add Employee
  const addEmployee = (employee) => {
    dispatch({
      type: "ADD_EMPLOYEE",
      payload: employee,
    });
  };

  // Update Employee
  const updateEmployee = (employee) => {
    dispatch({
      type: "UPDATE_EMPLOYEE",
      payload: employee,
    });
  };

  // Delete Employee
  const deleteEmployee = (id) => {
    dispatch({
      type: "DELETE_EMPLOYEE",
      payload: id,
    });
  };

  // Get Employee by ID
  const getEmployeeById = (id) => {
    return employees.find((employee) => employee.id === Number(id));
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        addEmployee,
        updateEmployee,
        deleteEmployee,
        getEmployeeById,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

// Custom Hook
export const useEmployees = () => {
  return useContext(EmployeeContext);
};

export default EmployeeContext;