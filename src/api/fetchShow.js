import axios from "axios"

export const fetchShowData = () => {
    return axios
    .get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
    .then(res =>{
        console.log(res);
        return res;
    })
}