import { useEffect, useState } from "react"

export const useTimeLeftUntilEndOfDay = () => {
  const [timeLeft, setTimeLeft] = useState({
    hoursLeft: 0,
    minutesLeft: 0,
    secondsLeft: 0,
  })

  useEffect(() => {
    const updateTimeLeft = () => {
      const now: Date = new Date()
      const endOfDay: Date = new Date()
      endOfDay.setHours(23, 59, 59, 999)

      // Calculate the time difference
      const timeDiff: number = endOfDay.getTime() - now.getTime()

      // Convert milliseconds to hours, minutes, and seconds
      const hoursLeft: number = Math.floor(timeDiff / (1000 * 60 * 60))
      const minutesLeft: number = Math.floor(
        (timeDiff % (1000 * 60 * 60)) / (1000 * 60)
      )
      const secondsLeft: number = Math.floor((timeDiff % (1000 * 60)) / 1000)

      setTimeLeft({ hoursLeft, minutesLeft, secondsLeft })
    }

    const intervalId = setInterval(updateTimeLeft, 1000) // Update every second

    return () => clearInterval(intervalId)
  }, [])

  return timeLeft
}
