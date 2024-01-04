import data from "../Buffer/Data.json"
export default function makeStudyGroups(studentCount, groupSize) {
  const students = []
  for (let i = 1; i <= studentCount; i++) {
    if (data[i].name && data[i].groups) {
      students.push(data[i].name)
    }
  }

  const groups = []
  while (students.length > 0) {
    const group = []
    for (let j = 0; j < groupSize && students.length > 0; j++) {
      const randomIndex = Math.floor(Math.random() * students.length)
      const selectedStudent = students.splice(randomIndex, 1)[0]
      group.push(selectedStudent)
    }
    groups.push(group)
  }

  return groups
}
