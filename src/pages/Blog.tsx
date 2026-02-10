import { motion } from "framer-motion";
import { Search, Calendar, Clock, ArrowRight, Share2, Heart } from "lucide-react";
import { categories } from "@/data/products";

const Blog = () => {
    const posts = [
        {
            id: 1,
            title: "10 Essential Gadgets for Your Remote Home Office",
            excerpt: "Transform your work-from-home setup with these must-have electronics that boost productivity and comfort.",
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80",
            author: "Sneha Kapoor",
            date: "Feb 08, 2026",
            readTime: "6 min read",
            category: "Electronics"
        },
        {
            id: 2,
            title: "Spring Fashion Trends: What to Wear This Season",
            excerpt: "From vibrant pastels to sustainable fabrics, discover the hottest fashion trends hitting the streets this spring.",
            image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
            author: "Vikram Malhotra",
            date: "Feb 05, 2026",
            readTime: "4 min read",
            category: "Fashion"
        },
        {
            id: 3,
            title: "Minimalist Interior Design: Less is Truly More",
            excerpt: "Learn how to create a calm and functional living space using minimalist design principles and curated home decor.",
            image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&q=80",
            author: "Priya Das",
            date: "Feb 01, 2026",
            readTime: "8 min read",
            category: "Home & Living"
        },
        {
            id: 4,
            title: "Skincare 101: Building Your Perfect Morning Routine",
            excerpt: "Everything you need to know about cleansing, toning, and moisturizing for a natural, healthy glow.",
            image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
            author: "Ananya Sharma",
            date: "Jan 28, 2026",
            readTime: "5 min read",
            category: "Beauty"
        }
    ];

    const featuredPost = posts[0];

    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">Our <span className="text-accent underline decoration-accent/30 underline-offset-8">Blog</span></h1>
                        <p className="text-muted-foreground text-lg max-w-2xl">Discover stories, guides, and inspiration from the world of lifestyle and commerce.</p>
                    </motion.div>
                </div>

                {/* Featured Post */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative rounded-[40px] overflow-hidden group mb-16 shadow-2xl"
                >
                    <div className="aspect-[21/9] w-full">
                        <img
                            src={featuredPost.image}
                            alt={featuredPost.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full text-primary-foreground">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="max-w-3xl"
                        >
                            <span className="px-4 py-1.5 bg-accent text-primary text-xs font-bold rounded-full mb-6 inline-block uppercase tracking-wider">FEATURED ARTICLE</span>
                            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 group-hover:text-accent transition-colors">{featuredPost.title}</h2>
                            <p className="text-lg opacity-80 mb-8 line-clamp-2 md:line-clamp-3">{featuredPost.excerpt}</p>
                            <div className="flex flex-wrap items-center gap-6 text-sm">
                                <div className="flex items-center gap-2"><div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center font-bold">SK</div> {featuredPost.author}</div>
                                <div className="flex items-center gap-2 font-medium opacity-80"><Calendar size={16} /> {featuredPost.date}</div>
                                <button className="px-8 py-3 bg-white text-navy font-bold rounded-xl hover:bg-accent hover:text-primary transition-all flex items-center gap-2 shadow-lg">
                                    Read Article <ArrowRight size={18} />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Categories Bar */}
                <div className="flex items-center gap-4 mb-12 overflow-x-auto pb-4 no-scrollbar">
                    <button className="px-6 py-2.5 bg-accent text-primary font-bold rounded-full shadow-lg whitespace-nowrap">Latest Stories</button>
                    {categories.map(cat => (
                        <button key={cat.id} className="px-6 py-2.5 bg-card border border-border text-muted-foreground font-semibold rounded-full hover:border-accent hover:text-accent transition-all whitespace-nowrap">{cat.name}</button>
                    ))}
                </div>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {posts.slice(1).map((post, idx) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-card rounded-3xl border border-border overflow-hidden hover:shadow-2xl transition-all group flex flex-col h-full"
                        >
                            <div className="aspect-[4/3] overflow-hidden relative">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-4 py-1.5 bg-card/90 backdrop-blur-md text-foreground text-xs font-bold rounded-full border border-border shadow-sm">{post.category}</span>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 font-semibold">
                                    <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                                    <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
                                    {post.excerpt}
                                </p>
                                <div className="pt-6 border-t border-border flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full gradient-navy text-[10px] font-bold text-primary-foreground flex items-center justify-center">
                                            {post.author.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <span className="text-xs font-bold">{post.author}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button className="text-muted-foreground hover:text-accent transition-colors"><Heart size={18} /></button>
                                        <button className="text-muted-foreground hover:text-accent transition-colors"><Share2 size={18} /></button>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Blog;
