import { Clock, Trophy } from "lucide-react";
import React from "react";

function Schedule() {
  return (
    <div>
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Event Schedule
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transform md:-translate-x-px"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Registration Phase */}
              <div className="relative flex items-center">
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-2 md:-translate-x-2 border-4 border-gray-900"></div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
                  <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-blue-400">
                        Verification and Registration
                      </h3>
                      <span className="text-sm text-gray-400">
                        1:50 PM, 23 May 2025
                      </span>
                    </div>
                    <p className="text-gray-300">
                      If any Team need to register, they can register onspot
                      also.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pre-Event */}
              <div className="relative flex items-center md:flex-row-reverse">
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-yellow-500 rounded-full transform -translate-x-2 md:-translate-x-2 border-4 border-gray-900"></div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pl-8">
                  <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-yellow-400">
                        Pre-Event Briefing
                      </h3>
                      <span className="text-sm text-gray-400">
                        2:10 PM, 23 May 2025
                      </span>
                    </div>
                    <p className="text-gray-300">
                      30-minute session covering rules, platform walkthrough,
                      and Q&A with organizers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contest Start */}
              <div className="relative flex items-center">
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-green-500 rounded-full transform -translate-x-2 md:-translate-x-2 border-4 border-gray-900"></div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
                  <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 border-green-500/50">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-green-400">
                        Gaming Contest
                      </h3>
                      <span className="text-sm text-gray-400">
                        2:20 PM, 23 May 2025
                      </span>
                    </div>
                    <p className="text-gray-300">
                      1-hour gaming marathon starts! Solve different challenging
                      C programming problems.
                    </p>
                    <div className="mt-3 flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-green-400 font-medium">
                        Duration: 60-90 Minutes
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mid-Contest */}
              <div className="relative flex items-center md:flex-row-reverse">
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full transform -translate-x-2 md:-translate-x-2 border-4 border-gray-900"></div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pl-8">
                  <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-purple-400">
                        Break for Refreshments
                      </h3>
                      <span className="text-sm text-gray-400">
                        3:30 PM, 23 May 2025
                      </span>
                    </div>
                    <p className="text-gray-300">
                      Refreshments and snacks will be provided during the break.
                    </p>
                    <div className="mt-3 flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-green-400 font-medium">
                        Duration: 30 Minutes
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contest End */}
              <div className="relative flex items-center">
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-red-500 rounded-full transform -translate-x-2 md:-translate-x-2 border-4 border-gray-900"></div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
                  <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-red-400">
                        Presention Phase
                      </h3>
                      <span className="text-sm text-gray-400">
                        4:00 PM, 23 May 2025
                      </span>
                    </div>
                    <p className="text-gray-300">
                      Final solutions and presentation are evaluated by our
                      judging system.
                    </p>
                    <div className="mt-3 flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-green-400 font-medium">
                        Duration: 60-80 Minutes
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="relative flex items-center md:flex-row-reverse">
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-yellow-500 rounded-full transform -translate-x-2 md:-translate-x-2 border-4 border-gray-900"></div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pl-8">
                  <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-yellow-400">
                        Results & Awards
                      </h3>
                      <span className="text-sm text-gray-400">
                        5:15 PM, 23 May 2025
                      </span>
                    </div>
                    <p className="text-gray-300">
                      Winners announced! Prize distribution and certificate
                      ceremony.
                    </p>
                    <div className="mt-3 flex items-center space-x-2">
                      <Trophy className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm text-yellow-400 font-medium">
                        Live Ceremony
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Schedule;
