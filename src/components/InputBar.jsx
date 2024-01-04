import React, { useState } from "react"
import makeStudyGroups from "./CreateGroups"

function InputBar({ getData }) {
  const [numberOfStudents, setNumberOfStudents] = useState(81)
  const [groupSize, setGroupSize] = useState(0)

  // const handleChange = (e) => {
  //   setNumberOfStudents(e.target.value)
  // }
  const handleGroupChange = (e) => {
    setGroupSize(e.target.value)
  }

  const handleClick = (e) => {
    const groups = makeStudyGroups(numberOfStudents, groupSize)

    groups.forEach((group, index) => {
      console.log(`Group ${index + 1}:
      
       ${group.join(", ")}`)
    })
    getData(groups)
    console.log(groups)
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
