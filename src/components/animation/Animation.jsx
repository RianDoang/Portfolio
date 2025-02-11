import { useState, useEffect, useRef } from "react";
import AnimProfile from "../../assets/anim/ProfileAnim.json";
import AnimProfileMobile from "../../assets/anim/ProfileMobile.png";
import AnimAbout from "../../assets/anim/AboutAnim.json";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Lottie from "lottie-react";

export function ProfileAnim() {
  return (
    <div className="w-72 hidden md:flex md:w-80 lg:w-96">
      <Lottie animationData={AnimProfile} loop={true} />
    </div>
  );
}

ProfileAnim.propTypes = {
  // Define prop types if any
};

export function ProfileMobileAnim() {
  return (
    <div className="w-3/5 flex mx-auto sm:w-1/2 md:hidden">
      <img src={AnimProfileMobile} alt="Profile Mobile Animation" />
    </div>
  );
}

export function BgAstroAnim() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Perubahan warna dari ungu -> biru -> hijau berdasarkan scroll
  const colorChange = `rgb(${150 - offsetY * 0.05}, ${50 + offsetY * 0.05}, ${
    255 - offsetY * 0.1
  })`;

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      <div className="relative">
        <motion.div
          className="absolute top-60 left-1 w-1/2 h-32 opacity-70 rounded-full blur-3xl"
          style={{
            backgroundColor: colorChange, // Perubahan warna
          }}
        />

        <motion.div
          className="absolute top-96 w-24 h-96 opacity-70 rounded-full blur-3xl"
          style={{
            backgroundColor: colorChange, // Perubahan warna
          }}
        />
      </div>
    </div>
  );
}

BgAstroAnim.propTypes = {
  // Define prop types if any
};

export function AboutAnim() {
  return (
    <div className="w-72 md:w-80 lg:w-96">
      <Lottie animationData={AnimAbout} loop={true} />
    </div>
  );
}

AboutAnim.propTypes = {
  // Define prop types if any
};

export function Noise({
  patternSize = 250,
  patternScaleX = 1,
  patternScaleY = 1,
  patternRefreshInterval = 2,
  patternAlpha = 15,
}) {
  const grainRef = useRef(null);

  useEffect(() => {
    const canvas = grainRef.current;
    const ctx = canvas.getContext("2d");
    let frame = 0;

    const patternCanvas = document.createElement("canvas");
    patternCanvas.width = patternSize;
    patternCanvas.height = patternSize;
    const patternCtx = patternCanvas.getContext("2d");
    const patternData = patternCtx.createImageData(patternSize, patternSize);
    const patternPixelDataLength = patternSize * patternSize * 4;

    const resize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;

      ctx.scale(patternScaleX, patternScaleY);
    };

    const updatePattern = () => {
      for (let i = 0; i < patternPixelDataLength; i += 4) {
        const value = Math.random() * 255;
        patternData.data[i] = value;
        patternData.data[i + 1] = value;
        patternData.data[i + 2] = value;
        patternData.data[i + 3] = patternAlpha;
      }
      patternCtx.putImageData(patternData, 0, 0);
    };

    const drawGrain = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = ctx.createPattern(patternCanvas, "repeat");
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const loop = () => {
      if (frame % patternRefreshInterval === 0) {
        updatePattern();
        drawGrain();
      }
      frame++;
      window.requestAnimationFrame(loop);
    };

    window.addEventListener("resize", resize);
    resize();
    loop();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [
    patternSize,
    patternScaleX,
    patternScaleY,
    patternRefreshInterval,
    patternAlpha,
  ]);

  return <canvas className="fixed inset-0 w-full h-full" ref={grainRef} />;
}

Noise.propTypes = {
  patternSize: PropTypes.number,
  patternScaleX: PropTypes.number,
  patternScaleY: PropTypes.number,
  patternRefreshInterval: PropTypes.number,
  patternAlpha: PropTypes.number,
};
