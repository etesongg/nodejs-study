const mongoose = require("mongoose"); // 데이터베이스 모델링 도구
mongoose.connect("mongodb://127.0.0.1:27017/mongoose-test");
const validator = require("validator");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true, // 필수값이라는 뜻
    validate: {
      validator: function (value) {
        // if (!value.includes("@")) throw new Error("This is not an Email");
        if (!validator.isEmail(value)) throw new Error("This is not an Email"); // validator 사용
      },
    },
  },
  password: {
    type: String,
    required: true,
    trim: true, // 앞뒤 공백 자르기
  },
  age: {
    type: String,
    default: 0, // 기본값 넣기
  },
});

const User = mongoose.model("User", userSchema);

// 데이터 삽입
// const newUser = new User({
//   name: "hee",
//   email: "1234@gmail.com",
//   password: "12345",
// });

// newUser.save().then((value) => console.log("value is", value));

// 데이터 검색
User.find({ name: "hee" })
  .select({ name: 1, _id: 0 }) // name 필드만 포함하고 _id 필드를 제외
  .then((value) => console.log("all data", value));
