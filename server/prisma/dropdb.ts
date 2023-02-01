import { db } from "../src/db";
const deleteDB = async () => {
  try {
    for (const key of Object.keys(db)) {
      if (!key.startsWith("$") && !key.startsWith("_")) {
        await db[key].deleteMany({});
      }
    }
    console.log("DROP DB successfully.");
  } catch (error) {
    console.log(error);
  }
};
deleteDB();
