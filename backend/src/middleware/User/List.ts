/**
  * 
  * Middleware User List
  * Middle to List Users
  * 
  */

export default async (req, res, next) => {
  const { Name, Email, Password, } = req.fields;

  // req.fields.Password = await bcrypt.hash(Password, 3);
  next();
}