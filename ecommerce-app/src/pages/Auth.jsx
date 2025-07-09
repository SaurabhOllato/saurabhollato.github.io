// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { loginSuccess } from "../feautures/authslice";

// const AuthPage = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [step, setStep] = useState("phone"); // phone | otp | name
//   const [phone, setPhone] = useState("");
//   const [otp, setOtp] = useState("");
//   const [name, setName] = useState("");
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleSendOtp = async (e) => {
//   e.preventDefault();

//   if (phone.length !== 10) {
//     alert("Enter a valid 10-digit phone number.");
//     return;
//   }

//   try {
//     const res = await fetch("http://localhost:5000/api/auth/send-otp", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ phone_number: phone }),
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       throw new Error(data.message || "Failed to send OTP");
//     }

//     alert("📲 OTP sent (check console/log)");
//     setStep("otp");
//   } catch (err) {
//     alert(err.message);
//   }
// };

// const handleVerifyOtp = async (e) => {
//   e.preventDefault();

//   if (otp.length !== 6) {
//     alert("Enter a 6-digit OTP");
//     return;
//   }

//   try {
//     const res = await fetch("http://localhost:5000/api/auth/verify-otp", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ phone_number: phone, otp }),
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       throw new Error(data.message || "OTP verification failed");
//     }

//     alert("✅ OTP verified");

//     if (isLogin) {
//       // ✅ Store user in Redux here if needed
//       // dispatch(loginUser({ phone }))
//       alert("Logged in successfully!");
//       navigate("/");
//     } else {
//       setStep("name");
//     }
//   } catch (err) {
//     alert(err.message);
//   }
// };

//  const handleRegister = async (e) => {
//   e.preventDefault();

//   try {
//     const res = await fetch("http://localhost:5000/api/auth/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ name, number: phone }),
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       throw new Error(data.message || "Registration failed");
//     }

//     alert("✅ Registered successfully!");
//     navigate("/"); // redirect to homepage or dashboard
//     dispatch(loginSuccess({ id: data.userId, name, number: phone }));

//   } catch (error) {
//     console.error("❌ Registration error:", error.message);
//     alert(error.message);
//   }
// };

//   return (
//       <div className="min-h-screen bg-gradient-to-br from-pink-200 to-white flex items-center justify-center relative">
//       <div className="absolute inset-0 backdrop-blur-md" />
//       <div className="bg-white/40 backdrop-blur-md rounded-xl shadow-lg p-8 w-full max-w-md z-10">
//         <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">
//           {step === "phone" && "Enter your Mobile Number"}
//           {step === "otp" && "Enter OTP sent to your number"}
//           {step === "name" && "Complete Your Registration"}
//         </h2>

//         <form className="space-y-4">
//           {step === "phone" && (
//             <>
//               <input
//                 type="tel"
//                 placeholder="Phone Number"
//                 className="w-full border border-gray-300 rounded px-4 py-2"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//               />
//               <button
//                 type="submit"
//                 onClick={handleSendOtp}
//                 className="w-full bg-pink-600 text-white rounded py-2 hover:bg-pink-700 transition"
//               >
//                 Send OTP
//               </button>
//             </>
//           )}

//           {step === "otp" && (
//             <>
//               <input
//                 type="text"
//                 placeholder="Enter OTP"
//                 className="w-full border border-gray-300 rounded px-4 py-2"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//               />
//               <button
//                 type="submit"
//                 onClick={handleVerifyOtp}
//                 className="w-full bg-pink-600 text-white rounded py-2 hover:bg-pink-700 transition"
//               >
//                 Verify OTP
//               </button>
//             </>
//           )}

//           {step === "name" && (
//             <>
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="w-full border border-gray-300 rounded px-4 py-2"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//               <button
//                 type="submit"
//                 onClick={handleRegister}
//                 className="w-full bg-pink-600 text-white rounded py-2 hover:bg-pink-700 transition"
//               >
//                 Complete Registration
//               </button>
//             </>
//           )}
//         </form>

//         {/* Reset Option */}
//         <p className="text-center text-sm mt-6 text-gray-600">
//           Changed your mind?{" "}
//           <button
//             className="text-pink-600 hover:underline font-medium"
//             onClick={() => {
//               setStep("phone");
//               setPhone("");
//               setOtp("");
//               setName("");
//               setIsNewUser(false);
//             }}
//           >
//             Start Over
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AuthPage;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../feautures/authslice";
import { SparklesIcon, UserIcon } from "lucide-react";

const AuthPage = () => {
  const [step, setStep] = useState("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const [isNewUser, setIsNewUser] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isReturningUser = step === "phone" && !isNewUser; // If we're on phone step and not new user

  const handleSendOtp = async (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(phone)) {
      alert("Enter a valid 10-digit number.");
      return;
    }

    try {
      // ✅ Call backend to send OTP & check if user exists
      const res = await fetch("http://localhost:5000/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);
      setIsNewUser(data.isNewUser); // backend tells if user is new
      setStep("otp");
    } catch (err) {
      alert("❌ Failed to send OTP: " + err.message);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (otp.length !== 6) return alert("Enter 6-digit OTP");

    try {
      const res = await fetch("http://localhost:5000/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, otp }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      if (data.isNewUser) {
        setStep("name"); // 👈 Ask for name now
      } else {
        alert("✅ Logged in");
        // dispatch(loginUser({ name: data.name, phone }));
        dispatch(loginUser({ name: data.user.name, phone: data.user.phone }));
        navigate("/");
      }
    } catch (err) {
      alert("❌ OTP verification failed: " + err.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!name) return alert("Enter your name");

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      alert("✅ Registered successfully");
      console.log("Logged in user:", { name, phone });
      dispatch(loginUser({ name, phone }));
      navigate("/");
    } catch (err) {
      alert("❌ Registration failed: " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      {/* Main Container */}
      <div className="flex w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-8">
          <div className="relative">
            {/* Logo/Branding can go here */}
            <h1 className="text-center text-2xl font-bold text-gray-800 mb-2">
              {isReturningUser ? "Welcome Back!" : "Join Our Community"}
            </h1>

            <h2 className="text-xl text-center text-pink-600 mb-6">
              {step === "phone" &&
                (isReturningUser
                  ? "Sign in with your number"
                  : "Get started with your mobile number")}
              {step === "otp" && "Verify your identity"}
              {step === "name" && "Tell us about yourself"}
            </h2>

            <form className="space-y-5">
              {step === "phone" && (
                <>
                  <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-pink-500 transition-all">
                    <span className="bg-gray-100 px-3 py-3 text-gray-500 text-sm select-none">
                      +91
                    </span>
                    <input
                      type="tel"
                      placeholder="Enter 10-digit number"
                      maxLength={10}
                      className="w-full px-4 py-3 outline-none"
                      value={phone}
                      onChange={(e) => {
                        const onlyNums = e.target.value.replace(/\D/g, ""); // remove non-digits
                        if (onlyNums.length <= 10) setPhone(onlyNums);
                      }}
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handleSendOtp}
                    className="w-full bg-gradient-to-r from-pink-600 to-pink-500 text-white rounded-lg py-3 hover:from-pink-700 hover:to-pink-600 transition-all shadow-md hover:shadow-lg"
                  >
                    Continue
                  </button>
                </>
              )}

              {step === "otp" && (
                <>
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="Enter 6-digit OTP"
                      maxLength="6"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-center text-xl tracking-widest focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                    <p className="text-sm text-gray-500 text-center">
                      Sent to +91{phone} •{" "}
                      <button className="text-pink-600 hover:underline">
                        Resend OTP
                      </button>
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleVerifyOtp}
                    className="w-full bg-gradient-to-r from-pink-600 to-pink-500 text-white rounded-lg py-3 hover:from-pink-700 hover:to-pink-600 transition-all shadow-md hover:shadow-lg"
                  >
                    Verify & Continue
                  </button>
                </>
              )}

              {step === "name" && (
                <>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {!isReturningUser && (
                      <div className="flex items-center">
                        <input type="checkbox" id="terms" className="mr-2" />
                        <label
                          htmlFor="terms"
                          className="text-sm text-gray-600"
                        >
                          I agree to the{" "}
                          <a href="#" className="text-pink-600 hover:underline">
                            Terms
                          </a>{" "}
                          and{" "}
                          <a href="#" className="text-pink-600 hover:underline">
                            Privacy Policy
                          </a>
                        </label>
                      </div>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={handleRegister}
                    className="w-full bg-gradient-to-r from-pink-600 to-pink-500 text-white rounded-lg py-3 hover:from-pink-700 hover:to-pink-600 transition-all shadow-md hover:shadow-lg"
                  >
                    {isReturningUser ? "Sign In" : "Complete Registration"}
                  </button>
                </>
              )}
            </form>

            {step === "phone" && (
              <p className="text-center text-sm text-gray-500 mt-6">
                By continuing, you agree to our <br />
                <a href="#" className="text-pink-600 hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-pink-600 hover:underline">
                  Privacy Policy
                </a>
              </p>
            )}
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:block w-1/2 relative bg-gradient-to-br from-pink-500 to-purple-600">
          <div className="absolute inset-0 flex items-center justify-center p-10 text-white">
            <div className="text-center">
              {isReturningUser ? (
                <>
                  <h3 className="text-3xl font-bold mb-4">Welcome Back!</h3>
                  <p className="mb-6">
                    We're so glad to see you again. Continue your journey with
                    us.
                  </p>
                  <div className="w-32 h-32 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                    <UserIcon className="w-16 h-16" />
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-3xl font-bold mb-4">New Here?</h3>
                  <p className="mb-6">
                    Join thousands of happy users who found their perfect match
                    with us.
                  </p>
                  <div className="w-32 h-32 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                    <SparklesIcon className="w-16 h-16" />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
