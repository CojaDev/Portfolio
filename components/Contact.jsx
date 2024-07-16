'use client';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';
import MyStars from './Stars';
const Contact = () => {
  const [emailSent, setEmailSent] = useState(false);

  const EmailSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_6tdaeep',
        'template_zmmvyfb',
        e.target,
        'qyKCjoIKW0Re6ObrA'
      )
      .then((res) => {
        console.log(res);
        setEmailSent(true);
        setTimeout(() => {
          setEmailSent(false);
        }, 5000);
        setTimeout(() => {
          toast.success('Email is succesfully sent!!');
        }, 1000);
      });
  };

  return (
    <section
      className="w-full min-h-screen flex  py-96"
      data-scroll
      data-scroll-speed="0.2"
    >
      <div
        className="max-w-screen-2xl mx-auto w-full flex bg-white/95 sm:flex-row z-10 flex-col md:p-24 p-2 pt-3 pb-8  rounded-3xl relative"
        id="contact"
      >
        <div className="w-full h-full absolute bottom-0 left-0 -z-50 pointer-events-none  select-none invert">
          <MyStars count={2800} radius={120} speed={0.7} scale={0.7} />
        </div>
        <div className="flex flex-col p-2 sm:pb-2 pb-6">
          <h3 className="sm:text-6xl text-[2.6rem] font-bold mb-2">
            Get in<span className="text-orange-400"> Touch.</span>
          </h3>
          <p className="text-lg text-black/85 max-w-[500px]">
            We're excited to connect with you! Whether you have questions about
            our services or want to discuss a potential project, we're here to
            help. Reach out to us using the contact form or contact details
            below.
          </p>
          <div className="w-full flex flex-col mt-10 gap-5 text-lg">
            <div className="w-full flex ">
              <Image
                src="/img/pin.png"
                alt="pin"
                draggable={false}
                height={512}
                width={512}
                className="w-10 object-cover mr-4 select-none "
              />
              <p className="text-orange-400">Serbia</p>
            </div>
            <div className="w-full flex ">
              <Image
                src="/img/phone2.png"
                alt="phone"
                draggable={false}
                height={512}
                width={512}
                className="w-10 object-cover mr-4 select-none "
              />
              <p className="text-orange-400">+381 61 512 0204</p>
            </div>
            <div className="w-full flex ">
              <Image
                src="/img/mail.png"
                alt="email"
                height={512}
                draggable={false}
                width={512}
                className="w-10 object-cover mr-4 select-none "
              />
              <p className="text-orange-400">amarcetic04@gmail.com</p>
            </div>
          </div>
        </div>
        <form
          onSubmit={EmailSubmit}
          className={`flex w-full bg-white text-black flex-col max-w-screen-sm ml-auto gap-6 p-10 px-8 shadow-xl rounded-b-2xl rounded-t-lg border transition-all ${
            emailSent ? 'border-green-500 border-2 bg-green-50' : 'border-black'
          }`}
        >
          <input
            type="text"
            name="ime"
            placeholder="Your Name"
            className={`p-2 border transition-all delay-75 focus:outline-orange-400/90 rounded-[4px] focus:shadow-md ${
              emailSent
                ? 'border-green-500 focus:outline-green-400/90 '
                : 'border-black focus:outline-orange-400/90 '
            }`}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            className={`p-2 border transition-all delay-75 focus:outline-orange-400/90 focus:shadow-md rounded-[4px] ${
              emailSent
                ? 'border-green-500 focus:outline-green-400/90 '
                : 'border-black focus:outline-orange-400/90 '
            }`}
            required
          />
          <input
            type="text"
            name="naslov"
            placeholder="What is it about?"
            className={`p-2 border transition-all delay-75 focus:outline-orange-400/90 rounded-[4px] focus:shadow-md ${
              emailSent
                ? 'border-green-500 focus:outline-green-400/90 '
                : 'border-black focus:outline-orange-400/90 '
            }`}
            required
          />

          <textarea
            placeholder="Enter your message..."
            name="poruka"
            className={`p-2 border  transition-shadow delay-75 min-h-[150px] max-h-[280px] focus:outline-orange-400/90 focus:shadow-md rounded-[4px] ${
              emailSent
                ? 'border-green-500 focus:outline-green-400/90 '
                : 'border-black focus:outline-orange-400/90 '
            }`}
            required
          />

          <button
            type="submit"
            className={`p-2 border transition-all delay-75  cursor-pointer active:scale-[0.98] font-medium rounded-[4px] ${
              emailSent
                ? 'border-green-500 bg-green-500 hover:bg-green-400/80'
                : 'border-black bg-orange-400 hover:bg-orange-400/80'
            }`}
          >
            Send Message
          </button>
        </form>
      </div>
      <Toaster />
    </section>
  );
};

export default Contact;
