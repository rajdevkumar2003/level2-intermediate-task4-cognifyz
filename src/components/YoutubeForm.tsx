import { useForm } from "react-hook-form";
import { useState } from "react";
import Password from "./Password";

type FormValues = {
  username: string;
  email: string;
  channel: string;
  
};

const YoutubeForm = () => {
  const [pswd, setPswd] = useState("")
  const form = useForm<FormValues>();
  const { register, handleSubmit, formState } = form;

  const onsubmit = (data: FormValues) => {
    console.log(data);
  };
  const { errors } = formState;
  return (
    <div>
      <h1>Youtube Form</h1>
      <form onSubmit={handleSubmit(onsubmit)}>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            {...register("username", {
              required: {
                value: true, //we want its value to be this
                message: "username is required", //if value is not following the above then error message will be this
              },
            })}
          ></input>
          <p className="error">{errors.username?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              pattern: {
                value: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/,
                message: "Please enter a valid format",
              },
            })}
          ></input>
          <p className="error">{errors.email?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input type="text" id="channel" {...register("channel", {
              required: {
                value: true, //we want its value to be this
                message: "channel is required", //if value is not following the above then error message will be this
              },
            })}></input>
          <p className="error">{errors.channel?.message}</p>
        </div>

        <div className="form-control">
          <Password pswd={pswd} setPswd={setPswd} />
        </div>

        <button>submit</button>
      </form>
      
    </div>
  );
};

export default YoutubeForm;
