// import path from "path";
// import { URL } from "url";

export const getImageUrl =  (path) =>{
    return new URL(`/assets/${path}`,import.meta.url).href;
};