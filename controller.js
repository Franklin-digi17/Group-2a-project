const StudentRecords = require('./studentData.js')

const getAllStudentsRecords = (req, res) => {
  try {
  return res.status(200).json({message: "students records", StudentRecords})
  }catch(e){
    return res.status(500).json({message: "Failed to get All students Records"})
  }
}

const getAStudentRecord = (req, res) => {
  return res.status(200).json({message: "get a student records"})
}

const createAStudentRecord = (req, res) => {
  return res.status(201).json({message: "create a student record"})
}

const updateAStudentRecord = (req, res) => {
  return res.status(200).json({message: "update a student records"})
}

const deleteAStudentRecord = (req, res) => {
  return res.status(200).json({message: "delete a student records"})
}

module.exports = {
  getAllStudentsRecords,
  getAStudentRecord,
  createAStudentRecord,
  updateAStudentRecord,
  deleteAStudentRecord
}