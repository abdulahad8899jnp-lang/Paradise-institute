import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StudentSearch() {
  const navigate = useNavigate();

  const [regNo, setRegNo] = useState("");
  const [dob, setDob] = useState("");

  const handleSearch = () => {
    if (!regNo || !dob) {
      alert("Please fill all fields");
      return;
    }

    navigate(
      `/student-result?regNo=${regNo}&dob=${dob}`
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-teal-50 pt-28 md:pt-20 px-4 mb-5">

  <div className="max-w-lg mx-auto">

    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-teal-100">

      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-8 text-center">

        <img
          src="/logo.png"
          alt="logo"
          className="w-20 h-20 mx-auto mb-4 object-contain"
        />

        <h1 className="text-3xl font-bold text-white">
          Student Portal
        </h1>

        <p className="text-cyan-100 mt-2">
          Certificate & Marksheet Verification
        </p>

      </div>

      {/* Form */}
      <div className="p-6 md:p-8">

        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Registration Number
        </label>

        <input
          type="text"
          placeholder="Enter Registration Number"
          value={regNo}
          onChange={(e) => setRegNo(e.target.value)}
          className="w-full p-4 rounded-xl border border-gray-300 focus:border-teal-500 outline-none mb-5"
        />

        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Date of Birth
        </label>

        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="w-full p-4 rounded-xl border border-gray-300 focus:border-teal-500 outline-none mb-6"
        />

        <button
          onClick={handleSearch}
          className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold py-4 rounded-xl hover:scale-[1.02] transition"
        >
          Search Student
        </button>

        

        <p className="text-center text-gray-500 text-sm mt-6">
          Paradise Computer Institute • Verification System
        </p>

      </div>

    </div>

  </div>

</div>
    // <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4">

    //   <div className="w-full max-w-md bg-gray-900 p-8 rounded-3xl shadow-xl">

    //     <h1 className="text-3xl font-bold text-center text-yellow-400 mb-2">
    //       Student Portal
    //     </h1>

    //     <p className="text-center text-gray-400 mb-6">
    //       Search Your Certificate
    //     </p>

    //     <input
    //       type="text"
    //       placeholder="Registration Number"
    //       value={regNo}
    //       onChange={(e) =>
    //         setRegNo(e.target.value)
    //       }
    //       className="w-full p-3 mb-4 rounded-xl bg-gray-800 text-white"
    //     />

    //     <input
    //       type="date"
    //       value={dob}
    //       onChange={(e) =>
    //         setDob(e.target.value)
    //       }
    //       className="w-full p-3 mb-6 rounded-xl bg-gray-800 text-white"
    //     />

    //     <button
    //       onClick={handleSearch}
    //       className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-xl"
    //     >
    //       Search Student
    //     </button>

    //     <button
    //       onClick={() => navigate("/admin")}
    //       className="w-full mt-3 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl"
    //     >
    //       Admin Login
    //     </button>

    //   </div>
    // </div>
  );
}