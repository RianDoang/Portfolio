import { Suspense, lazy } from "react";
import RotatingText from "../components/animation/RotatingText";
import PropTypes from "prop-types";

const ProfileAnim = lazy(() =>
  import("../components/animation/Animation").then((module) => ({
    default: module.ProfileAnim,
  }))
);

export default function Profile({ handleContactClick }) {
  return (
    <>
      <div className="w-full text-slate-50 lg:w-1/2">
        <div className="text-[22px] font-medium flex items-center gap-2 md:text-2xl">
          <h1>I&apos;m a</h1>

          <RotatingText
            texts={[
              "Front-End Developer",
              "Web Designer",
              "Network Infrastructure",
            ]}
            mainClassName="overflow-hidden justify-center rounded-lg font-semibold italic text-white"
            staggerFrom={"first"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden"
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            rotationInterval={2500}
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold md:text-6xl">Muhamad Riansyah</h1>
          <p className="text-slate-500 mt-3 text-sm">
            Call me Rian, graduated from SMK Letris Indonesia 1 majoring in
            Computer and Network Engineering which I chose for the 2021/2024
            period.
          </p>
        </div>
        <div className="flex gap-7 mt-7">
          {/* Gmail */}
          <a
            href="#contact"
            onClick={handleContactClick}
            className="w-10 h-10 flex items-center justify-center p-1 rounded-lg transition duration-300 ease-in-out bg-slate-300 hover:rotate-3 hover:scale-110 hover:shadow-md hover:shadow-slate-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <path
                fill="#4caf50"
                d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
              ></path>
              <path
                fill="#1e88e5"
                d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
              ></path>
              <polygon
                fill="#e53935"
                points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
              ></polygon>
              <path
                fill="#c62828"
                d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
              ></path>
              <path
                fill="#fbc02d"
                d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
              ></path>
            </svg>
          </a>

          {/* Github */}
          <a
            href="https://github.com/riandoang/"
            target="_blank"
            className="w-10 h-10 flex items-center justify-center p-1 rounded-lg transition duration-300 ease-in-out bg-slate-300 hover:rotate-3 hover:scale-110 hover:shadow-md hover:shadow-slate-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
              <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
            </svg>
          </a>

          {/* Linkeind */}
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center p-1 rounded-lg transition duration-300 ease-in-out bg-slate-300 hover:rotate-3 hover:scale-110 hover:shadow-md hover:shadow-slate-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <path
                fill="#0078d4"
                d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
              ></path>
              <path
                d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
                opacity=".05"
              ></path>
              <path
                d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
                opacity=".07"
              ></path>
              <path
                fill="#fff"
                d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center md:justify-end">
        <Suspense>
          <ProfileAnim />
        </Suspense>
      </div>
    </>
  );
}

Profile.propTypes = {
  handleContactClick: PropTypes.func.isRequired,
};
