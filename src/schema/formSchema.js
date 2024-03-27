import * as yup from "yup";

export const registerSchema = yup.object().shape({
  username: yup
    .string()
    .required("Vui lòng nhập tên người dùng")
    .min(3, "Tên người dùng phải có ít nhất 3 ký tự")
    .max(20, "Tên người dùng không được vượt quá 20 ký tự"),

  password: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(3, "Mật khẩu phải có ít nhất 3 ký tự")
    .max(20, "Mật khẩu không được vượt quá 20 ký tự")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9!@#$%^&*()_+|~=\`{}[\]:";'<>?,./\\]).+$/,
      "Mật khẩu phải chứa ít nhất một chữ hoa, một chữ thường và một số hoặc ký tự đặc biệt"
    ),
});
