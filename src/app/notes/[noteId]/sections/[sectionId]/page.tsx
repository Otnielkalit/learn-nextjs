export default function SectionDetail ({
  params
}: {
  params: {
    noteId: String
    sectionId: String
  }
}) {
  return (
    <h1>
      Note {params.noteId} Section {params.sectionId}{' '}
    </h1>
  )
}
