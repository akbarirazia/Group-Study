import React from "react"
import Avatar from "./Avatar"

function SingleMember({ name, cohort }) {
  return (
    <div className="flex gap-2  items-center">
      <Avatar firstLetter={name.charAt(0)} />
      <div className="flex flex-col">
        <p className="font-bold p-0 ">{name}</p>
        <small className="">{cohort}</small>
      </div>
    </div>
  )
}

export default SingleMember
