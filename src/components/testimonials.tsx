import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "This todo list helped me organize my cursed energy training routines and never miss a day! Even Gojo was impressed.",
      name: "Yuji Itadori",
      designation: "First Year, Jujutsu High",
      src: "https://i.pinimg.com/736x/3e/44/c5/3e44c577a1e7b16231823c59cf68a9b8.jpg",
    },
    {
      quote:
        "Now I can schedule all my missions and cursed techniques practice. No more losing track of training—I'll become even stronger!",
      name: "Megumi Fushiguro",
      designation: "First Year, Jujutsu High",
      src: "https://cdnb.artstation.com/p/assets/images/images/079/430/091/large/r-creator-finished-megumi-fushiguro-vs-toji-fushiguro.jpg?1724889877",
    },
    {
      quote:
        "I listed all my snack times, naps, and todo: annoy Panda. Productivity 100%! Todo apps like this even brighten my black flashes.",
      name: "Nobara Kugisaki",
      designation: "First Year, Jujutsu High",
      src: "https://wallpapers.com/images/featured/nobara-kugisaki-6wwcj806yz8yda78.jpg",
    },
    {
      quote:
        "I keep track of all my students' assignments and my infinity meditation schedules. This app is almost as limitless as me.",
      name: "Satoru Gojo",
      designation: "Sensei, Jujutsu High",
      src: "https://m.media-amazon.com/images/I/71cOY+vBFsL._AC_UF894,1000_QL80_.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
