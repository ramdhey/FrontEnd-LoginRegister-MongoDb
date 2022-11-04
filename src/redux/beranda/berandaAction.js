import ServerAPI from "../../API/server";
import {USER_BERANDA,SET_LOADING} from '../ActionType'


const setBerandaData = (userBeranda) => {
    return {
      type: USER_BERANDA,
      payload: {
        user: userBeranda,
      },
    };
  };

  const setLoading = () => {
    return {
      type: SET_LOADING,
    };
  };

  const fetchBeranda = () => async (dispatch) => {
    try {
      let token = localStorage.getItem("token");
  
      const fetchBerandaData = await ServerAPI({
        method: "GET",
        url: "/register/notFound",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
  
      dispatch(setBerandaData(fetchBerandaData.data));
    } catch (error) {
      console.log(error.response);
    }
  };
  
  const userBerandaAction = {
    setBerandaData,
    setLoading,
    fetchBeranda,
  };


  export default userBerandaAction