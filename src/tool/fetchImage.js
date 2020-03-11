import axios from "axios";

export const images = async callback => {
  try {
    await axios
      .get("https://picsum.photos/v2/list")
      .then(res => {
        callback({ result: res.data });
      })
      .catch(err => console.error(err));
  } catch (error) {
    console.error(error);
  }

  return;
};
