"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="largeSmallSizeMediumTitles"
        background="blurBottom"
        cardStyle="layered-gradient"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Lumière Dining"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="Exquisite Flavors, Unforgettable Moments"
      description="Experience the culinary mastery of Lumière, where tradition meets contemporary innovation."
      buttons={[
        {
          text: "Book a Table",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-round-table-served-two-christms-dinner-silver-candle-decorated-with-natural-fir-branches-two-flutes-pairs-plates-with-decorative-handmade-christmas-trees_132075-11391.jpg"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/close-up-people-celebrating-engagement_23-2149212184.jpg",
          alt: "Happy diner one",
        },
        {
          src: "http://img.b2bpic.net/free-photo/group-friends-having-lunch-together-restaurant_23-2150520109.jpg",
          alt: "Happy diner two",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-friends-having-laugh-together_23-2148395336.jpg",
          alt: "Happy diner three",
        },
        {
          src: "http://img.b2bpic.net/free-photo/high-angle-smiley-people-with-drinks_23-2150124809.jpg",
          alt: "Happy diner four",
        },
        {
          src: "http://img.b2bpic.net/free-photo/brunette-girl-using-her-cellphone-reach-friend_1157-17795.jpg",
          alt: "Happy diner five",
        },
      ]}
      avatarText="Join 5,000+ satisfied guests"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={true}
      title="A Legacy of Culinary Excellence"
      description="Founded by visionary chefs, our kitchen celebrates fresh ingredients, sustainable practices, and the joy of shared dining."
      metrics={[
        {
          value: "15+",
          title: "Years Experience",
        },
        {
          value: "5k+",
          title: "Guests Served",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/female-chef-kitchen-frying-food_23-2149720773.jpg"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="menu" data-section="menu">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "m1",
          title: "Artisanal Appetizers",
          author: "Chef Selection",
          description: "Hand-crafted starters using local seasonal produce.",
          tags: [
            "Fresh",
            "Organic",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/salmon-tartare_1203-9349.jpg",
        },
        {
          id: "m2",
          title: "Main Inspirations",
          author: "Chef Selection",
          description: "Sophisticated entrees celebrating the finest proteins.",
          tags: [
            "Savory",
            "Premium",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/slices-meat-served-with-lettuce-sesame-seeds-sauce_141793-955.jpg",
        },
        {
          id: "m3",
          title: "Decadent Desserts",
          author: "Chef Selection",
          description: "The perfect sweet finish to your evening.",
          tags: [
            "Artistic",
            "Sweet",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-delicious-chocolate-cake_23-2148549958.jpg",
        },
      ]}
      title="Signature Experiences"
      description="From farm-fresh appetizers to decadently crafted desserts, our menu is a journey of flavor."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "Truffle Ribeye",
          price: "$48",
          variant: "Meat",
          imageSrc: "http://img.b2bpic.net/free-photo/smoked-beef_1098-19399.jpg",
        },
        {
          id: "p2",
          name: "Lemon Sea Bass",
          price: "$42",
          variant: "Seafood",
          imageSrc: "http://img.b2bpic.net/free-photo/seafood-crab-salad-with-fresh-parmesan-crackers-greenery-inside-white-plate_114579-1799.jpg",
        },
        {
          id: "p3",
          name: "Handmade Tagliatelle",
          price: "$34",
          variant: "Pasta",
          imageSrc: "http://img.b2bpic.net/free-photo/ravioli-pasta-with-mushrooms-cherry-tomatoes-dark-sauce_84443-94489.jpg",
        },
        {
          id: "p4",
          name: "Seasonal Garden Salad",
          price: "$22",
          variant: "Vegan",
          imageSrc: "http://img.b2bpic.net/free-photo/greek-salad-with-vegetables-table_140725-355.jpg",
        },
        {
          id: "p5",
          name: "Rustic Sourdough",
          price: "$12",
          variant: "Bakery",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-potatoes-with-meat-tomato-sauce-with-arugula-greek-salad-table_141793-2840.jpg",
        },
        {
          id: "p6",
          name: "Craft Signature Cocktail",
          price: "$18",
          variant: "Drinks",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-green-cocktail-glass-with-orange-zest-banana-peel-kiwifruit-slice_140725-5130.jpg",
        },
      ]}
      title="Today's Featured Dishes"
      description="Explore our chef's daily curated selections."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="By The Numbers"
      tag="Excellence"
      metrics={[
        {
          id: "me1",
          value: "100%",
          description: "Locally Sourced Ingredients",
        },
        {
          id: "me2",
          value: "50+",
          description: "Global Wine Selection",
        },
        {
          id: "me3",
          value: "4.9",
          description: "Average Guest Rating",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          title: "Outstanding",
          quote: "The best dining experience I've had in years.",
          name: "James L.",
          role: "Food Critic",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-friends-with-delicious-cocktails_23-2150244937.jpg",
        },
        {
          id: "t2",
          title: "Pure Magic",
          quote: "The attention to detail in every dish is stunning.",
          name: "Anna S.",
          role: "Local Regular",
          imageSrc: "http://img.b2bpic.net/free-photo/blurred-restaurant_1203-1095.jpg",
        },
        {
          id: "t3",
          title: "Hidden Gem",
          quote: "Atmosphere and food perfectly paired.",
          name: "Mark D.",
          role: "Traveler",
          imageSrc: "http://img.b2bpic.net/free-photo/concentrated-young-redhead-curly-lady-standing-cafe_171337-16592.jpg",
        },
        {
          id: "t4",
          title: "Exceptional",
          quote: "Truly elegant, will return soon.",
          name: "Sophie M.",
          role: "Foodie",
          imageSrc: "http://img.b2bpic.net/free-photo/girl-is-sitting-table-restaurant-drink-wine-enjoy-scent-roses-flower-waiting-date_496169-221.jpg",
        },
        {
          id: "t5",
          title: "Wonderful",
          quote: "Chef's selection was spot on, highly recommended.",
          name: "Kevin T.",
          role: "Regular",
          imageSrc: "http://img.b2bpic.net/free-photo/new-year-spend-with-friends-celebrating_23-2149196973.jpg",
        },
      ]}
      title="Guest Testimonials"
      description="Don't take our word for it—listen to our happy guests."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      tag="Booking"
      title="Reserve Your Experience"
      description="Secure your table for an evening of luxury."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Navigation",
          items: [
            {
              label: "Home",
              href: "#hero",
            },
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Menu",
              href: "#menu",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Lumière Dining"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
