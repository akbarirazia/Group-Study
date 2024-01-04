import React, { useState } from "react"
import MemberList from "../components/MemberList"
import InputBar from "../components/InputBar"
import FullStack from "../components/FullStack"
import DataScience from "../components/DataScience"
import data from "../Buffer/Data.json"

function User() {
  const [generatedGroups, setGeneratedGroups] = useState([])

  const getData = (groups) => {
    console.log(groups)
    setGeneratedGroups(groups)
    console.log(generatedGroups)
  }

  return (
    <div className="p-8 flex gap-10">
      <MemberList data={data} />
      <div className="w-3/4">
        <InputBar getData={getData} />
        <FullStack groupData={generatedGroups} />
        <hr />
        <DataScience />
      </div>
    </div>
  )
}

export default User
