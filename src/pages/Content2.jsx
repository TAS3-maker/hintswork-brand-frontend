import rr from "../pages/images/Rectangle 19.png";
export default function Content2(){
    return(
        <div className="flex items-center justify-center pt-16">
            <div className="flex items-center justify-center">
            
            
                <div className="w-full max-w-6xl m-auto px-4 md:px-1">
                  <h1 className="text-4xl md:text-6xl xl:text-7xl font-montserrat font-bold text-center mb-7">What is <span className="text-red-600">HintDiet?</span></h1>
                  
                  <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
                    <div className="w-full max-w-1/2">
                        <img src={rr} alt="rr" className=""/>
                    </div>
                    <div className="w-full max-w-1/2 flex flex-col justify-start items-start gap-5">
                        <p className="text-lg md:text-2xl text-[#666666] font-montserrat font-medium">Smart, simple nutrition guidance delivered daily.</p>
                        <p className="text-lg md:text-2xl text-[#666666] font-montserrat font-normal">HintDiet is your personal micro-nutrition coach, bringing quick, actionable tips to help you make healthier food choices every day. </p>
                        <p className="text-lg md:text-2xl text-[#666666] font-montserrat font-normal">Each hint is designed to fit seamlessly into your lifestyle — no complicated diets, no long reading — just simple, practical guidance to improve your eating habits.</p>
                    </div>
                  </div>
                  
                  
                  
                    {/* <h1 className="font-montserrat">What This <span className="text-red-600">Brand Solves</span></h1>
               
                    <img src={rr} alt="rr" className="2xl:w-[515px] 2xl:h-[453px] 2xl:mt-[60px] w-[300px] h-[360px] 2xl:ml-[5px] mt-[20px] xl:w-[400px] xl:-ml-[150px] xl:mt-[70px] xl:h-[420px] md:w-[320px] md:-ml-[30px] md:mt-[50px] md:h-[300px]"/>

                    <p className="font-montserrat 2xl:text-2xl text-gray-500 2xl:-mt-[430px] 2xl:ml-[550px] font-medium text-xs px-4 2xl:px-0 mt-[15px] -ml-[40px] 2xl:w-[800px] w-[397px] xl:text-2xl xl:-mt-[400px] xl:ml-[300px] xl:w-[700px] md:text-md md:-mt-[280px] md:ml-[295px] md:w-[470px] ">Life is full of noisy advice, conflicting information, and <br/>fad solutions. HintsDiet cuts through the clutter with<br/> one daily, science-backed hint you can actually use.</p>

                    


                    <div className="flex items-center 2xl:space-x-4 2xl:pt-4 2xl:ml-[550px] 2xl:pt-[30px] 2xl:text-2xl text-gray-500 font-montserrat text-sm pt-5 -ml-[20px] space-x-2 2xl:w-[800px] w-[288px] font-medium xl:text-2xl xl:ml-[320px] xl:space-x-4 xl:w-[500px] md:text-md md:ml-[309px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle 2xl:h-8 2xl:w-8 text-white bg-red-600 h-4 w-5 xl:h-8 xl:w-8">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <path d="m9 11 3 3L22 4"></path>
            
            </svg>
            <span>Struggling with late-night cravings?</span>

                </div>



                       <div className="flex items-center 2xl:space-x-4 2xl:pt-4  2xl:ml-[550px] 2xl:pt-[30px] 2xl:text-2xl text-gray-500 font-montserrat text-sm pt-4 -ml-[20px] space-x-2 2xl:w-[800px] w-[288px] font-medium xl:text-2xl xl:ml-[320px] xl:space-x-4 xl:w-[500px] md:text-md md:ml-[309px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle 2xl:h-8 2xl:w-8 text-white bg-red-600 h-4 w-5 xl:h-8 xl:w-8">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <path d="m9 11 3 3L22 4"></path>
            
            </svg>
            <span>Unsure how to balance portions?</span>

                </div>




                          <div className="flex items-center 2xl:space-x-4 2xl:pt-4  2xl:ml-[550px] 2xl:pt-[30px] 2xl:text-2xl text-gray-500 font-montserrat text-sm pt-4 -ml-[20px] space-x-2 2xl:w-[800px] w-[288px] font-medium xl:text-2xl xl:ml-[320px] xl:space-x-4 xl:w-[500px] md:text-md md:ml-[309px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle 2xl:h-8 2xl:w-8 text-white bg-red-600 h-4 w-5 xl:h-8 xl:w-8">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <path d="m9 11 3 3L22 4"></path>
            
            </svg>
            <span>Overwhelmed by "perfect" diets?</span>

                </div>

<p className="font-montserrat 2xl:text-2xl text-gray-500 2xl:ml-[550px] font-medium 2xl:pt-[12px] mt-[25px] -ml-[44px] text-xs -ml-[18px] 2xl:w-[800px] w-[380px] xl:text-2xl xl:ml-[320px] xl:w-[700px] md:text-md md:ml-[309px]">HintsDiet gives you micro-steps, not overwhelm. Just<br/>one actionable nudge each day to help you eat <br/>smarter, feel lighter, and build habits that stic</p> */}



                </div>

            </div>
        </div>
    )
}