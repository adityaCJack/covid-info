import React, { useEffect, useState } from "react"
import alanBtn from "@alan-ai/alan-sdk-web";
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "./components/Navbar";
import Faq from "./components/faq";
import { scroller } from "react-scroll";
import Charts from "./components/charts";

//Alan API key
const alanKey = "1033bf1d620d52c3c8569f6f75bc2a462e956eca572e1d8b807a3e2338fdd0dc/stage"
function App() {

  const [data, setData] = useState()

  //Alan AI Button and scroll function implementation
  useEffect(() => {
    alanBtn({
      key: alanKey,

      onCommand: ({ command, faqId }) => {
        if (command === "gotoFaq") {
          scroller.scrollTo(`AccordionPanel.item-${faqId}`, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
          })
          setIndex(faqId - 1)
        }

      }
    })
  }, [])

  //API fetching
  useEffect(() => {
    fetch("https://api.covid19api.com/summary")
      .then((res) => res.json())
      .then(data => setData(data.Global))
  }, [])

  //To toggle accordian elements
  const [index, setIndex] = useState(null)

  //Display Charts only if data fetch is succesful
  return (
    <ChakraProvider>
      <Navbar />
      {data && <Charts covidData={data} />}
      <Faq index={index} setIndex={setIndex} />
    </ChakraProvider>
  );
}

export default App;
