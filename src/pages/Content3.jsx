import vv from "../pages/images/Vector.png";
import aa from "../pages/images/Artboard 1 1.png";
import aaa from "../pages/images/abc (2).png";
import check from "../pages/images/Group.svg";
import mobile from "../pages/images/Groupmob.png";
export default function Content3() {
    return (
        <div className="flex items-center justify-center pt-16">

            <div className="flex items-center justify-center">
                <div className="w-full max-w-6xl m-auto px-4 md:px-1">
                    <h1 className="text-4xl md:text-6xl xl:text-7xl font-montserrat font-bold text-center mb-7 ">What Does <span className="text-red-600">HintDiet Solve?</span></h1>
                    <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-start md:justify-center gap-4 md:gap-8">
                        <div className="w-full max-w-1/2 relative">
                            <h1 className="text-[#262626] text-xl md:text-3xl font-montserrat font-semibold mb-2">What HintDiet Helps You Achieve</h1>
                            <p className="font-montserrat font-medium text-lg md:text-2xl text-[#525252] mb-2">Overcome everyday nutrition challenges effortlessly.</p>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-start justify-start gap-2 md:gap-4">
                                    <img src={check} alt="check" className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 mt-1" />
                                    <p className="font-montserrat font-normal text-base sm:text-lg xl:text-2xl text-[#525252]"><span className="font-semibold">Confusion around healthy eating :</span>Get simple, evidence-based guidance.</p>
                                </div>

                                <div className="flex items-start justify-start gap-2 md:gap-4 mt-1">
                                    <img src={check} alt="check" className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8" />
                                    <p className="font-montserrat font-normal text-base sm:text-lg xl:text-2xl text-[#525252]"><span className="font-semibold">Lack of time for meal planning :</span>Quick hints you can act on immediately.</p>
                                </div>

                                <div className="flex items-start justify-start gap-2 md:gap-4 mt-1">
                                    <img src={check} alt="check" className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8" />
                                    <p className="font-montserrat font-normal text-base sm:text-lg xl:text-2xl text-[#525252]"><span className="font-semibold">Unhealthy cravings & snacking :</span>Learn small swaps that make a difference.</p>
                                </div>

                                <div className="flex items-start justify-start gap-2 md:gap-4 mt-1">
                                    <img src={check} alt="check" className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8" />
                                    <p className="font-montserrat font-normal text-base sm:text-lg xl:text-2xl text-[#525252]"><span className="font-semibold">Slow progress toward health goals :</span>Daily actions accumulate into lasting results.</p>
                                </div>

                                <div className="flex items-start justify-start gap-2 md:gap-4 mt-1">
                                    <img src={check} alt="check" className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8" />
                                    <p className="font-montserrat font-normal text-base sm:text-lg xl:text-2xl text-[#525252]"><span className="font-semibold">Difficulty staying consistent :</span>Gamified streaks and points keep you motivated.</p>
                                </div>

                                <div className="flex justify-start ">
                                    <p className="font-montserrat font-normal text-base sm:text-lg xl:text-2xl text-[#525252]">Make healthier choices every day — one hint at a time.</p>
                                </div>
                            </div>
                             <img src={aaa} alt="aaa" className="absolute bottom-0 left-0 2xl:w-[243.36px] 2xl:h-[207px] 2xl:-ml-[250px]  w-[70px] h-[70px] -ml-[10px] xl:w-[270px] xl:h-[150px] xl:-ml-[200px] md:-ml-[60px] md:w-[120px]" />
                        </div>
                        <div className="w-full max-w-1/2">
                        <div className="flex justify-center">
                            <img src={mobile} alt="mobile" className="" />
                        </div>
                        </div>
                    </div>


                   

                </div>

            </div>
        </div>
    )
}