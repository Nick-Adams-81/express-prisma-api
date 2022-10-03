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
  } catch (err) {
    console.log(err)
  }

})

router.get("/posts", async (req, res) => {
  try {
    const posts = await prisma.posts.findMany({})
    res.json(posts)
  } catch (err) {
    console.log(err)
  }
})

router.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params
    const user = await prisma.user.findUnique({
      where: {
        id: Number(id)
      }
    })
    res.json(user)
  } catch (err) {
    console.log(err)
  }
})

router.get("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params
    const post = await prisma.posts.findUnique({
      where: {
        id: Number(id)
      }
    })
    res.json(post)
  } catch (err) {
    console.log(err)
  }
})

router.post("/newUser", async (req, res) => {
  try {
    const data = req.body
    const user = await prisma.user.create({
      data: data
    })
    res.json(user)
  } catch (err) {
    console.log(err)
  }
})

router.post("/newPost", async (req, res) => {
  try {
    const data = req.body
    const post = await prisma.posts.create({
      data: data
    })
    res.json(post)
  } catch (err) {
    console.log(err)
  }
})

router.delete("/deleteUser/:id", async (req, res) => {
  try {
    const { id } = req.params
    const deletedUser = await prisma.user.delete({
      where: {
        id: Number(id)
      }
    })
    res.json(deletedUser)
  } catch (err) {
    console.log(err)
  }
})

router.patch("/updateUser/:id", async (req, res) => {
  try {
    const { id } = req.params
    const user = await prisma.user.update({
      where: {
        id: Number(id)
      },
      data: req.body
    })
    res.json(user)
  } catch (err) {
    console.log(err)
  }
})

module.exports = router;
