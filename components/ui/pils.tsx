// import { Pill } from "@/lib/types";
// import { motion } from "framer-motion";
// import { LeftPilsSvg, RightPilsSvg } from "./pilsSvg";

// export default function Pils({ orangePils, whitePils, x, z }: Pill) {
//   return (
//     <div className="relative w-full h-16 lg:h-[88px]">
//       <motion.div
//         className="absolute top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2 h-full"
//         style={{ left: x }}
//       >
//         <motion.div
//           className="relative h-13 h-full w-80 flex bg-cyan-300 rounded-full overflow-hidden pilsshadow "
//           style={{ rotateZ: z }}
//         >
//           <div className="absolute left-3 top-3 h-4 w-6 -rotate-45 bg-white z-20 blur-md"></div>

//           <div className="orange h-full flex-1 flex items-center justify-center rounded-l-full">
//             <p className="text-[1.625rem] lg:text-[2.75rem] font-neueMontreal whitespace-nowrap">
//               {orangePils}
//             </p>
//           </div>
//           <div className="white relative  flex-1 flex items-center justify-center px-2 rounded-r-full drop">
//             <div className="absolute z-0 h-4 w-full bg-white top-2 lg:top-4 blur-lg "></div>
//             <p className="text-[0.525rem] lg:text-base font-medium z-10">
//               {whitePils}
//             </p>
//           </div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }

import { Pill } from "@/lib/types";
import { motion } from "framer-motion";
import { LeftPilsSvg, RightPilsSvg } from "./pilsSvg";

export default function Pils({ orangePils, whitePils, x, z }: Pill) {
  return (
    <div className="relative w-full h-16 lg:h-[100px]">
      <motion.div
        className="absolute top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2 "
        style={{ left: x }}
      >
        <motion.div
          className="flex justify-center items-center w-fit "
          style={{ rotateZ: z }}
        >
          <div className="relative w-32 h-16 lg:h-[100px] lg:w-48 font-neueMontreal ">
            <LeftPilsSvg />
            <div className="text-[1.625rem] lg:text-[2.75rem] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
              {orangePils}
            </div>
          </div>
          <div className="relative w-32 h-16 lg:h-[100px] lg:w-48 -ml-4">
            <RightPilsSvg />
            <p className=" text-[0.525rem] lg:text-base font-medium absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5/6 lg:w-4/5">
              {whitePils}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
