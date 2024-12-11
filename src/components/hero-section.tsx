"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function HeroSection() {
	return (
		<main>
			<AuroraBackground>
				<motion.div
					initial={{ opacity: 0.0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: "easeInOut",
					}}
					className="relative flex flex-col gap-4 items-center justify-center px-4"
				>
					<div className="text-black text-3xl md:text-7xl font-bold dark:text-white text-center">
						CINEMATIX
					</div>
					<div className="text-black font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
						Lights. Project. Action!
					</div>
				</motion.div>
			</AuroraBackground>
		</main>
	);
}
