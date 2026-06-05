import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      setLoading(true);

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Login Successful");

      navigate("/admin/dashboard");
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-teal-50 flex items-center justify-center px-4 pt-20">

  <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">

    {/* Header */}
    <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-8 text-center">

      <img
        src="/logo.png"
        alt="logo"
        className="w-20 h-20 mx-auto mb-4 object-contain bg-white rounded-full p-2"
      />

      <h1 className="text-3xl font-bold text-white">
        Admin Login
      </h1>

      <p className="text-cyan-100 mt-2">
        Paradise Computer Institute
      </p>

    </div>

    {/* Form */}
    <div className="p-8">

      <div className="mb-4">
        <label className="block text-gray-600 mb-2 text-sm font-medium">
          Email Address
        </label>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="
            w-full
            p-3
            rounded-xl
            border
            border-gray-300
            focus:border-teal-500
            focus:ring-2
            focus:ring-teal-200
            outline-none
          "
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-600 mb-2 text-sm font-medium">
          Password
        </label>

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="
            w-full
            p-3
            rounded-xl
            border
            border-gray-300
            focus:border-teal-500
            focus:ring-2
            focus:ring-teal-200
            outline-none
          "
        />
      </div>

      <button
        onClick={login}
        disabled={loading}
        className="
          w-full
          py-3
          rounded-xl
          font-bold
          text-white
          bg-gradient-to-r
          from-teal-600
          to-cyan-600
          hover:scale-[1.02]
          transition
        "
      >
        {loading ? "Logging In..." : "Login To Admin Panel"}
      </button>

      <button
        onClick={() => navigate("/")}
        className="
          w-full
          mt-3
          py-3
          rounded-xl
          border
          border-gray-300
          text-gray-700
          hover:bg-gray-50
          font-semibold
        "
      >
        ← Back To Home
      </button>

    </div>

  </div>

</div>
    // <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4">

    //   <div className="w-full max-w-md p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">

    //     <h1 className="text-3xl font-bold text-center text-yellow-400 mb-2">
    //       Admin Login
    //     </h1>

    //     <p className="text-center text-gray-400 mb-6">
    //       Student Management System
    //     </p>

    //     <input
    //       type="email"
    //       placeholder="Email Address"
    //       value={email}
    //       onChange={(e) =>
    //         setEmail(e.target.value)
    //       }
    //       className="w-full p-3 mb-4 rounded-xl bg-black/40 border border-gray-700 text-white outline-none"
    //     />

    //     <input
    //       type="password"
    //       placeholder="Password"
    //       value={password}
    //       onChange={(e) =>
    //         setPassword(e.target.value)
    //       }
    //       className="w-full p-3 mb-6 rounded-xl bg-black/40 border border-gray-700 text-white outline-none"
    //     />

    //     <button
    //       onClick={login}
    //       disabled={loading}
    //       className="w-full py-3 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-black font-bold"
    //     >
    //       {loading
    //         ? "Logging In..."
    //         : "Login"}
    //     </button>

    //     <button
    //       onClick={() => navigate("/")}
    //       className="w-full mt-3 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-white"
    //     >
    //       Back To Home
    //     </button>

    //   </div>

    // </div>
  );
}