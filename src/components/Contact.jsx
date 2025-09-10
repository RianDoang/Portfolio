import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Ripples from "react-ripples";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [alert, setAlert] = useState({ type: "", message: "", visible: false });

  const [hasAnimated, setHasAnimated] = useState(false);
  const [triggerPoint, setTriggerPoint] = useState(false);
  const [hasAnimatedForm, setHasAnimatedForm] = useState(false);
  const [triggerForm, setTriggerForm] = useState(false);

  useEffect(() => {
    const updateTriggers = () => {
      if (window.innerWidth < 768) {
        // Mobile
        setTriggerPoint(4135);
        setTriggerForm(4444);
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        // Tablet
        setTriggerPoint(3280);
        setTriggerForm(3520);
      } else {
        // Desktop
        setTriggerPoint(3220);
        setTriggerForm(3380);
      }
    };

    updateTriggers();
    window.addEventListener("resize", updateTriggers);

    return () => window.removeEventListener("resize", updateTriggers);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > triggerPoint && !hasAnimated) {
        setHasAnimated(true);
      }

      if (window.scrollY > triggerForm && !hasAnimatedForm) {
        setHasAnimatedForm(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [triggerPoint, hasAnimated, triggerForm, hasAnimatedForm]);

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
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: hasAnimated ? 1 : 0,
          }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h5 className="text-center text-xs font-semibold text-cyan-500">
            Contact
          </h5>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: hasAnimated ? 1 : 0,
            y: hasAnimated ? 0 : 50,
          }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="pb-5 text-center text-3xl font-semibold sm:text-5xl md:text-6xl">
            👋 Let&apos;s get in!
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: hasAnimated ? 1 : 0,
            y: hasAnimated ? 0 : 50,
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="mx-auto w-[90%] pb-20 text-center text-sm text-slate-500 sm:text-base lg:w-1/2">
            Feel free to reach out if you’re interested in collaborating on a
            project, have any questions, or just want to connect. I’m always
            open to new opportunities and conversations!
          </p>
        </motion.div>

        <form
          className="mx-auto w-[90%]"
          id="contactForm"
          ref={form}
          onSubmit={sendEmail}
        >
          {/* Alert */}
          {alert.visible && (
            <div className="mb-8 w-full px-0 lg:mx-auto lg:w-3/4 lg:px-4">
              <div
                className={`items-center justify-between rounded bg-slate-700 px-4 py-3 ${
                  alert.type === "error"
                    ? "flex text-red-400"
                    : "flex text-green-500"
                }`}
              >
                <div className="flex items-center gap-3">
                  <svg
                    className="h-4 w-4 flex-shrink-0"
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
                  className="cursor-pointer rounded-md bg-transparent p-3 transition duration-150 hover:bg-slate-600"
                  onClick={handleCloseAlert}
                >
                  <svg
                    className="h-3 w-3"
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
            <div className="mb-8 w-full px-0 lg:px-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: hasAnimatedForm ? 1 : 0,
                  y: hasAnimatedForm ? 0 : 50,
                }}
                transition={{ duration: 0.5 }}
              >
                <label
                  htmlFor="from_name"
                  className="text-base font-bold text-cyan-500"
                >
                  Name
                </label>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: hasAnimatedForm ? 1 : 0,
                  y: hasAnimatedForm ? 0 : 50,
                }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <input
                  placeholder="Your Name"
                  name="from_name"
                  type="text"
                  id="from_name"
                  spellCheck="false"
                  className="focus:ring-opacity-50 mt-1 w-full rounded-md border bg-slate-200 p-3 text-slate-950 transition duration-200 placeholder:text-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none md:placeholder:text-base"
                  required
                />
              </motion.div>
            </div>

            <div className="mb-8 w-full px-0 lg:px-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: hasAnimatedForm ? 1 : 0,
                  y: hasAnimatedForm ? 0 : 50,
                }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <label
                  htmlFor="email"
                  className="text-base font-bold text-cyan-500"
                >
                  Email
                </label>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: hasAnimatedForm ? 1 : 0,
                  y: hasAnimatedForm ? 0 : 50,
                }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <input
                  placeholder="Your Email"
                  type="email"
                  id="email"
                  name="email"
                  spellCheck="false"
                  className="focus:ring-opacity-50 mt-1 w-full rounded-md border bg-slate-200 p-3 text-slate-950 transition duration-200 placeholder:text-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none md:placeholder:text-base"
                  required
                />
              </motion.div>
            </div>

            <div className="mb-8 w-full px-0 lg:px-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: hasAnimatedForm ? 1 : 0,
                  y: hasAnimatedForm ? 0 : 50,
                }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label
                  htmlFor="message"
                  className="text-base font-bold text-cyan-500"
                >
                  Message
                </label>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: hasAnimatedForm ? 1 : 0,
                  y: hasAnimatedForm ? 0 : 50,
                }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <textarea
                  placeholder="Message"
                  name="message"
                  type="text"
                  id="message"
                  spellCheck="false"
                  className="focus:ring-opacity-50 mt-1 h-40 w-full rounded-md border bg-slate-200 p-3 text-slate-950 transition duration-200 placeholder:text-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none md:placeholder:text-base"
                  required
                ></textarea>
              </motion.div>
            </div>

            <div className="w-full px-0 lg:px-4" id="btnKirim">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: hasAnimatedForm ? 1 : 0,
                  y: hasAnimatedForm ? 0 : 50,
                }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="w-full"
              >
                <Ripples className="inline-block w-full" during={2000}>
                  <button
                    onMouseEnter={() => setIsVisible(true)}
                    onMouseLeave={() => setIsVisible(false)}
                    onMouseMove={handleMouseMove}
                    type="submit"
                    className="btnKirim h-12 w-full cursor-pointer rounded-full bg-cyan-500 px-8 text-base font-semibold text-white transition duration-300 hover:opacity-80 hover:shadow-lg"
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
                        isSending,
                      )}`}
                    >
                      <div
                        className="text-surface inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
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
              </motion.div>

              <div
                className={`absolute rounded bg-gray-800 px-2 py-1 text-xs text-white shadow-lg transition-opacity duration-300 ease-in-out ${
                  isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
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
