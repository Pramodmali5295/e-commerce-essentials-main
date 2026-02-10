import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const SocialSidebar = () => {
    const socialLinks = [
        { icon: Facebook, label: "Facebook", url: "https://facebook.com", color: "#1877F2" },
        { icon: Instagram, label: "Instagram", url: "https://instagram.com", color: "#E4405F" },
        { icon: Twitter, label: "Twitter", url: "https://twitter.com", color: "#1DA1F2" },
        { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com", color: "#0A66C2" },
    ];

    return (
        <div className="fixed right-2 top-1/2 -translate-y-1/2 z-[100] hidden sm:flex flex-col gap-3 p-0 group pointer-events-none">
            {socialLinks.map(({ icon: Icon, label, url, color }, idx) => (
                <motion.a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    whileHover={{ scale: 1.1, x: -5 }}
                    className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full group/item transition-all duration-300 relative shadow-lg overflow-hidden"
                    style={{
                        "--brand-color": color,
                        backgroundColor: color,
                        boxShadow: `0 4px 15px ${color}4d`
                    } as React.CSSProperties}
                >
                    <Icon
                        size={18}
                        className="text-white relative z-10 transition-all duration-300 sm:w-5 sm:h-5"
                    />

                    <span className="absolute right-full mr-4 px-3 py-1.5 bg-navy/95 backdrop-blur-md text-white text-[10px] font-bold rounded-lg opacity-0 group-hover/item:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-2xl border border-white/10 translate-x-2 group-hover/item:translate-x-0">
                        {label}
                    </span>

                    {/* Circular Shine/Glow */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-white/20 transition-opacity duration-300"
                    />
                </motion.a>
            ))}
        </div>
    );
};

export default SocialSidebar;
