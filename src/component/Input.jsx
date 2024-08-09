

export default function Input() {
  return (
    <div className="bg-neutral-800 fixed bottom-0 w-full   ">
      <div className="flex flex-col w-[40%] relative left-[25%] gap-1 ">
        <input className="rounded-3xl p-2 px-5 bg-neutral-700 text-gray-300 focus:outline-none" type="text" />
      <p className="text-gray-300 text-xs text-center">ChatAI can make mistakes. Check important info.</p>
      </div>
    </div>
  )
}
