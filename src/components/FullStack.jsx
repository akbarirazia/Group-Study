import React from "react"
import SingleGroup from "./SingleGroup"

function FullStack() {
  return (
    <div>
      <p className="mb-3">
        <strong>Full Stack Engineering Path</strong>
      </p>
      <div className="groups grid grid-cols-4 gap-2 flex-wrap">
        <SingleGroup />
        <SingleGroup />
        <SingleGroup />
        <SingleGroup />
      </div>
    </div>
  )
}

export default FullStack
