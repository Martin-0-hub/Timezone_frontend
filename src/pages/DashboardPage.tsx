// src/pages/DashboardPage.tsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  CircularProgress,
} from "@mui/material";

interface Timezone {
  id: number;
  name: string;
  city: string;
  gmt_diff: string; // match your backend serializer field
}

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();

  const [timezones, setTimezones] = useState<Timezone[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentTZ, setCurrentTZ] = useState<Timezone | null>(null);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("accessToken");

//   useEffect(() => {
//     const token = localStorage.getItem("accessToken");
//     if (!token) {
//       navigate("/login"); // redirect to login if not logged in
//     }
//   }, [navigate]);
  // Load all timezones
  useEffect(() => {
    const fetchTimezones = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:8000/api/timezones/", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (res.ok) setTimezones(data);
        // if (res.ok) {
        // setTimezones(Array.isArray(data) ? data : data.results || []);
        // } else {
        // console.error("Error:", data);
        // }
         console.log('datas:',data)
        // else console.error("Error:", data);
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTimezones();
  }, [token]);

  const handleOpenAdd = () => {
    setEditMode(false);
    setCurrentTZ({ id: 0, name: "", city: "", gmt_diff: "" });
    setModalOpen(true);
  };

  const handleOpenEdit = (tz: Timezone) => {
    setEditMode(true);
    setCurrentTZ(tz);
    setModalOpen(true);
  };

  const handleClose = () => setModalOpen(false);

  const handleSave = async () => {
    if (!currentTZ) return;

    setLoading(true);
    try {
      if (editMode) {
        const res = await fetch(
          `http://localhost:8000/api/timezones/${currentTZ.id}/`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(currentTZ),
          }
        );
        if (res.ok) {
          setTimezones((prev) =>
            prev.map((tz) => (tz.id === currentTZ.id ? currentTZ : tz))
          );
        }
      } else {
        const res = await fetch("http://localhost:8000/api/timezones/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(currentTZ),
        });
        const data = await res.json();
        if (res.ok) setTimezones((prev) => [...prev, data]);
      }
    } catch (err) {
      console.error("Save error:", err);
    } finally {
      setLoading(false);
      setModalOpen(false);
    }
  };

  const handleDelete = async (id: number) => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:8000/api/timezones/${id}/`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        setTimezones((prev) => prev.filter((tz) => tz.id !== id));
      }
    } catch (err) {
      console.error("Delete error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          My Timezones
        </h1>
        <button
          onClick={handleOpenAdd}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold"
        >
          + Add Timezone
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <CircularProgress />
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow">
            <thead>
              <tr className="text-left border-b border-gray-200 dark:border-gray-700">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">City</th>
                <th className="px-4 py-2">GMT Offset</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {timezones.map((tz) => (
                <tr
                  key={tz.id}
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="px-4 py-2 text-gray-900 dark:text-white">
                    {tz.name}
                  </td>
                  <td className="px-4 py-2 text-gray-900 dark:text-white">
                    {tz.city}
                  </td>
                  <td className="px-4 py-2 text-gray-900 dark:text-white">
                    {tz.gmt_diff}
                  </td>
                  <td className="px-4 py-2 flex gap-2">
                    <button
                      onClick={() => handleOpenEdit(tz)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(tz.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {timezones.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="px-4 py-4 text-center text-gray-500 dark:text-gray-400"
                  >
                    No timezones available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Add/Edit Modal */}
      <Dialog open={modalOpen} onClose={handleClose}>
        <DialogTitle>{editMode ? "Edit Timezone" : "Add Timezone"}</DialogTitle>
        <DialogContent className="flex flex-col gap-4 mt-2">
          <TextField
            label="Name"
            variant="outlined"
            value={currentTZ?.name || ""}
            onChange={(e) =>
              setCurrentTZ((prev) =>
                prev ? { ...prev, name: e.target.value } : null
              )
            }
          />
          <TextField
            label="City"
            variant="outlined"
            value={currentTZ?.city || ""}
            onChange={(e) =>
              setCurrentTZ((prev) =>
                prev ? { ...prev, city: e.target.value } : null
              )
            }
          />
          <TextField
            label="GMT Offset"
            variant="outlined"
            value={currentTZ?.gmt_diff || ""}
            onChange={(e) =>
              setCurrentTZ((prev) =>
                prev ? { ...prev, gmt_diff: e.target.value } : null
              )
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            {editMode ? "Save" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DashboardPage;
