const express = require('express');
const studentRouter = express.Router()
const {
  getAllStudentsRecords,
  getAStudentRecord,
  createAStudentRecord,
  updateAStudentRecord,
  deleteAStudentRecord
} = require("./controller.js")

studentRouter.get("/students",  getAllStudentsRecords)
studentRouter.get("/student/:id", getAStudentRecord)
studentRouter.post("/student/create-record", createAStudentRecord)
studentRouter.patch("/student/update-record/:id", updateAStudentRecord)
studentRouter.delete("/student/delete-record/:id", deleteAStudentRecord)

module.exports = {studentRouter}