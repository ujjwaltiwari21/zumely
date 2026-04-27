import { AtsVisual } from "./AtsVisual"
import { Comparison } from "./Comparison"
import { Footer } from "../shared/Footer"
import { Hero } from "./Hero"
import { JobMatch } from "./JobMatch"
import { Process } from "./Process"
import Partners from "../shared/Partners"
import { Experience3D } from "./Experience"

export function Main() {
  return (
    <>
      <Hero />
      <Process />
      <Partners/>
      <AtsVisual/>
      <Experience3D/>
      <Comparison/>
      <JobMatch/>
      <Footer/>
    </>
  )
}