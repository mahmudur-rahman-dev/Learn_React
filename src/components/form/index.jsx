import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

export const Form = () => {
    const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().min(3).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null]).required(),
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" {...register("name")}  />
            <p>{errors.name?.message}</p>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" {...register("email")} />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" {...register("password")} />
            <label htmlFor="confirmPassword">confirmPassword</label>
            <input type="confirmPassword" id="confirmPassword" name="confirmPassword" {...register("confirmPassword")} />
            <label htmlFor="age">Age</label>
            <input type="number" id="age" name="age" {...register("age")} />
            <input type="submit" value="Submit"/>
        </form>
    );
}