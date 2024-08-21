
export default function Response({content}) {
  return (
    <div dangerouslySetInnerHTML={{ __html: content }} />
  )
}
