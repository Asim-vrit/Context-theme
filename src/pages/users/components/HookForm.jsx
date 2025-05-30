import { useForm } from "react-hook-form";
import { postUsers, updateUser } from "../../../api/routes/users";
import { toast } from "react-toastify";
import { useEffect } from "react";

const formStyles = {
  inputStyle: "border-2 rounded-md",
  labelStyles: "",
};

function HookForm(props) {
  const { fetchUsersData, selectedUsers, setSelectedUsers } = props;
  const { register, handleSubmit, formState, reset } = useForm();

  const { errors } = formState;

  const customSubmitFunction = async (data) => {
    try {
      if (selectedUsers) {
        await updateUser(selectedUsers.id, data);
      } else await postUsers(data);
      setSelectedUsers(null);
      reset({ username: "", password: "", confirmPassword: "" });
      toast.success("User Added Successfully");
      fetchUsersData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (selectedUsers) {
      reset({
        username: selectedUsers.username,
        password: selectedUsers.password,
        confirmPassword: selectedUsers.password,
      });
    }
  }, [selectedUsers, reset]);

  return (
    <div className="flex justify-center items-center flex-col my-10">
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
          type="text"
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
          type="text"
        />
        {errors.confirmPassword && (
          <span className="!text-red-500">
            {errors.confirmPassword.message}
          </span>
        )}

        <button className={formStyles.inputStyle} type="submit">
          {selectedUsers ? "Update" : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default HookForm;
