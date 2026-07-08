"use client";

import { useEffect, useState } from "react";

import Intro from "@/components/intro";
import Footer from "@/components/footer";
import Card from "@/components/card";
import Skeleton from "@/components/skeleton";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/notes");

      const data = await res.json();

      if (data.success) {
        setNotes(data.notes);
        // console.log("data from the homescreen" ,data.notes)
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const groupedNotes = notes.reduce((acc, note) => {
    if (!acc[note.className]) {
      acc[note.className] = [];
    }

    acc[note.className].push({
      id: note._id,
      name: note.subject,
      status: note.status,
      pdfURL: note.pdfURL,
    });

    return acc;
  }, {});

  const icons = {
    "9th Class": "/9.png",
    "10th Class": "/10.png",
    "11th Class": "/11.png",
    "12th Class": "/12.png",
  };

  const classOrder = ["9th Class", "10th Class", "11th Class", "12th Class"];

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
      <div className="max-w-5xl w-full">
        <Intro />

        <div className="pt-10 border-b-2 border-gray-600" />

        {loading ? (
          <>
            <Skeleton />
            <Skeleton />
          </>
        ) : (
          classOrder
            .filter((className) => groupedNotes[className])
            .map((className) => (
              <div key={className}>
                <Card
                  className={className}
                  icon={icons[className]}
                  notes={groupedNotes[className]}
                />

                {className !== "12th Class" && (
                  <div className="pt-0 border-b-2 border-gray-600" />
                )}
              </div>
            ))
        )}

        <Footer />
      </div>
    </div>
  );
}
