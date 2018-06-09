import http from '@/utils/http'
/**
 * BOOKS MANAGEMENT API
 */

/**
 * 书籍列表
 *
 * @export
 * @param {any} params
 * @returns
 */
export function getBookList (params) {
  return http.post(
    '/api/sysBooks/bookList',
    params
  )
}

/**
 * 删除书籍
 *
 * @export
 * @param {any} params
 * @returns
 */
export function deleteBook (bookIds) {
  return http.post(
    '/api/sysBooks/delete',
    bookIds
  )
}
