import { AtsVisual } from "./AtsVisual"
import { Comparison } from "./Comparison"
import { Footer } from "./Footer"
import { Hero } from "./Hero"
import { JobMatch } from "./JobMatch"
import { Process } from "./Process"

export function Main() {
  return (
    <>
      <Hero />
      <Process />
      <AtsVisual/>
      <Comparison/>
      <JobMatch/>
      <Footer/>
    </>
  )
}