import { defHttp } from '@/utils/http/axios';
import { ActivateKey } from './model/finalShellCrackModel';

enum Api {
  getActivateKey = '/tool/finalShellCrack/getActivateKey',
}

export const getActivateKey = (machineCode: string) => {
  return defHttp.get<ActivateKey>(
    { url: Api.getActivateKey, params: { machineCode } },
    { joinParamsToUrl: true, errorMessageMode: 'modal' },
  );
};
