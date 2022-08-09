import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import useAuth from '../hooks/useAuth';

interface Inputs {
  email: string;
  password: string;
}

function Login() {
  const [login, setLogin] = useState(false);
  const { signIn, signUp } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  //   const onSubmit: SubmitHandler<Inputs> = async (data) => {
  //     console.log(data);
  //     if (login) {
  //       await signIn(data.email, data.password);
  //     } else {
  //       await signUp(data.email, data.password);
  //     }
  //   };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    if (login) {
      await signIn(data.email, data.password);
    } else {
      await signUp(data.email, data.password);
    }
  };

  return (
    <div className="relative flex h-screen w-screen flex-col bg-white md:items-center md:justify-center md:bg-[#1e4c90]">
      <Head>
        <title>Signup</title>
      </Head>

      <form
        className="relative mt-24 space-y-8 rounded-2xl bg-white py-10 px-6 md:mt-0 md:max-w-md md:px-14"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-xl font-semibold bg-white">
         Create Account
        </h1>
        <div className="space-y-4 bg-white">
          <label className="inline-block w-full bg-white">
            Name
            <input
              type="text"
              placeholder="Name"
              className={`input ${
                errors.email && 'border-b-2 border-orange-500'
              }`}
            />
            {errors.email && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Please enter a valid email.
              </p>
            )}
          </label>
          <label className="inline-block w-full bg-white">
            Email
            <input
              type="email"
              placeholder="Email"
              className={`input ${
                errors.email && 'border-b-2 border-orange-500'
              }`}
              {...register('email', { required: true })}
            />
            {errors.email && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Please enter a valid email.
              </p>
            )}
          </label>
          <label className="inline-block w-full">
            Password
            <input
              type="password"
              {...register('password', { required: true })}
              placeholder="Password"
              className={`input ${
                errors.password && 'border-b-2 border-orange-500'
              }`}
            />
            {errors.password && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Your password must contain between 4 and 60 characters.
              </p>
            )}
          </label>
        </div>
        <button
          className="w-full rounded bg-[#1e4c90] py-3 text-[white]"
          onClick={() => {
            handleSubmit;
          }}
          type="submit"
        >
          Sign Up
        </button>
        <center>
          <div className="text-[black]">
            Already have an account?{' '}
            <button
              className="cursor-pointer text-[#1e4c90] hover:"
              onClick={() => setLogin(false)}
              type="submit"
            >
              <Link href="/login">
          <a onClick={(e) => handleClick(e, '/login')}>Sign Up</a>
        </Link>
            </button>
          </div>
        </center>
      </form>
    </div>
  );
}

export default Login;
