'use client'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence } from 'framer-motion'
import Nav from '@/components/Header/Nav'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from '@/components/ui/Button'
import Magnetic from '@/components/ui/Magnetic'

export default function Header() {
	const header = useRef(null)
	const [isActive, setIsActive] = useState(false)
	const pathname = usePathname()
	const button = useRef(null)

	useEffect(() => {
		if (isActive) setIsActive(false)
	}, [pathname])

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger)
		gsap.to(button.current, {
			scrollTrigger: {
				trigger: document.documentElement,
				start: 0,
				end: window.innerHeight,
				onLeave: () => {
					gsap.to(button.current, {
						scale: 1,
						duration: 0.25,
						ease: 'power1.out',
					})
				},
				onEnterBack: () => {
					gsap.to(button.current, {
						scale: 0,
						duration: 0.25,
						ease: 'power1.out',
					})
					setIsActive(false)
				},
			},
		})
	}, [])

	return (
		<>
			<div
				ref={header}
				className="absolute flex z-10 top-0 text-background p-[35px] justify-between w-full font-light box-border items-center"
			>
				<div className="flex cursor-pointer group">
					<p className="m-0 transition-all ease-customBezier group-hover:rotate-[360deg] ">
						©
					</p>
					<div className="flex relative overflow-hidden whitespace-nowrap ml-1 transition-all ease-customBezier group-hover:pr-[30px]">
						<p className="relative transition duration-75 ease-customBezier group-hover:translate-x-full">
							Code by
						</p>
						<p className="relative transition duration-75 ease-customBezier pl-[0.3em] group-hover:-translate-x-[65px]">
							Dob
						</p>
						<p className="transition duration-75 ease-customBezier absolute left-[120px] pl-[0.3em] group-hover:-translate-x-[65px]">
							Ivanov
						</p>
					</div>
				</div>
				<div className="flex items-center">
					<Magnetic>
						<div className="flex flex-col relative z-10 p-4 cursor-pointer group">
							<a>Work</a>
							<div className="group-hover:scale-100 absolute w-[5px] h-[5px] top-11 left-1/2 bg-background transition scale-0 -translate-x-1/2 ease-customBezier"></div>
						</div>
					</Magnetic>
					<Magnetic>
						<div className="flex flex-col relative z-10 p-4 cursor-pointer group">
							<a>About</a>
							<div className="group-hover:scale-100 absolute w-[5px] h-[5px] top-11 left-1/2 bg-background transition scale-0 -translate-x-1/2 ease-customBezier"></div>
						</div>
					</Magnetic>
					<Magnetic>
						<div className="flex flex-col relative z-10 p-4 cursor-pointer group">
							<a>Contact</a>
							<div className="group-hover:scale-100 absolute w-[5px] h-[5px] top-11 left-1/2 bg-background transition scale-0 -translate-x-1/2 ease-customBezier"></div>
						</div>
					</Magnetic>
				</div>
			</div>
			<div ref={button} className="fixed right-0 z-20 scale-0">
				<Button
					onClick={() => {
						setIsActive(!isActive)
					}}
					className="relative m-5 w-20 h-20 rounded-full bg-primary cursor-pointer flex items-center justify-center"
				>
					<div
						className={`w-full relative z-10 after:content-[""] after:block after:h-[1px] after:w-2/5 after:m-auto after:bg-background after:relative after:transform after:-top-[5px] before:top-[5px] before:content-[""] before:block before:h-[1px] before:w-2/5 before:m-auto before:bg-background before:relative before:transform ${
							isActive
								? 'after:rotate-45 after:-top-[1px] before:-rotate-45 before:top-0 '
								: ''
						}`}
					></div>
				</Button>
			</div>
			<AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
		</>
	)
}
