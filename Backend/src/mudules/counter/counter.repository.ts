import Url from "../url/url.model.js";
import Counter from "./counter.model.js";

class CounterRepository {
  async getNextSequence() {
    const counter = await Counter.findOneAndUpdate(
      { _id: "shortUrlCounter" },
      {
        $inc: {
          seq: 1,
        },
      },
      {
        new: true,
        upsert: true,
      },
    );

    if (!counter) {
      throw new Error("Failed to generate sequence.");
    }

    return counter.seq;
  }


}

export default new CounterRepository();
