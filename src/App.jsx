import { useState } from "react"


const App = () => {

  const [first, setFirst] = useState('')
  const [second, setSecond] = useState('')

  //// We are creating a new useState to store the first , second copies

  const [allStates, setAllStates] = useState([])

  const changeInput = (e) => {
    // console.log(e)
  }

  function formSubmit(e) {
    e.preventDefault()
    ////////
    // console.log(first)
    // console.log(second)
    // setFirst('')
    // setSecond('')

    ////////
    const copy = [...allStates]
    copy.push({ first, second })
    // On that time data are saved but it can be replaced at next time
    console.log(copy)
    // then we set the copy to setAllStates
    setAllStates(copy)

    setFirst('')
    setSecond('')
  }

  return (
    <div className='h-screen w-full flex justify-between p-10 bg-gray-500 border-2 border-white'>
      <form
        className='h-full lg:w-1/2 text-white flex lg:flex-col gap-10'
        onSubmit={(e) => {
          formSubmit(e)
        }}
      >
        <p className='text-4xl font-bold m-3'>Add Notes</p>
        <input
          type='text'
          placeholder='Enter notes Heading'
          className='h-1/12 w-3/4 bg-black p-5 rounded-xl font-medium '
          value={first}
          onChange={(e) => {
            setFirst(e.target.value)
            changeInput(e.target.value)
          }}
        />
        <textarea
          name=''
          placeholder='Write Details'
          className='h-1/3 w-3/4 bg-black p-5 rounded-xl font-medium '
          value={second}
          onChange={(e) => {
            setSecond(e.target.value)
            changeInput(e.target.value)
          }}
        />
        <div className='h-full w-8/11 flex justify-center items-center'>
          <button className='h-1/10 w-3/4 active:bg-green-500 active:scale-90 bg-yellow-200 rounded-full text-black font-medium text-xl'>Add Note</button>
        </div>
      </form>
      <div className='lg:w-1/2 lg:border-l-4 text-white flex lg:flex-col items-start gap-10 m-5'>
        <p className='text-3xl font-semibold m-3 pl-10'>Recent Notes</p>
        <div className="w-full flex flex-wrap gap-6 p-5 overflow-y-auto max-h-[75vh]">
          {allStates.map((a, b) => {
            return (
              <div
                key={b}
                className="
                  relative
                  w-[180px]
                  min-h-[200px]
                  bg-yellow-100
                  text-black
                  rounded-lg
                  p-5
                  shadow-lg
                  overflow-hidden
                "
              >

                {/* Notebook holes */}
                <div className="absolute top-0 left-0 w-full flex justify-around">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <span
                      key={i}
                      className="w-3 h-3 bg-black rounded-full -translate-y-1"
                    ></span>
                  ))}
                </div>

                {/* Note content */}
                <div className="pt-5">

                  <p className="font-bold text-lg break-words">
                    {a.first}
                  </p>

                  <p className="text-sm mt-3 pt-3 border-t border-gray-300 break-words">
                    {a.second}
                  </p>

                </div>

              </div>
            )
          })}

         </div>
               </div>
             </div>
           )
         }
         
         export default App
