/**
 * @description: 请求用户登录接口的请求内容
 */
export interface LoginParams {
  username: string;
  password: string;
  rememberMe?: boolean;
}

/**
 * @description: 请求获取角色接口的响应结果（roleList 其中的一个对象内容）
 */
export interface RoleInfo {
  name: string;
  code: string;
  id: number;
}

/**
 * @description: 请求用户登录接口的响应结果
 */
export interface LoginResultModel {
  userId: number;
  token: string;
  // roleList: RoleInfo[];
}

/**
 * @description: 请求获取用户信息接口的响应结果
 */
export interface GetUserInfoModel {
  roleList: RoleInfo[];
  // 用户id
  id: number;
  // 用户名
  username: string;
  // 昵称
  nick: string;
  // 头像
  avatar: string;
  // 介绍
  note?: string;
}
