import React from "react"
import TypewriterComponent from "typewriter-effect"

const TypewriterExample = () => {
  const placeholderStrings = [
    "Search for Pedigree",
    "Search for Cat food",
    "Search for Hanlo",
    "Search for Royal Canin",
    "Search for Drools",
  ]

  return (
    <TypewriterComponent
      options={{
        strings: placeholderStrings,
        autoStart: true,
        loop: true,
      }}
    />
  )
}

export default TypewriterExample
