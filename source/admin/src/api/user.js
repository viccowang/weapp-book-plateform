import http from '@/utils/http'
/**
 * USER API
 */

/**
 * 用户登录
 *
 * @export
 * @param {any} params
 * @returns
 */
export function commonLogin (params) {
  return http.post(
    '/api/sysUser/adminLogin',
    params
  )
}

/**
 * 获取用户信息
 *
 * @export
 * @param {any} params
 * @returns
 */
export function getUserInfo () {
  return http.get(
    '/api/sysUser/userInfo'
  )
}

/**
 * 修改用户密码
 * @param {*} params
 */
export function editPassword (params) {
  return http.post(
    '/user/password/edit',
    params
  )
}
