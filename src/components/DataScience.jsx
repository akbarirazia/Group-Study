import React from "react"
import SingleGroup from "./SingleGroup"

function DataScience() {
  return (
    <div>
      <p className="mb-3 flex justify-between">
        <strong className="block">Data Science Path</strong>
        <strong className="block">48</strong>
      </p>
      <div className="groups grid lg:grid-cols-4 gap-4 grid-cols-2 flex-wrap">
        <SingleGroup />
        <SingleGroup />
        <SingleGroup />
        <SingleGroup />
      </div>
    </div>
  )
}

export default DataScience
