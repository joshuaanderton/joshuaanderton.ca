import React from 'preact/compat'
import { Head } from '@inertiajs/inertia-react'
import { Image, Container } from '@blazervel/ui/components'

export default function () {
  return (
    <>
      <Head title="TIMOTHY PLOMO" />
      
      <main className="bg-gradient-to-b from-chrome-tp-800 to-theme-tp-800 min-h-screen">

        <div className="bg-texture-pattern opacity-10 absolute inset-0 z-1"></div>

        <Container className="pb-14 space-y-14 relative z-10">
          
          <section>
            <div className="relative opacity-70 bg-chrome-tp-600 overflow-hidden">
              <div className="bg-texture-pattern absolute inset-0 z-10"></div>
              <div className="relative">
                <h1 className="relative z-1 text-chrome-tp-800 leading-none text-center -mb-2 -ml-1 sm:-mb-3 -mt-4 sm:-mt-6 p-0 mx-0 whitespace-nowrap text-6xl sm:text-[5.3rem] md:text-[6.2rem] font-bold">
                  TIMOTHY PLOMO
                </h1>
              </div>
              <Image
                div
                src="images/headshot-timothy-plomo.png"
                className="block w-auto max-w-full grayscale opacity-80 rounded-sm h-0 pb-[55%]"
                style="background-position:center" />
            </div>
          </section>

          {/*
          <section className="mt-14">
            <h3 className="text-chrome-tp-200 text-5xl font-bold pb-5">
              Featured Tracks
            </h3>
            <iframe
              title="featTrackFrame"
              src="https://open.spotify.com/embed/track/45blYJjKBcME9l19S0B6C3"
              width="100%"
              height="80"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </section>
          */}

          <section className="mt-14">

            <div className="md:flex md:justify-around space-y-2 md:space-y-0">
              <a target="_blank" href="https://instagram.com/timothyplomo" className="group flex items-center space-x-2 text-theme-tp-500 align-baseline break-words cursor-pointer box-border">
                <i className="relative top-px fa-brands fa-instagram"></i>
                <span>
                  <span className="text-theme-tp-700 group-hover:text-theme-tp-500">instagram.com/</span>timothyplomo
                </span>
              </a>

              {/* <a target="_blank" href="https://open.spotify.com/artist/1LCg6vLopkJxOdrGxHOtNn" className="group flex items-center space-x-2 text-theme-tp-500 align-baseline break-words cursor-pointer box-border">
                <i className="relative top-px fa-brands fa-spotify"></i>
                <span>
                  <span className="text-theme-tp-700 group-hover:text-theme-tp-500">spotify.com/</span>timothyplomo
                </span>
              </a> */}

              {/* <a target="_blank" href="mailto:hey@timothyplomo.com" className="group flex items-center space-x-2 text-theme-tp-500 align-baseline break-words cursor-pointer box-border">
                <i className="relative top-px fa-solid fa-envelope"></i>
                <span>
                  <span className="text-theme-tp-700 group-hover:text-theme-tp-500">hey</span><i className="fa-light fa-at"></i>timothyplomo.com
                </span>
              </a> */}
            </div>

          </section>

        </Container>

      </main>
    </>
  )
}