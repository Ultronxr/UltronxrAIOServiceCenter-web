<template>
  <div class="w-120 m-auto">
    <Alert
      message="获取机器码的方式：在激活对话框中填写任意“用户名”、“密码”；点击“离线激活...”按钮，复制生成的机器码。"
      show-icon
    />
    <Divider />
    <BasicForm @register="register" />
  </div>
</template>
<script lang="ts" setup>
  import { BasicForm, useForm, FormSchema } from '@/components/Form';
  import { Alert, Divider } from 'ant-design-vue';
  import { getActivateKey } from '@/api/tool/finalShellCrack';
  import { useMessage } from '@/hooks/web/useMessage';

  const { createMessage } = useMessage();
  const { success } = createMessage;

  const emit = defineEmits(['next', 'prev']);

  const step1Schemas: FormSchema[] = [
    {
      field: 'machineCode',
      component: 'Input',
      label: '机器码',
      required: true,
      defaultValue: '',
      colProps: {
        span: 24,
      },
    },
  ];

  const [register, { validate, setProps }] = useForm({
    labelWidth: 80,
    schemas: step1Schemas,
    actionColOptions: {
      span: 14,
    },
    resetButtonOptions: {
      text: '重置',
    },
    submitButtonOptions: {
      text: '生成离线激活码',
    },
    submitFunc: customSubmitFunc,
  });

  async function customSubmitFunc() {
    try {
      const formFields = await validate();
      setProps({
        submitButtonOptions: {
          loading: true,
        },
      });
      const responseData = await getActivateKey(formFields.machineCode);
      console.debug(responseData);
      emit('next', responseData);
      success('生成离线激活码成功！');
    } catch (error) {
      console.error(error);
    } finally {
      setProps({
        submitButtonOptions: {
          loading: false,
        },
      });
    }
  }
</script>
