import Sedans from "./components/Sedans"
import Suvs from "./components/Suvs"
import Luxury from "./components/Luxuosos"

export default function app(){
  return (
    <main className="min-h-svh bg-offwhitebg py-20 px-6 antialiased lg:flex justify-center items-center">
      <div className="lg:flex max-w-[920px]">
        <Sedans/>
        <Suvs/>
        <Luxury/>
      </div>
    </main>
  )
}