const express = require('express')

const app = express()

app.use('/api/contacts', require('./routes/contactsRoutes'));
app.use('/api/friendList' , require('./routes/allFriendList'));

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log('hello i am server and i start my work')
})
