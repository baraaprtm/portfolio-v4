"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { SelectGroup, SelectLabel } from "@radix-ui/react-select";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+62) 897 9140 360",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "baraaprtm@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Jakarta, Indonesia",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      service: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const firstName = formData.firstName.trim();
    const lastName = formData.lastName.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const service = formData.service;
    const message = formData.message.trim();

    if (!firstName || firstName.length < 2 || /^\d+$/.test(firstName)) {
      setIsError(true);
      setStatusMessage("Please enter a valid first name.");
      return;
    }

    if (!lastName || lastName.length < 2 || /^\d+$/.test(lastName)) {
      setIsError(true);
      setStatusMessage("Please enter a valid last name.");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      setIsError(true);
      setStatusMessage("Please enter a valid email address.");
      return;
    }

    const phoneRegex = /^\+?\d{8,15}$/;

    if (!phoneRegex.test(phone)) {
      setIsError(true);
      setStatusMessage("Please enter a valid phone number.");
      return;
    }

    if (!service) {
      setIsError(true);
      setStatusMessage("Please select a service.");
      return;
    }

    if (!message) {
      setIsError(true);
      setStatusMessage("Please enter your message.");
      return;
    }

    setIsLoading(true);
    setStatusMessage("");

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS environment variables are missing.");
      }

      const templateParams = {
        name: `${firstName} ${lastName}`,
        email,
        phone,
        service,
        message,
      };

      await emailjs.send(serviceId, templateId, templateParams, {
        publicKey,
      });

      setIsError(false);
      setStatusMessage("Message sent successfully!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error: any) {
      console.error("EmailJS Error:", JSON.stringify(error, null, 2));

      setIsError(true);
      setStatusMessage(
        error?.text ||
          error?.message ||
          "Failed to send message. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-9rem)] flex items-center py-6 lg:py-4">
      <div className="container mx-auto px-4 xl:px-8 w-full">
        <div className="flex flex-col lg:flex-row gap-[30px]">
          {/* Form */}
          <div className="lg:w-[54%] order-2 lg:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-2 p-4 sm:p-4 lg:p-4 bg-[#27272c] rounded-xl"
            >
              {/* Heading */}
              <motion.h3
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1.5,
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-3xl lg:text-4xl text-accent"
              >
                Let's work together
              </motion.h3>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 2.1,
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-white/60"
              >
                Have a project in mind? Let’s build something reliable,
                scalable, and built to last — from web applications and APIs to
                backend systems and databases..
              </motion.p>

              {/* Inputs */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 2.7,
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-2"
              >
                <Input
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />

                <Input
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />

                <Input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />

                <Input
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </motion.div>

              {/* Select */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 3.3,
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Select
                  value={formData.service}
                  onValueChange={handleSelectChange}
                  disabled={isLoading}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>

                      <SelectItem value="backend">
                        Backend Development
                      </SelectItem>

                      <SelectItem value="api">API Development</SelectItem>

                      <SelectItem value="database">Database Design</SelectItem>

                      <SelectItem value="system">System Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 3.9,
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Textarea
                  name="message"
                  className="h-[70px]"
                  placeholder="Type your message here."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </motion.div>

              {statusMessage && (
                <div
                  className={`text-sm ${
                    isError ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {statusMessage}
                </div>
              )}

              {/* Button */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 4.5,
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Button
                  type="submit"
                  size="lg"
                  className="max-w-none rounded-md px-6 bg-transparent text-white/70 border border-white/20 hover:text-accent hover:border-accent transition-all duration-300"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </motion.div>
            </form>
          </div>

          {/* Info */}
          <div className="flex-1 flex items-center justify-start lg:justify-end order-1 lg:order-none mb-10 lg:mb-0">
            <ul className="flex flex-col gap-8">
              {info.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 5.1 + index * 0.6,
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-center gap-6"
                >
                  <div className="flex items-center justify-center shrink-0 w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] bg-[#27272c] text-accent rounded-md">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>

                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
