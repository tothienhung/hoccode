import * as yup from "yup";

export const registerSchema = yup.object().shape({
  username: yup
    .string()
    .required("Vui lòng nhập tên người dùng")
    .min(8, "Tên người dùng phải có ít nhất 8 ký tự")
    .max(32, "Tên người dùng không được vượt quá 32 ký tự"),

  password: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
    .max(32, "Mật khẩu không được vượt quá 32 ký tự")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9!@#$%^&*()_+|~=\`{}[\]:";'<>?,./\\]).+$/,
      "Mật khẩu phải chứa ít nhất một chữ hoa, một chữ thường và một số hoặc ký tự đặc biệt"
    ),
  email: yup
    .string()
    .email('Địa chỉ email không hợp lệ').required('Vui lòng nhập địa chỉ email'),

});
