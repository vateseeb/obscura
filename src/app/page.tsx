import { Footer } from "@/app/footer"
import { Button } from "@/components/ui/button"
import { CalendarDays, Camera, Image as ImageIcon } from "lucide-react"
import Link from 'next/link'
import prisma from "./lib/prisma"

export const revalidate = 3600;

export default async function Home() {
  const topic = await prisma.topic.findFirst({
    where: {
      startDate: {
        lte: new Date(),
      },
      endDate: {
        gte: new Date(),
      },
    },
  });

  if (!topic) {
    return <div>No topic found</div>
  }

  // Calculate days remaining
  const daysRemaining = Math.ceil((topic.endDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
<header className="p-4">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2">
            <div className="w-2 h-2 bg-black rounded-full"></div>
          </div>
          <span className="text-2xl font-bold">Obscura</span>
        </div>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-lg mb-2">Topic of the Week</h2>
        <h1 className="text-7xl font-bold mb-12 mt-4 py-6 border-y border-gray-800">{topic?.title}</h1>
        
        <div className="flex space-x-4 mb-8">
          <Button asChild variant="outline" className="bg-transparent hover:bg-white hover:text-black transition-colors">
            <Link href="/upload">
              <Camera className="mr-2 h-4 w-4" />
              Submit
            </Link>
          </Button>
          <Button asChild variant="outline" className="bg-transparent hover:bg-white hover:text-black transition-colors">
            <Link href="/gallery">
              <ImageIcon className="mr-2 h-4 w-4" />
              Gallery
            </Link>
          </Button>
        </div>
        <div className="text-sm text-gray-400 flex items-center">
          <CalendarDays className="mr-2 h-4 w-4" />
          Submissions end in {daysRemaining} {daysRemaining === 1 ? 'day' : 'days'}
        </div>
      </main>
      <Footer />
    </div>
  )
}
