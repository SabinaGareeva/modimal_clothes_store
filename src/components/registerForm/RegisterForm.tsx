import Link from "next/link";
import css from "./RegisterForm.module.css";
import SocialIcon from "../Icons/SocialIcons";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { VisibilityButton } from "../UI/Buttons/VisibilityButton";
import { signIn } from "next-auth/react";
import { FormikHelpers } from "formik";

interface RegisterInputs {
  email: string;
  password: string;
  firstname?: string;
  lastname?: string;
}

const RegisterForm = () => {
  // состояние для показа или скрытия пароля
  const [visibilityPassword, setVisibilityPassword] = useState(true);
  // router используется для перерисовки компонента взависимости от входа нового user или для зарегистрированного user
  const router = useRouter();
  //проверка на какую страницу зашел пользователь
  const isCreateAccountPage: boolean = router.pathname === "/CreateAccount";
  const createNameInputs: string[] = [
    "firstname",
    "lastname",
    "email",
    "password",
  ];
  const loginNameInputs: string[] = createNameInputs.slice(-2);
  // Функция валидации формы
  const validateForm = (inputValue: RegisterInputs) => {
    const errors: Partial<RegisterInputs> = {};
    if (!inputValue.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputValue.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!inputValue.password) {
      errors.password = "Required";
    } else if (inputValue.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    if (isCreateAccountPage) {
      if (!inputValue.firstname) {
        errors.firstname = "Required";
      }
      if (!inputValue.lastname) {
        errors.lastname = "Required";
      }
    }

    return errors;
  };

  // Функция для отправки данных

  const handleSubmit: any= async (values: RegisterInputs, formikHelpers: FormikHelpers<RegisterInputs>) => {
    formikHelpers.setSubmitting(true);
    // const formData = new FormData(event.currentTarget);
    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });
    if (res && !res.error) {
      router.push("/Collection");
    } else {
      console.log(res);
    }
    formikHelpers.setSubmitting(false); 
  };

  return (
    <div className="text-center">
      <h2 className="main-title text-center">
        {isCreateAccountPage ? "Create Account" : "Log in"}
      </h2>
      <Formik
        className="w-[392px]"
        initialValues={
          isCreateAccountPage
            ? { email: "", password: "", firstname: "", lastname: "" }
            : { email: "", password: "" }
        }
        onSubmit={handleSubmit}
        validate={validateForm}
      >
        {(formikProps) => {
          return (
            <Form>
              {isCreateAccountPage
                ? createNameInputs.map((input) => (
                    <div key={input} className="relative">
                      <label htmlFor={input}></label>
                      <Field
                        type={
                          input === "password" && !visibilityPassword
                            ? "password"
                            : "text"
                        }
                        name={input}
                        placeholder={input[0].toUpperCase() + input.slice(1)}
                        className={`${css.input__for_register} ${
                          formikProps.touched[
                            input as keyof typeof formikProps.touched
                          ] &&
                          formikProps.errors[
                            input as keyof typeof formikProps.touched
                          ]
                            ? css.input__error
                            : ""
                        }`}
                      ></Field>
                      {input === "password" && (
                        <VisibilityButton
                          visibilityPassword={visibilityPassword}
                          setVisibilityPassword={setVisibilityPassword}
                        />
                      )}
                      <ErrorMessage
                        name={input}
                        component="div"
                        className={css.error__input_message}
                      ></ErrorMessage>
                    </div>
                  ))
                : loginNameInputs.map((input) => (
                    <div key={input} className="relative">
                      <label htmlFor={input}></label>
                      <Field
                        type={
                          input === "password" && !visibilityPassword
                            ? "password"
                            : "text"
                        }
                        name={input}
                        placeholder={input[0].toUpperCase() + input.slice(1)}
                        className={`${css.input__for_register} ${
                          formikProps.touched[
                            input as keyof typeof formikProps.touched
                          ] &&
                          formikProps.errors[
                            input as keyof typeof formikProps.touched
                          ]
                            ? css.input__error
                            : ""
                        }`}
                      ></Field>
                      {input === "password" && (
                        <VisibilityButton
                          visibilityPassword={visibilityPassword}
                          setVisibilityPassword={setVisibilityPassword}
                        />
                      )}
                      <ErrorMessage
                        name={input}
                        component="div"
                        className={css.error__input_message}
                      ></ErrorMessage>
                    </div>
                  ))}

              <button className="main-button mb-[0.8rem] w-full" type="submit">
                {isCreateAccountPage ? "Register Now" : "Log in"}
              </button>
            </Form>
          );
        }}
      </Formik>
      <div className="flex justify-center">
        {isCreateAccountPage ? (
          <>
            <p className="text-[1.4rem]">Already have an account?</p>
            <Link href="/LogIn" className="text-[1.4rem] text-[#748C70]">
              Sign in
            </Link>
          </>
        ) : null}
      </div>
      <div>
        <p>Or</p>
      </div>
      <div className="flex justify-center">
        <SocialIcon />
      </div>

      {isCreateAccountPage ? (
        <>
          <p className="text-[1.2rem]">
            By Clicking Register Now{"'"} You Agree To
            <Link href="#">Terms & conditions</Link> And
            <br />
            <Link href="#"> privacy policy.</Link>
          </p>
        </>
      ) : (
        <p>
          New to modimal? <Link href="#">create an account</Link>
        </p>
      )}
    </div>
  );
};
export default RegisterForm;
