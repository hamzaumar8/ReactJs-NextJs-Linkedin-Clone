import { connectToDatabase } from "../../../util/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  const { db } = await connectToDatabase();

  if (method === "GET") {
    try {
      // await db.collection("posts").deleteOne({ _id: new ObjectId(id) });
      const comment = await db
        .collection("comments")
        .find({ postId: id })
        .sort({ timestamp: -1 })
        .toArray();
      res.status(200).json(comment);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
