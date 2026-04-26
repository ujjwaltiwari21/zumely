import { AtsVisual } from "./AtsVisual"
import { Comparison } from "./Comparison"
import { Footer } from "./Footer"
import { Hero } from "./Hero"
import { JobMatch } from "./JobMatch"
import { Process } from "./Process"
import Partners from "./Partners"

export function Main() {
  return (
    <>
      <Hero />
      <Process />
      <Partners/>
      <AtsVisual/>
      <Comparison/>
      <JobMatch/>
      <Footer/>
    </>
  )
}