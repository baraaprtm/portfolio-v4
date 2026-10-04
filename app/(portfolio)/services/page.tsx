"use client";

import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    num: "01",
    title: "Backend Development",
    description:
      "Building reliable and scalable backend systems with Node.js, NestJS, and modern server-side technologies.",
    href: "/services",
  },
  {
    num: "02",
    title: "API Development",
    description:
      "Building secure and well-structured REST APIs for web applications and system integrations.",
    href: "/services",
  },
  {
    num: "03",
    title: "Database Design",
    description:
      "Designing efficient and well-structured databases with PostgreSQL, MySQL, MongoDB, and Redis.",
    href: "/services",
  },
  {
    num: "04",
    title: "System Design",
    description:
      "Designing scalable system architectures focused on performance, reliability, and maintainability.",
    href: "/services",
  },
];

const Services = () => {
  return (
    <section className="h-auto lg:h-[calc(100vh-7rem)] flex flex-col justify-center py-6 lg:py-0 overflow-hidden">
      <div className="container mx-auto px-4 xl:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.num} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
