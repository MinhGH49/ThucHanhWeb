//5.

// create a JSON object
const user = {
    id: 2,
    name: 'Minh',
    age: 21
  }

  // convert JSON object to a string
  const data = JSON.stringify(user)

  // write JSON string to a file
  const fs = require('fs');
  fs.writeFile('user.json', data, err => {
    if (err) {
      throw err
    }
    console.log('JSON data is saved.')
  })
