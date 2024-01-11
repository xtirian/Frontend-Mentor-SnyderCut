"use client";
import React, { useState } from "react";
import Header from "./header";


interface FooterProps {
  divRef: React.LegacyRef<HTMLElement> | undefined
}

export default function Footer({divRef}:FooterProps) {
  const [emailValid, setEmailValid] = useState<boolean | undefined>(undefined);
  const [nameValid, setNameValid] = useState<boolean | undefined>(undefined);
  const [messagelValid, setMessageValid] = useState<boolean | undefined>(
    undefined
  );






  return (
    <footer className=" relative md:mt-[100px] lg:mt-[59px] py-[60px] md:pt-[84px] lg:pb-[92px] bg-DarkGrey before:content-[''] before:inset-1 before:bg-rings before:bg-no-repeat before:bg-[top_327px_left_-205px] before:absolute">
      <div className="container relative mx-auto border-b-2 border-b-[#979797] mb-[15px] flex flex-col items-center lg:flex-row lg:justify-between text-center">
        <section className="max-w-[445px] mb-[50px] md:mb-0" ref={divRef&&divRef}>
          <h2 className="text-White text-[5rem]/[5rem] md:text-xl mb-[20px] lg:mb-[38px]">
            Contact
          </h2>
          <p className="text-Grey text-body md:mb-[48px] lg:mb-[211px]">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </section>
        <form
          action="https://formspree.io/f/mgejklpd"
          id="contactForm"
          className="flex flex-wrap justify-end md:w-[445px] gap-y-[32px] mb-[87px] md:mb-[92px]"
          method="POST"
        >
          <label
            className={`w-full h-[43px] pb-[2rem] border-b-2  focus-within:border-Green ${
              nameValid == undefined && "border-[#979797]"
            } ${
              nameValid !== undefined && nameValid == true ? "border-Green" : ""
            } ${
              nameValid !== undefined && nameValid == false
                ? "border-[#FF6F5B]"
                : ""
            }`}
            id="nameLabel"
          >
            <input
              type="text"
              name="name"
              className="text-form text-White bg-transparent w-full focus:ring-0 border-0 uppercase"
              placeholder="NAME"
              id="nameInput"
              minLength={3}
              required
              onChange={(e) => {
                if (e.target.value.length >= 3) {
                  setNameValid(true);
                }
                if (e.target.value.length < 3) {
                  setNameValid(false);
                }
                if (e.target.value.length == 0) {
                  setNameValid(undefined);
                }
              }}
            />
          </label>

          <label
            id="emailLabel"
            className={`relative w-full h-[43px] pb-[2rem] border-b-2  focus-within:border-Green ${
              emailValid == undefined && "border-[#979797]"
            } ${
              emailValid !== undefined && emailValid == true
                ? "border-Green"
                : ""
            } ${
              emailValid !== undefined && emailValid == false
                ? "border-[#FF6F5B]"
                : ""
            }`}
          >
            <input
              type="email"
              name="email"
              placeholder="email"
              className="text-form text-White bg-transparent w-full focus:ring-0 border-0 uppercase"
              onChange={(e) => {
                if (e.target.validity.typeMismatch == true) {
                  setEmailValid(false);
                }

                if (e.target.validity.typeMismatch == false) {
                  setEmailValid(true);
                }

                if (e.target.value.length == 0) {
                  setEmailValid(undefined);
                }

                console.log(emailValid);
              }}
              id="emailInput"
              required
            />
            <img
              src="/images/icons/icon-error.svg"
              className={`w-auto h-auto absolute top-0 right-0 ${
                emailValid == undefined || emailValid == true ? "hidden" : ""
              } ${
                emailValid !== undefined && emailValid == false ? "flex" : ""
              }`}
              alt="error icon"
              id="errorIcon"
            />
            <span
              className={`text-[12px]/[16px] text-500 text-[#FF6F5B] absolute bottom-[-25px] right-0 ${
                emailValid == undefined || emailValid == true ? "hidden" : ""
              }`}
              id="emailAlert"
            >
              Sorry, invalid format here
            </span>
          </label>

          <label
            className={`w-full pb-[2rem] h-[107px] border-b-2 focus-within:border-Green ${
              messagelValid == undefined && "border-[#979797]"
            } ${
              messagelValid !== undefined && messagelValid == true
                ? "border-Green"
                : ""
            } ${
              messagelValid !== undefined && messagelValid == false
                ? "border-[#FF6F5B]"
                : ""
            }`}
            id="messageLabel"
          >
            <textarea
              name="message"
              id="messageInput"
              cols={30}
              rows={3}
              className="text-form text-White bg-transparent w-full focus:ring-0 border-0 uppercase"
              placeholder="message"
              minLength={10}
              required
              onChange={(e) => {
                if (e.target.value.length >= 10) {
                  setMessageValid(true);
                }
                if (e.target.value.length < 10) {
                  setMessageValid(false);
                }
                if (e.target.value.length == 0) {
                  setMessageValid(undefined);
                }
              }}
            ></textarea>
          </label>

          <div className="flex border-b-2 border-b-Green pb-5 w-content">
            <button
              className="text-White  text-[2rem]/[3.25rem] uppercase tracking-[0.28625rem] cursor-pointer hover:text-Green transition-colors ease-in duration-300"
              type="submit"
              value="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <Header />
    </footer>
  );
}
