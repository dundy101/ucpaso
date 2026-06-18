import Hero          from '@/components/sections/Hero'
import About         from '@/components/sections/About'
import Calendar      from '@/components/sections/Calendar'
import Stats         from '@/components/sections/Stats'
import FeaturedEvents from '@/components/sections/FeaturedEvents'
import CTA           from '@/components/sections/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Calendar />
      <Stats />
      <FeaturedEvents />
      <CTA />
    </>
  )
}
