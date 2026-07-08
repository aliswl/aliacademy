"use client";

import { useState } from "react";
import { Upload, Pencil, Trash2 } from "lucide-react";
export default function Admin() {
  const [activeTab, setActiveTab] = useState("upload");

  const [className, setClassName] = useState("");
  const [subject, setSubject] = useState("");
  const [status, setStatus] = useState("Coming Soon");
  const [pdfURL, setPdfURL] = useState("");

  const [loading, setLoading] = useState(false);

  const [deleteClass, setDeleteClass] = useState("");
  const [deleteSubject, setDeleteSubject] = useState("");
  const [deleteLoading, setDeleteLoading] = useState(false);

  const [updateClass, setUpdateClass] = useState("");
  const [updateSubject, setUpdateSubject] = useState("");
  const [updateStatus, setUpdateStatus] = useState("Uploaded");
  const [updatePdf, setUpdatePdf] = useState("");
  const [updateLoading, setUpdateLoading] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!className || !subject || !status) {
      alert("Please fill all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          className,
          subject,
          status,
          pdfURL,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to upload note.");
      }

      alert("Note uploaded successfully.");

      // Reset form
      setClassName("");
      setSubject("");
      setStatus("Coming Soon");
      setPdfURL("");
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    setDeleteLoading(true);

    const res = await fetch("/api/notes", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        className: deleteClass,
        subject: deleteSubject,
      }),
    });

    const data = await res.json();
    setDeleteLoading(false);
    setDeleteClass("");
    setDeleteSubject("");
    alert(data.message);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("className", updateClass);
    formData.append("subject", updateSubject);
    formData.append("status", updateStatus);

    if (updatePdf) {
      formData.append("pdfURL", updatePdf);
    }

    setUpdateLoading(true);
    const res = await fetch("/api/notes", {
      method: "PUT",
      body: formData,
    });

    const data = await res.json();

    setUpdateLoading(false);
    setUpdateClass("");
    setUpdateStatus("");
    setUpdateSubject("");
    setUpdatePdf("");
    alert(data.message);
  };

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-black rounded-3xl p-8 text-white mb-8">
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          <p className="mt-2 text-gray-300">Manage Notes for Ali Academy</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab("upload")}
            className={`flex-1 py-3 rounded-xl font-semibold transition ${
              activeTab === "upload" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            <Upload className="inline w-5 h-5 mr-2" />
            Upload
          </button>

          <button
            onClick={() => setActiveTab("update")}
            className={`flex-1 py-3 rounded-xl font-semibold transition ${
              activeTab === "update" ? "bg-green-600 text-white" : "bg-gray-200"
            }`}
          >
            <Pencil className="inline w-5 h-5 mr-2" />
            Update
          </button>

          <button
            onClick={() => setActiveTab("delete")}
            className={`flex-1 py-3 rounded-xl font-semibold transition ${
              activeTab === "delete" ? "bg-red-600 text-white" : "bg-gray-200"
            }`}
          >
            <Trash2 className="inline w-5 h-5 mr-2" />
            Delete
          </button>
        </div>

        <div className="bg-white rounded-3xl p-8">
          {/* Upload */}
          {activeTab === "upload" && (
            <>
              <h2 className="text-3xl font-bold text-slate-800 mb-2">
                📚 Upload New Notes
              </h2>

              <p className="text-gray-500 mb-8">
                Upload new study notes for any class and subject.
              </p>

              <form onSubmit={handleUpload} className="space-y-6">
                {/* Class */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Select Class
                  </label>

                  <select
                    value={className}
                    onChange={(e) => setClassName(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  >
                    <option value="">Choose Class</option>
                    <option>9th Class</option>
                    <option>10th Class</option>
                    <option>11th Class</option>
                    <option>12th Class</option>
                  </select>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Subject Name
                  </label>

                  <input
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    type="text"
                    placeholder="Enter Subject Name"
                    className="w-full rounded-xl border border-gray-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>

                {/* Status */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Note Status
                  </label>

                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  >
                    <option>Uploaded</option>
                    <option>Coming Soon</option>
                  </select>
                </div>

                {/* PDF URL */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    PDF URL
                  </label>

                  <input
                    type="url"
                    placeholder="Paste the PDF URL here."
                    value={pdfURL}
                    onChange={(e) => setPdfURL(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-xl"
                >
                  {loading ? "Uploading..." : "Upload Notes"}
                </button>
              </form>
            </>
          )}

          {/* Update */}
          {activeTab === "update" && (
            <>
              <h2 className="text-2xl font-bold mb-6">Update Existing Notes</h2>

              <div className="space-y-5">
                <form onSubmit={handleUpdate} className="space-y-6">
                  <div>
                    <label className="block font-semibold mb-2">
                      Select Class
                    </label>

                    <select
                      value={updateClass}
                      onChange={(e) => setUpdateClass(e.target.value)}
                      className="w-full border rounded-xl p-3"
                    >
                      <option value="">Choose Class</option>
                      <option>9th Class</option>
                      <option>10th Class</option>
                      <option>11th Class</option>
                      <option>12th Class</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold mb-2">Subject</label>

                    <input
                      type="text"
                      value={updateSubject}
                      onChange={(e) => setUpdateSubject(e.target.value)}
                      placeholder="Enter Subject"
                      className="w-full border rounded-xl p-3"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-2">Status</label>

                    <select
                      value={updateStatus}
                      onChange={(e) => setUpdateStatus(e.target.value)}
                      className="w-full border rounded-xl p-3"
                    >
                      <option>Uploaded</option>
                      <option>Coming Soon</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold mb-2">
                      Replace PDF
                    </label>

                    <input
                      type="url"
                      placeholder="Paste the PDF URL here."
                      value={updatePdf}
                      onChange={(e) => setUpdatePdf(e.target.value)}
                      className="w-full border rounded-xl p-3"
                    />
                  </div>

                  <button
                    disabled={updateLoading}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold"
                  >
                    {updateLoading ? "Updating..." : "Update Notes"}
                  </button>
                </form>
              </div>
            </>
          )}

          {/* Delete */}
          {activeTab === "delete" && (
            <>
              <h2 className="text-2xl font-bold mb-6">Delete Notes</h2>

              <div className="space-y-5">
                <form onSubmit={handleDelete} className="space-y-6">
                  {/* Class */}
                  <div>
                    <label className="block font-semibold mb-2">
                      Select Class
                    </label>

                    <select
                      value={deleteClass}
                      onChange={(e) => setDeleteClass(e.target.value)}
                      className="w-full border rounded-xl p-3"
                    >
                      <option value="">Choose Class</option>
                      <option>9th Class</option>
                      <option>10th Class</option>
                      <option>11th Class</option>
                      <option>12th Class</option>
                    </select>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block font-semibold mb-2">Subject</label>

                    <input
                      type="text"
                      value={deleteSubject}
                      onChange={(e) => setDeleteSubject(e.target.value)}
                      placeholder="Enter Subject"
                      className="w-full border rounded-xl p-3"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={deleteLoading}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition"
                  >
                    {deleteLoading ? "Deleting..." : "Delete Notes"}
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
