import React from "react"

function SingleMember({ name, cohort }) {
  return (
    <div className="flex gap-2">
      <div className="rounded-s-full  border-teal-700">
        {/* first letter */}R
      </div>
      <div>
        <p className="font-bold">Razia Akbari</p>
        <small>Full-Stack Engineering</small>
      </div>
    </div>
  )
}

export default SingleMember
