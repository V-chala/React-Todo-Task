//funtion for requesting fech operation from server

let requestApi = async (url = "", optionObj = null, errMsg = null) => {
  try {
    let response = await fetch(url, optionObj);
    if (!response.ok) throw Error("please reload the app");
  } catch (error) {
    errMsg = Error.message;
  } finally {
    return errMsg;
  }
};
export default requestApi;
