import { CheckCircle, Code2, Trophy, Users } from "lucide-react";
import Image from "next/image";
import React from "react";

function GCOEY() {
  return (
    <div>
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Proudly Organized by</h2>
            <h3 className="text-5xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent mb-6">
              Team GCOEY
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Elite competitive programming team representing Government College
              of Engineering, Yavatmal at national-level competitions and
              hackathons
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Video Section */}
            <div className="space-y-6">
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mb-4 mx-auto hover:bg-red-700 transition-colors cursor-pointer">
                        <svg
                          className="w-8 h-8 text-white ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <p className="text-white font-semibold">
                        Team GCOEY in Action
                      </p>
                      <p className="text-gray-300 text-sm">
                        Competition Highlights & Achievements
                      </p>
                    </div>
                  </div>
                 <video
  src="gcoey.mp4"
  poster="/winner"
  width={600}
  height={400}
  className="w-full h-full object-cover opacity-60"
  autoPlay
  loop
  muted
  playsInline
>
  Your browser does not support the video tag.
</video>

                </div>
              </div>

              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <h4 className="text-xl font-bold mb-3 text-orange-400">
                  Team Statistics
                </h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-400">15+</div>
                    <div className="text-sm text-gray-400">Active Members</div>
                  </div>
                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-400">30+</div>
                    <div className="text-sm text-gray-400">Competitions</div>
                  </div>
                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-400">
                      25+
                    </div>
                    <div className="text-sm text-gray-400">
                      National Events Win
                    </div>
                  </div>
                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-yellow-400">
                      13+
                    </div>
                    <div className="text-sm text-gray-400">Times</div>
                  </div>
                </div>
              </div>
            </div>

            {/* About Text */}
            <div className="space-y-6">
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
                <h4 className="text-2xl font-bold mb-4 text-orange-400">
                  Our Mission
                </h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Team GCOEY is the premier competitive programming team
                  representing Government College of Engineering, Yavatmal. We
                  are a dedicated group of passionate coders who compete at
                  national-level programming contests, hackathons, and technical
                  competitions across India.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Our team specializes in algorithmic problem solving, data
                  structures, and competitive programming. We have consistently
                  represented our institution at prestigious events like ACM
                  ICPC, Google Code Jam, Facebook Hacker Cup, and various
                  national hackathons.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  C-Rush is our flagship event, designed to nurture the next
                  generation of competitive programmers and provide a platform
                  for students to experience the thrill of algorithmic
                  challenges.
                </p>
              </div>

              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
                <h4 className="text-2xl font-bold mb-4 text-orange-400">
                  What We Do
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      Compete in national programming contests and hackathons
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      Organize competitive programming events and workshops
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      Mentor students in algorithmic problem solving
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      Represent GCOEY at national and international platforms
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Achievements */}
          {/* <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-orange-400">
              Team Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 text-center hover:border-yellow-500/50 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-yellow-400">
                  ICPC Regionals
                </h4>
                <p className="text-gray-300 text-sm">
                  Qualified for ACM ICPC Asia Regionals multiple times, securing
                  top positions among hundreds of teams.
                </p>
              </div>

              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 text-center hover:border-blue-500/50 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Code2 className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-blue-400">
                  National Hackathons
                </h4>
                <p className="text-gray-300 text-sm">
                  Winners and finalists in major national hackathons and project
                  expos.
                </p>
              </div>

              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 text-center hover:border-green-500/50 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-green-400">
                  Team Rankings
                </h4>
                <p className="text-gray-300 text-sm">
                  Consistently ranked among top 100 competitive programming
                  teams in Maharashtra and national circuits.
                </p>
              </div>
            </div>
          </div> */}

          {/* Competition History */}
          {/* <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-8">
            <div className="text-center">
              <h4 className="text-2xl font-bold mb-4 text-orange-300">
                Recent Competition Highlights
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl mb-2">🏆</div>
                  <h5 className="font-semibold text-orange-200">
                    Smart India Hackathon
                  </h5>
                  <p className="text-sm text-gray-400">
                    National Finalist 2023
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🌟</div>
                  <h5 className="font-semibold text-orange-200">
                    ACM ICPC Regionals
                  </h5>
                  <p className="text-sm text-gray-400">Top 50 Team</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">💡</div>
                  <h5 className="font-semibold text-orange-200">
                    HackerEarth Circuits
                  </h5>
                  <p className="text-sm text-gray-400">Multiple Top 10s</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🚀</div>
                  <h5 className="font-semibold text-orange-200">
                    CodeChef Events
                  </h5>
                  <p className="text-sm text-gray-400">Regular Winners</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default GCOEY;
