import clsx from "clsx";
import CenterEcho from "@/sections/centerEcho";
import UnderEcho from "@/sections/underEcho";
import ImageSide from "@/sections/imageSide";
import Bento from "@/sections/bento";
import Stats2 from "@/sections/stats2";
import Stats3 from "@/sections/stats3";
import News from "@/sections/news";
import Marquee from "@/sections/marquee";
import BaruchLogo from "@/assets/logos/BaruchLogo";
import Link from "next/link";
import Program from "@/sections/program";
import Slider from "@/sections/statsSlider";
import { redirect } from 'next/navigation'

export default function Home() {
  redirect('https://baruch-design.netlify.app/')

  return (
    <div className="bg-primary-indigo text-primary-white">
      <div className="flex flex-row gap-8 md:gap-32 justify-center items-center min-h-screen py-32">
        <div className="flex flex-col gap-8 md:gap-32 md:flex-row">
          <div>
            <BaruchLogo className="w-[260px] h-auto" />
            <h2 className="text-2xl font-bold font-field-gothic text-[220px] leading-[170px] uppercase text-secondary-chartreuse">Designs</h2>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold">Landing pages</h2>
            <ul className="text-lg flex flex-col gap-4">
              <li><Link href="/home" className="text-white/90 link link-indigo-bg hover:text-white">Home</Link></li>
              <li><Link href="/zicklin" className="text-white/90 link link-indigo-bg hover:text-white">Zicklin</Link></li>
              <li><Link href="/programs" className="text-white/90 link link-indigo-bg hover:text-white">Programs</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold">Basic page</h2>
            <ul className="text-lg flex flex-col gap-4">
              <li><Link href="/basic/cabinet" className="text-white/90 link link-indigo-bg hover:text-white">Cabinet</Link></li>
              <li><Link href="/basic/news-list" className="text-white/90 link link-indigo-bg hover:text-white">News list</Link></li>
              <li><Link href="/basic" className="text-white/90 link link-indigo-bg hover:text-white">News article</Link></li>
              <li><Link href="/basic/provost" className="text-white/90 link link-indigo-bg hover:text-white">Accreditation</Link></li>
              <li><Link href="/basic/everything" className="text-white/90 link link-indigo-bg hover:text-white">Everything</Link></li>
            </ul>
            <h2 className="text-2xl font-bold">Style Tiles</h2>
            <ul className="text-lg flex flex-col gap-4">
              <li><Link href="/style-tiles/round-2" className="text-white/90 link link-indigo-bg hover:text-white">Round 2</Link></li>
              <li><Link href="/style-tiles/round-1" className="text-white/90 link link-indigo-bg hover:text-white">Round 1</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
