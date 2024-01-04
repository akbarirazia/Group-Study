import React from "react"
import SingleGroup from "./SingleGroup"

function FullStack() {
  return (
    <div>
      <p className="my-3 flex justify-between">
        <strong className="block">Full Stack Engineering Path</strong>
        <strong className="block">48</strong>
      </p>
      <div className="groups grid lg:grid-cols-4 grid-cols-2 gap-4 flex-wrap">
        <SingleGroup />
        <SingleGroup />
        <SingleGroup />
        <SingleGroup />
      </div>
    </div>
  )
}

export default FullStack
