import { useForm } from "react-hook-form";

export default function ReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Object.keys(errors).length > 0 && <h1>Something is wrong</h1>}
      <input
        placeholder="Name"
        {...register("name", {
          maxLength: 2,
          required: "this field is required",
        })}
      />
      {errors?.name?.message && <p>{errors?.name?.message}</p>}
      <input type="email" placeholder="Email" {...register("email")} />
      <button type="submit">
        <span>Submit</span>
      </button>
    </form>
  );
}
