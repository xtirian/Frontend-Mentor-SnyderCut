import Header from "./header";

export default function Footer() {
  return (
    <footer className=" relative mt-[59px] pt-[84px] pb-[92px] bg-DarkGrey before:content-[''] before:inset-1 before:bg-rings before:bg-no-repeat before:bg-[top_327px_left_-205px] before:absolute">
      <div className="container relative mx-auto border-b-2 border-b-[#979797] mb-[15px] flex justify-between">
        <section className="max-w-[445px]">
          <h2 className="text-White text-xl mb-[38px]">Contact</h2>
          <p className="text-Grey text-body mb-[211px]">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </section>
        <form action="" className="flex flex-wrap justify-end w-[445px] gap-y-[32px] mb-[92px]">
          <label className="w-full h-[43px] pb-[2rem] border-b-2 border-[#979797] focus-within:border-Green">
            <input type="text" name="name" className="text-form text-White bg-transparent w-full focus:ring-0 border-0 uppercase" placeholder="NAME" id="nameInput" />
          </label>

          <label className="w-full h-[43px] pb-[2rem] border-b-2 border-[#979797] focus-within:border-Green">
            <input type="email" name="email" placeholder="email" className="text-form text-White bg-transparent w-full focus:ring-0 border-0 uppercase" id="emailInput" required />
          </label>

          <label className="w-full pb-[2rem] h-[107px] border-b-2 border-[#979797] focus-within:border-Green">
            <textarea
              name="nessage"
              id="messageInput"
              cols={30}
              rows={3}
              className="text-form text-White bg-transparent w-full focus:ring-0 border-0 uppercase"
              placeholder="message" 
            ></textarea>
          </label>

          <div className="flex border-b-2 border-b-Green pb-5 w-content">
            <button
              className="text-White  text-[2rem]/[3.25rem] uppercase tracking-[0.28625rem] cursor-pointer hover:text-Green"
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
