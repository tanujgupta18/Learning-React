import React, { useState } from "react";

const NotesApp = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notesList, setNotesList] = useState([]);

  const addNote = () => {
    if (!title.trim() || !description.trim()) return;

    const newItem = { title, description };
    setNotesList((prev) => [...prev, newItem]);

    setTitle("");
    setDescription("");
  };

  const deleteNote = (index) => {
    setNotesList(notesList.filter((item, i) => i !== index));
  };

  return (
    <div className="min-h-[60vh] bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-2xl p-8 rounded-2xl shadow-md border border-gray-200">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Notes App
        </h1>

        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Enter note title"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter note description"
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none"
            />
          </div>

          <button
            onClick={addNote}
            className="w-full py-2 bg-gray-900 text-white rounded-lg
                       hover:bg-gray-700 transition duration-200 font-medium"
          >
            Add Note
          </button>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Your Notes
          </h2>

          {notesList.length === 0 && (
            <p className="text-gray-400 text-sm text-center">
              No notes added yet
            </p>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            {notesList.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm"
              >
                <h3 className="font-semibold text-gray-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
                <button
                  onClick={() => deleteNote(index)}
                  className="mt-3 text-sm px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300 transition"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesApp;
