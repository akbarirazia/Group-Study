import React from "react"
import Avatar from "./Avatar"

function SingleGroup() {
  return (
    <div className=" px-3 py-10 bg-slate-200 flex flex-col gap-4 mb-4 ">
      <div className="flex justify-center ">
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
      </div>
      <p className="text-center w-2/3 my-0 mx-auto">
        Razia, Muneera, Mahboba, Banin
      </p>
    </div>
  )
}

export default SingleGroup
