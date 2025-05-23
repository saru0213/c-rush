import React, { useState, useEffect } from "react";
import {
  Code2,
  Trophy,
  Clock,
  Users,
  ArrowRight,
  CheckCircle,
  Zap,
  Calendar,
  MapPin,
  Star,
  Award,
  Medal,
} from "lucide-react";

// Winners Component
const WinnersSection = () => {
  const [activeYear, setActiveYear] = useState("1");

  const winnersData = {
    1: {
      title: "C-Rush 1.0 2k25 Champions",
      winners: [
        {
          position: 1,
          name: "Pratha Pawar",
          college: "GCOEY",
          year: "First Year CS",
          score: 1850,
          solvedTime: "2h 45m",
          achievement: "Perfect Score + Fastest Solver",
          currentRole: "1st at C-Rush 1.0 2k25 Finals",
          image: "/winner1.jpg",
          quote:
            "C-Rush challenged me to think beyond conventional solutions. The problems were crafted perfectly!",
        },
        {
          position: 2,
          name: "Rameshwar Kale",
          college: "COEP",
          year: "First Year EXTC",
          score: 1720,
          solvedTime: "2h 52m",
          achievement: "Perfect Score + Fastest Solver",
          currentRole: "2st at C-Rush 1.0 2k25 Finals",
          image: "/winner2.jpg",
          quote:
            "An amazing experience that pushed my programming skills to the next level.",
        },
        {
          position: 3,
          name: "Riya Jadhav",
          college: "COEP",
          year: "First Year CS",
          score: 1620,
          solvedTime: "3h 15m",
          achievement: "Perfect Score + Fastest Solver",
          currentRole: "3st at C-Rush 1.0 2k25 Finals",
          image: "/winner3.jpg",
          quote:
            "An amazing experience that pushed my programming skills to the next level.",
        },
      ],
    },
    // 2: {
    //   title: "C-Rush 2.0 2k25 Champions",
    //   winners: [
    //     {
    //       position: 1,
    //       name: "Arjun Sharma & Prathamesh Desai",
    //       college: "GCOEY",
    //       year: "First Year",
    //       score: 1850,
    //       solvedTime: "2h 45m",
    //       achievement: "Perfect Score + Fastest Solver",
    //       currentRole: "1st at C-Rush 2.0 2k25 Finals",
    //       image: "/winner.png",
    //       quote:
    //         "C-Rush challenged me to think beyond conventional solutions. The problems were crafted perfectly!",
    //     },
    //     {
    //       position: 2,
    //       name: "Priya Patel",
    //       college: "GCOEY",
    //       year: "First Year",
    //       score: 1720,
    //       solvedTime: "2h 52m",
    //       achievement: "Perfect Score + Fastest Solver",
    //       currentRole: "2st at C-Rush 2.0 2k25 Finals",
    //       image: "/winner.png",
    //       quote:
    //         "An amazing experience that pushed my programming skills to the next level.",
    //     },
    //     {
    //       position: 3,
    //       name: "Rahul Desai",
    //       college: "GCOEY",
    //       year: "First Year",
    //       score: 1650,
    //       solvedTime: "2h 58m",
    //       achievement: "Perfect Score + Fastest Solver",
    //       currentRole: "3rd at C-Rush 2.0 2k25 Finals",
    //       image: "/winner.png",
    //       quote:
    //         "The competitive environment and challenging problems made this unforgettable.",
    //     },
    //   ],
    // },
  };

  const currentWinners = winnersData[activeYear];

  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Hall of Fame</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Celebrating the brilliant minds who conquered C-Rush challenges and
            achieved programming excellence
          </p>

          {/* Year Selector */}
          <div className="flex justify-center space-x-4 mb-12">
            {Object.keys(winnersData).map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeYear === year
                    ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Winners Display */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-yellow-400">
            {currentWinners?.title}
          </h3>

          {/* Podium Style Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {currentWinners?.winners?.map((winner, index) => (
              <div
                key={winner.position}
                className={`relative bg-gray-800/30 backdrop-blur-sm border rounded-2xl p-8 text-center transition-all hover:scale-105 ${
                  winner.position === 1
                    ? "border-yellow-500/50 lg:order-2 lg:-mt-8"
                    : winner.position === 2
                    ? "border-gray-400/50 lg:order-1"
                    : "border-orange-500/50 lg:order-3"
                }`}
              >
                {/* Position Badge */}
                <div
                  className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                    winner.position === 1
                      ? "bg-gradient-to-br from-yellow-400 to-yellow-600 text-black"
                      : winner.position === 2
                      ? "bg-gradient-to-br from-gray-300 to-gray-500 text-black"
                      : "bg-gradient-to-br from-orange-400 to-orange-600 text-white"
                  }`}
                >
                  {winner.position === 1 ? (
                    <Trophy className="w-6 h-6" />
                  ) : winner.position === 2 ? (
                    <Medal className="w-6 h-6" />
                  ) : (
                    <Award className="w-5 h-5" />
                  )}
                </div>

                {/* Winner Photo */}
                <div className="relative mb-6 mt-4">
                  <img
                    src={winner.image}
                    alt={winner.name}
                    className="w-24 h-24 rounded-full mx-auto border-4 border-gray-600 object-cover"
                  />
                  <div
                    className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      winner.position === 1
                        ? "bg-yellow-500 text-black"
                        : winner.position === 2
                        ? "bg-gray-400 text-black"
                        : "bg-orange-500 text-white"
                    }`}
                  >
                    #{winner.position}
                  </div>
                </div>

                {/* Winner Info */}
                <h4 className="text-2xl font-bold mb-2">{winner.name}</h4>
                <p className="text-gray-400 mb-1">
                  {winner.college} • {winner.year}
                </p>
                <p className="text-blue-400 font-semibold mb-4">
                  {winner.currentRole}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-700/30 rounded-lg p-3">
                    <div className="text-xl font-bold text-green-400">
                      {winner.score}
                    </div>
                    <div className="text-xs text-gray-400">Points</div>
                  </div>
                  <div className="bg-gray-700/30 rounded-lg p-3">
                    <div className="text-xl font-bold text-blue-400">
                      {winner.solvedTime}
                    </div>
                    <div className="text-xs text-gray-400">Time</div>
                  </div>
                </div>

                {/* Achievement Badge */}
                <div
                  className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                    winner.position === 1
                      ? "bg-yellow-500/20 text-yellow-300"
                      : winner.position === 2
                      ? "bg-gray-500/20 text-gray-300"
                      : "bg-orange-500/20 text-orange-300"
                  }`}
                >
                  <Star className="w-3 h-3" />
                  <span>{winner.achievement}</span>
                </div>

                {/* Quote */}
                <blockquote className="text-sm text-gray-300 italic">
                  "{winner.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories Stats */}
        {/* <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-yellow-300">
            Success Stories
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">95%</div>
              <div className="text-sm text-gray-300">
                Winners in Top Companies
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">
                ₹12L+
              </div>
              <div className="text-sm text-gray-300">Average Package</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-sm text-gray-300">Alumni in FAANG</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">
                100+
              </div>
              <div className="text-sm text-gray-300">Success Stories</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default WinnersSection;
