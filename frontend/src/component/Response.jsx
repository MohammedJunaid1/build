

export default function Response({content}) {
  return (
    <div className="bg-neutral-700 border border-neutral-700 rounded-md p-2 w-[70%] "  >
      {/*  */}
       <div className="flex flex-col gap-5" dangerouslySetInnerHTML={{ __html: content }}/>
    </div>
  )
}
