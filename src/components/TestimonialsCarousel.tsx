import { Star } from "lucide-react";
import { Testimonial } from "@/data/products";

interface TestimonialsCarouselProps {
    testimonials: Testimonial[];
}

const TestimonialsCarousel = ({ testimonials }: TestimonialsCarouselProps) => {
    // Duplicate testimonials for seamless loop
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    return (
        <div className="relative overflow-hidden">
            {/* Gradient Overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

            {/* Scrolling Container */}
            <div className="flex gap-4 sm:gap-6 animate-scroll hover:pause-animation">
                {duplicatedTestimonials.map((t, index) => (
                    <div
                        key={`${t.id}-${index}`}
                        className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] bg-card p-5 sm:p-6 rounded-xl border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 group"
                    >
                        {/* Rating Stars */}
                        <div className="flex gap-0.5 mb-3">
                            {Array.from({ length: 5 }).map((_, j) => (
                                <Star
                                    key={j}
                                    size={14}
                                    className={
                                        j < t.rating
                                            ? "text-star fill-star"
                                            : "text-muted"
                                    }
                                />
                            ))}
                        </div>

                        {/* Review Text */}
                        <p className="text-sm leading-relaxed text-muted-foreground mb-4 line-clamp-3">
                            "{t.text}"
                        </p>

                        {/* Customer Info */}
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full gradient-navy flex items-center justify-center text-sm font-bold text-primary-foreground group-hover:scale-110 transition-transform">
                                {t.avatar}
                            </div>
                            <div>
                                <p className="text-sm font-semibold group-hover:text-accent transition-colors">
                                    {t.name}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    Bought {t.product}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestimonialsCarousel;
