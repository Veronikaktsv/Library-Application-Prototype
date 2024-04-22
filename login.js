require('dotenv').config();
 const jwt = require("jsonwebtoken");
 const router = express.Router();
 function makeToken(user) {
     return jwt.sign(user, process.env.SECRET, { expiresIn: '12h' });
}
 router.post('/login', (req, res) => {
     if (req.body.username === 'bonobo' && req.body.password === 'secret') {
         res.json({ token: makeToken({ username: req.body.username }) });
     } else {
         res.status(401).end();
     }
 });
 module.exports = router;