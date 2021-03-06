const express = require(`express`)
const router = express.Router()

const authJWT = require(`../../auth/auth`)

const {getAllPost, putPost, getOnePost, deleteOnePost, getUsersPosts, commentOnPost, getCommentsOnPost} = require(`../../controllers/postsControllers`)

router.get(`/getallpost`, authJWT, getAllPost)
router.post(`/createpost`, authJWT, putPost)
router.get(`/getonepost/:id`, authJWT, getOnePost)
router.delete(`/deleteonepost/:id`, authJWT, deleteOnePost)
router.get(`/myposts/:userID`, authJWT, getUsersPosts )
router.post(`/commentonpost/:postid`, authJWT, commentOnPost )
router.get(`/getcommentsonpost/:postid`, authJWT, getCommentsOnPost)

module.exports = router