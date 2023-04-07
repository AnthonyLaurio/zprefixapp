const db = require('./db/controllers');

const login = async (req, res) => {
  const user = await db.getUser(req.get('username'));
  if(user.length === 0){
    res.status(200).send({message: 'User not found', error: true});
  }else if(user[0].password !== req.get('password')){
    res.status(200).send({message: 'Incorrect password', error: true});
  }else{
    console.log(`Logged in: ${user[0].username}`);
    res.cookie('auth', user[0].id, {maxage: 900000, secure: true, sameSite: 'none'});
    res.status(200).send({userId: user[0].id, auth: true});
  }
}

const register = async (req, res) => {
  const user = await db.getUser(req.body.username);
  if(user.length === 0){
    const newUser = await db.addUser(req.body);
    console.log(`Created user account: ${req.body.username}`);
    res.status(200).send({message: 'Account created', error: false});
  }else{
    res.status(200).send({message: 'Username already exists', error: true});
  }
}

const logout = async (req, res) => {
  console.log(`Logged out: ${req.cookies.auth}`);
  res.clearCookie('auth', {secure: true, sameSite: 'none'});
  res.status(200).send({userId: null, auth: false});
}

const checkAuth = async (req, res) => {
  if(req.cookies.auth !== undefined){
    console.log(`Verified auth: ${req.cookies.auth}`);
    res.status(200).send({userId: req.cookies.auth, auth: true});
  }else{
    res.status(200).send({userId: null, auth: false});
  }
}

module.exports = { login, register, logout, checkAuth };