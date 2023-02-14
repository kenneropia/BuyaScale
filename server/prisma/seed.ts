import {
  rand,
  randEmail,
  randFullName,
  randNumber,
  randProduct,
  randProductCategory,
  randProductDescription,
  randProductMaterial,
} from "@ngneat/falso";
import { Category } from "@prisma/client";
import { db } from "../src/db";

const run = async () => {
  const count = 10;
  const seedTable = async <T>(i: number, cb: () => Promise<T>) => {
    const resultArray: T[] = [];
    while (i < count) {
      const res = await cb();

      resultArray.push(res);
      i++;
    }
    return resultArray;
  };

  const seedAdmin = await seedTable(7, async () => {
    const user = await db.user.create({
      data: {
        email: randEmail(),
        fullName: randFullName(),
        passwordHash: "12345678",
        role: "Admin",
      },
    });

    return user;
  });

  await seedTable(0, async () => {
    return await db.user.create({
      data: {
        email: randEmail(),
        fullName: randFullName(),
        passwordHash: "12345678",
      },
    });
  });

  const seedCategory: Category[] = await seedTable<Category>(0, async () => {
    return await db.category.create({
      data: {
        title: randProductCategory(),
      },
    });
  });

  const seedProduct = await seedTable(0, async () => {
    const randdomUser = () => rand(seedAdmin.map((item) => item.id));
    const randdomCategory = () => rand(seedCategory.map((item) => item.id));
    const title = randProduct().title;
    console.log(title);
    return await db.product.create({
      data: {
        categoryId: randdomCategory(),
        title: title,
        note: randProductDescription(),
        creatorId: randdomUser(),
        price: randNumber({ min: 1000, max: 40000 }),
        quantityLeft: randNumber({ min: 4, max: 15 }),
        previewImage: "/uploads/2175fcff-c70f-466f-890a-7cf1586f3d54.jpeg",
      },
    });
  });

  seedTable(0, async () => {
    // const randdomUser = () => rand(seedAdmin.map((item) => item.id));
    const randdomProductFromDB = () => rand(seedProduct.map((item) => item.id));

    return await db.varient.create({
      data: {
        productId: randdomProductFromDB(),
        title: randProductMaterial(),
        previewImage: "/uploads/2175fcff-c70f-466f-890a-7cf1586f3d54.jpeg",
      },
    });
  });
};

const deleteDB = async () => {
  try {
    // for (const key of Object.keys(db)) {
    //   if (!key.startsWith("$") && !key.startsWith("_")) {
    //     await db[key].deleteMany({});
    //   }
    // }
    // console.log("DROP DB successfully.");
  } catch (error) {
    console.log(error);
  }
};
deleteDB();
run();
