"use client";

import Header from "@/components/Header";
import Image from "next/image";
import { useState } from "react";
import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  const tokenAddress = "0xFeD56F9Cd29F44e7C61c396DAc95cb3ed33d3546";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(tokenAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (e) {
      console.error("Copy failed", e);
    }
  };

  return (
    <div>
      <Header />
      <main>
        <section className="bg-blue-700 px-4 relative w-full h-screen flex flex-col items-center justify-between overflow-hidden">
          {/* Background Image */}
          <Image
            src="/images/pcat-img.jpg"
            alt="Astronaut Pepe"
            fill
            className="object-cover z-0 opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70"></div>

          {/* Top Content */}
          <div className="relative z-10 w-full pt-32 flex flex-col items-center">
            <h1 className="text-6xl font-bold text-blue-300 mb-4">Welcome to</h1>
            <h2 className="text-8xl font-extrabold text-blue-300 mb-6">$PCAT</h2>
            <p className="text-xl text-center text-white">THE ONLY OFFICIAL PHENOMENAL CAT ON BNBCHAIN</p>
          </div>

          {/* Bottom Icons */}
          <div className="relative z-10 w-full max-w-lg mb-16">
            <div className="flex justify-center space-x-8">
              <a href="#" className="bg-gray-800/80 p-4 rounded-full hover:bg-gray-700 transition-all">
                <Image src="/images/firescreener-logo.png" alt="Window" width={28} height={28} />
              </a>
              <a href="#" className="bg-gray-800/80 p-4 rounded-full hover:bg-gray-700 transition-all">
                <Image src="/images/bscscan.png" alt="File" width={28} height={28} />
              </a>
              <a href="#" className="bg-gray-800/80 p-4 rounded-full hover:bg-gray-700 transition-all">
                <Image src="/images/dexscreener-b.png" alt="Globe" width={28} height={28} />
              </a>
            </div>
          </div>
        </section>

        <section className="bg-black text-white px-4 py-16 md:py-24">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
            {/* Left: Text */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">WHAT IS $PCAT?</h2>
              <p className="text-base sm:text-lg text-white/90 mb-6 max-w-prose mx-auto md:mx-0">
               Phenomal Cat ($PCAT) is a revolutionary cryptocurrency designed to blend community engagement,
               charitable initiatives, and an educational empowerment within the Blockchain ecosystem. With a 
               deflationary model, $PCAT aims to create value and encourage beliefs in The Phenomenals
              </p>

              {/* Token address + copy */}
              <div className="max-w-2xl mx-auto md:mx-0">
                <div
                  className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 bg-amber-200 text-black rounded-xl px-4 py-3 border-2 border-black/90 shadow-[6px_6px_0_0_rgba(0,0,0,1)]"
                  role="group"
                  aria-label="Token address with copy"
                >
                  <span
                    className="font-extrabold tracking-wider md:text-lg truncate max-w-full"
                    title={tokenAddress}
                  >
                    {tokenAddress}
                  </span>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 bg-cyan-200 hover:bg-cyan-300 active:translate-y-[1px] rounded-full px-4 py-2 border-2 border-black/80 shadow-[3px_3px_0_0_rgba(0,0,0,1)] transition-colors"
                    aria-live="polite"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                      aria-hidden="true"
                    >
                      <path d="M16 1H4a2 2 0 0 0-2 2v12h2V3h12V1Zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 16H8V7h11v14Z" />
                    </svg>
                    <span className="font-semibold">{copied ? "Copied!" : "Copy"}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="flex justify-center md:justify-end">
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 overflow-hidden rounded-2xl border-4 border-white/20 shadow-[10px_10px_0_0_rgba(255,255,255,0.15)] bg-white/10">
                <Image
                  src="/images/pcat-img.jpg"
                  alt="Phenomenal Cat"
                  width={640}
                  height={640}
                  className="w-full h-full object-cover"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-900 text-white py-24 px-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-center text-6xl md:text-8xl font-bold text-blue-300 mb-10">
              Tokenomics
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
              {/* 0/0 Tax */}
              <div className="relative w-40 h-48 md:w-64 md:h-72 bg-neutral-200 text-black rounded-full border-2 border-black/80 shadow-[8px_8px_0_0_rgba(0,0,0,1)] flex flex-col items-center justify-center rotate-[-8deg]">
                <div className="text-5xl md:text-6xl font-extrabold leading-none">700T</div>
                <div className="text-xl md:text-2xl font-extrabold">Total Supply</div>
              </div>

              {/* LP Burnt */}
              <div className="relative w-40 h-48 md:w-64 md:h-72 bg-neutral-200 text-black rounded-full border-2 border-black/80 shadow-[8px_8px_0_0_rgba(0,0,0,1)] flex flex-col items-center justify-center rotate-[8deg] sm:translate-y-6 lg:translate-y-0">
                <div className="text-5xl md:text-6xl font-extrabold leading-none">17%</div>
                <div className="text-xl md:text-2xl font-extrabold">Initial Burn</div>
              </div>

              {/* Mint & Freeze Revoked */}
              <div className="relative w-40 h-48 md:w-64 md:h-72 bg-neutral-200 text-black rounded-full border-2 border-black/80 shadow-[8px_8px_0_0_rgba(0,0,0,1)] flex flex-col items-center justify-center rotate-[-6deg] sm:-translate-y-6 lg:translate-y-0">
                <div className="text-5xl md:text-6xl font-extrabold text-center leading-tight">
                  23%
                </div>
                <div className="text-lg md:text-xl font-extrabold">Liquidity Pool</div>
              </div>

              {/* Total Supply */}
              <div className="relative w-40 h-48 md:w-64 md:h-72 bg-neutral-200 text-black rounded-full border-2 border-black/80 shadow-[8px_8px_0_0_rgba(0,0,0,1)] flex flex-col items-center justify-center rotate-[12deg]">
                <div className="text-5xl md:text-6xl font-extrabold leading-none">10%</div>
                <div className="text-xl md:text-2xl font-extrabold text-center leading-tight">
                  Treasury (Locked)
                </div>
              </div>

              <div className="relative w-40 h-48 md:w-64 md:h-72 bg-neutral-200 text-black rounded-full border-2 border-black/80 shadow-[8px_8px_0_0_rgba(0,0,0,1)] flex flex-col items-center justify-center rotate-[-8deg]">
                <div className="text-5xl md:text-6xl font-extrabold leading-none">10%</div>
                <div className="text-xl md:text-2xl font-extrabold">Developments</div>
              </div>

              {/* LP Burnt */}
              <div className="relative w-40 h-48 md:w-64 md:h-72 bg-neutral-200 text-black rounded-full border-2 border-black/80 shadow-[8px_8px_0_0_rgba(0,0,0,1)] flex flex-col items-center justify-center rotate-[8deg] sm:translate-y-6 lg:translate-y-0">
                <div className="text-5xl md:text-6xl font-extrabold leading-none">10%</div>
                <div className="text-xl md:text-2xl font-extrabold">Sponsorships</div>
              </div>

              {/* Mint & Freeze Revoked */}
              <div className="relative w-40 h-48 md:w-64 md:h-72 bg-neutral-200 text-black rounded-full border-2 border-black/80 shadow-[8px_8px_0_0_rgba(0,0,0,1)] flex flex-col items-center justify-center rotate-[-6deg] sm:-translate-y-6 lg:translate-y-0">
                <div className="text-5xl md:text-6xl font-extrabold leading-none">20%</div>
                <div className="text-xl md:text-2xl font-extrabold">Marketing</div>
              </div>

              {/* Total Supply */}
              <div className="relative w-40 h-48 md:w-64 md:h-72 bg-neutral-200 text-black rounded-full border-2 border-black/80 shadow-[8px_8px_0_0_rgba(0,0,0,1)] flex flex-col items-center justify-center rotate-[12deg]">
                <div className="text-5xl md:text-6xl font-extrabold leading-none">10%</div>
                <div className="text-xl md:text-2xl font-extrabold text-center leading-tight">
                  CEX Listings
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="bg-white text-black py-32">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-10">
              <h3 className="text-6xl md:text-8xl font-extrabold text-blue-900">How to Buy</h3>
              <p className="text-xl text-gray-600 mt-2">Follow these simple steps to get $PCAT</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Step 1 */}
              <div className="rounded-2xl border-2 border-black/20 shadow-[6px_6px_0_0_rgba(0,0,0,0.2)] p-6 md:p-8 bg-blue-900 text-white">
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="text-5xl md:text-6xl">🛒</div>
                  <div>
                    <h4 className="text-2xl md:text-3xl font-extrabold">Owning some BNB</h4>
                    <p className="mt-2 text-lg md:text-base">
                    Buy or send some $BNB into your wallet (e.g. MetaMask, TrustWallet)
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="rounded-2xl border-2 border-black/20 shadow-[6px_6px_0_0_rgba(0,0,0,0.2)] p-6 md:p-8 bg-blue-900 text-white">
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="text-5xl md:text-6xl">👛</div>
                  <div>
                    <h4 className="text-2xl md:text-3xl font-extrabold">Go to PancakeSwap</h4>
                    <p className="mt-2 text-lg md:text-base">
                    Go to the PancakeSwap DEX in the browser. Paste the PCAT contract address in the output field
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="rounded-2xl border-2 border-black/20 shadow-[6px_6px_0_0_rgba(0,0,0,0.2)] p-6 md:p-8 bg-blue-900 text-white">
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="text-5xl md:text-6xl">💵</div>
                  <div>
                    <h4 className="text-2xl md:text-3xl font-extrabold">Swap BNB for PCAT</h4>
                    <p className="mt-2 text-lg md:text-base">
                    Enter the amount of BNB you wish to swap for PCAT and confirm the transaction in your wallet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white text-black py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-center text-4xl md:text-6xl font-extrabold text-blue-900 mb-10">FAQ</h3>

            <div className="space-y-4">
              {/* Q1 */}
              <details className="group border-2 border-black/10 rounded-xl p-4 md:p-5 shadow-[6px_6px_0_0_rgba(0,0,0,0.08)] bg-white">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-lg md:text-xl font-bold">What is $PCAT?</span>
                  <span className="ml-4 shrink-0 rounded-full border-2 border-black bg-cyan-200 w-8 h-8 grid place-items-center shadow-[3px_3px_0_0_rgba(0,0,0,1)] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="mt-3 text-sm md:text-base text-gray-700">
                  $PCAT is a community-first meme token on BNB Chain inspired by the Phenomenal Cat. It blends fun, culture, and utility-driven goals within our growing ecosystem.
                </div>
              </details>

              {/* Q2 */}
              <details className="group border-2 border-black/10 rounded-xl p-4 md:p-5 shadow-[6px_6px_0_0_rgba(0,0,0,0.08)] bg-white">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-lg md:text-xl font-bold">Is $PCAT deflationary or fixed?</span>
                  <span className="ml-4 shrink-0 rounded-full border-2 border-black bg-cyan-200 w-8 h-8 grid place-items-center shadow-[3px_3px_0_0_rgba(0,0,0,1)] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="mt-3 text-sm md:text-base text-gray-700">
                PCAT is a deflationary cryptocurrency designed with a built-in auto-burn mechanism 
                to reduce its total supply over time, potentially increasing scarcity and value. 
                Currently, 17% of the total PCAT supply has been permanently removed from 
                circulation through burning. Additionally, the token features an automatic 
                burn mechanism, whereby 1% of every transaction is burned with each trade, 
                further decreasing the circulating supply and promoting long-term value 
                appreciation.
                </div>
              </details>

              {/* Q2 */}
              <details className="group border-2 border-black/10 rounded-xl p-4 md:p-5 shadow-[6px_6px_0_0_rgba(0,0,0,0.08)] bg-white">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-lg md:text-xl font-bold">How do I buy $PCAT?</span>
                  <span className="ml-4 shrink-0 rounded-full border-2 border-black bg-cyan-200 w-8 h-8 grid place-items-center shadow-[3px_3px_0_0_rgba(0,0,0,1)] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="mt-3 text-sm md:text-base text-gray-700">
                  Get BNB in your wallet, then use PancakeSwap to swap BNB for $PCAT. You can follow the steps in the "How to Buy" section above.
                </div>
              </details>

              {/* Q3 */}
              <details className="group border-2 border-black/10 rounded-xl p-4 md:p-5 shadow-[6px_6px_0_0_rgba(0,0,0,0.08)] bg-white">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-lg md:text-xl font-bold">What is the contract address?</span>
                  <span className="ml-4 shrink-0 rounded-full border-2 border-black bg-cyan-200 w-8 h-8 grid place-items-center shadow-[3px_3px_0_0_rgba(0,0,0,1)] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="mt-3 text-sm md:text-base text-gray-700 break-all">
                  0xFeD56F9Cd29F44e7C61c396DAc95cb3ed33d3546
                </div>
              </details>

              {/* Q4 */}
              <details className="group border-2 border-black/10 rounded-xl p-4 md:p-5 shadow-[6px_6px_0_0_rgba(0,0,0,0.08)] bg-white">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-lg md:text-xl font-bold">Is there a buy/sell tax?</span>
                  <span className="ml-4 shrink-0 rounded-full border-2 border-black bg-cyan-200 w-8 h-8 grid place-items-center shadow-[3px_3px_0_0_rgba(0,0,0,1)] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="mt-3 text-sm md:text-base text-gray-700">
                  3% Buy and Sell Tax. 1% for more marketing, 1% burns and 1% goes to our liqudity pool
                </div>
              </details>

              {/* Q5 */}
              <details className="group border-2 border-black/10 rounded-xl p-4 md:p-5 shadow-[6px_6px_0_0_rgba(0,0,0,0.08)] bg-white">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-lg md:text-xl font-bold">Where can I track the price?</span>
                  <span className="ml-4 shrink-0 rounded-full border-2 border-black bg-cyan-200 w-8 h-8 grid place-items-center shadow-[3px_3px_0_0_rgba(0,0,0,1)] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="mt-3 text-sm md:text-base text-gray-700">
                  We are listed on FireScreener. You can check us out on the platform
                </div>
              </details>
            </div>
          </div>
        </section>

        <section className="bg-blue-200 text-black py-24">
          <div className="max-w-5xl mx-auto px-4">
            <h3 className="text-center text-3xl md:text-5xl font-extrabold text-blue-900 tracking-wide drop-shadow-sm">
              JOIN THE LITTER AND BRING YOUR FELLOWS AS WE EMBARK ON A MISSION TO THE MOON
            </h3>

            {/* Hanging wooden sign style CTA */}
            <div className="relative mt-10 flex justify-center">
              {/* hooks */}
              <span className="hidden md:block absolute -top-4 left-1/3 w-5 h-5 rounded-full bg-blue-700 shadow-[2px_2px_0_0_rgba(0,0,0,0.4)]"></span>
              <span className="hidden md:block absolute -top-4 right-1/3 w-5 h-5 rounded-full bg-blue-700 shadow-[2px_2px_0_0_rgba(0,0,0,0.4)]"></span>

              <a href="#buy" className="relative inline-block">
                <span className="absolute inset-x-2 -bottom-2 h-2 bg-blue-900/60 rounded-sm" aria-hidden="true"></span>
                <div className="relative bg-blue-600 text-white border-4 border-blue-900 rounded-md px-6 py-4 md:px-10 md:py-5 shadow-[8px_8px_0_0_rgba(0,0,0,0.4)]">
                  <span className="text-2xl md:text-3xl font-extrabold tracking-wider">
                    JOIN THE PHENOMENALS
                  </span>
                </div>
              </a>
            </div>

            {/* Illustration */}
            <div className="mt-10 flex justify-center">
              <div className="w-56 h-56 md:w-72 md:h-72 overflow-hidden rounded-xl border-4 border-blue-900 shadow-[10px_10px_0_0_rgba(0,0,0,0.35)] bg-white">
                <img
                  src="/images/pcat-img.jpg"
                  alt="Phenomenal Cat mascot"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="bg-emerald-50 text-black border-t border-black/10">
          <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Left: logo + name */}
            <div className="flex items-center gap-3">
              <Image src="/images/pcat-logo.png" alt="pcat logo" width={50} height={50} />
              <span className="text-3xl md:text-4xl font-extrabold text-black drop-shadow-[2px_2px_0_rgba(0,0,0,0.25)]">
                Phenomenal Cat
              </span>
            </div>

            {/* Right: social/links */}
            <div className="flex items-center gap-3">
              <a
                href="#twitter"
                aria-label="Twitter"
                className="p-2 w-10 h-10 md:w-11 md:h-11 flex items-center justify-center bg-cyan-200 rounded-full border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-[1px] active:translate-y-0 transition-transform"
              >
               <FaXTwitter size={25} fill="black" />
              </a>
              <a
                href="#telegram"
                aria-label="Telegram"
                className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center bg-cyan-200 rounded-full border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-[1px] active:translate-y-0 transition-transform"
              >
                <FaTelegram size={25} fill="black" />
              </a>
              <a
                href="#bscscan"
                aria-label="BscScan"
                className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center bg-cyan-200 rounded-full border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-[1px] active:translate-y-0 transition-transform"
              >
                <Image src="/images/bscscan-black.png" alt="bscscan" width={25} height={25} />
              </a>
              <a
                href="#bscscan"
                aria-label="BscScan"
                className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center bg-cyan-200 rounded-full border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-[1px] active:translate-y-0 transition-transform"
              >
                <Image src="/images/firescreener-logo.png" alt="firescreener" width={25} height={25} />
              </a>
              <a
                href="#bscscan"
                aria-label="BscScan"
                className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center bg-cyan-200 rounded-full border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-[1px] active:translate-y-0 transition-transform"
              >
                <Image src="/images/dexscreener-black.png" alt="dexscreener" width={25} height={25} />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
