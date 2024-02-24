import { useState, useEffect } from "react"

type Coordinates = {
  latitude: number | null
  longitude: number | null
}

const useLocation = (): Coordinates => {
  const [coordinates, setCoordinates] = useState<Coordinates>({
    latitude: null,
    longitude: null,
  })

  useEffect(() => {
    const handleLocation = (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords
      setCoordinates({ latitude, longitude })
    }

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(handleLocation, console.error)
      } else {
        console.error("Geolocation is not supported by this browser.")
      }
    }

    getLocation()

    return () => {
      setCoordinates({ latitude: null, longitude: null }) // Reset coordinates when unmounting the component
    }
  }, [])

  return coordinates
}

export default useLocation
