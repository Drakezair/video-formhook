# Manage forms in react in a simple and organized way with Hook form

Very often it is required to validate the fields in our forms. For example, when you want to make sure that the two password entries are the same, an email entry must be an email or the entry is not too long. This can be easily done using React Hook From. In this article, I'll show you how.

1. The first thing we need to do is install the react-hook-form library as follows:

`yarn add react-hook-form`

1. Later we will create a small component with a form:

```jsx
export default function App() {
  return (
    <form>
      <input />
      <input />
      <button type="submit">send</button>
    </form>
  );
}
```

1. Now we import the `useForm` hook

```jsx
import { useForm } from "react-hook-form";
```

1. And we instantiate our hook and create an `onSubmit` function

```jsx
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();
const onSubmit = (data) => console.log(data);
```

1. Finally we pass the `register` function that we extract from the `useForm` object to our fields. Just as we use `handleSubmit` to handle the event of our form

```jsx
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" {...register("example")} />
      <input {...register("exampleRequired", { required: true })} />
      <button type="submit">send</button>
    </form>
  );
}
```

## Add validations

Validations are an integral part of almost all forms, they are an application's first line of defense against unwanted data. Validations ensure that bad data does not reach back-end servers and eventually databases. Ideally, most software data is validated at each layer, that is, the front end, the back end, and the database.

It can get tedious and repetitive for large forms managing validations for each field and their error states. React Hook Form provides great API options and also aligns with the existing HTML standard for form validation, here is the list of validation rules supported by the library: required - Input value is required or not

- min - The minimum value that can be accepted
- max - The maximum value that can be accepted
- minLength: the minimum input length that can be accepted
- maxLength: the minimum input length that can be accepted
- pattern: a regular expression pattern to validate input
- validate: any custom function to validate the input

## Normal Form vs Form Hook

```jsx
export default function NormalForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(
      "Run Validations Manually, maintain & show errors on UI, if all good make API call."
    );
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button type="submit">
        <span>Submit</span>
      </button>
    </form>
  );
}
```

```jsx
export default function ReactFormHook() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Name" {...register("name")} />
      <input placeholder="Email" {...register("email")} />
      <button type="submit">
        <span>Submit</span>
      </button>
    </form>
  );
}
```

## Conclusion

Initial use can be a bit challenging, but learning how to use the library is worth it. Especially if you are using onChange callbacks or references to extract input values. The library not only gives you easy control over the form, it also gives you great validation capabilities. Most basic validations can be accomplished using the built-in validations. However, creating your own custom validations is easy and will populate the discovered cases. Here is the [official documentation.](https://react-hook-form.com/get-started/#Applyvalidation) Give it a try!
