import React from 'preact/compat'
import { Image, Container, Icon } from '@blazervel-ui/components'

export default function () {
  return (
    <main className="font-mono bg-gradient-to-b from-chrome-jab-800 to-theme-jab-800 min-h-screen">

      <div className="bg-texture-pattern opacity-10 absolute inset-0 z-1"></div>

      <Container className="pb-14 space-y-14 relative z-10">
        
        <section>
          <div className="relative opacity-70 bg-chrome-jab-600 overflow-hidden">
            <div className="bg-texture-pattern absolute inset-0 z-10"></div>
            <div className="relative">
              <h1 className="font-mono lowercase relative z-1 text-chrome-jab-800 leading-none text-center -mb-2 -ml-1 sm:-mb-3 -mt-4 sm:-mt-6 p-0 mx-0 whitespace-nowrap text-[3.5rem] sm:text-[4.5rem] md:text-[5.6rem] font-bold">
                JoshuaAnderton
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
          <h3 className="text-chrome-jab-200 text-5xl font-bold pb-5">
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

          <div className="md:flex md:justify-around text-xs space-y-2 md:space-y-0">

            <a target="_blank" href="https://instagram.com/joshuaanderton" className="group flex items-center space-x-2 text-theme-jab-500 align-baseline break-words cursor-pointer box-border">
              <span className="rounded-full bg-chrome-jab-800 w-5 h-5 flex items-center justify-center">
                <svg className="text-theme-jab-800/50 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                </svg>
              </span>
              <span>
                <span className="text-theme-jab-700 group-hover:text-theme-jab-500 transition-colors duration-300">instagram.com/</span>joshuaanderton
              </span>
            </a>

            <a target="_blank" href="https://open.spotify.com/artist/1LCg6vLopkJxOdrGxHOtNn" className="group flex items-center space-x-2 text-theme-jab-500 align-baseline break-words cursor-pointer box-border">
              <svg className="text-chrome-jab-800 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path fill="currentColor" d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"/>
              </svg>
              <span>
                <span className="text-theme-jab-700 group-hover:text-theme-jab-500 transition-colors duration-300">spotify.com/</span>joshuaanderton
              </span>
            </a>

            <a target="_blank" href="mailto:hey@joshuaanderton.ca" className="group flex items-center space-x-2 text-theme-jab-500 align-baseline break-words cursor-pointer box-border">
              <svg className="text-chrome-jab-800 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM128 192c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32v9.3L264.7 255.6c-2.7 1.2-5.7 1.9-8.7 1.9s-5.9-.6-8.7-1.9L128 201.3V192zm149.9 92.7L384 236.5V320c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V236.5l106.1 48.3c6.9 3.1 14.3 4.8 21.9 4.8s15-1.6 21.9-4.8z"/>
              </svg>
              <span>
                <span className="text-theme-jab-700 group-hover:text-theme-jab-500 transition-colors duration-300">hey</span>@joshuaanderton.ca
              </span>
            </a>

          </div>

        </section>

      </Container>

    </main>
  )
}