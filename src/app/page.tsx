import Button from '@/components/ui/Button'
import Magnetic from '@/components/ui/Magnetic'

export default function Home() {
	return (
		<main className="flex  mt-10">
			<h1 className="text-4xl font-bold mr-10">Hello World</h1>
			<Magnetic>
				<Button className="">Click me</Button>
			</Magnetic>
		</main>
	)
}
