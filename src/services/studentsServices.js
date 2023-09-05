import axios from "axios"
import { studentsURL } from "../share/constant"

export const getStudentsData = () => {
    return axios.get(studentsURL)
}

export const addStudentData = (data) => {
    console.log(data)
    return axios.post(`${studentsURL}`, data)
}