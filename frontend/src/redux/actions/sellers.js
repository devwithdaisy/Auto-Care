import axios from "axios";
import { server } from "../../server";

// get all sellers --- admin
export const getAllSellers = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllSellersRequest",
    });

    const { data } = await axios.get(`${server}/shop/admin-all-sellers`, {
      withCredentials: true,
    }); 

    dispatch({
      type: "getAllSellersSuccess",
      payload: data.sellers,
    });
  } catch (error) {
    dispatch({
      type: "getAllSellerFailed",
    //   payload: error.response.data.message,
    });
  }
};

export const logoutSeller = () => async (dispatch) => {
  try {
    dispatch({ type: "logoutSellerRequest" });

    await axios.post(`${server}/shop/logout`, {}, {
      withCredentials: true,
    });

    dispatch({ type: "logoutSellerSuccess" });
  } catch (error) {
    dispatch({
      type: "logoutSellerFailed",
      payload: error.response?.data?.message || "Logout failed",
    });
  }
};
