import http from '@/utils/http'
/**
 * USER MANAGEMENT API
 */

/**
 * 读者列表
 *
 * @export
 * @param {any} params
 * @returns
 */
export function getReaderList (params) {
  return http.post(
    '/api/sysUser/userList',
    params
  )
}

/**
 * 删除读者
 *
 * @export
 * @param {any} params
 * @returns
 */
export function deleteReader (params) {
  return http.post(
    '/api/sysUser/delete',
    params
  )
}

/**
 * 编辑读者
 *
 * @export
 * @param {any} params
 * @returns
 */
export function editReader (params) {
  return http.post(
    '/api/sysUser/edit',
    params
  )
}
