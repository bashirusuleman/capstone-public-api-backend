const { geocode } = require('@esri/arcgis-rest-geocoding');


exports.getGeolocation = async function(auth, addressDetails){
    try {
        const result  = await geocode(
            {
                address: addressDetails.address,
                postal: addressDetails.postal,
                countryCode: addressDetails.countryCode,
                authentication: auth    
            }
        )
        if (result){
            const scores = result.candidates.filter((each)=>{
                if(each.score >90){
                    console.log(each.score)
                    return each;
                }else{
                     throw Error ("Address does not seem to be correct, check address")
                }
            })
            return scores[0];
        }
    } catch (error) {
        return error;
    }
}


// module.exports = getGeolocation;
