import React from 'preact/compat'
import { Image, Container } from '@blazervel/components'

export default function () {
  return (
    <main className="bg-gradient-to-b from-chrome-800 to-theme-800 min-h-screen">

      <div className="bg-texture-pattern opacity-10 absolute inset-0 z-1"></div>

      {/*
      <div className="flex items-center justify-center h-[40rem] relative overflow-hidden">
        <div className="absolute inset-0 z-0 blur-lg" style="background-image: url('images/headshot2-texture.jpg'); background-size: 10rem"></div>
        <div className="bg-texture-pattern absolute inset-0 z-10"></div>
        <Container className="relative z-20">
          <div className="flex flex-col items-center">
            <h1 className="text-chrome-700 p-0 mx-0 whitespace-nowrap mt-2 mb-5 text-8xl font-bold">
              Joshua Anderton
            </h1>
            <div className="bg-white bg-opacity-30 px-4 py-12">
              <Image src="images/headshot2.jpg" className="opacity-80" />
            </div>
          </div>
        </Container>
      </div>
      */}

      <Container className="pb-14 space-y-14 relative z-10">
        
        <section>
          <div className="relative opacity-70 bg-chrome-600 overflow-hidden">
            <div className="bg-texture-pattern absolute inset-0 z-10"></div>
            <div className="relative">
              <h1 className="relative z-1 text-chrome-800 leading-none text-center -mb-2 -ml-1 sm:-mb-3 -mt-4 sm:-mt-6 p-0 mx-0 whitespace-nowrap text-6xl sm:text-[5.3rem] md:text-[6.2rem] font-bold">
                Joshua Anderton
              </h1>
            </div>
            <Image
              div
              src="images/denmark.jpg"
              className="block w-auto max-w-full opacity-50 rounded-sm h-0 pb-[55%]" />
          </div>
        </section>

        {/*
        <section className="mt-14">
          <h3 className="text-chrome-200 text-5xl font-bold pb-5">
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
            <a target="_blank" href="https://instagram.com/joshuaanderton" className="group flex items-center space-x-2 text-theme-500 align-baseline break-words cursor-pointer box-border">
              <i className="relative top-px fa-brands fa-instagram"></i>
              <span>
                <span className="text-theme-700 group-hover:text-theme-500">instagram.com/</span>joshuaanderton
              </span>
            </a>

            <a target="_blank" href="https://open.spotify.com/artist/1LCg6vLopkJxOdrGxHOtNn" className="group flex items-center space-x-2 text-theme-500 align-baseline break-words cursor-pointer box-border">
              <i className="relative top-px fa-brands fa-spotify"></i>
              <span>
                <span className="text-theme-700 group-hover:text-theme-500">spotify.com/</span>joshuaanderton
              </span>
            </a>

            <a target="_blank" href="mailto:hey@joshuaanderton.ca" className="group flex items-center space-x-2 text-theme-500 align-baseline break-words cursor-pointer box-border">
              <i className="relative top-px fa-solid fa-envelope"></i>
              <span>
                <span className="text-theme-700 group-hover:text-theme-500">hey</span><i className="fa-light fa-at"></i>joshuaanderton.ca
              </span>
            </a>
          </div>

        </section>

      </Container>

    </main>
  )
}