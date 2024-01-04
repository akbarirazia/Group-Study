import React from "react"

function InputBar() {
  return (
    <div className="flex justify-between ">
      <div className="flex gap-4">
        <div>
          <label htmlFor="group-num" className="me-2">
            Number of Groups:
          </label>
          <input
            type="text"
            name="group-num"
            className="w-24 border-2 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="group-mem" className="me-2">
            Members per group:
          </label>
          <input
            type="text"
            name="group-mem"
            className="w-24 border-2 rounded-md"
          />
        </div>
      </div>
      <button className=" bg-purple-900 text-white py-1 px-3 rounded-md float-end">
        Generate
      </button>
    </div>
  )
}

export default InputBar
