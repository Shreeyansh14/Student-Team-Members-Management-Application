import express from 'express';
import multer from 'multer';
import Member from '../models/Member.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

router.post('/', upload.single('image'), async (req, res) => {
  const { name, role, email } = req.body;
  const member = new Member({ name, role, email, image: req.file.filename });
  await member.save();
  res.send(member);
});

router.get('/', async (req, res) => {
  const members = await Member.find();
  res.send(members);
});

router.get('/:id', async (req, res) => {
  const member = await Member.findById(req.params.id);
  res.send(member);
});

export default router;