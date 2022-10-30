import bcryptjs from 'bcryptjs'

export const hashPassword = (password) =>
  bcryptjs.hashSync(password)

export const comparePasword = (password, hash) =>
  bcryptjs.compareSync(password, hash)