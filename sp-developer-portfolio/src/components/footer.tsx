"use client"; 

import Image from 'next/image';
import React, { useEffect } from 'react'
import Header from "./header";



export default function Footer() {



  useEffect(() => {

    //email verification
    const email = document.getElementById('emailInput') as HTMLInputElement;

    let emailLabel = document.getElementById('emailLabel') as HTMLElement;
    let emailIcon = document.getElementById('errorIcon') as HTMLElement;
    let emailAlert = document.getElementById('emailAlert') as HTMLElement;

    
  
    email.addEventListener('input', e => {      
  
      if (email.validity.typeMismatch){      
      emailLabel.classList.remove("focus-within:border-Green")
      emailLabel.classList.remove("border-Green");
      emailLabel.classList.add("border-[#FF6F5B]");

      emailIcon.classList.add("flex")
      emailIcon.classList.remove("hidden")

      emailAlert.classList.add("flex")
      emailAlert.classList.remove("hidden")
      } else {
      emailLabel.classList.add("border-Green");
      emailLabel.classList.remove("border-[#FF6F5B]");
      emailLabel.classList.remove("border-[#979797]");

      emailIcon.classList.remove("flex")
      emailIcon.classList.add("hidden")

      emailAlert.classList.remove("flex")
      emailAlert.classList.add("hidden")
      }
      
    })

    //name and textarea verification
    const message = document.getElementById('messageInput') as HTMLInputElement;
    let messageLabel = document.getElementById('messageLabel') as HTMLElement;

    message.addEventListener('input', e => {
      if(message.validity.tooShort){
        messageLabel.classList.remove("focus-within:border-Green");
        messageLabel.classList.remove("border-Green");
        messageLabel.classList.add("border-[#FF6F5B]");
      } else {
        messageLabel.classList.add("border-Green");
       messageLabel.classList.remove("border-[#FF6F5B]");
       messageLabel.classList.remove("border-[#979797]");
      }
    })
    


    const name = document.getElementById('nameInput') as HTMLInputElement;
    let nameLabel = document.getElementById('nameLabel') as HTMLElement;

    name.addEventListener('input', e => {
      if(name.validity.tooShort){       
        nameLabel.classList.remove("focus-within:border-Green")
        nameLabel.classList.remove("border-Green");
        nameLabel.classList.add("border-[#FF6F5B]");
        
      } else {    
        nameLabel.classList.remove("border-[#FF6F5B]");
        nameLabel.classList.add("border-Green");
        nameLabel.classList.remove("border-[#979797]");
        

      }
      
    }    
    )

    
    


  }, []);

  return (
    <footer className=" relative md:mt-[100px] lg:mt-[59px] py-[60px] md:pt-[84px] lg:pb-[92px] bg-DarkGrey before:content-[''] before:inset-1 before:bg-rings before:bg-no-repeat before:bg-[top_327px_left_-205px] before:absolute">
      <div className="container relative mx-auto border-b-2 border-b-[#979797] mb-[15px] flex flex-col items-center lg:flex-row lg:justify-between text-center">
        <section className="max-w-[445px] mb-[50px] md:mb-0">
          <h2 className="text-White text-[5rem]/[5rem] md:text-xl mb-[20px] lg:mb-[38px]">Contact</h2>
          <p className="text-Grey text-body md:mb-[48px] lg:mb-[211px]">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </section>
        <form action="https://formspree.io/f/mgejklpd" className="flex flex-wrap justify-end md:w-[445px] gap-y-[32px] mb-[87px] md:mb-[92px]" method='POST'>
          <label className="w-full h-[43px] pb-[2rem] border-b-2 border-[#979797] focus-within:border-Green" id="nameLabel">
            <input type="text" name="name" className="text-form text-White bg-transparent w-full focus:ring-0 border-0 uppercase" placeholder="NAME" id="nameInput" minLength={3} required />
          </label>

          <label id='emailLabel' className="relative w-full h-[43px] pb-[2rem] border-b-2 border-[#979797] focus-within:border-Green ">
            <input type="email" name="email" placeholder="email" className="text-form text-White bg-transparent w-full focus:ring-0 border-0 uppercase" id="emailInput" required  />
            <img src="/images/icons/icon-error.svg" className="w-auto h-auto absolute top-0 right-0 hidden" alt="error icon" id="errorIcon" />
            <span className="text-[12px]/[16px] text-500 text-[#FF6F5B] absolute bottom-[-25px] right-0 hidden" id="emailAlert">Sorry, invalid format here</span>
          </label>

          <label className="w-full pb-[2rem] h-[107px] border-b-2 border-[#979797] focus-within:border-Green" id="messageLabel">
            <textarea
              name="message"
              id="messageInput"
              cols={30}
              rows={3}
              className="text-form text-White bg-transparent w-full focus:ring-0 border-0 uppercase"
              placeholder="message" minLength={10} required 
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
