/* eslint-disable @typescript-eslint/no-explicit-any */
import { isValidEmail } from "./formatText";

export const handleEmailInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setFormDataError: any,
  input: any
) => {
  const inputValue = e.target.value;
  const regex = /\./g;
  const noDots = (inputValue.match(regex) || []).length;
  const consecutiveDots = inputValue.includes("..");

  if (
    !consecutiveDots &&
    noDots >= 1 &&
    isValidEmail(inputValue) &&
    inputValue.length > 10
  ) {
    // Aqui, você pode querer verificar a validação adicional do e-mail se necessário
    setFormDataError((prevData: any) => ({
      ...prevData,
      errors: {
        ...prevData.errors,
        [input]: "",
      },
    }));
  } else if (consecutiveDots || noDots > 1) {
    setFormDataError((prevData: any) => ({
      ...prevData,
      errors: {
        ...prevData.errors,
        [input]: "enterValidEmail",
      },
    }));
  } else {
    if (inputValue.length < 10) {
      //setErrorEmail(`Email ${t("have5characters")}`);
      setFormDataError((prevData: any) => ({
        ...prevData,
        errors: {
          ...prevData.errors,
          [input]: "have5characters",
        },
      }));
    }
    //setErrorEmail(t("enterValidEmail"));
    setFormDataError((prevData: any) => ({
      ...prevData,
      errors: {
        ...prevData.errors,
        [input]: "enterValidEmail",
      },
    }));
  }
};
