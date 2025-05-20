import { useForm } from "react-hook-form";
import { postUsers } from "../../../api/routes/users";

const formStyles = {
  inputStyle: "border-2 rounded-md",
  labelStyles: "",
};

function HookForm() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const customSubmitFunction = async (data, e) => {
    e.preventDefault();
    try {
      console.log("data");
      await postUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col my-10">
      React Hook form
      <form
        onSubmit={handleSubmit(customSubmitFunction)}
        className="flex flex-col gap-4"
      >
        <label className="" htmlFor="username">
          Username{" "}
        </label>
        <input
          {...register("username", {
            required: { value: true, message: "please enter your username" },
          })}
          className={formStyles.inputStyle}
          type="text"
        />
        {errors.username && (
          <span className="!text-red-500">{errors.username.message}</span>
        )}

        <label htmlFor="password">Password </label>
        <input
          {...register("password", {
            required: { value: true, message: "Please enter your password" },
            minLength: {
              value: 2,
              message: "Password must be atleast 2 letters",
            },
            maxLength: {
              value: 10,
              message: "Password must not be above 10 letters",
            },
          })}
          className={formStyles.inputStyle}
          type="password"
        />
        {errors.password && (
          <span className="!text-red-500">{errors.password.message}</span>
        )}

        <label htmlFor="confirmPassword">Confirm Password </label>
        <input
          {...register("confirmPassword", {
            required: { value: true, message: "Please confirm your password" },
            minLength: {
              value: 2,
              message: "Password must be atleast 2 letters",
            },
            maxLength: {
              value: 10,
              message: "Password must not be above 10 letters",
            },
          })}
          className={formStyles.inputStyle}
          type="password"
        />
        {errors.confirmPassword && (
          <span className="!text-red-500">
            {errors.confirmPassword.message}
          </span>
        )}

        <button className={formStyles.inputStyle} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default HookForm;
