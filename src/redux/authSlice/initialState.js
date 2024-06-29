const initialState = {
  accessToken: localStorage.getItem("access_token") || "",
  email: "", 
  isLoading: false,
  error: ""
};
export default initialState;
