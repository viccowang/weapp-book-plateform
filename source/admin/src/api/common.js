import http from '@/utils/http'
/**
 * COMPANY AREA API
 */

/**
 * 办公区/公司列表
 *
 * @export
 * @param {any} params
 * @returns
 */
export function getCompanyAreaList () {
  return http.get(
    '/api/sysUser/getCompany'
  )
}
