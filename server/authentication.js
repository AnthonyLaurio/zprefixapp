const db = require('./db/controllers');

const login = async (req, res) => {
  const user = await db.getUser(req.get('username'));
  console.log(user);
  if(user.length === 0){
    res.status(200).send({message: 'User not found', error: true});
  }else if(user[0].password !== req.get('password')){
    res.status(200).send({message: 'Incorrect password', error: true});
  }else{
    res.cookie('auth', user[0].id, {maxage: 900000});
    res.status(200).send({message: 'Login successful', error: false});
  }
}

const register = async (req, res) => {
  const user = await db.getUser(req.body.username);
  if(user.length === 0){
    const newUser = await db.addUser(req.body);
    res.status(200).send({message: 'Account created', error: false});
  }else{
    res.status(200).send({message: 'Username already exists', error: true});
  }
}

const logout = async (req, res) => {
  res.clearCookie('auth');
  res.status(200).send({message: 'Logout successful', error: false});
}


module.exports = { login, register, logout };