import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
	const scrollToSection = (sectionId: string) => {
		document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section className="min-h-screen flex items-center justify-center relative">
			<div className="text-center max-w-4xl mx-auto">
				<div className="mb-8">
					<h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
						Hi, I'm{" "}
						<span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
							Melker
						</span>
					</h1>
					<p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
						System Developer crafting exceptional digital experiences
						<br />
						with modern technologies and creative solutions
					</p>
				</div>

				<div className="flex flex-wrap justify-center gap-4 mb-12">
					<Button
						onClick={() => scrollToSection("projects")}
						className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
					>
						View My Work
					</Button>
					<Button
						onClick={() => scrollToSection("contact")}
						variant="outline"
						className="bg-slate-900 border-slate-700 text-green-400 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/25 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300"
					>
						Get In Touch
					</Button>
				</div>

				<div className="flex justify-center space-x-6 mb-12">
					<a
						href="https://github.com/Proxywch?tab=repositories"
						target="_blank"
						rel="noopener noreferrer"
						className="text-slate-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
					>
						<Github size={28} />
					</a>
					<a
						href="https://www.linkedin.com/in/melker-h%C3%A4llstr%C3%B6m-b17240250/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-slate-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
					>
						<Linkedin size={28} />
					</a>
					<a
						href="mailto:your.email@example.com"
						className="text-slate-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
					>
						<Mail size={28} />
					</a>
				</div>
			</div>

			<div className="absolute bottom-8 transform -translate-x-1/2 animate-bounce">
				<ArrowDown
					className="text-slate-400 cursor-pointer hover:text-white transition-colors duration-300"
					size={32}
					onClick={() => scrollToSection("skills")}
				/>
			</div>
		</section>
	);
};

export default Hero;
