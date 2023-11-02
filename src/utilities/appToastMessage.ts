import Toast from 'react-native-toast-message';

const TOAST_TYPES = Object.freeze({
  info: 'info',
  error: 'error',
  success: 'success',
});

const info = (title: string, subtitle?: string) => {
  Toast.show({
    type: TOAST_TYPES.info,
    text1: title,
    text2: subtitle,
  });
};
const success = (title: string, subtitle?: string) => {
  Toast.show({
    type: TOAST_TYPES.success,
    text1: title,
    text2: subtitle,
  });
};

const error = (title: string, subtitle?: string) => {
  Toast.show({
    type: TOAST_TYPES.error,
    text1: title,
    text2: subtitle,
  });
};

const neutral = (title: string, subtitle?: string) => {
  Toast.show({
    type: TOAST_TYPES.info,
    text1: title,
    text2: subtitle,
  });
};

export default Object.freeze({
  info,
  error,
  success,
  neutral,
});
