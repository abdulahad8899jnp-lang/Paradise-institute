import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase/firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

interface Student {
  id: string;
  name: string;
  regNo: string;
  dob: string;
  certificateUrl: string;
  marksheetUrl: string;
}

export default function AdminDashboard() {
  const navigate = useNavigate();

  const [students, setStudents] = useState<Student[]>([]);
  const [editId, setEditId] = useState<string | null>(null);

  const [form, setForm] = useState<Student>({
    id: "",
    name: "",
    regNo: "",
    dob: "",
    certificateUrl: "",
    marksheetUrl: "",
  });

  const fetchStudents = async () => {
    try {
      const snap = await getDocs(collection(db, "students"));

      const data = snap.docs.map((item) => ({
        id: item.id,
        ...(item.data() as Omit<Student, "id">),
      }));

      setStudents(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleDelete = async (id: string) => {
    const ok = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!ok) return;

    try {
      await deleteDoc(doc(db, "students", id));

      alert("Student deleted successfully");

      fetchStudents();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (student: Student) => {
    setEditId(student.id);

    setForm({
      ...student,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleUpdate = async () => {
    if (!editId) return;

    const ok = window.confirm(
      "Save changes to this student?"
    );

    if (!ok) return;

    try {
      await updateDoc(
        doc(db, "students", editId),
        {
          name: form.name,
          regNo: form.regNo,
          dob: form.dob,
          certificateUrl: form.certificateUrl,
          marksheetUrl: form.marksheetUrl,
        }
      );

      alert("Student updated successfully");

      setEditId(null);

      setForm({
        id: "",
        name: "",
        regNo: "",
        dob: "",
        certificateUrl: "",
        marksheetUrl: "",
      });

      fetchStudents();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-teal-50 pt-28 pb-10 px-4">

  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-8">

      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
          Admin Dashboard
        </h1>

        <p className="text-gray-500 mt-1">
          Paradise Computer Institute Student Management
        </p>
      </div>

      <div className="flex gap-3">

        <button
          onClick={() => navigate("/admin/upload")}
          className="
          bg-gradient-to-r
          from-green-500
          to-emerald-600
          text-white
          px-5
          py-3
          rounded-xl
          font-semibold
          shadow-lg
          hover:scale-105
          transition
        "
        >
          + Add Student
        </button>

        <button
          onClick={() => navigate("/admin")}
          className="
          bg-gradient-to-r
          from-yellow-400
          to-yellow-500
          text-black
          px-5
          py-3
          rounded-xl
          font-semibold
          shadow-lg
          hover:scale-105
          transition
        "
        >
          Back
        </button>

      </div>

    </div>

    {/* Edit Form */}
    {editId && (
      <div className="bg-white rounded-3xl shadow-xl p-6 mb-8 border">

        <h2 className="text-2xl font-bold text-teal-600 mb-5">
          Edit Student
        </h2>

        <div className="grid md:grid-cols-3 gap-4">

          <input
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
            placeholder="Student Name"
            className="
            p-3
            rounded-xl
            border
            outline-none
            focus:border-teal-500
          "
          />

          <input
            value={form.regNo}
            onChange={(e) =>
              setForm({
                ...form,
                regNo: e.target.value,
              })
            }
            placeholder="Registration Number"
            className="
            p-3
            rounded-xl
            border
            outline-none
            focus:border-teal-500
          "
          />

          <input
            type="date"
            value={form.dob}
            onChange={(e) =>
              setForm({
                ...form,
                dob: e.target.value,
              })
            }
            className="
            p-3
            rounded-xl
            border
            outline-none
            focus:border-teal-500
          "
          />

        </div>

        <button
          onClick={handleUpdate}
          className="
          mt-5
          bg-gradient-to-r
          from-teal-600
          to-cyan-600
          text-white
          px-6
          py-3
          rounded-xl
          font-semibold
          shadow-lg
        "
        >
          Update Student
        </button>

      </div>
    )}

    {/* Table Card */}
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-5">

        <h2 className="text-white text-2xl font-bold">
          Student Records
        </h2>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="bg-gray-100 text-gray-700">

              <th className="p-4 text-left">
                Name
              </th>

              <th className="p-4 text-left">
                Reg No
              </th>

              <th className="p-4 text-left">
                DOB
              </th>

              <th className="p-4 text-left">
                Documents
              </th>

              <th className="p-4 text-left">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {students.map((student) => (

              <tr
                key={student.id}
                className="
                border-t
                hover:bg-cyan-50
                transition
              "
              >

                <td className="p-4 font-semibold text-gray-800">
                  {student.name}
                </td>

                <td className="p-4 text-gray-700">
                  {student.regNo}
                </td>

                <td className="p-4 text-gray-700">
                  {student.dob}
                </td>

                <td className="p-4">

                  <div className="flex flex-wrap gap-2">

                    {student.certificateUrl && (
                      <a
                        href={student.certificateUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="
                        bg-green-500
                        text-white
                        px-3
                        py-2
                        rounded-lg
                        text-sm
                      "
                      >
                        Certificate
                      </a>
                    )}

                    {student.marksheetUrl && (
                      <a
                        href={student.marksheetUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="
                        bg-blue-500
                        text-white
                        px-3
                        py-2
                        rounded-lg
                        text-sm
                      "
                      >
                        Marksheet
                      </a>
                    )}

                  </div>

                </td>

                <td className="p-4">

                  <div className="flex gap-2">

                    <button
                      onClick={() =>
                        handleEdit(student)
                      }
                      className="
                      bg-gradient-to-r
                      from-blue-500
                      to-cyan-500
                      text-white
                      px-4
                      py-2
                      rounded-lg
                      font-medium
                    "
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(student.id)
                      }
                      className="
                      bg-gradient-to-r
                      from-red-500
                      to-pink-500
                      text-white
                      px-4
                      py-2
                      rounded-lg
                      font-medium
                    "
                    >
                      Delete
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  </div>

</div>
    // <div className="min-h-screen bg-gray-950 text-white p-6">

    //   {/* Header */}
    //   <div className="flex flex-wrap justify-between items-center gap-3 mb-8">

    //     <h1 className="text-3xl font-bold text-yellow-400">
    //       Admin Dashboard
    //     </h1>

    //     <div className="flex gap-3">

    //       <button
    //         onClick={() =>
    //           navigate("/admin/upload")
    //         }
    //         className="
    //           bg-green-500
    //           hover:bg-green-600
    //           px-4 py-2
    //           rounded-xl
    //           font-semibold
    //         "
    //       >
    //         + Add Student
    //       </button>

    //       <button
    //         onClick={() =>
    //           navigate("/admin")
    //         }
    //         className="
    //           bg-yellow-500
    //           hover:bg-yellow-600
    //           text-black
    //           px-4 py-2
    //           rounded-xl
    //           font-semibold
    //         "
    //       >
    //         Back
    //       </button>

    //     </div>

    //   </div>

    //   {/* Edit Form */}
    //   {editId && (
    //     <div className="bg-gray-900 p-5 rounded-2xl mb-8">

    //       <h2 className="text-xl font-bold text-green-400 mb-4">
    //         Edit Student
    //       </h2>

    //       <input
    //         value={form.name}
    //         onChange={(e) =>
    //           setForm({
    //             ...form,
    //             name: e.target.value,
    //           })
    //         }
    //         placeholder="Student Name"
    //         className="
    //           w-full
    //           p-3
    //           mb-3
    //           rounded-xl
    //           bg-gray-800
    //         "
    //       />

    //       <input
    //         value={form.regNo}
    //         onChange={(e) =>
    //           setForm({
    //             ...form,
    //             regNo: e.target.value,
    //           })
    //         }
    //         placeholder="Registration Number"
    //         className="
    //           w-full
    //           p-3
    //           mb-3
    //           rounded-xl
    //           bg-gray-800
    //         "
    //       />

    //       <input
    //         type="date"
    //         value={form.dob}
    //         onChange={(e) =>
    //           setForm({
    //             ...form,
    //             dob: e.target.value,
    //           })
    //         }
    //         className="
    //           w-full
    //           p-3
    //           mb-4
    //           rounded-xl
    //           bg-gray-800
    //         "
    //       />

    //       <button
    //         onClick={handleUpdate}
    //         className="
    //           bg-green-600
    //           hover:bg-green-700
    //           px-5 py-3
    //           rounded-xl
    //           font-semibold
    //         "
    //       >
    //         Update Student
    //       </button>

    //     </div>
    //   )}

    //   {/* Student Table */}
    //   <div className="overflow-x-auto">

    //     <table className="w-full border border-gray-800">

    //       <thead>
    //         <tr className="bg-gray-900">

    //           <th className="p-4 text-left">
    //             Name
    //           </th>

    //           <th className="p-4 text-left">
    //             Reg No
    //           </th>

    //           <th className="p-4 text-left">
    //             DOB
    //           </th>

    //           <th className="p-4 text-left">
    //             Documents
    //           </th>

    //           <th className="p-4 text-left">
    //             Actions
    //           </th>

    //         </tr>
    //       </thead>

    //       <tbody>

    //         {students.map((student) => (

    //           <tr
    //             key={student.id}
    //             className="
    //               border-t
    //               border-gray-800
    //             "
    //           >

    //             <td className="p-4">
    //               {student.name}
    //             </td>

    //             <td className="p-4">
    //               {student.regNo}
    //             </td>

    //             <td className="p-4">
    //               {student.dob}
    //             </td>

    //             <td className="p-4">

    //               <div className="flex flex-wrap gap-2">

    //                 {student.certificateUrl && (
    //                   <a
    //                     href={
    //                       student.certificateUrl
    //                     }
    //                     target="_blank"
    //                     rel="noreferrer"
    //                     className="
    //                       bg-purple-600
    //                       px-3 py-1
    //                       rounded
    //                     "
    //                   >
    //                     Certificate
    //                   </a>
    //                 )}

    //                 {student.marksheetUrl && (
    //                   <a
    //                     href={
    //                       student.marksheetUrl
    //                     }
    //                     target="_blank"
    //                     rel="noreferrer"
    //                     className="
    //                       bg-orange-600
    //                       px-3 py-1
    //                       rounded
    //                     "
    //                   >
    //                     Marksheet
    //                   </a>
    //                 )}

    //               </div>

    //             </td>

    //             <td className="p-4">

    //               <div className="flex gap-2">

    //                 <button
    //                   onClick={() =>
    //                     handleEdit(student)
    //                   }
    //                   className="
    //                     bg-blue-500
    //                     px-3 py-1
    //                     rounded
    //                   "
    //                 >
    //                   Edit
    //                 </button>

    //                 <button
    //                   onClick={() =>
    //                     handleDelete(
    //                       student.id
    //                     )
    //                   }
    //                   className="
    //                     bg-red-500
    //                     px-3 py-1
    //                     rounded
    //                   "
    //                 >
    //                   Delete
    //                 </button>

    //               </div>

    //             </td>

    //           </tr>

    //         ))}

    //       </tbody>

    //     </table>

    //   </div>
    // </div>
  );
}