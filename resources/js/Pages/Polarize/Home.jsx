import React from 'preact/compat'
import { Image, Container } from '@blazervel/components'

export default function () {
  return (
    <>
      <Head title="Polarize Technologies" />

      <main>

        <Container>
          <div className="relative group -mx-6 px-6 pb-6 pt-64 sm:pt-72 md:pt-0 md:-mx-12">
            <div className="absolute inset-0 md:relative z-0 max-w-full md:max-w-[50%] overflow-hidden">
              <div class="bg-texture-pattern opacity-40 absolute inset-0 z-10"></div>
              <div className="absolute z-10 h-full w-full block inset-0 bg-gradient-to-t md:bg-gradient-to-l opacity-50 from-chrome-900"></div>
              <Image div src="images/headshot.png" className="opacity-70 h-0 pb-[150%] md:rounded-bl-[4rem] -ml-12 -mt-12 md:mt-0 md:ml-0" />
            </div>
            <div className="opacity-40 hidden md:block absolute top-[80%] right-0 max-w-[50%] overflow-hidden">
              <div class="bg-texture-pattern opacity-40 absolute inset-0 z-10"></div>
              <div className="absolute z-10 h-full w-full block inset-0 bg-gradient-to-t from-chrome-900 via-chrome-900"></div>
              <Image src="images/headshot.png" className="grayscale transition-all rotate-180 opacity-80 md:rounded-bl-[4rem]" />
            </div>
            <div className="max-w-sm sm:max-w-xl md:max-w-full md:absolute relative z-10 md:top-24 md:left-1/2 md:-ml-24 md:pr-12">
              <h1 className="md:flex md:flex-col font-bold text-3xl sm:text-5xl md:text-6xl text-chrome-100 leading-tight md:leading-[4.5rem]">
                <span>Fullstack </span>
                <span>web developer </span>
                <span className="whitespace-nowrap">in Vancouver 🇨🇦</span>
              </h1>
            </div>
          </div>
        </Container>

        <Container>
          <article className="relative z-20 mt-12 md:mt-24 prose md:prose-xl prose-invert text-chrome-300">

            <h2 className="font-medium">Teams I’ve worked with</h2>
            <ul>

              <li>
                <div>
                  Fullstack PHP Contractor (Laravel, Vue, React, Livewire)
                </div>
                <div className="text-base">
                  <span className="mr-1">at</span>
                  <span className="font-medium text-white">Polarize Technologies Inc.</span>
                </div>
              </li>

              <li>
                <div>
                  Senior TALL Stack Developer
                </div>
                <div className="text-base">
                  <span className="mr-1">at</span>
                  <span className="font-medium text-white">ScholarPath</span>
                </div>
              </li>

              <li>
                <div>
                  Head of Product &amp; Fullstack Ruby on Rails Developer (via <a className="font-normal text-inherit hover:no-underline" target="_blank" href="https://trailblazer.to">Trailblazer.to</a>)
                </div>
                <div className="text-base">
                  <span className="mr-1">at</span>
                  <span className="font-medium text-white">Userfeed</span> by <span className="font-medium text-white">AdReform</span>
                </div>
              </li>

              <li>
                <div>
                  Fullstack Ruby on Rails Developer
                </div>
                <div className="text-base">
                  <span className="mr-1">at</span>
                  <span className="font-medium text-white">Glass Canvas</span>
                </div>
              </li>

              <li>
                <div>
                  Fullstack PHP (Silverstripe, AWS, etc) Developer
                </div>
                <div className="text-base">
                  <span className="mr-1">at</span>
                  <span className="font-medium text-white">PraiseCharts</span>
                </div>
              </li>

              <li>
                <div>
                  Fullstack PHP (Magento, Custom, etc) Developer and Digital Marketer
                </div>
                <div className="text-base">
                  <span className="mr-1">at</span>
                  <span className="font-medium text-white">Tryten</span>
                </div>
              </li>

              <li>
                <div>
                  WordPress Developer
                </div>
                <div className="text-base">
                  <span className="mr-1">at</span>
                  <span className="font-medium text-white">Dazil</span>
                </div>
              </li>

              <li>
                <div>
                  Fullstack PHP Developer
                </div>
                <div className="text-base">
                  <span className="mr-1">at</span>
                  <span className="font-medium text-white">Joshua Anderton Design</span> (clients: <span className="font-medium text-white">Pinnacle Hotels</span>, <span className="font-medium text-white">Bazinga!</span>, <span className="font-medium text-white">Shirmar Construction</span>, <span className="font-medium text-white">Plazus</span>, …)
                </div>
              </li>

            </ul>
            
            <h2 className="font-medium">Projects I’ve worked on</h2>
            <ul>
              <li><a target="_blank" href="https://meeps.app" className="font-medium text-white no-underline hover:underline">Meeps</a> - Public member directories <span className="text-chrome-600">(partnered with <a className="font-normal text-inherit hover:no-underline" target="_blank" href="https://twitter.com/mijustin">@mijustin</a>)</span></li>
              <li><a target="_blank" href="https://progbar.co" className="font-medium text-white no-underline hover:underline">ProgBar by Meeps</a> - Share your goals and progress <span className="text-chrome-600">(partnered with <a className="font-normal text-inherit hover:no-underline" target="_blank" href="https://twitter.com/mijustin">@mijustin</a>)</span></li>
              <li><a target="_blank" href="https://podmelon.com" className="font-medium text-white no-underline hover:underline">Podmelon</a> - Quality podcast editing</li>
              <li><a target="_blank" href="https://upscribe.com" className="font-medium text-white no-underline hover:underline">Upscribe</a> - Email marketing solution <span className="text-chrome-600">(sold)</span></li>
              <li><a target="_blank" href="https://billingly.com" className="font-medium text-white no-underline hover:underline">Billingly</a> - Dunning emails &amp; SMS <span className="text-chrome-600">(sold)</span></li>
              <li><span className="font-medium text-white">Tiers</span> - Pricing page builder and A/B testing for SaaS <span className="text-chrome-600">(retired)</span></li>
              <li><span className="font-medium text-white">Kids Learning App</span> - Built in Objective C &amp; Swift for iOS</li>
              <li><span className="font-medium text-white">“Smelly Math” Math Game</span> - Built in Objective C for iOS</li>
            </ul>

            <div className="text-base flex items-center md:justify-end space-x-3 mt-12 py-5 border-t border-chrome-800">
              <a target="_blank" className="text-chrome-500 hover:text-chrome-50" href="https://gettingtoramen.com">Newsletter</a>
              <span>•</span>
              <a target="_blank" className="text-chrome-500 hover:text-chrome-50" href="https://gettingtoramen.com/podcast">Podcast</a>
              <span>•</span>
              <a target="_blank" className="text-chrome-500 hover:text-chrome-50" href="https://twitter.com/joshuaanderton">Twitter</a>
            </div>

          </article>
        </Container>

      </main>
    </>
  )
}