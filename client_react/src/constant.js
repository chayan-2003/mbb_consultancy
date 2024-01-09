export const getUrl=()=>{
    return process.env.SERVER_PROD_URL || "http://localhost:8800"
}