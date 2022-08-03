import React from 'react'
import {useForm } from 'react-hook-form'

export default function BasicSignUpForm() {
    const {register, handleSubmit} = useForm()
    const onSubmit = data => console.log(data);

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input type="text" placeholder='James' {...register("firstName")} />
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" placeholder='Stone' {...register("lastName")} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='james@gmail.com' {...register("email")} />
            </div>
            <div>
                <label htmlFor="password">password</label>
                <input type="password" {...register("password")}  />
            </div>
            <button type="submit" onClick={onSubmit}>Submit</button>
        </form>
    );
}