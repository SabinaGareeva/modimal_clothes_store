import Link from "next/link";
import InputForRegister from "./InputForRegister";
import SocialIcon from "../icons/SocialIcons";
import { useRouter } from "next/router";
import { Formik, Form, Field, ErrorMessage } from "formik";
const RegisterForm = () => {
  // router используется для перерисовки компонента взависимости от входа нового user или для зарегистрированного user
  const router = useRouter();
  const isCreateAccountPage =
    // : boolean
    router.pathname === "/CreateAccount";
  const createNameInputs =
    // : string[]
    ["firstname", "last name", "email", "password"];
  const loginNameInputs =
    // : string[]
    createNameInputs.slice(-2);

  {
    /* Пример для Formik */
  }
  const handleSubmit = (
    values
    // : any
    // { setSubmiting }
  ) => {
    console.log(values);
    // setSubmiting(false);
  };

  return (
    <div className="text-center">
      <h2 className="main-title text-center">
        {isCreateAccountPage ? "Create Account" : "Log in"}
      </h2>

      <form action="#" className="w-[392px]">
        {isCreateAccountPage
          ? createNameInputs.map((input) => (
              <InputForRegister name={input} key={input}></InputForRegister>
            ))
          : loginNameInputs.map((input) => (
              <InputForRegister name={input} key={input}></InputForRegister>
            ))}
        {isCreateAccountPage ? null : <p>Forgot your password?</p>}

        <button className="main-button mb-[0.8rem]">
          {isCreateAccountPage ? "Register Now" : "Log in"}
        </button>
      </form>
      {/* Та же форма только с использованием Formik */}
      <Formik className="w-[392px]">
        <Form>
          {createNameInputs.map((input) => (
            <InputForRegister name={input} key={input}></InputForRegister>
          ))}
        </Form>
      </Formik>
      {/* <div> */}
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
      {/* Пример для Formik */}
      <Formik
        initialValues={{ email: "", password: "", firstName: "", lastName: "" }}
        onSubmit={handleSubmit}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "invalid email address";
          }
          if (!values.password) {
            errors.password = "required";
          } else if (values.password < 6) {
            errors.password = "Password must be at least 6 characters long";
          }
          if (!values.firstName) {
            errors.firstName = "required";
          }
          if (!values.lastName) {
            errors.lastName = "required";
          }
          return errors;
        }}
      >
        <Form>
          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" name="email"></Field>

            <ErrorMessage name="email" component="div"></ErrorMessage>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default RegisterForm;
