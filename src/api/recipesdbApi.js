import axiosClient from "./axiosClient";

const recipesdbApi = {
  getPopular: ()=>{
    const url = `random/?apiKey=${process.env.REACT_APP_API_KEY}number=9`
    return axiosClient.get(url)
  }
}

export default recipesdbApi