"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export function DescriptionSection() {
	return (
		<HeroHighlight>
			<motion.h1
				initial={{
					opacity: 0,
					y: 20,
				}}
				animate={{
					opacity: 1,
					y: [20, -5, 0],
				}}
				transition={{
					duration: 0.5,
					ease: [0.4, 0.0, 0.2, 1],
				}}
				className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
			>
				Cinematix was born from a love of movies and a dream to share
				that magic with everyone. Starting in a small garage with just a
				few projectors and big ambitions, we set out to make{" "}
				<Highlight className="text-black dark:text-white">
					cinematic experiences accessible to all
				</Highlight>
				. Today, we’re proud to bring the{" "}
				<Highlight className="text-black dark:text-white">
					thrill of the big screen into homes around the world
				</Highlight>
				.
			</motion.h1>
		</HeroHighlight>
	);
}
