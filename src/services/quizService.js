import { post } from "../utils/request";

export const createAnswer = async (options) => {
      const result = await post("answers",options);
      return result;
}