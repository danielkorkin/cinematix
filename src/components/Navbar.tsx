import React from "react";
import { ModeToggle } from "@/components/theme-switch";

export const Navbar: React.FC = () => {
	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-opacity-20 backdrop-blur-lg">
			<div className="container mx-auto px-4 py-4">
				<div className="flex justify-center items-center">
					<ModeToggle />
				</div>
			</div>
		</nav>
	);
};
