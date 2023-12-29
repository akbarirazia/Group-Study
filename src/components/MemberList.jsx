import React from "react"
import SingleMember from "./SingleMember"

function MemberList({ totalMember }) {
  const member = Array.from({ length: 5 }, (_, index) => (
    <SingleMember key={index} />
  ))
  return (
    <div className=" w-36">
      <div className="flex justify-between">
        <p>Members</p>{" "}
        <p>
          100
          {/* Total number of members  */}
        </p>
      </div>
      <div>{member}</div>
    </div>
  )
}

export default MemberList
