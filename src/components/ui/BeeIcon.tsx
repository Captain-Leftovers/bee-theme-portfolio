

import { cn } from "@/lib/utils"

type BeeIconProps = {
  className?:string
}

export default function BeeIcon( { className }:BeeIconProps ) {

	return (
		<div className={cn(`relative w-10 h-10 ${className}`)}>
			<div className="w-1/2 h-3/4 absolute bottom-[20%] left-1/4">
				<div className="absolute top-1/4 w-[60%] h-[70%] bg-slate-300 rounded-[50%_50%_50%_50%/65%_65%_35%_35%] -left-1/4 transform animate-fly-l"></div>
				<div className="absolute top-1/4 w-[60%] h-[70%]  bg-slate-300 rounded-[50%_50%_50%_50%/65%_65%_35%_35%] -right-1/4 transform  animate-fly-r"></div>
				<div className="w-[70%] h-1/5 bg-slate-600 rounded-[50%_50%_0_0/100%_100%_0_0] mx-auto my-0 after:content-[''] after:absolute after:top-[-10%] after:w-[15%] after:h-[15%] after:rounded-[50%] after:border-t-yellow-400 after:border-[10%] after:border-solid border-transparent before:content-[''] before:absolute before:top-[-10%] before:w-[15%] before:h-[15%] before:rounded-[50%] before:border-t-yellow-400 before:border-[10%] before:border-solid after:transform after:-rotate-45 after:-right-[15%] before:transform before:rotate-45 before:-right-[15%]"></div>
				<div className="mx-auto my-0 w-[70%] h-1/5 bg-yellow-400 mt-[20%]"></div>
				<div className="mx-auto my-0 w-[70%] h-1/5 bg-slate-600 mt-[20%]"></div>
				<div className="w-[70%] h-1/5 bg-yellow-400 rounded-[50%_50%_0_0/100%_100%_0_0] mx-auto my-0 transform rotate-180 mt-[20%] relative after:content-[''] after:absolute after:-translate-x-2/4 after:w-0 after:h-0 after:border-b-[19%] after:border-b-[#4d4d4d] after:border-x-[10%] border-x-transparent after:border-solid after:left-2/4 after:bottom-[90%] "></div>
			</div>
		</div>
	)
}
