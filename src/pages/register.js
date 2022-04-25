import React, { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Register = () => {

    const addEmployee = () => {
        axios.post("http://localhost:4000/create", {
            name: name,
            qualification: qualification,
            address: address,
            role: role,
            salary: salary
        }).then(() => {setEmployeeList([...employeeList,{
            name:name,
            qualification:qualification,
            address:address,
            role:role,
            salary:salary
        }])});
    };

    const getEmployees = () => {
        axios.get("http://localhost:4000/employees").then((response) => {
            setEmployeeList(response.data);
        });
    };

    useEffect(() => {
        getEmployees();
    },[]);

    const [name, setName] = useState("") ;
    const [qualification, setQualification] = useState("");
    const [address, setAddress] = useState("");
    const [role, setRole] = useState("");
    const [salary, setSalary] = useState(0);

    const [employeeList, setEmployeeList] = useState([]);

    return (
        <div >
            <div className="m-3 row">
                <label className="col-form-label col-sm-3 fs-5">Name</label>
                <div className="col-sm-9">
                    <input type="text" className="form-control rounded-0 fs-5" placeholder="Enter the Name" name="name" onChange={(e) => setName(e.target.value)} />
                </div>
            </div>
            <div className="m-3 row">
                <label className="col-form-label col-sm-3 fs-5">Qualification</label>
                <div className="col-sm-9">
                    <input type="text" className="form-control rounded-0 fs-5" placeholder="Enter the qualification" name="qualification" onChange={(e) => setQualification(e.target.value)} />
                </div>
            </div>
            <div className="m-3 row">
                <label className="col-form-label col-sm-3 fs-5">Address</label>
                <div className="col-sm-9">
                    <input type="text" className="form-control rounded-0 fs-5" placeholder="Enter the address" name="address" onChange={(e) => setAddress(e.target.value)} />
                </div>
            </div>
            <div className="m-3 row">
                <label className="col-form-label col-sm-3 fs-5">Role</label>
                <div className="col-sm-9">
                    <input type="text" className="form-control rounded-0 fs-5" placeholder="Enter the Role" name="role" onChange={(e) => setRole(e.target.value)} />
                </div>
            </div>
            <div className="m-3 row">
                <label className="col-form-label col-sm-3 fs-5">Salary</label>
                <div className="col-sm-9">
                    <input type="text" className="form-control rounded-0 fs-5" placeholder="Enter the salary" name="salary" onChange={(e) => setSalary(e.target.value)} />
                </div>
            </div>
            <br />
            <button class="btn btn-info rounded-0 fs-5 " onClick={addEmployee}>Add Employees</button>
            <br />
            <br />
            <NavLink to="/edit">
            <button class="btn btn-info rounded-0 fs-5" onClick={getEmployees}>Show Employee</button>
            </NavLink>
           
        </div>
    )
}
export default Register;