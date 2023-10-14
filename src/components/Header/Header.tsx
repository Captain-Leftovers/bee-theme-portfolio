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
			<div ref={header} className="absolute flex z-10 top-0 text-background p-[35px] justify-between w-full font-light box-border items-center">
				<div className="flex cursor-pointer group">
					<p className= "m-0 transition-all ease-customBezier group-hover:rotate-[360deg] "{styles.copyright}>©</p>
					<div className="flex relative overflow-hidden whitespace-nowrap ml-1 transition-all ease-customBezier group-hover:pr-[30px]">
						<p className="relative transition duration-75 ease-customBezier group-hover:translate-x-full"{styles.codeBy}>Code by</p>
						<p className="relative transition duration-75 ease-customBezier pl-[0.3em] group-hover:-translate-x-[65px]"{styles.dennis}>Dob</p>
						<p className="transition duration-75 ease-customBezier absolute left-[120px] pl-[0.3em] group-hover:-translate-x-[65px]"{styles.snellenberg}>Ivanov</p>
					</div>
				</div>
				<div className={styles.nav}>
					<Magnetic>
						<div className={styles.el}>
							<a>Work</a>
							<div className={styles.indicator}></div>
						</div>
					</Magnetic>
					<Magnetic>
						<div className={styles.el}>
							<a>About</a>
							<div className={styles.indicator}></div>
						</div>
					</Magnetic>
					<Magnetic>
						<div className={styles.el}>
							<a>Contact</a>
							<div className={styles.indicator}></div>
						</div>
					</Magnetic>
				</div>
			</div>
			<div ref={button} className={styles.headerButtonContainer}>
				<Button
					onClick={() => {
						setIsActive(!isActive)
					}}
					className={`${styles.button}`}
				>
					<div
						className={`${styles.burger} ${
							isActive ? styles.burgerActive : ''
						}`}
					></div>
				</Button>
			</div>
			<AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
		</>
	)
}
