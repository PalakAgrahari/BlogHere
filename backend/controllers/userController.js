import { catchAsyncErrors } from "../middleware/catchAsyncErrors.js";
import ErrorHandler from "../middleware/error.js";
import { User } from "../models/userSchema.js";
import { sendToken } from "../utils/jwtToken.js";

export const register = catchAsyncErrors(async (req, res, next) => {
  // if (!req.files || Object.keys(req.files).length === 0) {
  //   return next(new ErrorHandler("User Avatar Required", 400));
  // }
  // const {  } = req.files;
  // const  = ["image/png", "image/jpeg", "image/webp"];
  // if (!allowedFormats.includes(avatar.mimetype)) {
  //   return next(
  //     new ErrorHandler(
  //       "Invalid file type. Please provide your avatar in png,jpg, or webp format",
  //       400
  //     )
  //   );
  // }

  const { name, email, password, phone, role, education } = req.body;
  if (!name || !email || !password || !phone || !role || !education) {
    return next(new ErrorHandler("Pleqse fill full details !", 400));
  }
  let user = await User.findOne({ email });
  if (user) {
    return next(new ErrorHandler("User Already Exists", 400));
  }
  user = await User.create({
    name,
    email,
    password,
    phone,
    role,
    education,
  });

  sendToken(user, 200, "User Registered", res);

  // res.status(200).json({
  //   success: true,
  //   message: "User Registered!",
  // });
});

export const login = catchAsyncErrors(async (req, res, next) => {
  const { email, password, role } = req.body;
  if (!email || !password || !role) {
    return next(new ErrorHandler("Please fill full from!", 400));
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Inavlid Email or Password", 400));
  }
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid Email or Password", 400));
  }
  if (user.role !== role) {
    return next(new ErrorHandler(`User (${role}) not found`, 400));
  }
  sendToken(user, 200, "User logged in successfully", res);
});

export const logout = catchAsyncErrors((req, res, next) => {
  res
    .status(200)
    .cookie("token", "", {
      expires: new Date(Date.now()),
      httpOnly: true,
    })
    .json({
      success: true,
      message: "User Logged Out",
    });
});

export const getMyProfile = catchAsyncErrors((req, res, next) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    user,
  });
});

export const getAllAuthors = catchAsyncErrors(async (req, res, next) => {
  const authors = await User.find({ role: "Author" });
  res.status(200).json({
    success: true,
    authors,
  });
});
