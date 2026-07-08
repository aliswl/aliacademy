import { useState } from "react";

export default function Card({ className, notes = [], icon }) {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <div className="pt-10">
      {/* Header */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <img
          src={icon}
          alt={className}
          className="w-16 h-16 rounded-lg object-cover"
        />

        <div>
          <h2 className="text-2xl font-bold text-gray-800">{className}</h2>
          <p className="text-gray-500 text-sm">Study Notes</p>
        </div>
      </div>

      {/* Subjects */}
      <div className="flex items-center justify-center gap-4 flex-wrap px-3 pb-10">
        {notes.map((note, index) => (
          <div
            key={index}
            className="group relative w-38 h-12 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
          >
            {/* Subject Name */}
            <div
              onClick={() => handleCardClick(index)}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-300 cursor-pointer
                ${
                  activeCard === index
                    ? "-translate-y-full"
                    : "group-hover:-translate-y-full"
                }`}
            >
              <h3 className="font-semibold text-gray-800">📘 {note.name}</h3>
            </div>

            {/* Download / Coming Soon */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-300
                ${
                  activeCard === index
                    ? "translate-y-0"
                    : "translate-y-full group-hover:translate-y-0"
                }`}
            >
              {note.pdfURL ? (
                <a
                  href={note.pdfURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-4 py-1 rounded-lg hover:bg-green-700"
                >
                  ⬇ Download
                </a>
              ) : (
                <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-lg font-medium">
                  🚧 Coming Soon
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
