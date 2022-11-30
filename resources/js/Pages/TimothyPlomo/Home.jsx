import React from 'preact/compat'
import { Head } from '@inertiajs/inertia-react'
import { Image, Container } from '@blazervel-ui/components'

export default function () {
  return (
    <>
      <Head title="TIMOTHY PLOMO" />
      
      <main className="bg-gradient-to-b from-chrome-tp-800 pt-4 to-theme-tp-800 min-h-screen">

        <div className="bg-texture-pattern opacity-10 absolute inset-0 z-1"></div>

        <Container className="pb-14 space-y-14 relative z-10">
          
          <section>
            <div className="relative opacity-70 bg-chrome-tp-500 rounded-b-[500px] overflow-hidden">
              <div className="bg-texture-pattern absolute inset-0 z-10"></div>
              <div className="relative">
                <h1 className="font-mono relative z-1 text-chrome-tp-800 leading-none text-center -mb-2 -ml-1 sm:-mb-3 p-0 mx-0 whitespace-nowrap text-6xl sm:text-[5.3rem] md:text-[6.2rem] font-bold">
                  TIMOTHY PLOMO
                </h1>
              </div>
              <Image
                div
                src="images/headshot-timothy-plomo.png"
                className="block w-auto max-w-full grayscale opacity-80 h-0 pb-[90%]"
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
                <span className="rounded-full bg-chrome-tp-800 w-5 h-5 flex items-center justify-center">
                  <svg className="text-theme-tp-800/50 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                  </svg>
                </span>
                <span>
                  <span className="text-theme-tp-700 group-hover:text-theme-tp-500 transition-colors duration-300">instagram.com/</span>timothyplomo
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