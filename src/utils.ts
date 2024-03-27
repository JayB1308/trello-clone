import { unsplashApiInstance } from "./axios";

export const getImage = async () => {
  try {
    const response = await unsplashApiInstance.get("/photos/random");

    if (response.status === 200) {
      return response.data.urls.small;
    } else {
      throw new Error("Failed to fetch image");
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};
