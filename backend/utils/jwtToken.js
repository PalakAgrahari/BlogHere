export const sendToken = (user, statusCode, message, res) => {
  const token = user.getJWTToken();
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};

// export const sendToken = async (user, statusCode, message, res) => {
//   try {
//     const token = await user.getJWTToken();

//     // Check and log the value of process.env.COOKIE_EXPIRE
//     const cookieExpireDays = parseInt(process.env.COOKIE_EXPIRE, 10);
//     if (isNaN(cookieExpireDays)) {
//       console.error("Invalid COOKIE_EXPIRE environment variable");
//       return res.status(500).json({
//         success: false,
//         message: "Invalid COOKIE_EXPIRE environment variable",
//       });
//     }

//     // Calculate the expiration date
//     const expiresDate = new Date(
//       Date.now() + cookieExpireDays * 24 * 60 * 60 * 1000
//     );

//     // Log the expiration date for debugging
//     console.log("Cookie expiration date:", expiresDate);

//     const options = {
//       expires: expiresDate,
//       httpOnly: true,
//     };

//     res.status(statusCode).cookie("token", token, options).json({
//       success: true,
//       user,
//       message,
//       token,
//     });
//   } catch (error) {
//     console.error("Error in sendToken function:", error);
//     res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//     });
//   }
// };
