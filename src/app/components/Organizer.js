import Image from "next/image";
import React from "react";

function Organizer() {
  const committee = [
    {
      initials: "NK",
      name: "Nikhil Kandhare",
      role: "Full Stack Devloper",
      img: "dev1.jpg",
      roleColor: "text-green-400",
      details: "CS Senior at GCOEY",
      email: "nikhilkandhare22@gmail.com",
      bgGradient: "from-green-500 to-teal-500",
      link: "https://www.linkedin.com/in/nikhilkandhare?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      initials: "AN",
      name: "Ajinkya Nishane",
      role: "Front-End Developer",
      img: "dev3.jpg",
      roleColor: "text-yellow-400",
      details: "CS Junior at GCOEY",
      email: "ajinkyanishanecse@gmail.com",
      bgGradient: "from-yellow-500 to-orange-500",
      link: "https://www.linkedin.com/in/ajinkyanishane/",
    },
    {
      initials: "SA",
      name: "Saraswati Adkine",
      role: "Back-End Developer",
      img: "dev2.jpg",
      roleColor: "text-pink-400",
      details: "CS Senior at GCOEY",
      email: "saraswatiadkine13122002@gmail.com",
      bgGradient: "from-pink-500 to-red-500",
      link: "https://www.linkedin.com/in/saraswatiadkine/",
    },
    {
      initials: "PK",
      name: "Pooja Kale",
      role: "Front-End Developer",
      img: "dev5.jpg",
      roleColor: "text-indigo-400",
      details: "CS Junior at GCOEY",
      email: "poojakalecse@gmail.com",
      bgGradient: "from-indigo-500 to-purple-500",
      link: "https://www.linkedin.com/in/pooja-kale-71625924b/",
    },
    {
      initials: "KP",
      name: "Kamini Patil",
      role: "Front-End Developer",
      img: "dev6.jpg",
      roleColor: "text-indigo-400",
      details: "CS Junior at GCOEY",
      email: "kaminipatil856@gmail.com",
      bgGradient: "from-indigo-500 to-purple-500",
      link: "https://www.linkedin.com/in/kamini-patil-700806258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      initials: "VI",
      name: "Vaibhav Ingle",
      role: "Front-End Developer",
      img: "dev7.jpg",
      roleColor: "text-indigo-400",
      details: "CS Junior at GCOEY",
      email: "inglevaibhav496@gmail.com",
      bgGradient: "from-indigo-500 to-purple-500",
      link: "https://www.linkedin.com/in/vaibhav-ingle-89028b2a0/",
    },
    {
      initials: "SM",
      name: "Shailesh Mhaske",
      role: "Front-End Developer",
      roleColor: "text-indigo-400",
      img: "dev4.jpg",
      details: "CS Junior at GCOEY",
      email: "mhaskeshailsh8@gmail.com",
      bgGradient: "from-indigo-500 to-purple-500",
      link: "https://www.linkedin.com/in/shailesh-maske/",
    },
    {
      initials: "VM",
      name: "Vaibhav Mahale",
      role: "Front-End Developer",
      img: "dev8.jpg",
      roleColor: "text-indigo-400",
      details: "CS Junior at GCOEY",
      email: "mahalevaibhav059@gmail.com",
      bgGradient: "from-indigo-500 to-purple-500",
      link: "https://www.linkedin.com/in/vaibhav-mahale-46a19b2aa/",
    },
    {
      initials: "UW",
      name: "Uday Warkhade",
      role: "Front-End Developer",
      img: "dev10.jpg",
      roleColor: "text-indigo-400",
      details: "CS Junior at GCOEY",
      email: "udaywarkhade37@gmail.com",
      bgGradient: "from-indigo-500 to-purple-500",
      link: "https://www.linkedin.com/in/uday-warkhade-7b74a72b0/",
    },
    {
      initials: "IG",
      name: "Ishwar Gawali",
      role: "Front-End Developer",
      img: "dev9.jpg",
      roleColor: "text-indigo-400",
      details: "CS Junior at GCOEY",
      email: "ishugawali2005@gmail.com",
      bgGradient: "from-indigo-500 to-purple-500",
      link: "https://www.linkedin.com/in/ishwar-gawali-4159272a9/",
    },
  ];
  const facultyData = [
    {
      initials: "Prof",
      name: "Prof. Chetan Andhare",
      title: "Head of Computer Science",
      titleColor: "text-blue-400",
      description:
        "PhD in Computer Science with 15+ years of experience in programming education and competitive coding mentorship.",
      bgGradient: "from-blue-500 to-purple-500",
    },
    {
      initials: "Prof",
      name: "Prof. Shelke Mam",
      title: "Head of Computer Science",
      titleColor: "text-blue-400",
      description:
        "PhD in Computer Science with 15+ years of experience in programming education and competitive coding mentorship.",
      bgGradient: "from-blue-500 to-purple-500",
    },
    {
      initials: "PR",
      name: "Prof. Thorat Sir",
      title: "Head of EXTC",
      titleColor: "text-blue-400",
      description:
        "Specialist in C/C++ programming with extensive experience in algorithm design and competitive programming coaching.",
      bgGradient: "from-purple-500 to-pink-500",
    },
    {
      initials: "PR",
      name: "Prof. Dhiraj Shirbhate",
      title: "Programming Fundamentals Expert",
      titleColor: "text-purple-400",
      description:
        "Specialist in C/C++/Python programming with extensive experience in algorithm design and competitive programming coaching.",
      bgGradient: "from-purple-500 to-pink-500",
    },
    {
      initials: "PR",
      name: "Prof. Vivek Shelke",
      title: "Programming Fundamentals Expert",
      titleColor: "text-purple-400",
      description:
        "Specialist in C/C++/Python programming with extensive experience in algorithm design and competitive programming coaching.",
      bgGradient: "from-purple-500 to-pink-500",
    },
    {
      initials: "PR",
      name: "Prof. Jaya Zade",
      title: "Programming Fundamentals Expert",
      titleColor: "text-purple-400",
      description:
        "Specialist in C/C++/Python programming with extensive experience in algorithm design and competitive programming coaching.",
      bgGradient: "from-purple-500 to-pink-500",
    },
    {
      initials: "PR",
      name: "Prof. Rashmi Thakre",
      title: "Programming Fundamentals Expert",
      titleColor: "text-purple-400",
      description:
        "Specialist in C/C++/Python programming with extensive experience in algorithm design and competitive programming coaching.",
      bgGradient: "from-purple-500 to-pink-500",
    },
    {
      initials: "PR",
      name: "Prof. Shital Gawarle ",
      title: "Programming Fundamentals Expert",
      titleColor: "text-purple-400",
      description:
        "Specialist in C/C++/Python programming with extensive experience in algorithm design and competitive programming coaching.",
      bgGradient: "from-purple-500 to-pink-500",
    },

    {
      initials: "PR",
      name: "Prof. Shweta Junghare",
      title: "Programming Fundamentals Expert",
      titleColor: "text-purple-400",
      description:
        "Specialist in C/C++/Python programming with extensive experience in algorithm design and competitive programming coaching.",
      bgGradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div>
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Meet the Organizers
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            The passionate team behind C-Rush, dedicated to creating an
            exceptional programming experience
          </p>

          {/* Faculty Coordinators */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-blue-400">
              Faculty Coordinators
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {facultyData.map((faculty, index) => (
                <div
                  key={index}
                  className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 text-center hover:border-blue-500/50 transition-all"
                >
                  <div
                    className={`w-24 h-24 bg-gradient-to-br ${faculty.bgGradient} rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold`}
                  >
                    {faculty.initials}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{faculty.name}</h4>
                  <p className={`${faculty.titleColor} mb-3`}>
                    {faculty.title}
                  </p>

                  {(faculty.email || faculty.phone) && (
                    <div className="text-gray-400 text-sm">
                      {faculty.email && <p>📧 {faculty.email}</p>}
                      {faculty.phone && <p>📞 {faculty.phone}</p>}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Student Organizers */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-green-400">
              Student Organizing Committee
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {committee?.map((member, index) => (
                <div
                  key={index}
                  className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-green-500/50 transition-all"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${member.bgGradient} rounded-full mx-auto mb-3 flex items-center justify-center text-lg font-bold`}
                  >
                    <Image
                      src={`/${member.img}`}
                      alt={member.name}
                      width={64}
                      height={64}
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>

                  <h4 className="text-lg font-bold mb-1">{member.name}</h4>
                  <p className={`${member.roleColor} text-sm mb-2`}>
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-xs mb-3">{member.details}</p>
                  <p className="text-gray-400 text-xs">📧 {member.email}</p>
                  <button
                    onClick={() => window.open(member.link, "_blank")}
                    className={`p-2 font-semibold border border-gray-700 bg-gradient-to-br ${member.bgGradient}  text-white rounded-lg px-2 py-1 mt-2`}
                  >
                    Connect{" "}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-16 text-center">
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
              <p className="text-gray-300 mb-6">
                Have questions about C-Rush? Our organizing team is here to
                help!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-700/30 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-400 mb-2">
                    General Inquiries
                  </h4>
                  <p className="text-gray-300">📧 nikhilkandhare22@gmail.com</p>
                  <p className="text-gray-300">📞 +91 9112430021</p>
                </div>
                <div className="bg-gray-700/30 rounded-lg p-4">
                  <h4 className="font-semibold text-green-400 mb-2">
                    Technical Support
                  </h4>
                  <p className="text-gray-300">
                    📧 ajinkyanishanecse@gmsil.com
                  </p>
                  <p className="text-gray-300">📞 +91 7820966939</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Organizer;
