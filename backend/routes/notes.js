const express = require("express");
const fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Note");
const User = require("../models/User");

const { body, validationResult } = require("express-validator");
const router = express.Router();
//1 get all the notes
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("some error");
  }
});
//2 post  the notes
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "enter a valid title").isLength({ min: 3 }),
    body("description", "description must be atleast 5 character").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await note.save();
      res.json(req.user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error");
    }
  }
);
//3 update the note
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  try {
    const { title,description,tag } = req.body;
    const  newNote = {};
    if(title) {newNote.title=title};
    if(description) {newNote.description = description};
    if(tag){newNote.tag = tag};
    // find the note to be updated
    let note = await Note.findById(req.params.id);
    if (!note) {
      res.status(404).send("not found");
    }
   
    if (note.user.toString() != req.user.id) {
      return res.status(401).send("not allowed");
    }
  note= await Note.findByIdAndUpdate(req.params.id, {$set:newNote},{new:true})
   res.json({note});
   
  } catch (error) {
    console.error(error.message);
    res.status(500).send("some error");
  }
});

// 4 delete note
router.delete('/deletenote/:id', fetchuser, async (req,res)=> {
  try {
    
    // find the note to be updated
    let note = await Note.findById(req.params.id);
    if (!note) {
      res.status(404).send("not found");
    }
   
    if (note.user.toString() != req.user.id) {
      return res.status(401).send("not allowed");
    }
  note= await Note.findByIdAndDelete(req.params.id)
   res.json({"sucess": "note has been deleted"});
   
  } catch (error) {
    console.error(error);
    res.status(500).send("internal server error");
  }
}) 
module.exports = router;
