"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

import Image from "next/image";
import { useRef } from "react";

interface BackgroundCarouselProps {
  setSwiperInstance: (swiper: SwiperType) => void;
}

const images = [
  "/images/hero-image-1.jpeg",
  "/images/hero-image-2.jpeg",
  "/images/hero-image-3.jpeg",
  "/images/hero-image-4.jpeg",
];

export const BackgroundCarouselWithControls = ({
  setSwiperInstance,
}: BackgroundCarouselProps) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <Swiper
      modules={[Navigation, Autoplay, EffectFade]}
      effect="fade"
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      loop
      allowTouchMove={false}
      navigation={false}
      speed={1000}
      className="w-full h-full"
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
        setSwiperInstance(swiper);
      }}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index} className="w-full h-full">
          <Image
            src={src}
            alt={`Background ${index + 1}`}
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority={index === 0}
            quality={90}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
