const router = require('express').Router();
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient

router.get('/', async (req, res, next) => {
  // try {
  //   const users = await prisma.user.findMany({})
  //   res.json(users)
  // } catch(e) {
  //   next(e)
  // }
});

router.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany({})
    res.json(users)
  } catch(err) {
    console.log(err)
  }
  
})

router.get("/users/:id", async (req, res) => {
  const { id } = req.params
  const user = await prisma.user.findUnique({
    where: {
      id: Number(id)
    }
  })
  res.json(user)
})

// http:// localhost:3000/api/newUser
router.post("/newUser", async (req, res) => {
  try {
    const data = req.body
    const user = await prisma.user.create({
      data: data
    })
    res.json(user)
  } catch(err) {
    console.log(err)
  }
})

router.delete("/deleteUsers", async (req, res) => {
  res.send({ message: "api delete users route is working"})
})

router.patch("/updateUsers", async (req, res) => {
  res.send({ message: "api patch users route is working"})
})

module.exports = router;
