<template>
  <div class="w-150 m-auto">
    <Result status="success" title="离线激活码生成成功" sub-title="点击输入框直接复制内容" />
    <Alert message="旧版：版本号 < 3.9.6 ；新版：版本号 >= 3.9.6 " show-icon />
    <Divider />
    <BasicForm @register="register" />
  </div>
</template>
<script lang="ts" setup>
  import { BasicForm, useForm, FormSchema } from '@/components/Form';
  import { Alert, Divider, Result } from 'ant-design-vue';
  import { ActivateKey } from '@/api/tool/model/finalShellCrackModel';
  import { copyText } from '@/utils/copyTextToClipboard';

  const props = defineProps<{
    activateKeyData: ActivateKey;
  }>();

  console.debug(props.activateKeyData);

  const emit = defineEmits(['redo']);

  const step2Schemas: FormSchema[] = [
    {
      field: 'oldVersionAdvanced',
      component: 'Input',
      label: '旧版本高级版',
      required: false,
      defaultValue: props.activateKeyData.oldVersionAdvanced,
      colProps: {
        span: 20,
      },
      componentProps: {
        onFocus: (e: any) => {
          copyText(e.target.value);
        },
      },
    },
    {
      field: 'oldVersionProfessional',
      component: 'Input',
      label: '旧版本专业版',
      required: false,
      defaultValue: props.activateKeyData.oldVersionProfessional,
      colProps: {
        span: 20,
      },
      componentProps: {
        onFocus: (e: any) => {
          copyText(e.target.value);
        },
      },
    },
    {
      field: 'newVersionAdvanced',
      component: 'Input',
      label: '新版本高级版',
      required: false,
      defaultValue: props.activateKeyData.newVersionAdvanced,
      colProps: {
        span: 20,
      },
      componentProps: {
        onFocus: (e: any) => {
          copyText(e.target.value);
        },
      },
    },
    {
      field: 'newVersionProfessional',
      component: 'Input',
      label: '新版本专业版',
      required: false,
      defaultValue: props.activateKeyData.newVersionProfessional,
      colProps: {
        span: 20,
      },
      componentProps: {
        onFocus: (e: any) => {
          copyText(e.target.value);
          e.target.select();
        },
      },
    },
  ];

  const [register] = useForm({
    labelWidth: 120,
    schemas: step2Schemas,
    actionColOptions: {
      span: 14,
    },
    resetButtonOptions: {
      text: '重置',
    },
    submitButtonOptions: {
      text: '复制新版本专业版激活码',
    },
    resetFunc: customResetFunc,
    submitFunc: customSubmitFunc,
  });

  async function customResetFunc() {
    emit('redo');
  }

  async function customSubmitFunc() {
    copyText(props.activateKeyData.newVersionProfessional);
  }
</script>
