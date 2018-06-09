import http from '@/utils/http'
/**
 * BORROWING MANAGEMENT API
 */

/**
 * 按书籍查询的借阅列表
 *
 * @export
 * @param {any} params
 * @returns
 */
export function getBorrowBookQueryList (params) {
  return http.post(
    '/api/sysBooks/bookBorrowList',
    params
  )
}

/**
 * 按用户查询的借阅列表
 *
 * @export
 * @param {any} params
 * @returns
 */
export function getBorrowUserQueryList (params) {
  return http.post(
    '/api/sysBooks/userBorrowList',
    params
  )
}
