import React from "react"

function Avatar({ firstLetter }) {
  return (
    <div className="rounded-full h-12 flex justify-center bg-teal-800 text-white items-center w-12 ms-1">
      {firstLetter}
    </div>
  )
}

export default Avatar
