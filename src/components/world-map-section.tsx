"use client";
import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";

export function WorldMapSection() {
	return (
		<div className=" py-40 dark:bg-black bg-white w-full">
			<div className="max-w-7xl mx-auto text-center">
				<p className="font-bold text-xl md:text-4xl dark:text-white text-black">
					We Ship{" "}
					<span className="text-neutral-400">
						{"Worldwide".split("").map((word, idx) => (
							<motion.span
								key={idx}
								className="inline-block"
								initial={{ x: -10, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{
									duration: 0.5,
									delay: idx * 0.04,
								}}
							>
								{word}
							</motion.span>
						))}
					</span>
				</p>
				<p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
					No matter where you are in the world, you can receive one of
					these premium projectors delivered straight to your door.
					Experience the best in home entertainment, whether you&apos;re in
					a bustling city or a remote village. Our global shipping
					ensures that you can enjoy top-quality visuals anywhere,
					anytime.
				</p>
			</div>
			<WorldMap
				dots={[
					{
						start: {
							lat: 42.36,
							lng: -71.0588,
						}, // Boston
						end: {
							lat: 34.0522,
							lng: -118.2437,
						}, // Los Angeles
					},
					{
						start: {
							lat: 42.36,
							lng: -71.0588,
						}, // Boston
						end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
					},
					{
						start: {
							lat: 42.36,
							lng: -71.0588,
						}, // Boston
						end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
					},
					{
						start: {
							lat: 42.36,
							lng: -71.0588,
						}, // Boston
						end: { lat: 28.6139, lng: 77.209 }, // New Delhi
					},
					{
						start: {
							lat: 42.36,
							lng: -71.0588,
						}, // Boston
						end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
					},
					{
						start: {
							lat: 42.36,
							lng: -71.0588,
						}, // Boston
						end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
					},
					{
						start: {
							lat: 42.36,
							lng: -71.0588,
						}, // Boston
						end: {
							lat: 40.7127,
							lng: -74.0059,
						},
					},
				]}
			/>
		</div>
	);
}
