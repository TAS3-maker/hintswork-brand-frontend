import vv from "../pages/images/Vector.png";
import aa from "../pages/images/Artboard 1 1.png";
import aaa from "../pages/images/abc (2).png";
import check from "../pages/images/Group.svg";
import mobile from "../pages/images/Groupmob1.png";
export default function Content4() {
    return (
        <div className="flex items-center justify-center pt-16">

            <div className="flex items-center justify-center">
                <div className="w-full max-w-6xl m-auto px-4 md:px-1">
                    <h1 className="text-4xl md:text-6xl xl:text-7xl font-montserrat font-bold text-center mb-7 ">Science-<span className="text-red-600">Backed Explainer</span></h1>
                    <div className="flex flex-col-reverse md:flex-row-reverse items-start md:items-center justify-start md:justify-center gap-4 md:gap-8">
                        <div className="w-full max-w-1/2 relative">
                            
                            <p className="font-montserrat font-medium text-lg md:text-2xl text-[#525252] mb-2">At HintsWork, every hint is rooted in<span className="font-bold">behavioral science + nutrition </span>research.</p>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-start justify-start gap-2 md:gap-4">
                                    <img src={check} alt="check" className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 mt-1" />
                                    <p className="font-montserrat font-normal text-base sm:text-lg xl:text-2xl text-[#525252]">BJ Fogg's Behavior Model shows tiny habits lead to lasting change.</p>
                                </div>

                                <div className="flex items-start justify-start gap-2 md:gap-4 mt-1">
                                    <img src={check} alt="check" className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8" />
                                    <p className="font-montserrat font-normal text-base sm:text-lg xl:text-2xl text-[#525252]">Harvard studies prove visual progress (like points & trophies) doubles adherence.</p>
                                </div>

                                <div className="flex items-start justify-start gap-2 md:gap-4 mt-1">
                                    <img src={check} alt="check" className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8" />
                                    <p className="font-montserrat font-normal text-base sm:text-lg xl:text-2xl text-[#525252]">Choice Architecture ensures the healthier option feels easier, not forced.</p>
                                </div>

                                

                                <div className="flex justify-start ">
                                    <p className="font-montserrat font-normal text-base sm:text-lg xl:text-2xl text-[#525252]">That's why HintsDiet isn't a lecture. It's a friendly nudge, at the right time, validated by Science Says... </p>
                                </div>
                            </div>
                            
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