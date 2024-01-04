import React from "react"
import MemberList from "../components/MemberList"
import InputBar from "../components/InputBar"

function Layout() {
  return (
    <div className="p-8 flex gap-10">
      <MemberList />
      <div className="w-full">
        <InputBar />
        <div className="section-1"></div>
        <div className="section-2"></div>
      </div>
    </div>
  )
}

export default Layout
