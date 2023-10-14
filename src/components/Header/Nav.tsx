import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { menuSlide } from '@/helpers/animation'
import LinkCustom from '@/components/ui/LinkCustom'
import Curve from '@/components/Header/Curve'
import Footer from '@/components/Footer'

const navItems = [
	{
		title: 'Home',
		href: '/',
	},
	{
		title: 'Work',
		href: '/work',
	},
	{
		title: 'About',
		href: '/about',
	},
	{
		title: 'Contact',
		href: '/contact',
	},
]

export default function Nav() {
	const pathname = usePathname()
	const [selectedIndicator, setSelectedIndicator] = useState(pathname)

	return (
		<motion.div
			variants={menuSlide}
			initial="initial"
			animate="enter"
			exit="exit"
			className="h-screen bg-primary fixed top-0 right-0 text-background z-10"
		>
			<div className="box-border h-full p-[100px] flex flex-col justify-between">
				<div
					onMouseLeave={() => {
						setSelectedIndicator(pathname)
					}}
					className="flex flex-col text-5xl gap-3 mt-20"
				>
					<div className="text-gray-mid border-b-gray-mid uppercase text-xs mb-10">
						<p>Navigation</p>
					</div>
					{navItems.map((data, index) => {
						return (
							<LinkCustom
								className="no-underline font-light"
								key={index}
								data={{ ...data, index }}
								isActive={selectedIndicator == data.href}
								setSelectedIndicator={setSelectedIndicator}
							></LinkCustom>
						)
					})}
				</div>
				<Footer />
			</div>
			<Curve />
		</motion.div>
	)
}
