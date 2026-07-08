export default function Intro() {
    return (
        <>
         {/* Heading */}
        <div className="text-center pt-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight select-none">
            Prepare for Your Exams with the
            <span className="block text-blue-600 select-none">
              Best Study Notes
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8 select-none">
            Welcome to{" "}
            <span className="font-bold text-blue-600 select-none">
              Ali Academy
            </span>
            , your one-stop destination for high-quality educational notes. We
            provide easy-to-understand, syllabus-based notes for{" "}
            <span className="font-semibold select-none">
              9th, 10th, 11th, and 12th
            </span>{" "}
            classes to help students prepare confidently for board exams and
            achieve outstanding results.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-6 mt-12 select-none">
          <div className="bg-blue-50 rounded-2xl p-6 shadow hover:shadow-lg transition cursor-pointer">
            <h3 className="text-xl font-bold text-blue-700 mb-2">
              📖 High-Quality Notes
            </h3>
            <p className="text-gray-600">
              Well-organized and syllabus-based notes designed for easy
              understanding and quick revision.
            </p>
          </div>

          <div className="bg-green-50 rounded-2xl p-6 shadow hover:shadow-lg transition cursor-pointer">
            <h3 className="text-xl font-bold text-green-700 mb-2">
              🎓 Exam-Oriented Content
            </h3>
            <p className="text-gray-600">
              Important questions, solved examples, and exam-focused material
              prepared by experienced teachers.
            </p>
          </div>

          <div className="bg-yellow-50 rounded-2xl p-6 shadow hover:shadow-lg transition cursor-pointer">
            <h3 className="text-xl font-bold text-yellow-700 mb-2">
              ⚡ Easy to Learn
            </h3>
            <p className="text-gray-600">
              Simple explanations that make difficult concepts easy to
              understand and remember.
            </p>
          </div>

          <div className="bg-purple-50 rounded-2xl p-6 shadow hover:shadow-lg transition cursor-pointer">
            <h3 className="text-xl font-bold text-purple-700 mb-2">
              💯 Completely Free
            </h3>
            <p className="text-gray-600">
              Access all study notes for free and prepare for your exams without
              spending money.
            </p>
          </div>
        </div>

        {/* Tag Line */}
        <div className="text-center mt-12 select-none">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            🎯 Study Smart. Score Higher. Succeed with Ali Academy!
          </h2>

          <p className="mt-4 text-gray-600">
            Join thousands of students who are preparing for success with our
            free, high-quality study materials.
          </p>
        </div>
        </>
    )
}