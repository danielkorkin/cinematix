"use client";

import React from "react";
import HeroSection from "@/components/hero-section";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
	return (
		<main>
			<HeroSection />
			<Testimonials />
		</main>
	);
}
