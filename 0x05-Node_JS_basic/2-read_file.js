const fs = require('fs');

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let length = 0;

  try {
    const fileContents = fs.readFileSync(fileName, 'utf-8');
    const lines = fileContents.toString().split('\n');

    for (let i = 0; i < lines.length; i += 1) {
      if (lines[i]) {
        length += 1;
        const field = lines[i].toString().split(',');

        if (!(field[3] in students)) {
          students[field[3]] = [];
        }
        students[field[3]].push(field[0]);

        if (!(field[3] in fields)) {
          fields[field[3]] = 1;
        } else {
          fields[field[3]] += 1;
        }
      }
    }

    const numberOfStudents = length - 1;
    console.log(`Number of students: ${numberOfStudents}`);

    for (const key in fields) {
      if (key !== 'field') {
        const value = fields[key];
        const studentList = students[key].join(', ');
        console.log(`Number of students in ${key}: ${value}. List: ${studentList}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
