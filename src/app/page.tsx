'use client'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Preloader from '@/app/components/Preloader'
import Landing from '@/app/components/Landing'
// import Projects from '../components/Projects'
// import Description from '../components/Description'
// import SlidingImages from '../components/SlidingImages'
// import Contact from '../components/Contact'

export default function Home() {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		(async () => {			
			setTimeout(() => {
				setIsLoading(false)
				document.body.style.cursor = 'default'
				window.scrollTo(0, 0)
			}, 2000)
		})()
	}, [])

	return (
		<main className="">
			<AnimatePresence mode="wait">
				{isLoading && <Preloader />}
			</AnimatePresence>
			<Landing />
			{/* <Description />
			<Projects />
			<SlidingImages />
			<Contact /> */}
		</main>
	)
}
