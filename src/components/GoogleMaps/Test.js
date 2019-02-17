 function setLocation(tweet){
        var location = null;

        // Try coordinates first, as it gives the most concrete data.
        if (tweet.coordinates) {
            location = (tweet.coordinates.coordinates).toString();
        }
        // Next up, try tweet.place, which could also have a full street address, and will have at least the full_name and country, if not null 
         else if (tweet.place) {
            var street = "";
            if (tweet.place.attributes.street_address){
                street += tweet.place.attributes.street_address + ", ";
                if (tweet.place.attributes['623:id']){
                    street += tweet.place.attributes['623:id'] + ", "; 
                }
            } 
            location = street + tweet.place.full_name + ", " + tweet.place.country;
        // Lastly, if all else fails, grab the user location. This data is pretty poor, but is at least something. You may not want it, depending on your usage.
        } else if (tweet.user && tweet.user.location){
            location = tweet.user.location;         
        } 
        return location;
    }