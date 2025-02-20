import { useState, useRef } from "react";
import Ripples from "react-ripples";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [alert, setAlert] = useState({ type: "", message: "", visible: false });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleCloseAlert = () => {
    setAlert({ ...alert, visible: false });
  };

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!navigator.onLine) {
      setAlert({
        type: "error",
        message:
          "Make sure everything is filled in or check your network connection.",
        visible: true,
      });
      return;
    }
    setIsSending(true);
    try {
      await emailjs.sendForm(
        "service_zik0kzm",
        "template_p921x97",
        form.current,
        "QG2TZtjMy86-9GdFM"
      );

      setIsSent(true);
      setIsSending(false);
      setAlert({
        type: "success",
        message: "Thank You! We have received your message.",
        visible: true,
      });
      form.current.reset();
      setTimeout(() => {
        setIsSent(false);
      }, 2000);
    } catch {
      setIsSending(false);
      setAlert({
        type: "error",
        message:
          "Make sure everything is filled in or check your network connection.",
        visible: true,
      });
    }
  };

  const fadeInOutClass = (isVisible) =>
    isVisible ? "animate-fadeIn" : "animate-fadeOut";

  return (
    <>
      <div className="py-10">
        <h5
          data-aos="fade"
          data-aos-duration="700"
          data-aos-offset="350"
          className="text-xs text-cyan-500 font-semibold text-center"
        >
          Contact
        </h5>
        <h1
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-offset="350"
          className="text-3xl font-bold pb-5 text-center md:text-6xl"
        >
          👋Let&apos;s get connected!
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-offset="350"
          className="w-[90%] mx-auto text-center text-slate-500 pb-20 text-sm md:text-base lg:w-1/2"
        >
          Feel free to reach out if you’re interested in collaborating on a
          project, have any questions, or just want to connect. I’m always open
          to new opportunities and conversations!
        </p>

        <form
          className="w-[90%] mx-auto"
          id="contactForm"
          ref={form}
          onSubmit={sendEmail}
        >
          {/* Alert */}
          {alert.visible && (
            <div className="w-full px-4 mb-8 lg:mx-auto lg:w-3/4">
              <div
                className={`items-center justify-between py-3 px-4 rounded bg-slate-700 ${
                  alert.type === "error"
                    ? "flex text-red-400"
                    : "flex text-green-500"
                }`}
              >
                <div className="flex items-center gap-3">
                  <svg
                    className="flex-shrink-0 w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span className="font-medium">{alert.message}</span>
                </div>
                <div
                  className="cursor-pointer p-3 bg-transparent rounded-md transition duration-150 hover:bg-slate-600"
                  onClick={handleCloseAlert}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </div>
              </div>
            </div>
          )}

          <div className="w-full lg:mx-auto lg:w-3/4">
            <div className="mb-8 w-full px-4">
              <div
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-offset="350"
              >
                <label
                  htmlFor="from_name"
                  className="text-base font-bold text-cyan-500"
                >
                  Name
                </label>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-offset="350"
              >
                <input
                  placeholder="Your Name"
                  name="from_name"
                  type="text"
                  id="from_name"
                  spellCheck="false"
                  className="w-full mt-1 p-3 border rounded-md placeholder:text-sm transition duration-200 bg-slate-200 text-slate-950 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:ring-opacity-50 md:placeholder:text-base"
                  required
                />
              </div>
            </div>

            <div className="mb-8 w-full px-4">
              <div
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-offset="350"
              >
                <label
                  htmlFor="email"
                  className="text-base font-bold text-cyan-500"
                >
                  Email
                </label>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-offset="350"
              >
                <input
                  placeholder="Your Email"
                  type="email"
                  id="email"
                  name="email"
                  spellCheck="false"
                  className="w-full mt-1 p-3 border rounded-md placeholder:text-sm transition duration-200 bg-slate-200 text-slate-950 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:ring-opacity-50 md:placeholder:text-base"
                  required
                />
              </div>
            </div>

            <div className="mb-8 w-full px-4">
              <div
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-offset="350"
              >
                <label
                  htmlFor="message"
                  className="text-base font-bold text-cyan-500"
                >
                  Message
                </label>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-offset="350"
              >
                <textarea
                  placeholder="Message"
                  name="message"
                  type="text"
                  id="message"
                  spellCheck="false"
                  className="w-full h-40 mt-1 p-3 placeholder:text-sm border rounded-md transition duration-200 bg-slate-200 text-slate-950 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:ring-opacity-50 md:placeholder:text-base"
                  required
                ></textarea>
              </div>
            </div>

            <div className="w-full px-4" id="btnKirim">
              <div
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-offset="250"
                className="w-full"
              >
                <Ripples className="w-full inline-block" during={2000}>
                  <button
                    onMouseEnter={() => setIsVisible(true)}
                    onMouseLeave={() => setIsVisible(false)}
                    onMouseMove={handleMouseMove}
                    type="submit"
                    className="btnKirim w-full rounded-full bg-cyan-500 h-12 px-8 text-base font-semibold cursor-pointer text-white transition duration-500 hover:opacity-80 hover:shadow-lg"
                    disabled={isSending}
                  >
                    <span
                      id="teks1"
                      className={`transform ${
                        isSending || isSent ? "hidden" : ""
                      } ${fadeInOutClass(!isSending && !isSent)}`}
                    >
                      Send
                    </span>
                    <span
                      id="teks2"
                      className={`transform ${
                        isSending ? "flex" : "hidden"
                      } items-center justify-center gap-1 ${fadeInOutClass(
                        isSending
                      )}`}
                    >
                      <div
                        className="inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status"
                      ></div>
                      Sending data...
                    </span>
                    <span
                      id="teks3"
                      className={`transform ${
                        isSent ? "flex" : "hidden"
                      } items-center justify-center ${fadeInOutClass(isSent)}`}
                    >
                      Success
                    </span>
                  </button>
                </Ripples>
              </div>

              <div
                className={`absolute bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg transition-opacity duration-300 ease-in-out ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
                style={{
                  top: position.y + 10, // Tooltip muncul sedikit di bawah kursor
                  left: position.x + 15, // Tooltip di samping kanan kursor
                  position: "fixed",
                  pointerEvents: "none", // Agar tidak mengganggu interaksi kursor
                  transformOrigin: "top left",
                }}
              >
                Button Submit
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
