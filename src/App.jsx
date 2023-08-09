import Random from "./components/Random"
import Tag from "./components/Tag"

export default function App() {
  return (

    <div className="w-full  flex flex-col background relative overflow-hidden items-center">
      <h1 className="bg-white w-11/12 text-center rounded-lg mt-[40px] 
      px-10 py-2 text-3xl font-bold mx-auto">RANDOM GIFS</h1>

      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}

