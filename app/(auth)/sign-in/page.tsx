'use client'
import CustomInput from '@/components/CustomInput';
import Image from 'next/image';
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
    <div className='h-screen'>
      <div className='lg:flex justify-between gap-10 overflow-hidden mx-10'>
        <Form {...form}>
          <form className=' flex flex-col gap-5 px-3 w-full lg:w-1/2 mx-0 md:mx-0 lg:mx-40' onSubmit={form.handleSubmit(onSubmit)}>
            <div className='text-lg font-bold  bg-[#ED6237] p-2 w-fit'>
              <div className='mt-6'>
                <Image src='/images/logo-white.png' width={100} height={50} alt='logo' />
              </div>
            </div>
            <p className='text-2xl font-semibold  '>
              Unlock learning with Debesis
            </p>
            <div className='flex flex-col'>

              <CustomInput
                control={form.control}
                // label="Email"
                name="email"
                placeholder="Username here"
              />
              <CustomInput
                control={form.control}
                // label="Password"
                name="password"
                placeholder="Password here"
              />
              <Link href={"/"} className='text-sm text-right '>Forgot password?</Link>
              <Button className='mt-3 bg-neutral-500/30' type="submit">Sign In</Button>

              <div className='mt-2 flex gap-1 items-center'>
                <p className='text-sm '> Don&lsquo;t have an account?  </p>
                <Link href={"/"} className='text-[#ED6237] text-sm'>Sign Up</Link>
              </div>
            </div>
            <div className='flex justify-between items-center gap-2'>
              <div className='h-[1px] bg-neutral-400 w-1/4'></div>
              <div className=' text-neutral-500 text-[15px]'>Or login with</div>
              <div className='h-[1px] bg-neutral-400  w-1/4'></div>
            </div>
            <div>
              <Button className='mt-3 bg-[#EA4335] w-full flex items-center gap-4' type="submit">
                <Image src='/images/google-icon.png' width={15} height={15} alt='google' />
                <p>Google</p></Button>
              <Button className='mt-3 border-2 bg-transparent text-slate-600  w-full flex items-center gap-4' type="submit">
                {/* <Image src='/images/facebook-icon.png' width={20} height={13} alt='facebook'/> */}
                <Facebook className='text-blue-900 fill-blue-900' size={18} />
                <p>Facebook</p></Button>
            </div>

          </form>
        </Form>
        <div className='py-8 px-3 w-full bg-orange-700 rounded-lg my-8 h-fit lg:w-1/2'>
          <div className='text-2xl font-bold'>Welcome!</div>
          <p className='text-lg p-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
            ligula in nulla luctus. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia Curae; Nullam nec felis nec nunc
            fringilla lacinia. Proin ut felis non justo tincidunt tincidunt.

          </p>
        </div>

      </div>        
      <div className='items-center'>
          <p className='text-center text-[15px] mb-10'><span className='text-[18px]'>&copy;</span> 2024 Debesis All Rights Reserved</p>
          {/* <Link href={"/"} className='text-orange-500 text-[10px]'>Terms of Service</Link> and <Link href={"/"} className='text-orange-500 text-[10px]'>Privacy Policy</Link> */}
        </div>
    </div>
  );
};

export default SignIn;
