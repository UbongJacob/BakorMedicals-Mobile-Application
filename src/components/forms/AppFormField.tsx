import { ViewProps, View } from "react-native";
import { useFormikContext, FormikProps, FormikValues } from "formik";
import AppTextInput, { AppTextInputProps } from "../AppTextInput";
import { emptyString } from "../../assets/data/otherImportantData";
import Size from "../../utilities/useResponsiveSize";
import colors from "../../configs/colors";
import ErrorMessage from "./ErrorMessage";

type AppFormFieldProps = AppTextInputProps & {
  name: string;
  errorStyle?: ViewProps;
  customError?: string;
  onTextModify?: (text: string) => void;
};

function AppFormField({
  name,
  containerStyle,
  onTextModify,
  customError = emptyString,
  errorStyle,
  ...otherProps
}: AppFormFieldProps) {
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
    values,
  }: FormikProps<FormikValues> = useFormikContext();

  if (customError && customError !== emptyString) errors[name] = customError;

  return (
    <View style={{ marginBottom: Size.calcHeight(30) }}>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text: string) => {
          setFieldValue(name, text);
          onTextModify?.(text);
        }}
        value={values[name]}
        containerStyle={containerStyle}
        innerContainerStyle={
          touched[name] && errors[name] ? { borderColor: colors.RED100 } : {}
        }
        {...otherProps}
      />
      <ErrorMessage
        error={errors[name]}
        style={errorStyle}
        visible={touched[name]}
      />
    </View>
  );
}

export default AppFormField;
