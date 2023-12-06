import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center text-[#5e0037]">
        Contact
      </h1>
      <form
        action="https://getform.io/f/6595fc66-472f-4e9b-9448-66929c6081cc"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-1 gap-4 w-full">
          <div className="flex flex-col">
            <label className="uppercase text-sm">Name</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm">Phone Number</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="phone"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm">Email</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="email"
              name="email"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm">Subject</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="subject"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm">Message</label>
            <textarea
              className="border-2 rounded-lg p-3 border-gray-300"
              rows="10"
              name="message"
            ></textarea>
          </div>
          <button className="bg-[#5e0037] text-gray-100 mt-4 w-full p-4 rounded-lg ">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
