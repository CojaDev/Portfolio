"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import MyStars from "./Stars";
const Contact = () => {
  const [emailSent, setEmailSent] = useState(false);

  const EmailSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6tdaeep",
        "template_zmmvyfb",
        e.target,
        "qyKCjoIKW0Re6ObrA"
      )
      .then((res) => {
        console.log(res);
        setEmailSent(true);
        setTimeout(() => {
          setEmailSent(false);
        }, 5000);
        setTimeout(() => {
          toast.success("Email is succesfully sent!!");
        }, 1000);
      });
  };

  return (
    <section
      className="w-full min-h-screen flex my-72 py-32"
      data-scroll
      data-scroll-speed="0.2"
      id="contact"
    >
      <div className="max-w-screen-2xl mx-auto scale-95 w-full flex bg-white/95 sm:flex-row z-10 flex-col md:p-24 p-2 pt-3 pb-8  rounded-3xl relative">
        <div className="w-full h-full absolute bottom-0 left-0 -z-50 pointer-events-none  select-none invert">
          <MyStars count={2800} radius={120} speed={0.7} scale={0.7} />
        </div>
        <div className="flex flex-col p-2 sm:pb-2 pb-6">
          <h3 className="sm:text-6xl text-[2.6rem] font-bold mb-2">
            Get in<span className="text-orange-400"> Touch.</span>
          </h3>
          <p className="text-lg text-black/85 max-w-[500px]">
            I would love to hear from you! Whether you have a question about my
            projects, want to collaborate, or just want to say hi, feel free to
            reach out. Use the contact form or connect with me through my social
            media channels.
          </p>
          <div className="w-full flex flex-col mt-10 gap-5 text-lg">
            <a
              href="https://github.com/CojaDev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center"
            >
              <Image
                src="/img/github2.png"
                alt="GitHub"
                draggable={false}
                height={512}
                width={512}
                className="w-10 object-cover mr-4 select-none"
              />
              <p className="text-orange-400">CojaDev</p>
            </a>
            <a
              href="https://www.linkedin.com/in/aleksandar-marcetic-b47483202/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center"
            >
              <Image
                src="/img/linkedin2.png"
                alt="LinkedIn"
                draggable={false}
                height={512}
                width={512}
                className="w-10 object-cover mr-4 select-none"
              />
              <p className="text-orange-400">Aleksandar Marcetic</p>
            </a>
            <a
              href="mailto:amarcetic04@gmail.com"
              className="w-full flex items-center"
            >
              <Image
                src="/img/mail.png"
                alt="email"
                height={512}
                draggable={false}
                width={512}
                className="w-10 object-cover mr-4 select-none"
              />
              <p className="text-orange-400">amarcetic04@gmail.com</p>
            </a>
          </div>
        </div>
        <form
          onSubmit={EmailSubmit}
          className={`flex w-full bg-white text-black flex-col max-w-screen-sm ml-auto gap-6 p-10 px-8 shadow-xl rounded-b-2xl rounded-t-lg border transition-all ${
            emailSent ? "border-green-500 border-2 bg-green-50" : "border-black"
          }`}
        >
          <input
            type="text"
            name="ime"
            placeholder="Your Name"
            className={`p-2 border transition-all delay-75 focus:outline-orange-400/90 rounded-[4px] focus:shadow-md ${
              emailSent
                ? "border-green-500 focus:outline-green-400/90 "
                : "border-black focus:outline-orange-400/90 "
            }`}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            className={`p-2 border transition-all delay-75 focus:outline-orange-400/90 focus:shadow-md rounded-[4px] ${
              emailSent
                ? "border-green-500 focus:outline-green-400/90 "
                : "border-black focus:outline-orange-400/90 "
            }`}
            required
          />
          <input
            type="text"
            name="naslov"
            placeholder="What is it about?"
            className={`p-2 border transition-all delay-75 focus:outline-orange-400/90 rounded-[4px] focus:shadow-md ${
              emailSent
                ? "border-green-500 focus:outline-green-400/90 "
                : "border-black focus:outline-orange-400/90 "
            }`}
            required
          />

          <textarea
            placeholder="Enter your message..."
            name="poruka"
            className={`p-2 border  transition-shadow delay-75 min-h-[150px] max-h-[280px] focus:outline-orange-400/90 focus:shadow-md rounded-[4px] ${
              emailSent
                ? "border-green-500 focus:outline-green-400/90 "
                : "border-black focus:outline-orange-400/90 "
            }`}
            required
          />

          <button
            type="submit"
            className={`p-2 border transition-all delay-75  cursor-pointer active:scale-[0.98] font-medium rounded-[4px] ${
              emailSent
                ? "border-green-500 bg-green-500 hover:bg-green-400/80"
                : "border-black bg-orange-400 hover:bg-orange-400/80"
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
