import Title from "@/components/Title"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <Title  title = "First Title" className="bg-red-200"/>
      <Title  title = "Second Title"/>
    </main>
  )
}
