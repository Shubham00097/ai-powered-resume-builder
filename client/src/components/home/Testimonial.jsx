import React from "react";
import Title from "./Title";
import { BookUserIcon } from "lucide-react";

/* ---------------- Card ---------------- */
const CreateCard = ({ card, setPaused }) => {
  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="
        group relative mx-3 w-72 shrink-0 rounded-2xl p-px
        bg-linear-to-br
        from-indigo-400/70
        via-blue-400/50
        to-purple-400/70
        transition-all duration-500
      "
    >
      <div
        className="
          relative min-h-45 rounded-2xl p-3
          bg-white/80 backdrop-blur-xl
          shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)]
          group-hover:shadow-[0_25px_60px_-20px_rgba(79,70,229,0.45)]
          transition-all duration-500
          group-hover:-translate-y-1
        "
      >
        {/* Glow */}
        <div
          className="
            absolute inset-0 rounded-2xl
            opacity-0 group-hover:opacity-100
            transition-opacity duration-500
            bg-linear-to-br
            from-indigo-300/40
            via-transparent
            to-blue-300/40
            blur-2xl
            -z-10
          "
        />

        {/* Header */}
        <div className="flex items-start gap-3">
          <img
            src={card.image}
            alt={card.name}
            className="
              size-8 rounded-full object-cover
              ring-2 ring-indigo-400/40
            "
          />

          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 tracking-tight truncate">
              {card.name}
            </p>
            <span className="text-[11px] text-gray-500 truncate">
              {card.handle}
            </span>
          </div>
        </div>

        {/* Quote */}
        <p
          className="
            mt-3 text-xs italic leading-relaxed
            text-gray-700 line-clamp-2
          "
        >
          "{card.quote}"
        </p>

        {/* Footer */}
        <div className="mt-2 text-[11px] text-gray-500 text-right">
          {card.date}
        </div>
      </div>
    </div>
  );
};


/* ---------------- Testimonial ---------------- */
function Testimonial() {
  const [paused, setPaused] = React.useState(false);

  const cardsData = [
    {
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200",
      name: "Briar Martin",
      handle: "@neilstellar",
      date: "Apr 20, 2025",
      quote: "Saved me hours. Clean UI and very effective.",
    },
    {
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200",
      name: "Avery Johnson",
      handle: "@averywrites",
      date: "May 10, 2025",
      quote: "AI suggestions are shockingly accurate.",
    },
    {
      image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200",
      name: "Jordan Lee",
      handle: "@jordantalks",
      date: "Jun 5, 2025",
      quote: "Best resume experience I've ever had.",
    },
    {
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200",
      name: "Sophia Patel",
      handle: "@sophiap",
      date: "Jul 2, 2025",
      quote: "Landed interviews within a week.",
    },
  ];

  return (
    <div id="testimonials" className="flex flex-col items-center my-10 scroll-mt-16">
      <div className="flex items-center gap-2 text-sm text-blue-800 bg-blue-400/10 border border-indigo-200 rounded-full px-6 py-1.5">
        <BookUserIcon className="size-4 stroke-blue-600" />
        <span>Testimonials</span>
      </div>

      <Title
        title="What Our Users Say"
        description="Trusted by professionals worldwide."
      />

      {/* Animation */}
      <style>{`
        @keyframes marqueeLTR {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>

      {/* 🔥 EXACTLY 4 CARDS VISIBLE */}
      <div className="w-312 overflow-hidden">
        <div
          className="flex min-w-[200%] pt-6 pb-4"
          style={{
            animation: paused
              ? "none"
              : "marqueeLTR 22s linear infinite",
          }}
        >
          {[...cardsData, ...cardsData].map((card, i) => (
            <CreateCard
              key={i}
              card={card}
              setPaused={setPaused}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;