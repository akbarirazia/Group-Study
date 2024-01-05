import React, { useState } from "react"
import MemberList from "../components/MemberList"
import InputBar from "../components/InputBar"
import FullStack from "../components/FullStack"
import DataScience from "../components/DataScience"
import data from "../Buffer/Data.json"
import noResultFound from "../assets/noresultfound.webp"

function User() {
  const [generatedGroups, setGeneratedGroups] = useState([])
  const [generatedGroups_2, setGeneratedGroups_2] = useState([])
  const getData = (groups) => {
    setGeneratedGroups(groups)
  }
  const getData_2 = (groups) => {
    setGeneratedGroups_2(groups)
  }

  return (
    <div className="p-8 lg:flex gap-10  ">
      <div className="w-full lg:w-3/4 lg:order-2 sm:order-1 sm:w-full">
        <InputBar getData={getData} getData_2={getData_2} />
        {generatedGroups.length == 0 && generatedGroups.length == 0 ? (
          <img src={noResultFound} alt="no result found" />
        ) : (
          <>
            <FullStack groupData={generatedGroups} />
            <hr />
            <DataScience groupData_2={generatedGroups_2} />
          </>
        )}
      </div>
      <div className="lg:w-1/4 lg:order-1 mb-8 lg:mb-0 sm:order-2 sm:w-full">
        <MemberList data={data} />
      </div>
    </div>
  )
}

export default User
