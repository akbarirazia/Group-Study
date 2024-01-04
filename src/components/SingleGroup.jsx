import React from "react"
import Avatar from "./Avatar"

function SingleGroup({ data }) {
  let avatar = null
  let firstNameString = null
  if (data) {
    avatar = data.map((firstName, index) => {
      return <Avatar key={index} firstLetter={firstName.charAt(0)} />
    })

    const names = data.map((fullName) => {
      const firstName = fullName.split(" ")[0]
      return firstName
    })
    firstNameString = names.join(", ")
  }
  return (
    <div className=" px-3 py-10 bg-slate-200 flex flex-col gap-4 mb-4 ">
      <div className="flex justify-center ">{avatar}</div>
      <p className="text-center w-2/3 my-0 mx-auto">{firstNameString}</p>
    </div>
  )
}

export default SingleGroup
