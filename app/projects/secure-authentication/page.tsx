"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheckCircle,
  FiGithub,
  FiLock,
  FiLogIn,
  FiLogOut,
  FiMenu,
  FiShield,
  FiUser,
  FiX,
} from "react-icons/fi";

const features = [
  {
    icon: FiLock,
    title: "Secure Login",
    description:
      "Protected authentication flow designed to keep user credentials and sessions secure.",
  },
  {
    icon: FiShield,
    title: "Password Protection",
    description:
      "User passwords are handled through secure authentication practices instead of being stored as plain text.",
  },
  {
    icon: FiUser,
    title: "User Authentication",
    description:
      "A structured authentication system for registering, logging in, and managing authenticated users.",
  },
  {
    icon: FiLogOut,
    title: "Session Management",
    description:
      "Authenticated sessions are handled separately from public pages and protected resources.",
  },
];

const authFlow = [
  {
    number: "01",
    title: "Register",
    description: "Create a new account with the required user credentials.",
  },
  {
    number: "02",
    title: "Authenticate",
    description: "Submit login credentials and verify the user identity.",
  },
  {
    number: "03",
    title: "Authorize",
    description: "Authenticated users gain access to protected resources.",
  },
  {
    number: "04",
    title: "Logout",
    description: "Terminate the authenticated session when the user signs out.",
  },
];

const technologies = [
  "PHP",
  "CodeIgniter 4",
  "MySQL",
  "HTML",
  "CSS",
  "JavaScript",
];

export default function SecureAuthenticationPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#08090d] text-white">
      {/* Navigation */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#08090d]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight transition hover:text-cyan-400"
          >
            Baraa<span className="text-cyan-400">.</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#overview"
              className="text-sm text-white/65 transition hover:text-white"
            >
              Overview
            </a>
            <a
              href="#features"
              className="text-sm text-white/65 transition hover:text-white"
            >
              Features
            </a>
            <a
              href="#flow"
              className="text-sm text-white/65 transition hover:text-white"
            >
              Auth Flow
            </a>
            <a
              href="#stack"
              className="text-sm text-white/65 transition hover:text-white"
            >
              Stack
            </a>
          </nav>

          <div className="hidden md:block">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium transition hover:border-cyan-400/50 hover:bg-cyan-400/10"
            >
              <FiArrowLeft size={15} />
              Back to Work
            </Link>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-white/10 p-2.5 text-white transition hover:border-cyan-400/40 hover:text-cyan-400 md:hidden"
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#08090d] px-5 py-6 md:hidden">
            <nav className="flex flex-col gap-5">
              <a
                href="#overview"
                onClick={closeMenu}
                className="text-sm text-white/70 hover:text-white"
              >
                Overview
              </a>

              <a
                href="#features"
                onClick={closeMenu}
                className="text-sm text-white/70 hover:text-white"
              >
                Features
              </a>

              <a
                href="#flow"
                onClick={closeMenu}
                className="text-sm text-white/70 hover:text-white"
              >
                Auth Flow
              </a>

              <a
                href="#stack"
                onClick={closeMenu}
                className="text-sm text-white/70 hover:text-white"
              >
                Stack
              </a>

              <Link
                href="/work"
                onClick={closeMenu}
                className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm"
              >
                <FiArrowLeft size={15} />
                Back to Work
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="overview"
        className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8"
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[110px]" />

        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-medium text-cyan-300">
              <FiShield size={14} />
              Authentication System
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Secure
              <span className="text-cyan-400"> Authentication</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
              A standalone authentication project focused on building a
              structured login system, user authentication flow, protected
              resources, and secure session handling.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300"
              >
                Explore Project
                <FiArrowRight size={17} />
              </a>

              <a
                href="https://github.com/baraaprtm"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold transition hover:border-white/30 hover:bg-white/5"
              >
                <FiGithub size={17} />
                GitHub
              </a>
            </div>
          </div>

          {/* Authentication Preview */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] bg-cyan-400/5 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#101218] shadow-2xl shadow-black/40">
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                <div>
                  <p className="text-sm font-semibold">Secure Login</p>
                  <p className="mt-1 text-xs text-white/40">
                    Authentication Portal
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  <FiLock size={18} />
                </div>
              </div>

              <div className="space-y-5 p-6">
                <div>
                  <label className="mb-2 block text-xs text-white/50">
                    Email Address
                  </label>
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/35">
                    user@example.com
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs text-white/50">
                    Password
                  </label>
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/35">
                    ••••••••••••
                  </div>
                </div>

                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 py-3 text-sm font-semibold text-black"
                >
                  <FiLogIn size={16} />
                  Sign In
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-white/40">
                  <FiCheckCircle className="text-cyan-400" size={14} />
                  Protected authentication flow
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="border-t border-white/5 bg-[#0b0c11] px-5 py-24 sm:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Features
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Built around secure authentication
            </h2>

            <p className="mt-5 leading-7 text-white/55">
              The project demonstrates the fundamental components required to
              build a structured authentication system for modern applications.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.03]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 transition group-hover:bg-cyan-400 group-hover:text-black">
                    <Icon size={20} />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/45">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Authentication Flow */}
      <section id="flow" className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Authentication Flow
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              From registration to logout
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/50">
              A simple authentication lifecycle showing how users move through
              the system.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {authFlow.map((step) => (
              <div
                key={step.number}
                className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-6"
              >
                <span className="text-sm font-bold text-cyan-400">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>

                <p className="mt-3 text-sm leading-6 text-white/45">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section
        id="stack"
        className="border-y border-white/5 bg-[#0b0c11] px-5 py-24 sm:px-8"
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Technology Stack
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Technologies behind the project
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-white/50">
              The project uses a practical web development stack focused on
              server-side authentication, database interaction, and a simple
              user interface.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {technologies.map((technology) => (
              <div
                key={technology}
                className="flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] px-4 py-5 text-sm font-medium text-white/75 transition hover:border-cyan-400/30 hover:text-cyan-300"
              >
                {technology}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 sm:px-8">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.04] px-6 py-14 text-center sm:px-10">
          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[100px]" />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400">
              <FiShield size={26} />
            </div>

            <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
              Authentication built with security in mind.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/50">
              Explore the rest of my projects and see how I approach different
              software development challenges.
            </p>

            <Link
              href="/work"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300"
            >
              View More Projects
              <FiArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-white/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Baraa Pratama. All rights reserved.
          </p>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 transition hover:text-white"
          >
            <FiArrowLeft size={14} />
            Back to Portfolio
          </Link>
        </div>
      </footer>
    </main>
  );
}
