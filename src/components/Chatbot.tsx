'use client';

import { useState } from 'react';
import { FiMessageSquare, FiSend, FiHome } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';

const ChatBotWidget = () => {
  const [open, setOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent!");
    setFormData({ name: '', email: '', message: '' });
    setShowForm(false);
  };

  return (
    <>
      {/* Floating Button - Made larger on mobile for better touch targets */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 bg-teal-500 hover:bg-teal-600 text-white p-4 rounded-full shadow-lg z-50 transition-transform duration-200 hover:scale-105
                  md:p-4 sm:p-3"
        aria-label="Chat Support"
      >
        {open ? <IoMdClose size={24} /> : <FiMessageSquare size={24} />}
      </button>

      {/* Chat Panel - Responsive sizing and positioning */}
      {open && (
        <div className="fixed bottom-20 right-4 w-[90vw] max-w-[320px] bg-teal-500 text-white rounded-lg shadow-xl z-50 overflow-hidden flex flex-col
                        sm:max-w-[350px] md:max-w-[400px]"
             style={{ maxHeight: 'calc(100vh - 120px)' }}>
          <div className="p-4 overflow-y-auto flex-1">
            {!showForm ? (
              <>
                <p className="text-sm leading-relaxed sm:text-base">
                  Need help? Search our help center for answers or start a conversation:
                </p>

                <div
                  className="lg:mt-4 mt-2 bg-white text-black rounded-lg p-3 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition
                            sm:p-4"
                  onClick={() => setShowForm(true)}
                >
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base">New Conversation</h4>
                    <p className="text-xs text-gray-500 sm:text-sm">We typically reply in a few minutes</p>
                  </div>
                  <FiSend className="text-teal-500 text-xl" />
                </div>
              </>
            ) : (
              <>
                {/* Back Arrow */}
                <div className="flex items-center lg:mb-3 mb-1 cursor-pointer" onClick={() => setShowForm(false)}>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                  <h3 className="text-lg font-semibold sm:text-xl">Start a Conversation</h3>
                </div>

                <form onSubmit={handleFormSubmit} className="lg:space-y-3 space-y-1 text-white">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full p-2 rounded border border-gray-100 text-white bg-transparent text-sm focus:outline-none focus:ring-0 placeholder-gray-200
                              sm:text-base"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full p-2 rounded border border-gray-100 text-white bg-transparent text-sm focus:outline-none focus:ring-0 placeholder-gray-200
                              sm:text-base"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={3}
                    className="w-full p-2 rounded border border-gray-100 text-white bg-transparent text-sm focus:outline-none focus:ring-0 placeholder-gray-200
                              sm:text-base"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-white text-teal-600 font-semibold py-1 lg:py-2 rounded hover:bg-gray-100 transition
                              sm:text-base sm:py-3"
                  >
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Bottom Nav - Improved touch targets */}
          <div className="bg-white flex justify-around py-1 lg:py-3 border-t text-teal-600 text-xl
                          sm:py-4">
            <button 
              onClick={() => setShowForm(false)} 
              title="Home"
              className="lg:p-2 py-1 rounded-full hover:bg-gray-100 transition"
            >
              <FiHome />
            </button>
            <button 
              onClick={() => setShowForm(true)} 
              title="Start Chat"
              className="lg:p-2 py-1 rounded-full hover:bg-gray-100 transition"
            >
              💬
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBotWidget;