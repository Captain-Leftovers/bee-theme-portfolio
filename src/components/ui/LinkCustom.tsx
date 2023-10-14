import Link from 'next/link'
import { motion } from 'framer-motion'
import { slide, scale } from '@/helpers/animation'
import { cn } from '@/lib/utils'

type LinkCustomProps = {
	data: {
		title: string
		href: string
		index: number
	}
	isActive: boolean
	setSelectedIndicator: (href: string) => void
	className?: string
}

export default function LinkCustom({
	data,
	isActive,
	setSelectedIndicator,
	className
}: LinkCustomProps) {
	const { title, href, index } = data

	return (
		<motion.div
			className="relative flex items-center"
			onMouseEnter={() => {
				setSelectedIndicator(href)
			}}
			custom={index}
			variants={slide}
			initial="initial"
			animate="enter"
			exit="exit"
		>
			<motion.div
				variants={scale}
				animate={isActive ? 'open' : 'closed'}
				className="w-2.5 h-2.5 bg-secondary rounded-full absolute -left-[30px]"
			></motion.div>
			<Link className={cn(`${className}`)} href={href}>{title}</Link>
		</motion.div>
	)
}
