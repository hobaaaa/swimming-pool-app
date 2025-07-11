"use client";
import { motion } from "motion/react";
import React, { FormEvent, useState } from "react";

const Contact = () => {
  const [result, setResult] = useState<string>("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY as string
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        form.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setResult("Failed to send message");
    }
  };
  return (
    <motion.div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 min-h-screen bg-background flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Ücretsiz teklif alın
      </motion.h4>
      <motion.h2
        className="text-center text-5xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Bize Ulaşın
      </motion.h2>
      <motion.p
        className="max-w-2xl mx-auto text-center mt-5 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Sizden haber almak isteriz! Herhangi bir sorunuz, yorumunuz veya geri
        bildiriminiz varsa, lütfen aşağıdaki formu kullanın.
      </motion.p>
      <div className="w-full flex-col lg:flex-row flex items-center justify-center  gap-20">
        <motion.form
          onSubmit={onSubmit}
          className="w-full mx-auto"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
            <motion.input
              type="name"
              placeholder="İsminizi girin"
              required
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-hover focus:outline-none focus:ring-2"
              name="name"
            />
            <motion.input
              type="email"
              placeholder="Mail adresinizi girin"
              required
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-hover focus:outline-none focus:ring-2"
              name="email"
            />
          </div>
          <motion.textarea
            rows={6}
            placeholder="Mesajınızı girin"
            name="message"
            className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-hover focus:outline-none focus:ring-2 mb-6"
            required
          ></motion.textarea>
          <p className="my-4 mx-auto flex items-center justify-between w-max">
            {result}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            type="submit"
            className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/70  text-white rounded-full mx-auto hover:bg-black dark:bg-white/80 dark:text-black dark:hover:bg-white duration-500"
          >
            Gönder
          </motion.button>
        </motion.form>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="w-full rounded overflow-hidden shadow-md"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d394.0789738959911!2d29.051663290551136!3d37.79866804964562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1752182085012!5m2!1str!2str"
            width="600"
            height="450"
            className="w-full h-[400px] border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
