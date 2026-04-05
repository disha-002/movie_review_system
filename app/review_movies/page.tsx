
export default async function ReviewMovies() {
    const reponse_name=await axios.get(http://www.omdbapi.com/?i=tt3896198&apikey=146aa30b);
    const movies_name=reponse_name.data;


}