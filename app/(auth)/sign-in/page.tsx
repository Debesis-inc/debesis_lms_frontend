'use client'
import CustomInput from '@/components/CustomInput';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import { authConnect } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const SignIn = (type: string) => {

  const formSchema = authConnect(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <div className='flex justify-between w-full gap-6 mx-6'>
      <Form {...form}>
        <form className='bg-gray-500 py-8 px-3 w-1/2' onSubmit={form.handleSubmit(onSubmit)}>
          <CustomInput
            control={form.control}
            label="Email"
            name="email"
            placeholder="Enter your email"
          />
          <CustomInput
            control={form.control}
            label="Password"
            name="password"
            placeholder="Enter your password"
          />
          <Button className='mt-3' type="submit">Sign In</Button>
          <div className='my-8'>
            <div>Don't have an account?</div>
            <div className='text-blue-500'>Sign Up</div>
          </div>
        </form>
      </Form>
      <div className='py-8 px-3'>
        <div className='text-2xl font-bold'>Welcome!</div>
        <p className='text-lg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
          ligula in nulla luctus. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia Curae; Nullam nec felis nec nunc
          fringilla lacinia. Proin ut felis non justo tincidunt tincidunt.
        </p>
      </div>
    </div>
  );
};

export default SignIn;
