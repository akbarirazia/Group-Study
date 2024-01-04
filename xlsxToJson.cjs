const XLSX = require("xlsx")
const fs = require("fs")

// Specify the path to your Excel file
const excelFilePath = "./public/Data/Members.xlsx"

// Read the Excel file
const workbook = XLSX.readFile(excelFilePath)

// Choose the sheet you want to convert to JSON (assuming it's the first sheet)
const sheetName = workbook.SheetNames[0]
const sheet = workbook.Sheets[sheetName]

// Convert the sheet to JSON
const jsonData = XLSX.utils.sheet_to_json(sheet)

// Write the JSON data to a file
const jsonFilePath = "./src/Buffer/Data.json"

fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2))

console.log(`Conversion completed. JSON data saved to ${jsonFilePath}`)
