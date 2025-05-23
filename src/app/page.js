"use client";
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
  Gamepad2,
  Check,
} from "lucide-react";
import ProbelmStatements from "./components/ProbelmStatements";
import Schedule from "./components/Schedule";
import Organizer from "./components/Organizer";
import GCOEY from "./components/GCOEY";
import WinnersSection from "./components/Winner";
import { GallerySection } from "./components/Gallary";
export default function CRushEventPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 5,
    minutes: 15,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const problems = [
    {
      id: 1,
      title: "Student Marksheet System",
      difficulty: "Easy",
      output: [
        "Input student details (name, roll number, class, etc.)",
        "Input marks for each subject",
        `Calculate:Total marks,Percentage,Grade(A, B, C, etc.),Pass/Fail status`,
        "Display marksheet in a formatted layout",
      ],
    },
    {
      id: 2,
      title: "Vending Machine",
      difficulty: "Easy",
      output: [
        "Display available items with prices",
        `Allowuser to:Select item,Insert/select payment method (coins/cash/card/wallet)`,
        `Validate payment and dispense item`,
        "Maintain inventory count of each item",
        `Show:Changeto return (if any),Out-of-stock notification`,
      ],
    },
    {
      id: 3,
      title: "Voting System",
      difficulty: "Medium",
      output: [
        "Voterauthentication (via ID or login)",
        `Display list of candidates`,
        `Allow one vote per user`,
        `Record votes securely`,
        "Prevent multiple voting from the same ID",
        `Display live or final result:Total votes per candidate, Winnerannouncement`,
      ],
    },

    {
      id: 4,
      title: "Currency Converter",
      difficulty: "Medium",
      output: [
        "Input amount and select source and target currencies",
        "Convert and display result instantly",
        "Support for multiple currency pairs (e.g., USD to INR, EUR to JPY)",
        "Live exchange rates (or use static rates if offline)",
      ],
    },
    {
      id: 5,
      title: "ATM Interface",
      difficulty: "Hard",
      output: [
        "User login with card number and PIN",
        "Menu options:",
        "Balance inquiry",
        "Withdraw cash",
        "Deposit cash",
        "Change PIN",
        "Mini statement (last 5 transactions)",
        "Check for:",
        "Sufficient balance during withdrawal",
        "Valid PIN during login",
      ],
    },
    {
      id: 6,
      title: "Online Exam System",
      difficulty: "Hard",
      output: [
        "User authentication (students and admin/teachers)",
        "Display:",
        "List of available exams",
        "Questions with multiple-choice or descriptive options",
        "Timer for each exam",
        "Automatically submit on timeout",
        "After submission:",
        "Evaluate answers (for MCQs)",
        "Display result (score, pass/fail)",
      ],
    },
  ];

  const features = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "6 Challenging Problems",
      desc: "Test your C programming skills",
    },
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      title: "Exciting Games",
      desc: "That Test Your C Programming Skills",
    },

    {
      icon: <Clock className="w-6 h-6" />,
      title: "4 Hour Duration",
      desc: "Time-bound coding challenge",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Exciting Prizes",
      desc: "Win amazing rewards",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Individual Contest",
      desc: "Compete solo or team and showcase your skills",
    },
    {
      icon: <Check className="w-6 h-6" />,
      title: "Participant Certification",
      desc: "Earn a E-certificate of Participant and Winner",
    },
  ];

  const HandleSend = () => {
    window.open(
      "https://forms.gle/XdCmcGH8YedSZEFu5",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <nav className="relative z-10 px-6 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Code2 className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">C-Rush</span>
            </div>
            <button
              onClick={() => {
                HandleSend();
              }}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Register Now
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-600/20 px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium">Programming Challenge</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            C-RUSH
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The Ultimate C Programming Challenge by GCOEY Team. Solve 6
            mind-bending problems and prove your coding prowess!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() => {
                HandleSend();
              }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Join the Rush</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-2 text-gray-400">
              <Calendar className="w-5 h-5" />
              <span>May 23, 2025 | 2:00 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      {/* <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Event Starts In
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div
                key={unit}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 text-center"
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  {value.toString().padStart(2, "0")}
                </div>
                <div className="text-gray-400 uppercase text-sm">{unit}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Features */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Participate?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:bg-gray-800/50 transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-lg mb-4 text-blue-400">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statements */}
      <ProbelmStatements problems={problems} />

      {/* Schedule */}
      <Schedule />

      {/* Event Details */}
      <section className="px-6 py-16">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
      Event Details
    </h2>
    <div>
      <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 lg:p-8">
        <h3 className="text-xl lg:text-2xl font-bold mb-6 flex items-center">
          <Trophy className="w-6 h-5 lg:w-6 lg:h-6 mr-3 text-yellow-400" />
          Prizes
        </h3>
        <div className="space-y-4 text-sm lg:text-base">
          {[1, 2, 3, 4, 5].map((num, idx) => {
            const colors = ["bg-yellow-500", "bg-gray-400", "bg-orange-500", "bg-orange-500", "bg-orange-500"];
            const prizes = [
              "Goodies (Study table lamp, document file, water bottles, stickers, pen) + Certificate",
              "Goodies (keyboard & mouse combo, document file, water bottles, stickers, pen) + Certificate",
              "Goodies (Big document file, water bottles, stickers, pen) + Certificate",
              "Goodies (Laptop Bag, keyboard cover, bottle, file, pen, stickers) (1st at Game)",
              "Goodies (sports water bottle, pen stand, stickers, file, pen) (2nd at Game)",
            ];
            return (
              <div className="flex items-center space-x-3" key={num}>
                <div
                  className={`w-10 h-4 lg:w-8 lg:h-8 ${colors[idx]} rounded-full flex items-center justify-center text-black font-bold text-xs lg:text-sm`}
                >
                  {num}
                </div>
                <span>{prizes[idx]}</span>
              </div>
            );
          })}
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-green-400" />
            <span>Participation E-Certificates for All</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Rules */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Rules & Guidelines
          </h2>
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-blue-400">
                  Contest Rules
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Individual participation only</li>
                  <li>• Use only C programming language</li>
                  <li>• PPT in formate Should be compalsary</li>
                  <li>• 6 min per team is time limit strictly enforced</li>
                  <li>• No external help or collaboration</li>
                  <li>• No AI tool like chatGPT allowed</li>
                  <li>• Aftre Registration Join perticipent group</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-blue-400">
                  Scoring System
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Partial scoring for Desired Output</li>
                  <li>• Time penalty for multiple submissions</li>
                  <li>• Code efficiency matters</li>
                  <li>• Clean, readable code preferred</li>
                  <li>• Algorithm, logic building preferred</li>
                  <li>• Plagiarism results in disqualification</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* winner */}
      <WinnersSection />

      {/* gcoey */}
      <GCOEY />

      {/* Organizer */}
      <Organizer />
      <GallerySection />

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-8">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Code2 className="w-6 h-6 text-blue-400" />
            <span className="text-xl font-bold text-white">C-Rush 2024</span>
          </div>
          <p>
            Organized by Computer Science Department | Contact:
            events@university.edu
          </p>
        </div>
      </footer>
    </div>
  );
}
