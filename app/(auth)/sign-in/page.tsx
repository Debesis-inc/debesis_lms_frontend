'use client'
import CustomInput from '@/components/CustomInput';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { Form } from '@/components/ui/form';



const SignIn: React.FC = () => {
  const formSchema = z.object({
    username: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CustomInput
          control={form.control}
          label="Username"
          name="username"
          placeholder="Enter your username"
        />
        <button type="submit">Submit</button>
      </form>
    </Form>

  );
};

export default SignIn;
