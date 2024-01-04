import React from "react"
import MemberList from "../components/MemberList"
import InputBar from "../components/InputBar"
import FullStack from "../components/FullStack"
import DataScience from "../components/DataScience"

function Layout() {
  return (
    <div className="p-8 flex gap-10">
      <MemberList />
      <div className="w-3/4">
        <InputBar />
        <FullStack />
        <hr />
        <DataScience />
      </div>
    </div>
  )
}

export default Layout
