import { getCookie } from "../helpers/cookie"
import { get } from "../utils/request";

export const getAnswerByUserId = async () => {
      const userId = getCookie("id");
      const result = await get(`answers?userId=${userId}`);
      return result;
}
export const getListAnswers = async (id) => {
      const result = await get(`answers/${id}`);
      return result;
}