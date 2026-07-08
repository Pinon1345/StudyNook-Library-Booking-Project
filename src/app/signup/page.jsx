"use client";

import { authClient } from '@/lib/auth-client';
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const SignUpPage = () => {

    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget)
        const user = Object.fromEntries(formData.entries())

        const { data, error } = await authClient.signUp.email({
            email: user.email,
            password: user.password,
            name: user.name,
            image: user.image
        })

        // console.log(data, error);

        if (data) {
            toast.success("Congratulations! Account Successfully Created!")
            redirect('/')
        }

        if (error) {
            toast.error("Ahh! Sign Up Failed! Please try again.")
        }
    }

    return (
        <div className='bg-slate-100 dark:bg-[#1E293B] rounded-t-2xl pt-8 pb-8'>
            <div className='overflow-hidden text-center pt-4 pb-2'>
                <h2 className='text-emerald-600 dark:text-emerald-400 text-3xl md:text-4xl font-bold text-center inline-block animate-text-scale'>Create Your Account</h2>
            </div>

            <p className='text-lg md:text-xl font-semibold text-center text-gray-400 pb-6 pt-2'>Join StudyNook today and reserve your perfect study space in just a few clicks.</p>

            <div className='container w-10/12 md:w-7/12 max-w-7xl mx-auto mt-4 mb-6'>

                <Card className='border border-gray-100 dark:border-gray-600 shadow-emerald-600 dark:shadow-emerald-800 shadow-lg'>
                    <Form
                        onSubmit={onSubmit}
                        className="flex flex-col gap-4 px-4 py-2">

                        {/* Name */}

                        <TextField
                            isRequired
                            name="name"
                            type="text"

                        >
                            <Label className='text-lg font-semibold'>Name</Label>
                            <Input placeholder="Enter Your Full Name" className="bg-slate-100 dark:bg-slate-200 dark:text-slate-800" />
                            <FieldError />
                        </TextField>

                        {/* Image URL */}

                        <TextField
                            name="image"
                            type="url"

                        >
                            <Label className='text-lg font-semibold'>Image_URL</Label>
                            <Input placeholder="Enter Your Image_URL  (highly recommended)" className="bg-slate-100 dark:bg-slate-200 dark:text-slate-800" />

                        </TextField>

                        {/* Email */}

                        <TextField
                            isRequired
                            name="email"
                            type="email"
                            validate={(value) => {
                                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                    return "Please enter a valid email address";
                                }
                                return null;
                            }}
                        >
                            <Label className='text-lg font-semibold'>Email</Label>
                            <Input placeholder="Enter Your Email Address" className="bg-slate-100 dark:bg-slate-200 dark:text-slate-800" />
                            <FieldError />
                        </TextField>

                        {/* Password */}

                        <TextField
                            isRequired
                            minLength={8}
                            name="password"
                            validate={(value) => {
                                if (value.length < 8) {
                                    return "Password must be at least 8 characters";
                                }
                                if (!/[A-Z]/.test(value)) {
                                    return "Password must contain at least one uppercase letter";
                                }
                                if (!/[0-9]/.test(value)) {
                                    return "Password must contain at least one number";
                                }
                                return null;
                            }}
                        >
                            <Label className='text-lg font-semibold'>Password</Label>

                            <div className="relative w-full">
                                <input
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter Your Password"
                                    className="w-full rounded-lg bg-slate-100 dark:bg-slate-200 dark:text-slate-800 px-3 py-2 pr-12 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-emerald-600"
                                >
                                    {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                                </button>
                            </div>


                            <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                            <FieldError />
                        </TextField>


                        {/* Form Button */}


                        <div className="flex gap-2 mt-4">
                            <Button type="submit" size='lg' className="btn btn-primary btn-float w-full rounded-md ">
                                CREATE ACCOUNT
                            </Button>

                        </div>
                    </Form>

                    {/* Sign Up with Google */}

                    <div className='px-4'>

                        <div className="flex items-center my-4">
                            <div className="flex-1 border-t border-gray-300 dark:border-slate-600"></div>
                            <span className="px-4 text-gray-500 text-sm font-semibold">OR</span>
                            <div className="flex-1 border-t border-gray-300 dark:border-slate-600"></div>
                        </div>

                        <Button
                            // onClick={handleGoogleSignIn}
                            variant='btn-outline' size='lg'
                            className="w-full border dark:bg-slate-600 bg-slate-50 rounded-lg py-2 flex items-center justify-center gap-2 mb-2">
                            <FcGoogle className='w-6 h-6'></FcGoogle>
                            <h1 className='text-lg font-bold'>Sign Up With Google</h1>
                        </Button>

                        <h2 className='text-center text-lg pb-6 pt-2'>Already have an account? <span className='font-bold text-xl text-emerald-600 dark:text-emerald-400'><Link href={"/signin"}>Sign In</Link></span></h2>

                    </div>


                </Card>

            </div>

        </div>
    );
};

export default SignUpPage;