import React from "react"

function SingleMember({ name, cohort }) {
  return (
    <div className="flex gap-2 justify-between items-center">
      <div className="rounded-full h-12 flex justify-center bg-teal-800 text-white items-center w-12 ms-1">
        {/* first letter */}R
      </div>
      <div className=" flex flex-col">
        <p className="font-bold p-0">Razia Akbari</p>
        <small className="">Full-Stack Engineering</small>
      </div>
    </div>
  )
}

export default SingleMember
