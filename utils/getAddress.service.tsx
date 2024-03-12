import { useEffect, useState } from "react"

const GetAddressDetails = ({ latitude, longitude }: any) => {
  const [geoDetails, setGeoDetails] = useState<any>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Construct the URL with latitude, longitude, and API key
        const url = `${process.env.NEXT_PUBLIC_GET_LOCATION_URL}?lat=${latitude}&lon=${longitude}&api_key=${process.env.NEXT_PUBLIC_GET_LOCATION_API}`

        // Make the API request
        let response
        if (latitude && longitude) {
          response = await fetch(url).then(async (data) => {
            let parsed = await data.json()
            setGeoDetails(parsed)
          })
        } else {
          // Handle error if the request was not successful
          console.error("Failed to fetch geolocation details")
        }
      } catch (error) {
        console.error("Error fetching geolocation details:", error)
      }
    }
    fetchData()
  }, [longitude, latitude])
  return geoDetails;
}
export default GetAddressDetails
