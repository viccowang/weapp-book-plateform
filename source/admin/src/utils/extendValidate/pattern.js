/**
 * EXTEND PATTERN
 */
const stringNumber = /^[0-9]*$/
const account = /^[a-zA-Z0-9_-]{4,}$/
const cellPhone = /^1[34578]\d{9}$/
const complexPassword = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/
const qq = /^[a-zA-Z0-9_-]{4,16}$/
const isbn = /^9787[0-9]{9,13}$/

export default {
  stringNumber,
  account,
  cellPhone,
  complexPassword,
  qq,
  isbn
}
