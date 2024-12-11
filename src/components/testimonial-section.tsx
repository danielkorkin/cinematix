import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function TestimonialsSection() {
	const testimonials = [
		{
			quote: "I could tell right away that this brand is different. Every little detail shows how much effort these guys put into creating something so elegant yet unique. And the quality is just superb.",
			name: "Johan Johansson",
			designation: "Cinematix Customer",
			src: "https://images.unsplash.com/photo-1517598024396-46c53fb391a1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29uJTIwcG9ydHJhaXQlMjBtYWxlJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHwy",
		},
		{
			quote: "I was a little skeptical at first, as I never bought apparel online before, but you guys created a stellar experience with your store! And the delivery was surprisingly quick.",
			name: "Alice Abigaile",
			designation: "Cinematix Customer",
			src: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbiUyMHBvcnRyYWl0JTIwZmVtYWxlJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHwy",
		},
	];
	return <AnimatedTestimonials testimonials={testimonials} />;
}
