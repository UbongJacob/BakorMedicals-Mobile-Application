import { useFormikContext } from "formik";

import AppButton, { AppButtonProps } from "../AppButton";

function SubmitButton(props: AppButtonProps) {
  const { handleSubmit } = useFormikContext();

  return <AppButton onPress={() => handleSubmit()} {...props} />;
}

export default SubmitButton;
