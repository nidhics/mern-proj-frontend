import React, { useEffect, useState } from 'react'
import { addStudentData, getStudentsData } from '../services/studentsServices'
const StudentForm = () => {
    const initialData = {
        name: "",
        age: 0
    }
    const [newStuData, setNewStuData] = useState(initialData)
    const [stuData, setStuData] = useState([])
    const [showStuData, setShowStuData] = useState(false)

    useEffect(() => {
        getStudentDataFun()
    }, [])

    const handleStudentData = () => {
        setShowStuData((prev) => !prev)
    }

    const handleSubmit = () => {
        addStudentData(newStuData)
        // getStudentDataFun()
    }

    const handleData = (e) => {
        const { name, value } = e.target
        setNewStuData({ ...newStuData, [name]: value })
    }

    const getStudentDataFun = () => {
        getStudentsData()
            .then((res) => {
                console.log(res.data)
                setStuData(res.data)
            })
            .catch((err) => console.log(err))
    }
    return (
        <div className='container'>
            <h1>StudentForm</h1>
            <div className='row'>
                <div className='col-6'>
                    <div className=' d-flex flex-column align-items-center'>
                        <div>
                            <label className="form-label" htmlFor='stuName'>Name</label>
                            <input
                                className="form-control"
                                type="text"
                                id='stuName'
                                name='name'
                                onChange={handleData} />
                        </div>
                        <div>
                            <label className="form-label" htmlFor='stuAge'>Age</label>
                            <input
                                className="form-control"
                                type="number"
                                id='stuAge'
                                name='age'
                                onChange={handleData} />
                        </div>
                    </div>
                    <button className='btn btn-info m-3' type="button" onClick={handleSubmit}>Submit</button>
                </div>
                <div className='col-6'>
                    <button
                        className='btn btn-info'
                        type='button'
                        onClick={handleStudentData}
                    >
                        {showStuData ? "Hide Data" : "Get Data"}
                    </button>
                    <ol>
                        {showStuData && stuData.map((item, index) => <li key={index}>{item.name}</li>)}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default StudentForm