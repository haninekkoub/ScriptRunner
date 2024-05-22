import { motion, MotionValue } from "framer-motion";

interface props {
  bgColors: string;
  left?: MotionValue;
  rotateZ: MotionValue;
  leftPils: string;
  whitePils: string;
}
export default function Pils({
  bgColors,
  leftPils,
  whitePils,
  left,
  rotateZ,
}: props) {
  return (
    <div className="relative w-full h-14  lg:h-[88px]">
      <motion.div
        className="absolute top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2 h-full  "
        style={{ left: left }}
      >
        <motion.div
          className="relative h-full w-48 lg:w-80 flex rounded-full bgshine box-shadow-pils shadow-lg"
          style={{ rotateZ: rotateZ }}
        >
          <div className="absolute left-3 top-3 h-4 w-6 -rotate-45 bgshine z-20"></div>
          <div
            className="orange relative h-full flex-1 flex items-center justify-center rounded-l-full"
            style={{ background: bgColors }}
          >
            <p className="text-[1.625rem] lg:text-[2.75rem] font-neueMontreal whitespace-nowrap">
              {leftPils}
            </p>
          </div>
          <div className="relative flex-1 flex items-center justify-center px-2 rounded-r-full capsulegray">
            <div className="absolute z-0 h-4 w-full bgshine bottom-2 lg:bottom-8"></div>

            <p className="text-[0.525rem] lg:text-base font-medium z-10">
              {whitePils}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
