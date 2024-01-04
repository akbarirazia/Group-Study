import React from "react"
import SingleMember from "./SingleMember"

function MemberList({ totalMember }) {
  const member = Array.from({ length: 10 }, (_, index) => (
    <SingleMember key={index} />
  ))
  return (
    <div className=" w-1/3 lg:w-60 p-5 bg-slate-200 rounded-lg">
      <div className="flex justify-between">
        <p>Members</p>{" "}
        <p>
          100
          {/* Total number of members  */}
        </p>
      </div>
      <hr className=" border-gray-400 mt-2" />

      <div className="flex flex-col gap-3 my-3 ">{member}</div>
    </div>
  )
}

export default MemberList
