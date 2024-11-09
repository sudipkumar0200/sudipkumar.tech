"use client";
import Image from "next/image";
import avatar from "../../public/animoji.svg";
import { motion } from "framer-motion";

export default function AboutMe2() {
  return (
    <section id="about" className="min-h-screen flex items-center bg-muted/50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-14"
      >
        <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-5 gap-6 p-8 bg-card">
            <div className=" flex  justify-center md:col-span-2">
              <div className="aspect-square rounded-full overflow-hidden  bg-gray-700 ">
                <Image
                  src={avatar}
                  alt="Avatar image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-3 space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold text-primary">Sudip Kumar</h1>
                <p className="text-gray-500">Full Stack Developer</p>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                As a passionate PERN stack developer and UI/UX designer, I blend
                technical expertise with creative design thinking to craft
                seamless digital experiences.Through my experience with
                PostreSQL, Express.js, React, and Node.js, coupled with my eye for
                intuitive user interfaces, I transform concepts into responsive,
                user-centric solutions that drive engagement and deliver
                results.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <h3 className="font-bold">Birth year</h3>
                  <p className="text-sm text-gray-500">2005</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <h3 className="font-bold">Education</h3>
                  <p className="text-sm text-gray-500">
                    BCA, passing out in 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
