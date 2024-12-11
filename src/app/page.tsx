"use client";

import React from "react";

import { TestimonialsSection } from "@/components/testimonial-section";
import { WorldMapSection } from "@/components/world-map-section";
import HeroSection from "@/components/hero-section";
import { DescriptionSection } from "@/components/description-section";

export default function Home() {
	return (
		<main>
			<HeroSection />
			<DescriptionSection />
			<TestimonialsSection />
			<WorldMapSection />
		</main>
	);
}
