import './Registration.css';
import {useForm} from "react-hook-form";
import React from "react";

export const Registration = function () {

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm( {
            defaultValues: {
                firstName: "",
                lastName: ""
            }
    });

    console.log(watch(errors));
    return (
        <form onSubmit={handleSubmit((formData) => {
            console.log(formData);
        })
        }>
            <input type="text" {...register("firstName",
                {require: "This is required"})}
                   placeholder="First Name"/>

            <p>{errors.firstName?.message}</p>

            <input type="text" {...register("lastName",
                {required: "This is required",
                    minLength: {
                        value: 6,
                        message: "Min length is 6"
                    },
                    maxLength: {
                        value: 30,
                        message: "Max length is 30"
                    }
                }
            )}
            placeholder="Last Name"/>
            <p>{errors.lastName?.message}</p>
            <input type="checkbox" {...register('checkbox')}/>
            <input type="submit" value="Register" />
        </form>
    );
}