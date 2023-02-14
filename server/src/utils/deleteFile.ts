import fs from "fs";

const deleteFile = (file: string | null) => {
  if (!file) false;

  return fs.unlink(file!, (err) => {
    if (err) {
      return false;
    }

    return true;
  });
};
export default deleteFile;
