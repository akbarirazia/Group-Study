import React, { useState } from "react"
import makeStudyGroups from "./CreateGroups"
import data from "../Buffer/Data.json"

function InputBar({ getData, getData_2 }) {
  const [numberOfStudents, setNumberOfStudents] = useState(81)
  const [groupSize, setGroupSize] = useState(0)

  // const handleChange = (e) => {
  //   setNumberOfStudents(e.target.value)
  // }
  const fullStack = []
  data.map((data) => {
    if (data.groups == "Full Stack Development") {
      fullStack.push(data)
    }
  })

  const dataScience = []
  data.map((data) => {
    if (data.groups == "Data Science") {
      dataScience.push(data)
    }
  })

  const handleGroupChange = (e) => {
    setGroupSize(e.target.value)
  }

  const handleClick = (e) => {
    const fullStackGroups = makeStudyGroups(
      fullStack.length,
      groupSize,
      fullStack
    )
    const dataScienceGroups = makeStudyGroups(
      dataScience.length,
      groupSize,
      dataScience
    )
    getData(fullStackGroups)
    getData_2(dataScienceGroups)
    // const fullStackGroups = makeStudyGroups(
    //   numberOfStudents,
    //   groupSize,
    //   fullStack
    // )
    console.log()
    console.log(typeof data)
    // console.log(typeof dataScience)
    // console.log(fullStackGroups)
  }

  return (
    <div className="flex justify-between ">
      <div className="flex gap-4">
        <div>
          <label htmlFor="group-num" className="me-2">
            Number of Students:
          </label>
          <input
            type="text"
            name="group-num"
            className="w-24 border-2 rounded-md px-2"
            // onChange={handleChange}
            value={81}
            disabled
          />
        </div>
        <div>
          <label htmlFor="group-mem" className="me-2">
            Members per group:
          </label>
          <input
            type="text"
            name="group-mem"
            className="w-24 border-2 rounded-md px-2"
            onChange={handleGroupChange}
          />
        </div>
      </div>
      <button
        className=" bg-purple-900 text-white py-1 px-3 rounded-md float-end"
        onClick={handleClick}
      >
        Generate
      </button>
    </div>
  )
}

export default InputBar
