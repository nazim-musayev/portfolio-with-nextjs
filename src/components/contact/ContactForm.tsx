import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FormInputs } from 'interfaces';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ErrorMessage from './ErrorMessage';
import axios from 'axios';


const ContactForm = () => {
  const [reqError, setReqError] = useState<boolean>(false);

  const schema = Yup.object().shape({
    name: Yup.string().required("Name is required").min(5).max(30),
    email: Yup.string().required("Email is required").email(),
    subject: Yup.string().required("Subject is required").min(5).max(50),
    message: Yup.string().required("Message is required").min(10)
  });

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormInputs>({
    resolver: yupResolver(schema)
  });

  const handleForm: SubmitHandler<FormInputs> = async (data) => {
    axios.post('/api/send_email', data).catch(() => setReqError(true));
    reset();
  };

  return (
    <form 
     noValidate
     className="grid gap-6"
     onSubmit={handleSubmit(handleForm)}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <input 
           placeholder="Name"
           {...register("name", { required: true })}
           className={`contactFormInput placeholder:italic w-[95%] sm:w-full ${errors.name && "placeholder:text-red-600"}`}
          />
          {errors.name?.message && <ErrorMessage message={errors.name.message} />}
        </div>
        <div>
          <input
           placeholder="Email"
           {...register("email", { required: true })}
           className={`contactFormInput placeholder:italic w-[95%] sm:w-full ${errors.email && "placeholder:text-red-600"}`}
          />
          {errors.email?.message && <ErrorMessage message={errors.email.message} />}
        </div>
      </div>
      <input
       placeholder="Subject"
       {...register("subject", { required: true })}
       className={`contactFormInput placeholder:italic w-[95%] sm:w-full ${errors.subject && "placeholder:text-red-600"}`} 
      />
      {errors.subject?.message && <ErrorMessage message={errors.subject.message} />}
      <textarea 
       placeholder="Message"
       {...register("message", { required: true })}
       className={`contactFormInput placeholder:italic w-[95%] sm:w-full ${errors.message && "placeholder:text-red-600"}`} 
      />
      {errors.message?.message && <ErrorMessage message={errors.message.message} />}
      {reqError && <ErrorMessage message="Something went wrong. Please, try again" />}
      <motion.button
       type="submit" 
       whileHover={{scale: 1.1}}
       className="w-40 py-2 my-2 rounded-lg text-primary border-2 border-primary"
      >
        Send Message
      </motion.button>
    </form>
  );
};
  
export default ContactForm;


// className={`contactFormInput placeholder:italic focus:border-primary w-full transition duration-300 ${errors.email && "placeholder:text-red-600"}`}
// />