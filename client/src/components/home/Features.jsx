import { Zap } from "lucide-react";
import React from "react";
import Title from "./Title";
import featuresPic1 from "../../assets/featuresPic1.png";
import featuresPic2 from "../../assets/featuresPic2.jpg";

function Features() {
    return (
        <div
            id="features"
            className="flex flex-col items-center justify-center my-8 sm:my-12 lg:my-20 scroll-mt-16 px-4 sm:px-6 lg:px-8 xl:px-12"
        >
            {/* Badge */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-blue-800 bg-blue-400/10 border border-indigo-200 rounded-full px-4 sm:px-6 py-1.5 mb-3 sm:mb-4 lg:mb-6">
                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="font-medium">Simple process</span>
            </div>

            {/* Title */}
            <Title
                title="Build Your Resume"
                description="Design a professional, ATS-friendly resume in minutes with intelligent AI assistance."
            />

            {/* Content */}
            <div className="
        flex flex-col lg:flex-row
        items-center justify-center
        gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20
        mt-6 sm:mt-8 md:mt-10 lg:mt-16
        w-full
        max-w-6xl
        lg:max-w-5xl
        xl:max-w-4xl
        mx-auto lg:mx-0
        lg:-ml-16
        xl:-ml-28
      ">

                {/* Image Section */}
                <div className="relative w-full max-w-50 xs:max-w-[220px] sm:max-w-60 md:max-w-70 lg:max-w-90 shrink-0 mb-12 sm:mb-16 md:mb-20 lg:mb-0">

                    {/* Blue glow effects */}
                    <div className="absolute inset-0 -z-10 xl:-ml-32">
                        {/* Main central glow - balanced */}
                        <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500%] h-[10%] bg-linear-to-br from-blue-400/35 via-blue-500/25 to-indigo-600/30 blur-[70px] sm:blur-[90px] lg:blur-[110px] xl:blur-[130px] rounded-full"></div>

                        {/* Animated pulse glow - soft center */}
                        <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[90%] bg-linear-to-tr from-blue-300/25 via-indigo-400/20 to-blue-500/20 blur-[50px] sm:blur-[60px] lg:blur-[70px] xl:blur-[80px] rounded-full animate-pulse"></div>

                        {/* Left accent glow - subtle enhancement */}
                        <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[50%] bg-linear-to-r from-blue-500/30 via-blue-400/15 to-transparent blur-[60px] sm:blur-[80px] lg:blur-[100px] xl:blur-[120px] rounded-full"></div>

                        {/* Top-left accent - additional depth */}
                        <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[90%] bg-linear-to-br from-indigo-500/25 via-blue-400/15 to-transparent blur-[50px] sm:blur-[70px] lg:blur-[90px] rounded-full"></div>

                        {/* Sharp accent layer - overall polish */}
                        <div className="absolute inset-0 bg-linear-to-b from-blue-500/15 via-transparent to-blue-400/10 blur-xl sm:blur-2xl xl:blur-3xl"></div>
                    </div>

                    {/* Main image with polish */}
                    <div className="relative group">
                        <img
                            src={featuresPic1}
                            alt="Resume builder interface"
                            className="
                w-full
                xl:-ml-32
                xl:max-w-3xl
                aspect-3/4
                object-cover
                rounded-lg
                sm:rounded-xl
                md:rounded-2xl
                shadow-[0_15px_40px_-10px_rgba(0,0,0,0.25)]
                sm:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]
                hover:shadow-[0_20px_50px_-10px_rgba(59,130,246,0.4)]
                sm:hover:shadow-[0_25px_70px_-15px_rgba(59,130,246,0.5)]
                transition-all
                duration-500
                ring-1
                ring-white/10
                relative
                z-10
                group-hover:scale-[1.01]
                sm:group-hover:scale-[1.02]
              "
                        />

                        {/* Subtle inner glow on main image */}
                        <div className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl bg-linear-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                    </div>

                    {/* Overlapping image – 25% from right bottom */}
                    <div className="absolute right-[-13%] bottom-[-13%] w-[60%] xl:right-[5%] xl:bottom-[-10%] group z-20">
                        {/* Glow for second image - reduced intensity */}
                        <div className="absolute inset-0 bg-linear-to-bl from-blue-400/20 to-indigo-500/25 blur-lg sm:blur-xl xl:blur-2xl rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl scale-110 -z-10"></div>

                        <img
                            src={featuresPic2}
                            alt="Professional resume preview"
                            className="
                w-full
                aspect-3/4
                object-cover
                rounded-md
                sm:rounded-lg
                md:rounded-xl
                lg:rounded-2xl
                shadow-[0_20px_40px_-10px_rgba(0,0,0,0.35)]
                sm:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)]
                hover:shadow-[0_25px_50px_-10px_rgba(59,130,246,0.5)]
                sm:hover:shadow-[0_30px_60px_-12px_rgba(59,130,246,0.6)]
                border-2
                sm:border-3
                md:border-4
                border-white
                bg-white
                group-hover:scale-[1.03]
                sm:group-hover:scale-105
                transition-all
                duration-500
                ring-1
                ring-blue-100/50
                relative
              "
                        />

                        {/* Subtle shimmer effect */}
                        <div className="absolute inset-0 rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl bg-linear-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                    </div>
                </div>

                {/* Features */}
                <div className="flex flex-col gap-2.5 sm:gap-3 md:gap-4 max-w-md lg:max-w-lg xl:max-w-xl w-full">
                    {/* Feature 1 - AI-Powered Content (Purple on hover) */}
                    <div className="group cursor-pointer">
                        <div className="flex gap-3 sm:gap-4 p-3.5 sm:p-4 md:p-5 lg:p-6 rounded-lg sm:rounded-xl border border-gray-200 transition-all duration-300 hover:bg-purple-50 sm:hover:bg-purple-100 hover:border-purple-200 sm:hover:border-purple-300 hover:shadow-md">
                            <svg
                                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 stroke-gray-600 group-hover:stroke-purple-600 shrink-0 mt-0.5 transition-colors duration-300"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M12 20h9" />
                                <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                            </svg>

                            <div className="space-y-0.5 sm:space-y-1 flex-1">
                                <h3 className="text-xs sm:text-sm md:text-base font-semibold text-slate-800">
                                    AI-Powered Content
                                </h3>
                                <p className="text-[11px] sm:text-xs md:text-sm text-slate-600 leading-relaxed">
                                    Generate compelling resume content with AI that highlights your achievements and skills effectively.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 2 - ATS Optimization (Green on hover) */}
                    <div className="group cursor-pointer">
                        <div className="flex gap-3 sm:gap-4 p-3.5 sm:p-4 md:p-5 lg:p-6 rounded-lg sm:rounded-xl border border-gray-200 transition-all duration-300 hover:bg-green-50 sm:hover:bg-green-100 hover:border-green-200 sm:hover:border-green-300 hover:shadow-md">
                            <svg
                                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 stroke-gray-600 group-hover:stroke-green-600 shrink-0 mt-0.5 transition-colors duration-300"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                            </svg>

                            <div className="space-y-0.5 sm:space-y-1 flex-1">
                                <h3 className="text-xs sm:text-sm md:text-base font-semibold text-slate-800">
                                    ATS-Friendly Templates
                                </h3>
                                <p className="text-[11px] sm:text-xs md:text-sm text-slate-600 leading-relaxed">
                                    Optimized for Applicant Tracking Systems to ensure your resume passes automated screenings.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 3 - Professional Templates (Orange on hover) */}
                    <div className="group cursor-pointer">
                        <div className="flex gap-3 sm:gap-4 p-3.5 sm:p-4 md:p-5 lg:p-6 rounded-lg sm:rounded-xl border border-gray-200 transition-all duration-300 hover:bg-orange-50 sm:hover:bg-orange-100 hover:border-orange-200 sm:hover:border-orange-300 hover:shadow-md">
                            <svg
                                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 stroke-gray-600 group-hover:stroke-orange-600 shrink-0 mt-0.5 transition-colors duration-300"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect width="18" height="18" x="3" y="3" rx="2" />
                                <path d="M7 7h10" />
                                <path d="M7 12h10" />
                                <path d="M7 17h10" />
                            </svg>

                            <div className="space-y-0.5 sm:space-y-1 flex-1">
                                <h3 className="text-xs sm:text-sm md:text-base font-semibold text-slate-800">
                                    Professional Templates
                                </h3>
                                <p className="text-[11px] sm:text-xs md:text-sm text-slate-600 leading-relaxed">
                                    Choose from expertly designed templates tailored for different industries and career levels.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Font */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>
        </div>
    );
}

export default Features;