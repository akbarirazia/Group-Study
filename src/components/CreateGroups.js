export default function makeStudyGroups(studentCount, groupSize, dept) {
  const students = []
  for (let i = 0; i < studentCount; i++) {
    students.push(dept[i].name)
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
