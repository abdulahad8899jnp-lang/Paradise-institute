import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

interface StudentForm {
  name: string;
  regNo: string;
  dob: string;
  certificateUrl: string;
  marksheetUrl: string;
}

export default function AdminUpload() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);

  const [form, setForm] = useState<StudentForm>({
    name: "",
    regNo: "",
    dob: "",
    certificateUrl: "",
    marksheetUrl: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const uploadFile = async (
    file: File,
    field: "certificateUrl" | "marksheetUrl"
  ) => {
    if (!file) return;

    setLoading(true);

    try {
      const data = new FormData();

      data.append("file", file);

      data.append(
        "upload_preset",
        "products"
      );

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dralkl52u/auto/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await res.json();

      if (result.secure_url) {
        setForm((prev) => ({
          ...prev,
          [field]: result.secure_url,
        }));
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      alert("Upload Failed");
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (
      !form.name ||
      !form.regNo ||
      !form.dob
    ) {
      alert("Fill all required fields");
      return;
    }

    try {
      await addDoc(
        collection(db, "students"),
        form
      );

      alert(
        "Student Added Successfully"
      );

      setForm({
        name: "",
        regNo: "",
        dob: "",
        certificateUrl: "",
        marksheetUrl: "",
      });

      navigate("/admin/dashboard");
    } catch (error) {
      console.log(error);
      alert("Error Saving Data");
    }
  };

  return (
    // <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">

    //   <button
    //     onClick={() =>
    //       navigate("/admin/dashboard")
    //     }
    //     className="
    //       fixed
    //       top-4
    //       right-4
    //       z-50
    //       bg-yellow-500
    //       hover:bg-yellow-600
    //       px-4
    //       py-2
    //       rounded-lg
    //       text-black
    //       font-semibold
    //     "
    //   >
    //     ← Back
    //   </button>

    //   <div className="w-full max-w-lg bg-gray-900 rounded-2xl p-6 shadow-xl">

    //     <h1 className="text-3xl font-bold text-center text-yellow-400 mb-6">
    //       Add Student
    //     </h1>

    //     <input
    //       name="name"
    //       value={form.name}
    //       onChange={handleChange}
    //       placeholder="Student Name"
    //       className="w-full p-3 mb-3 rounded bg-gray-800 text-white"
    //     />

    //     <input
    //       name="regNo"
    //       value={form.regNo}
    //       onChange={handleChange}
    //       placeholder="Registration Number"
    //       className="w-full p-3 mb-3 rounded bg-gray-800 text-white"
    //     />

    //     <input
    //       type="date"
    //       name="dob"
    //       value={form.dob}
    //       onChange={handleChange}
    //       className="w-full p-3 mb-4 rounded bg-gray-800 text-white"
    //     />

    //     <div className="mb-4">
    //       <label className="block text-gray-300 mb-2">
    //         Certificate
    //       </label>

    //       <input
    //         type="file"
    //         accept="image/*,.pdf"
    //         onChange={(e) => {
    //           const file =
    //             e.target.files?.[0];

    //           if (file) {
    //             uploadFile(
    //               file,
    //               "certificateUrl"
    //             );
    //           }
    //         }}
    //         className="w-full p-2 bg-gray-800 rounded text-white"
    //       />

    //       {form.certificateUrl && (
    //         <p className="text-green-400 text-sm mt-2">
    //           Uploaded Successfully ✔
    //         </p>
    //       )}
    //     </div>

    //     <div className="mb-4">
    //       <label className="block text-gray-300 mb-2">
    //         Marksheet
    //       </label>

    //       <input
    //         type="file"
    //         accept="image/*,.pdf"
    //         onChange={(e) => {
    //           const file =
    //             e.target.files?.[0];

    //           if (file) {
    //             uploadFile(
    //               file,
    //               "marksheetUrl"
    //             );
    //           }
    //         }}
    //         className="w-full p-2 bg-gray-800 rounded text-white"
    //       />

    //       {form.marksheetUrl && (
    //         <p className="text-green-400 text-sm mt-2">
    //           Uploaded Successfully ✔
    //         </p>
    //       )}
    //     </div>

    //     {loading && (
    //       <p className="text-yellow-400 mb-3">
    //         Uploading File...
    //       </p>
    //     )}

    //     <button
    //       onClick={handleSubmit}
    //       className="
    //         w-full
    //         bg-blue-600
    //         hover:bg-blue-700
    //         p-3
    //         rounded-xl
    //         text-white
    //         font-semibold
    //       "
    //     >
    //       Save Student
    //     </button>
    //   </div>
    // </div>
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-teal-50 pt-20 pb-10 px-4">

  <div className="max-w-3xl mx-auto">

    {/* Back Button */}
    <div className="flex justify-end mb-5">

    </div>

    {/* Card */}
    <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">

      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-8 text-center relative">

  {/* Back Button */}
  <button
    onClick={() => navigate("/admin/dashboard")}
    className="
      absolute
      top-4
      left-4
      bg-white/20
      backdrop-blur-md
      text-white
      px-4
      py-2
      rounded-xl
      font-semibold
      hover:bg-white/30
      transition
    "
  >
    ← Back
  </button>

  <img
    src="/logo.png"
    alt="logo"
    className="w-20 h-20 mx-auto mb-4 object-contain"
  />

  <h1 className="text-4xl font-bold text-white">
    Add Student
  </h1>

  <p className="text-cyan-100 mt-2">
    Paradise Computer Institute
  </p>

</div>

      {/* Form */}
      <div className="p-8">

        <div className="grid md:grid-cols-2 gap-5">

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Student Name"
            className="
            p-4
            rounded-xl
            border
            border-gray-300
            outline-none
            focus:border-teal-500
          "
          />

          <input
            name="regNo"
            value={form.regNo}
            onChange={handleChange}
            placeholder="Registration Number"
            className="
            p-4
            rounded-xl
            border
            border-gray-300
            outline-none
            focus:border-teal-500
          "
          />

        </div>

        <input
          type="date"
          name="dob"
          value={form.dob}
          onChange={handleChange}
          className="
          mt-5
          w-full
          p-4
          rounded-xl
          border
          border-gray-300
          outline-none
          focus:border-teal-500
        "
        />

        {/* Certificate */}
        <div className="mt-6">

          <label className="font-semibold text-gray-700 block mb-2">
            Upload Certificate
          </label>

          <input
            type="file"
            accept="image/*,.pdf"
            onChange={(e) => {
              const file = e.target.files?.[0];

              if (file) {
                uploadFile(file, "certificateUrl");
              }
            }}
            className="
            w-full
            p-3
            border
            border-dashed
            border-teal-400
            rounded-xl
          "
          />

          {form.certificateUrl && (
            <p className="text-green-600 mt-2 font-medium">
              ✓ Certificate Uploaded
            </p>
          )}

        </div>

        {/* Marksheet */}
        <div className="mt-6">

          <label className="font-semibold text-gray-700 block mb-2">
            Upload Marksheet
          </label>

          <input
            type="file"
            accept="image/*,.pdf"
            onChange={(e) => {
              const file = e.target.files?.[0];

              if (file) {
                uploadFile(file, "marksheetUrl");
              }
            }}
            className="
            w-full
            p-3
            border
            border-dashed
            border-cyan-400
            rounded-xl
          "
          />

          {form.marksheetUrl && (
            <p className="text-green-600 mt-2 font-medium">
              ✓ Marksheet Uploaded
            </p>
          )}

        </div>

        {/* Loading */}
        {loading && (
          <div className="mt-5 text-center text-yellow-600 font-semibold">
            Uploading File...
          </div>
        )}

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="
          mt-8
          w-full
          py-4
          rounded-2xl
          text-white
          font-bold
          text-lg
          bg-gradient-to-r
          from-teal-600
          to-cyan-600
          hover:scale-[1.02]
          transition
          shadow-lg
        "
        >
          Save Student Record
        </button>

      </div>

    </div>

  </div>

</div>
  );
}