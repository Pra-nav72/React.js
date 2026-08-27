import React from 'react'

const PopUp = ({ task, func }) => {
  return (
    <div className="relative">
      <button
        onClick={func}
         className="fixed top-8 right-8 text-xl bg-gray-700 p-4 rounded-xl"
      >
        ❌
      </button>

      <main className="bg-gray-700 rounded-3xl flex flex-col gap-3 justify-center text-center text-white w-120 h-80">
        <h1 className="text-2xl">⚠️ {task.toUpperCase()}</h1>

        <p>Do you really want to {task} the data?</p>

        <div className="mx-auto">
          <button className="bg-green-500 py-2 px-6 mx-6">
            Yes
          </button>

          <button className="bg-red-600 py-2 px-6" onClick={func}>
            No
          </button>
        </div>
      </main>
    </div>
  )
}

export default PopUp