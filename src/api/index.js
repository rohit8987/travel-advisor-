import axios from "axios";

const URL =  'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';




export const getPlacesData = async (sw, ne) => {
    try{
        const {data: {data}} = await axios.get(URL,{
            params: {
                bl_latitude: sw?.lat,
                tr_latitude: ne?.lat,
                bl_longitude: sw?.lng,
                tr_longitude: ne?.lng,
              },
              headers: {
                'x-rapidapi-key': '80b1b0ed5cmsh221cbd185c91084p11cbefjsne2b90bdd8913',
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
              }
            
        });
       
 
           console.log(data)
        return data;
} catch (error){
    console.log(error)
}
}