import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import { db } from "../firebase/firebase";

import {
  collection,
  getDocs,
} from "firebase/firestore";

interface Student {
  id: string;
  name: string;
  regNo: string;
  dob: string;
  certificateUrl: string;
  marksheetUrl: string;
}

export default function StudentResult() {

  const navigate = useNavigate();

  const [searchParams] =
    useSearchParams();

  const [student, setStudent] =
    useState<Student | null>(null);

  const [loading, setLoading] =
    useState(true);

  const regNo =
    searchParams.get("regNo");

  const dob =
    searchParams.get("dob");

  useEffect(() => {
    fetchStudent();
  }, []);

  const fetchStudent = async () => {
    try {
      const snap = await getDocs(
        collection(db, "students")
      );

      const found = snap.docs.find(
        (doc) => {
          const data = doc.data();

          return (
            data.regNo === regNo &&
            data.dob === dob
          );
        }
      );

      if (found) {
        setStudent({
          id: found.id,
          ...(found.data() as Omit<
            Student,
            "id"
          >),
        });
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
        Loading...
      </div>
    );
  }
return (
  <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-teal-50 pt-20 pb-10 px-4">

    <div className="max-w-3xl mx-auto">

      {/* Back Button */}
     
      {!student ? (

        <div className="bg-white rounded-3xl shadow-xl p-10 text-center">

          <img
            src="/logo.png"
            alt="logo"
            className="w-24 h-24 mx-auto mb-6 object-contain"
          />

          <h2 className="text-3xl font-bold text-red-500">
            Student Not Found
          </h2>

          <p className="text-gray-500 mt-3">
            Registration Number or Date Of Birth is incorrect.
          </p>

        </div>

      ) : (

        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">

          {/* HEADER */}
           <div className="relative bg-gradient-to-r from-teal-600 to-cyan-600 p-8 text-center">

  <button
    onClick={() => navigate("/student-search")}
    className="
      absolute
      top-4
      left-4
      bg-white/20
      backdrop-blur-md
      border border-white/20
      text-white
      px-4
      py-2
      rounded-xl
      font-medium
      hover:bg-white/30
      transition
    "
  >
    ← Back
  </button>

  <img
    src="/logo.png"
    alt="logo"
    className="w-24 h-24 mx-auto mb-4 object-contain"
  />

  <h1 className="text-4xl font-bold text-white">
    Student Verification
  </h1>

  <p className="text-cyan-100 mt-2">
    Paradise Computer Institute
  </p>

</div>

          {/* CONTENT */}
          <div className="p-8">

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <p className="text-sm text-gray-500">
                    Student Name
                  </p>

                  <h3 className="text-xl font-bold text-gray-800">
                    {student.name}
                  </h3>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Registration Number
                  </p>

                  <h3 className="text-xl font-bold text-gray-800">
                    {student.regNo}
                  </h3>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Date Of Birth
                  </p>

                  <h3 className="text-xl font-bold text-gray-800">
                    {student.dob}
                  </h3>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Verification Status
                  </p>

                  <span className="inline-block mt-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
                    ✓ Verified Student
                  </span>
                </div>

              </div>

            </div>

            {/* DOCUMENTS */}
            <div className="grid md:grid-cols-2 gap-5 mt-8">

  {student.certificateUrl && (
    <div className="bg-green-50 border border-green-200 p-5 rounded-2xl">

      <h3 className="font-bold text-green-700 mb-4">
        Certificate
      </h3>

      <div className="flex flex-col gap-3">

        <a
          href={student.certificateUrl}
          target="_blank"
          rel="noreferrer"
          className="
            text-center
            bg-green-600
            hover:bg-green-700
            text-white
            py-3
            rounded-xl
            font-semibold
          "
        >
          View Certificate
        </a>

        <a
          href={student.certificateUrl.replace(
            "/upload/",
            "/upload/fl_attachment/"
          )}
          target="_blank"
          rel="noreferrer"
          className="
            text-center
            bg-green-800
            hover:bg-green-900
            text-white
            py-3
            rounded-xl
            font-semibold
          "
        >
          Download Certificate
        </a>

      </div>

    </div>
  )}

  {student.marksheetUrl && (
    <div className="bg-blue-50 border border-blue-200 p-5 rounded-2xl">

      <h3 className="font-bold text-blue-700 mb-4">
        Marksheet
      </h3>

      <div className="flex flex-col gap-3">

        <a
          href={student.marksheetUrl}
          target="_blank"
          rel="noreferrer"
          className="
            text-center
            bg-blue-600
            hover:bg-blue-700
            text-white
            py-3
            rounded-xl
            font-semibold
          "
        >
          View Marksheet
        </a>

        <a
          href={student.marksheetUrl.replace(
            "/upload/",
            "/upload/fl_attachment/"
          )}
          target="_blank"
          rel="noreferrer"
          className="
            text-center
            bg-blue-800
            hover:bg-blue-900
            text-white
            py-3
            rounded-xl
            font-semibold
          "
        >
          Download Marksheet
        </a>

      </div>

    </div>
  )}

</div>
            {/* <div className="grid md:grid-cols-2 gap-5 mt-8">

              {student.certificateUrl && (
                <div className="bg-green-50 border border-green-200 p-5 rounded-2xl">

                  <h3 className="font-bold text-green-700 mb-4">
                    Certificate
                  </h3>

                  <div className="flex flex-col gap-3">

                    <a
                      href={student.certificateUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        text-center
                        bg-green-600
                        hover:bg-green-700
                        text-white
                        py-3
                        rounded-xl
                        font-semibold
                      "
                    >
                      View Certificate
                    </a>

                    <a
                      href={student.certificateUrl}
                      download
                      className="
                        text-center
                        bg-green-800
                        hover:bg-green-900
                        text-white
                        py-3
                        rounded-xl
                        font-semibold
                      "
                    >
                      Download Certificate
                    </a>

                  </div>

                </div>
              )}

              {student.marksheetUrl && (
                <div className="bg-blue-50 border border-blue-200 p-5 rounded-2xl">

                  <h3 className="font-bold text-blue-700 mb-4">
                    Marksheet
                  </h3>

                  <div className="flex flex-col gap-3">

                    <a
                      href={student.marksheetUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        text-center
                        bg-blue-600
                        hover:bg-blue-700
                        text-white
                        py-3
                        rounded-xl
                        font-semibold
                      "
                    >
                      View Marksheet
                    </a>

                    <a
                      href={student.marksheetUrl}
                      download
                      className="
                        text-center
                        bg-blue-800
                        hover:bg-blue-900
                        text-white
                        py-3
                        rounded-xl
                        font-semibold
                      "
                    >
                      Download Marksheet
                    </a>

                  </div>

                </div>
              )}

            </div> */}

          </div>

        </div>

      )}

    </div>

  </div>
);
//   return (
//     <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">

//       <div className="w-full max-w-xl bg-gray-900 p-8 rounded-3xl text-white">

//         <button
//           onClick={() => navigate("/")}
//           className="mb-6 bg-yellow-500 text-black px-4 py-2 rounded-xl"
//         >
//           ← Go Back
//         </button>

//         {!student ? (
//           <div className="text-center">

//             <h2 className="text-2xl text-red-500 font-bold">
//               Student Not Found
//             </h2>

//           </div>
//         ) : (
//           <>

//             <h1 className="text-3xl font-bold text-yellow-400 mb-6">
//               Student Record
//             </h1>

//             <div className="space-y-3">

//               <p>
//                 <strong>Name:</strong>{" "}
//                 {student.name}
//               </p>

//               <p>
//                 <strong>Registration No:</strong>{" "}
//                 {student.regNo}
//               </p>

//               <p>
//                 <strong>DOB:</strong>{" "}
//                 {student.dob}
//               </p>

//             </div>

//             <div className="flex gap-4 mt-8">

//               {student.certificateUrl && (
//                 <a
//                   href={
//                     student.certificateUrl
//                   }
//                   target="_blank"
//                   rel="noreferrer"
//                   className="bg-green-600 px-5 py-3 rounded-xl"
//                 >
//                   View Certificate
//                 </a>
//               )}

//               {student.marksheetUrl && (
//                 <a
//                   href={
//                     student.marksheetUrl
//                   }
//                   target="_blank"
//                   rel="noreferrer"
//                   className="bg-blue-600 px-5 py-3 rounded-xl"
//                 >
//                   View Marksheet
//                 </a>
//               )}

//             </div>

//           </>
//         )}

//       </div>

//     </div>
//   );
}