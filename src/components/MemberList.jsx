import React from "react"
import SingleMember from "./SingleMember"

function MemberList({ data }) {
  const members = data.map((member, index) => {
    if (member.name && member.groups) {
      return (
        <SingleMember key={index} name={member.name} cohort={member.groups} />
      )
    }
  })
  const totalMember = data.filter((member) => member.name && member.groups)

  return (
    <div className=" w-1/3 lg:w-60 p-5 bg-slate-200 rounded-lg">
      <div className="flex justify-between">
        <p>Members</p>{" "}
        <p>
          {totalMember.length}
          {/* Total number of members  */}
        </p>
      </div>
      <hr className=" border-gray-400 mt-2" />

      <div className="flex flex-col gap-3 my-3 ">{members}</div>
    </div>
  )
}

export default MemberList
