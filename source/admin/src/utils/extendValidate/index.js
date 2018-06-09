import regPattern from './pattern'
/**
 * 针对ELEMENT UI 基础的验证规则 扩展项目常用验证内容
 * Author: Vicco Wang
 * Date: 2018/05/16
 */

/**
 * Validate normal string number
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
const strNumber = (rule, value, callback) => {
  if (value) {
    const errors = []
    if (!regPattern.stringNumber.test(Number(value))) {
      errors.push(new Error('只能输入数字'))
      callback(errors)
    } else {
      callback()
    }
  } else {
    callback()
  }
}

/**
 * Validate normal account
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
const account = (rule, value, callback) => {
  if (value) {
    const errors = []
    if (!regPattern.account.test(value)) {
      errors.push(new Error('大于4位的字母数字或下划线'))
      callback(errors)
    } else {
      callback()
    }
  } else {
    callback()
  }
}

/**
 * Validate cellPhone
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
const cellPhone = (rule, value, callback) => {
  if (value) {
    const errors = []
    if (!regPattern.cellPhone.test(value)) {
      errors.push(new Error('手机号填写有误'))
      callback(errors)
    } else {
      callback()
    }
  } else {
    callback()
  }
}

/**
 * Validate complex password
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
const complexPassword = (rule, value, callback) => {
  if (value) {
    const errors = []
    if (!regPattern.complexPassword.test(value)) {
      errors.push(new Error('%s至少6位且包含大写,小写数字和特殊字符'))
      callback(errors)
    } else {
      callback()
    }
  } else {
    callback()
  }
}

/**
 * Validate QQ
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
const tencentQQ = (rule, value, callback) => {
  if (value) {
    const errors = []
    if (!regPattern.qq.test(value)) {
      errors.push(new Error('必须符合字母数字下划线规则'))
      callback(errors)
    } else {
      callback()
    }
  } else {
    callback()
  }
}

/**
 * ISBN
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
const isbn = (rule, value, callback) => {
  if (value) {
    const errors = []
    if (!regPattern.isbn.test(value)) {
      errors.push(new Error('ISBN必须为9位或13位9787的数字'))
      callback(errors)
    } else {
      callback()
    }
  } else {
    callback()
  }
}

export default {
  strNumber,
  account,
  cellPhone,
  complexPassword,
  tencentQQ,
  isbn
}
