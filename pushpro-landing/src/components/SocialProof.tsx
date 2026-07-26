"use client";

import Image from "next/image";

export default function SocialProof() {
  return (
    <section className="overflow-hidden bg-white py-16">

      {/* === Mobile layout === */}
      <div className="md:hidden px-4 flex flex-col items-center">
        <div className="grid grid-cols-2 gap-3 w-full">
          <div className="relative h-[200px] overflow-hidden rounded-[40px] bg-neutral-100">
            <Image src="/care3.avif" alt="athlete" fill className="object-cover" />
          </div>
          <div className="relative h-[200px] overflow-hidden rounded-[40px] bg-neutral-100">
            <Image src="/care8.avif" alt="athlete" fill className="object-cover" />
          </div>
          <div className="relative h-[200px] overflow-hidden rounded-[40px] bg-neutral-100">
            <Image src="/caree7.avif" alt="athlete" fill className="object-cover" />
          </div>
          <div className="relative h-[200px] overflow-hidden rounded-[40px] bg-neutral-100">
            <Image src="/care9.avif" alt="athlete" fill className="object-cover" />
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-[2.5rem] font-bold leading-[1.1] tracking-[-0.02em] text-[#0F111A]">
            Crafted with Care <br /> Loved Everywhere
          </h2>
          <p className="mt-3 text-base leading-[1.5] text-[#0F111A]/60">
            Don&apos;t take our words for it. See why PushupPro is trusted and
            loved by people around the world who want to feel better,
            perform better, and train smarter.
          </p>
        </div>
      </div>

      {/* === Desktop layout === */}
      <div className="hidden md:flex items-start justify-center gap-3 px-2 mt-22">

        {/* === Left group === */}
        <div className="flex shrink-0 gap-3">
          {/* Col A */}
          <div className="flex w-[168px] mt-[20%] flex-col gap-3">
            <div className="relative h-[235px] overflow-hidden rounded-[50px] bg-neutral-100">
              <Image src="/care1.avif" alt="athlete" fill className="object-cover" />
            </div>
            <div className="relative h-[235px] overflow-hidden rounded-[50px] bg-neutral-100">
              <Image src="/care2.avif" alt="athlete" fill className="object-cover" />
            </div>
          </div>
          {/* Col B */}
          <div className="flex w-[190px] flex-col gap-3">
            <div className="relative h-[200px] overflow-hidden rounded-[50px] bg-neutral-100">
              <Image src="/care3.avif" alt="athlete" fill className="object-cover" />
            </div>
            <div className="relative h-[200px] overflow-hidden rounded-[50px] bg-neutral-100">
              <Image src="/care4.avif" alt="athlete" fill className="object-cover" />
            </div>
            <div className="relative h-[200px] overflow-hidden rounded-[50px] bg-neutral-100">
              <Image src="/care5.avif" alt="athlete" fill className="object-cover" />
            </div>
          </div>
          {/* Col C */}
          <div className="flex w-[185px] mt-[20%] flex-col gap-3">
            <div className="relative h-[450px] overflow-hidden rounded-[50px] bg-neutral-100">
              <Image src="/care8.avif" alt="athlete" fill className="object-cover" />
            </div>
            {/* <div className="relative h-[152px] overflow-hidden rounded-2xl bg-neutral-100">
              <Image src="/posed.jpg" alt="athlete" fill className="object-cover" />
            </div> */}
          </div>
        </div>

        {/* === Center: 2 photo columns + text === */}
        <div className="flex w-[400px] shrink-0 flex-col items-center gap-6">
          <div className="flex w-full gap-3">
            <div className="relative h-[450px] flex-1 overflow-hidden rounded-[50px] bg-neutral-100">
              <Image src="/care6.avif" alt="athlete" fill className="object-cover" />
            </div>
            <div className="relative h-[450px] flex-1 overflow-hidden rounded-[50px] bg-neutral-100">
              <Image src="/caree7.avif" alt="athlete" fill className="object-cover" />
            </div>
          </div>
          <div className="text-center -ml-[130px] w-full mt-[35%]">
            <h2 className="text-[4.1rem] text-nowrap font-normal leading-[1.1] tracking-[-0.02em] text-[#0F111A]">
              Crafted with Care <br /> Loved Everywhere
            </h2>
            <p className="mt-3 text-xl ml-[70px] text-center w-full leading-[1.5] text-[#0F111A]/60">
              Don&apos;t take our words for it. See why PushupPro is trusted and
              loved by people around the world who want to feel better,
              perform better, and train smarter.
            </p>
          </div>
        </div>

        {/* === Right group === */}
        <div className="flex shrink-0 gap-3">
          {/* Col F */}
          <div className="flex w-[200px] mt-[19%] flex-col gap-3">
            <div className="relative h-[450px] overflow-hidden rounded-[50px] bg-neutral-100">
              <Image src="/care9.avif" alt="athlete" fill className="object-cover" />
            </div>
            {/* <div className="relative h-[152px] overflow-hidden rounded-2xl bg-neutral-100">
              <Image src="/unnamed2.webp" alt="athlete" fill className="object-cover" />
            </div> */}
          </div>
          {/* Col G */}
          <div className="flex w-[210px] flex-col gap-3">
            <div className="relative h-[200px] overflow-hidden rounded-[50px] bg-neutral-100">
              <Image src="/caree1.avif" alt="athlete" fill className="object-cover" />
            </div>
            <div className="relative h-[200px] overflow-hidden rounded-[50px] bg-neutral-100">
              <Image src="/caree2.avif" alt="athlete" fill className="object-cover" />
            </div>
            <div className="relative h-[200px] overflow-hidden rounded-[50px] bg-neutral-100">
              <Image src="/caree3.avif" alt="athlete" fill className="object-cover" />
            </div>
          </div>
          {/* Col H */}
          <div className="flex w-[182px] mt-[13%] flex-col gap-3">
            <div className="relative h-[255px] overflow-hidden rounded-[50px] bg-neutral-100">
              <Image src="/caree6.avif" alt="athlete" fill className="object-cover" />
            </div>
            <div className="relative h-[255px] overflow-hidden rounded-[50px] bg-neutral-100">
              <Image src="/caree9.avif" alt="athlete" fill className="object-cover" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
