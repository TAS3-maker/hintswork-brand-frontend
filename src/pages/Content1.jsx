// import bg from "../pages/images/bg.png";
// import mobile from "../pages/images/mobile.png";
// import heading from "../pages/images/head.png";

// export default function Content1() {
//   return (
//     <div className="relative w-full">

//       <img 
//         src={bg} 
//         className="w-full h-full object-contain"
//       />

//       {/* CONTENT ON TOP */}
//       <div className="absolute inset-0 overflow-hidden flex flex-col lg:flex-row items-center justify-between px-5 2xl:px-40">

//         {/* LEFT */}
//         <div className="w-full lg:w-1/2 mt-20 lg:mt-0">
//           <img src={heading} className="2xl:w-[450px] w-[180px] mb-5" />

//           <p className="font-montserrat font-bold 2xl:text-7xl text-2xl">
//             Small daily <br />
//             choices
//             <span className="text-red-600">
//               , big <br /> lifetime results.
//             </span>
//           </p>

//           <button className="bg-red-600 text-white font-montserrat mt-6 2xl:mt-10 2xl:text-2xl text-sm px-6 py-2 2xl:px-10 2xl:py-4 rounded-xl">
//             Start Your Free Trial Today
//           </button>
//         </div>

//         {/* RIGHT */}
//         <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
//           <img src={mobile} className="max-w-full w-[600px]" />
//         </div>
//       </div>

//     </div>
//   );
// }





















import bb from "../pages/images/bg.png";
import mm from "../pages/images/mobile.png";
import bbb from "../pages/images/logo.png";
export default function Content1() {
  return (
    <div className=" w-full">
      <div className="relative w-full h-[575px] sm:h-[610px] md:h-[550px] 2xl:w-full 2xl:h-[800px]">
        <img
          src={bb}
          alt="bb"
          className="w-full h-full object-fill"
        />
        <img src={bbb} alt="bbb" className="w-[175px] md:w-[275px] h-[60px] md:h-[100px] absolute top-4 md:top-8 left-[5%] md:left-[8%] 2xl:left-[208px]" />
        <div className="absolute top-[12%] sm:top-[15%] md:top-0 inset-0 flex flex-col md:flex-row justify-center md:justify-around items-center px-2 md:px-0">
        
          <div className="w-full max-w-[100%] md:max-w-[60%] flex flex-col items-center md:items-start justify-center md:justify-between">
            {/* <img src={bbb} alt="bbb" className="w-[350px] h-[125px]" /> */}
            <div className="pl-1 2xl:pl-52 md:pl-24 pt-14 flex flex-col items-center md:items-start justify-center md:justify-start">
              <p className="text-2xl sm:text-4xl md:text-6xl xl:text-7xl text-center md:text-start font-montserrat font-bold w-full max-w-[646px] 2xl:max-w-[650px]">
                Small Hints <span className="text-red-600">= Big Changes.</span>
              </p>
              <button className="bg-red-600 text-white font-montserrat text-[16px] w-full max-w-[245px] sm:max-w-[295px]  md:max-w-[370px] sm:text-xl md:text-2xl font-medium py-[8px] md:py-4 px-[14px] md:px-6 rounded-xl mt-6">
                Start Your Free Trial Today
              </button>
            </div>
          </div>

          <div className="w-full max-w-[100%] md:max-w-[40%] flex justify-center md:justify-start 2xl:justify-center">
            <img src={mm} alt="mm" className="h-[354px] md:h-[500px] 2xl:h-[750px] md:mt-[50px]" />
          </div>
        </div>
      </div>
    </div>
  )
}



// import bb from "../pages/images/bg.png";
// import mm from "../pages/images/mobile.png";
// import bbb from "../pages/images/head.png";
// export default function Content1({props}) {
//     return (
//         <div className="2xl:flex 2xl:items-center w-full">
//             <div className="2xl:relative flex items-center">

//                 <img src={bb} alt="bb" className="2xl:w-[2390px] 2xl:h-[1093px] h-[500px] w-[500px] xl:w-full md:w-full" />

//                 <img src={mm} alt="mm" className="absolute 2xl:ml-[1340px]  xl:w-[400px] 2xl:mt-5 2xl:w-[804px] 2xl:h-[1068px] 2xl:flex ml-[190px] w-[200px] h-[400px] mt-[100px] xl:ml-[820px] md:w-[400px] md:ml-[426px] lg:ml-[700px]" />

//                 <img src={bbb} alt="bbb" className="absolute 2xl:w-[451.32px] w-[160px] h-[50px] 2xl:h-[155px] 2xl:-mt-[800px] -mt-[360px] 2xl:ml-[210px] ml-[20px] xl:w-[220px] xl:h-[80px] xl:ml-[110px] md:w-[220px] md:h-[80px]  md:ml-[90px]" />

//                 <p className="absolute font-montserrat font-bold 2xl:text-7xl 2xl:ml-[210px] ml-[20px] text-xl 2xl:pt-[0px] pt-[80px] xl:text-5xl xl:ml-[120px] md:text-4xl md:ml-[90px]">Small daily {props} <br />choices<span className="text-red-600 ">, big<br /> lifetime results.</span></p>

//                 <button className="bg-red-600 text-white font-montserrat absolute 2xl:ml-[210px] 2xl:mt-[400px] 2xl:text-2xl 2xl:w-[389px] 2xl:h-[65px] 2xl:rounded-xl text-xs w-[165px] h-[30px] rounded-lg mt-[230px] ml-[20px] xl:ml-[120px] xl:mt-[320px] xl:w-[200px] xl:h-[40px] md:ml-[90px] md:mt-[280px] md:w-[190px] md:h-[40px] md:rounded-xl">Start Your Free Trial Today</button>

//             </div>
//         </div>
//     )
// }