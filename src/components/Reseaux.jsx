import { Cards } from "./Cards"
import linkedin from "../assets/linkedin.png"
export const Reseaux = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 p-6">
        <span className="col-span-2">Mes réseaux</span>
        <Cards srcImg={linkedin} bgCustom={""}/>
        <Cards />
        <Cards />
        <Cards />
      </div>
    </>
  )
}