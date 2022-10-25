const express = require('express')
const app = express()
const cors=require('cors');
const port = 3000
app.use(express.static('images'))
var bodyparser = require('body-parser')
app.use(bodyparser.json());
const users=[
    {
        "id":1,
        "login":"user1",
        "password":"pass"
    },
    {
        "id":2,
        "login":"user2",
        "password":"pass"
    }
]
 const data=[{
    "id":1,
    "name":"A4",
    "model":"audi",
    "img":"http://localhost:3000/audiA4.jpeg",
    "prix":"80",
    "description":"tesssssssssssssst",
    "userId":1
 },
 {
    "id":2,
    "name":"gt",
    "model":"porshe",
    "img":"http://localhost:3000/poorsheGt.jpeg",
    "prix":"200",
    "description":"tesssssssssssssst",
    "userId":2
 },
 {
    "id":3,
    "name":"s63",
    "model":"mercedes",
    "img":"http://localhost:3000/mercedesS63.jpg",
    "prix":"180",
    "description":"tesssssssssssssst",
    "userId":1
 },
 {
    "id":4,
    "name":"cheron",
    "model":"bugati",
    "img":"http://localhost:3000/bugatiCheron.jpg",
    "prix":"1000",
    "description":"tesssssssssssssst",
    "userId":1
 }
];

const i = data.length +1;
app.use(cors({
    origin:"*",
    Credential:true,
}));
app.post('/login', (req, res) => {
    let find =users.filter((x)=>x.login == req.body.login && x.password == req.body.password);
    if(find != null){
        return res.send(find[0]);
    }else{
        return res.send().status(400)
    }
  })

  app.post('/addOffer', (req, res) => {
    this.data.push(req.body)
  })
app.get('/', (req, res) => {
  res.send(data)
})
app.get('/:id', (req, res) => {
    let find =data.filter((x)=>x.id == req.params.id)
    return res.send(find[0]);
})


app.get('/myOffer/:id', (req, res) => {
    let find =data.filter((x)=>x.user_id == req.params.id)
    return res.send(find);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})