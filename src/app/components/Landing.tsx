'use client'
import Image from 'next/image'
import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { motion } from 'framer-motion'
import { slideUp } from '@/helpers/animation/landingAnimation'

export default function Home() {
	const firstText = useRef(null)
	const secondText = useRef(null)
	const slider = useRef(null)
	let xPercent = 0
	let direction = -1

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger)
		gsap.to(slider.current, {
			scrollTrigger: {
				trigger: document.documentElement,
				scrub: 0.25,
				start: 0,
				end: window.innerHeight,
				onUpdate: (e) => (direction = e.direction * -1),
			},
			x: '-500px',
		})
		requestAnimationFrame(animate)
	}, [])

	const animate = () => {
		if (xPercent < -100) {
			xPercent = 0
		} else if (xPercent > 0) {
			xPercent = -100
		}
		gsap.set(firstText.current, { xPercent: xPercent })
		gsap.set(secondText.current, { xPercent: xPercent })
		requestAnimationFrame(animate)
		xPercent += 0.1 * direction
	}

	return (
		<motion.main
			variants={slideUp}
			initial="initial"
			animate="enter"
			className="relative flex h-screen overflow-hidden"
		>
			{/* <Image
				src="/images/background.png"
				fill={true}
				alt="background"
				className=" bg-gray-mid object-cover"
			/> */}
			<div className="absolute top-[calc(100vh-350px)]">
				<div ref={slider} className="relative whitespace-nowrap ">
					<p
						className=" relative m-0 text-background text-[200px] font-medium px-[50px]"
						ref={firstText}
					>
						TODO : fix this
						Web Developer 
					</p>
					<p
						className=" absolute  left-full top-0 m-0 text-background text-[200px] font-medium px-[50px]"
						ref={secondText}
					>
						Web Developer 
						
					</p>
				</div>
			</div>
			<div
				data-scroll
				data-scroll-speed={0.1}
				className="absolute top-[35%] left-[75%] text-background text-2xl font-light"
			>
				<svg
					className="scale-[2] mb-10"
					width="9"
					height="9"
					viewBox="0 0 9 9"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
						fill="white"
					/>
				</svg>
				<p className="m-0 mb-2.5">Web</p>
				<p className="m-0 mb-2.5">Developer</p>
			</div>
		</motion.main>
	)
}
