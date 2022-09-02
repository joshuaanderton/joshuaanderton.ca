import React from 'preact/compat'
import { Head } from '@appModules/@inertiajs/inertia-react'
import { Image, Container } from '@blazervel/components'

export default function () {
  return (
    <>
      <Head title="Ximena Alexandra" />

      <main className="bg-gradient-to-b from-chrome-xa-800 to-theme-xa-800 min-h-screen">

        <div className="bg-texture-pattern opacity-10 absolute inset-0 z-1"></div>

        <Container className="pb-14 space-y-14 relative z-10">
          
          <section>
            <div className="relative opacity-70 bg-chrome-xa-600 overflow-hidden">
              <div className="bg-texture-pattern absolute inset-0 z-10"></div>
              <div className="relative">
                <h1 className="relative z-1 text-chrome-xa-800 leading-none text-center -mb-2 -ml-1 sm:-mb-3 -mt-4 sm:-mt-6 p-0 mx-0 whitespace-nowrap text-6xl sm:text-[5.3rem] md:text-[6.2rem] font-bold">
                  ximena alexandra
                </h1>
              </div>
            </div>
          </section>

        </Container>

      </main>
    </>
  )
}