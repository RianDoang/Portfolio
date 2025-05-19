import AnimProfile from "../../assets/anim/ProfileAnim.json";
import AnimProfileMobile from "../../assets/anim/ProfileMobile.png";
import AnimAbout from "../../assets/anim/AboutAnim.json";
import Lottie from "lottie-react";

export function ProfileAnim() {
  return (
    <div className="hidden w-72 md:flex md:w-80 lg:w-96">
      <Lottie animationData={AnimProfile} loop={true} />
    </div>
  );
}

export function ProfileMobileAnim() {
  return (
    <div className="mx-auto flex w-3/5 min-w-48 sm:w-1/2 md:hidden">
      <img src={AnimProfileMobile} alt="Profile Mobile Animation" />
    </div>
  );
}

export function AboutAnim() {
  return (
    <div className="w-72 md:w-80 lg:w-96">
      <Lottie animationData={AnimAbout} loop={true} />
    </div>
  );
}
