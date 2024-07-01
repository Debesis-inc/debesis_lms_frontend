'use client'
import CustomInput from '@/components/CustomInput';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import { authConnect } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Chrome, Facebook } from 'lucide-react';

const SignIn = (type: string) => {

  const formSchema = authConnect(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <div className='lg:flex
     justify-between gap-6 mx-6 overflow-hidden '>
      <Form {...form}>

        <form className=' flex flex-col gap-5 px-3 w-1/2 mx-40 ' onSubmit={form.handleSubmit(onSubmit)}>
          <div className='text-lg font-bold  bg-orange-700 p-2 w-fit text-white'>
            <div className='mt-6'>Debesis</div>
          </div>
          <p className='text-2xl font-semibold  '>
            Unlock learning with Debesis
          </p>
          <div className='flex flex-col'>

            <CustomInput
              control={form.control}
              // label="Email"
              name="email"
              placeholder="Enter your email"
            />
            <CustomInput
              control={form.control}
              // label="Password"
              name="password"
              placeholder="Enter your password"
            />
            <Link href={"/"} className='text-[16px] text-right'>Forgot password?</Link>
            <Button className='mt-3 bg-neutral-500/30' type="submit">Sign In</Button>

            <div className='mt-2 flex gap-1'>
              <div>Don't have an account?  </div>
              <Link href={"/"} className='text-orange-500'>Sign Up</Link>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <div className='h-[1px] bg-neutral-400  w-full'></div>
            <div className=' text-neutral-500 text-[15px] w-full'>Or login with</div>
            <div className='h-[1px] bg-neutral-400  w-full ml-[-40px]'></div> 
          </div>
          <div>
            <Button className='mt-3 bg-orange-700 w-full' type="submit"><Chrome/>Google</Button>
            <Button className='mt-3 border-2 bg-transparent text-black  w-full' type="submit"><Facebook/>Facebook</Button>
            </div>
            <div className='items-center'>
              <p className='text-center text-[15px] mb-10'><span className='text-[18px]'>&copy;</span> 2024 Debesis All Rights Reserved</p>
              {/* <Link href={"/"} className='text-orange-500 text-[10px]'>Terms of Service</Link> and <Link href={"/"} className='text-orange-500 text-[10px]'>Privacy Policy</Link> */}
            </div>
        </form>
      </Form>
      <div className='py-8 px-3 w-1/2 bg-orange-700 rounded-lg my-8 mx-6 h-fit'>
        <div className='text-2xl font-bold'>Welcome!</div>
        <p className='text-lg p-2'>
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
