const { MongoClient } = require("mongodb");
const uri = `mongodb://127.0.0.1:27017`;
const client = new MongoClient(uri);

async function run() {
  const database = client.db("firstDB");
  const users = database.collection("users");

  // create
  // const userData = await users.insertOne({ name: "song", age: 25 });
  // console.log("result", userData);

  // const userList = [
  //   { name: "sophie", age: 17 },
  //   { name: "jessica", age: 20 },
  // ];
  // const userListResult = await users.insertMany(userList);
  // console.log(userListResult);

  // read
  // const findUser = await users.findOne({ name: "song" }); // 하나만 반환
  // const findUser = await users.find({ age: { $gt: 20 } }).toArray(); // 다 어레이 반환
  // console.log(findUser);

  // const userData = await users
  //   .find({ name: "sophie" })
  //   .project({ _id: 0 }) // id 뺄수있음 0은 빼는거, 1은 보여주는거
  //   .toArray();
  // console.log(userData);

  // update
  // const updateUser = await users.updateOne(
  //   { name: "song" },
  //   { $set: { age: 22 } }
  // );
  // console.log(updateUser);

  // delete
  // const deleteUsers = await users.deleteMany({ age: { $gt: 20 } });
  // console.log(deleteUsers);

  // 문제
  const inventory = database.collection("inventory");

  // 1.
  // const invdata = await inventory.insertOne({
  //   item: "canvas",
  //   qty: 100,
  //   tags: ["cotton"],
  //   size: { h: 28, w: 35.5, uom: "cm" },
  // });

  // 2.
  // const invdatas = await inventory.insertMany([
  //   {
  //     item: "journal",
  //     qty: 25,
  //     tags: ["blank", "red"],
  //     size: { h: 14, w: 21, uom: "cm" },
  //   },
  //   {
  //     item: "mat",
  //     qty: 85,
  //     tags: ["gray"],
  //     size: { h: 27.9, w: 35.5, uom: "cm" },
  //   },
  //   {
  //     item: "mousepad",
  //     qty: 25,
  //     tags: ["gel", "blue"],
  //     size: { h: 19, w: 22.85, uom: "cm" },
  //   },
  // ]);

  // 3.
  // const findInv = await inventory.find({}).toArray();
  // console.log(findInv);

  // const insertD = await inventory.insertMany([
  //   {
  //     item: "journal",
  //     qty: 25,
  //     size: { h: 14, w: 21, uom: "cm" },
  //     status: "A",
  //   },
  //   {
  //     item: "notebook",
  //     qty: 50,
  //     size: { h: 8.5, w: 11, uom: "in" },
  //     status: "A",
  //   },
  //   {
  //     item: "paper",
  //     qty: 100,
  //     size: { h: 8.5, w: 11, uom: "in" },
  //     status: "D",
  //   },
  //   {
  //     item: "planner",
  //     qty: 75,
  //     size: { h: 22.85, w: 30, uom: "cm" },
  //     status: "D",
  //   },
  //   {
  //     item: "postcard",
  //     qty: 45,
  //     size: { h: 10, w: 15.25, uom: "cm" },
  //     status: "A",
  //   },
  // ]);

  // 4.
  // const findStatusD = await inventory.find({ status:  "D" }).toArray();
  // console.log(findStatusD);

  // 5. 이고
  // const findD = await inventory
  //   .find({
  //     status: "A" ,
  //     qty: 50 ,
  //   })
  //   .toArray();

  // 6. 또는
  // const findD = await inventory.find({ status: { $in: ["A", "D"] } }).toArray();

  // 7. 이고, 보다 작은
  // const findD = await inventory
  //   .find({ status: "A", qty: { $lt: 30 } })
  //   .toArray();

  // 8. 이거나, 보다 작은
  // const findD = await inventory
  //   .find({
  //     $or: [{ status: "A" }, { qty: { $lt: 30 } }],
  //   })
  //   .toArray();

  // 9.
  // const findD = await inventory.find({ "size.uom": "in" }).toArray();

  // 10.
  // const findD = await inventory.find({ "size.h": { $gt: 10 } }).toArray();

  // console.log(findD);

  // update
  const students = database.collection("students");

  // const insetStudents = await students.insertMany([
  //   {
  //     _id: 1,
  //     test1: 95,
  //     test2: 92,
  //     test3: 90,
  //     modified: new Date("01/05/2020"),
  //   },
  //   {
  //     _id: 2,
  //     test1: 98,
  //     test2: 100,
  //     test3: 102,
  //     modified: new Date("01/05/2020"),
  //   },
  //   {
  //     _id: 3,
  //     test1: 95,
  //     test2: 110,
  //     test3: 102,
  //     modified: new Date("01/04/2020"),
  //   },
  // ]);

  // 11. id가 3인 학생에게 test3 의 점수를 98로 수정
  // const updateStudents = await students.updateOne({ _id: 3 }, [
  //   { $set: { test3: 98 } },
  // ]);

  // 12. 모든데이터의 test1의 점수를 0으로 세팅하고 status:"modified"라는 필드를 추가
  // const updateD = await students.updateMany({}, [
  //   { $set: { test1: 0, status: "Modified" } },
  // ]);

  // 13.
  // const deleteD = await students.deleteOne({ test2: 92 });

  // 14.
  // const deleteD = await students.deleteMany({ test1: 0 });
}
run();
