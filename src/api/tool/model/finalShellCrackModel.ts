export interface ActivateKey {
  /** 旧版本高级版激活码（版本号 < 3.9.6 (旧版)） */
  oldVersionAdvanced: string;
  /** 旧版本专业版激活码（版本号 < 3.9.6 (旧版)） */
  oldVersionProfessional: string;

  /** 新版本高级版激活码（版本号 >= 3.9.6 (新版)） */
  newVersionAdvanced: string;
  /** 新版本专业版激活码（版本号 >= 3.9.6 (新版)） */
  newVersionProfessional: string;
}
