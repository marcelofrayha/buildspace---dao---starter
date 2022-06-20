import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x8EbfAD125a4918C5e597B9321fC1fbddE3Efb73A");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Social Club ID",
        description: "This NFT will give you access to DAODAO!",
        image: readFileSync("scripts/assets/tech_id.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();