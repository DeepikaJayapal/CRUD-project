import React,{useState,useEffect} from "react";
import axios from "axios";

const Edit = () => {

    const getEmployees = () => {
        axios.get("http://localhost:4000/employees").then((response) => {
            setEmployeeList(response.data);
        });
    };

    useEffect(() => {
        getEmployees();
    },[]);

    const deleteContact = (id) => {
        axios.delete("http://localhost:4000/delete/${id}").then((response)=>{
            setEmployeeList(employeeList.filter((value)=>{
                return value.id !== id;
            }));
        });
    };

    const updateEmployees = (id) => {
        axios.put("http://localhost:4000/update",{
    
            // name: newName,
            // qualification: newQualification,
            // address: newAddress,
            // role: newRole,
            salary: newSalary,
            id:id
        }).then((response) => {
            setEmployeeList(employeeList.map((value) => {
                return value.id === id ? {
                    id : value.id,
                    name : value.name,
                    qualification : value.qualification,
                    address : value.address,
                    role : value.role,
                    salary : newSalary
                }
                : value;
            }));
        });
    };

    // const[newName,setNewName] = useState(0)
    // const[newQualification,setNewQualification] = useState(0)
    // const[newAddress,setNewAddress] = useState(0)
    // const[newRole,setNewRole] = useState(0)
    const[newSalary,setNewSalary] = useState(0);

    const [employeeList, setEmployeeList] = useState([]);

    return(
        <div>
            <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Qualification</th>
                        <th>Address</th>
                        <th>Role</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeList.map((value,index) => {
                        return (
                            <tr key={value.id}>
                                <th scope="row">{index+1}</th>
                                <td>{value.name}</td>
                                <td>{value.qualification}</td>
                                <td>{value.address}</td>
                                <td>{value.role}</td>
                                <td>{value.salary}</td>
                                <td>
                                    {/* <label>Name</label>
                                    <input type="text" onChange={(e)=>{setNewName(e.target.value);}} />
                                    <label>Qualification</label>
                                    <input type="text" onChange={(e)=>{setNewQualification(e.target.value);}} />
                                    <label>Address</label>
                                    <input type="text" onChange={(e)=>{setNewAddress(e.target.value);}} />
                                    <label>Role</label>
                                    <input type="text" onChange={(e)=>{setNewRole(e.target.value);}} /> */}
                                    <label className="me-2">Salary</label>
                                    <input type="text" onChange={(e)=>{setNewSalary(e.target.value);}} />
                                    <br />
                                    <br />
                                    <button class="btn btn-info  rounded-0 me-2" onClick={()=>updateEmployees(value.id)}>{""}update</button>
                                    <button class="btn btn-danger rounded-0" onClick={()=>deleteContact(value.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Edit;