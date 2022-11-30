import React, { useEffect } from 'preact/compat'
import { Head } from '@inertiajs/inertia-react'
import { Image, Container, Icon } from '@blazervel-ui/components'

export default function () {

  useEffect(() => {
    document.body.style.overscrollBehaviorY = 'none'
  }, [])

  return (
    <div className="px-2 bg-gradient-to-b from-chrome-900 via-chrome-900 to-black">
      <Head title="Joshua Anderton (Senior Laravel Dev)" />

      <main>

        <Container>
          <div className="border-b-2 border-chrome-800 sm:border-none flex sm:block relative group py-6 sm:pt-0">
            
            <div className="hidden sm:block absolute inset-0 sm:relative z-0 max-w-full sm:max-w-[50%] overflow-hidden">
              <div className="absolute z-10 h-full w-full block inset-0 bg-gradient-to-t sm:bg-gradient-to-l opacity-60 from-theme-900"></div>
              <Image div src="images/headshot.png" className="h-0 pb-[150%] sm:rounded-bl-[4rem] -ml-12 -mt-12 sm:mt-0 sm:ml-0" />
            </div>

            <div className="opacity-40 hidden sm:block absolute top-[80%] right-0 max-w-[50%] overflow-hidden">
              <div className="absolute z-10 h-full w-full block inset-0 bg-gradient-to-t from-chrome-900 via-chrome-900"></div>
              <Image src="images/headshot.png" className="grayscale transition-all rotate-180 opacity-80 sm:rounded-bl-[4rem]" />
            </div>
            
            <Image div src="images/headshot.png" className="mr-6 min-w-0 flex-shrink-0 w-40 h-40 rounded-lg sm:hidden" style="background-size: 180%; background-position: -69px -10px" />

            <div className="max-w-sm sm:max-w-full sm:absolute relative z-10 sm:top-24 sm:left-1/2 sm:-ml-24 sm:pr-12 mt-8 sm:mt-0">
              <h1 className="sm:flex sm:flex-col sm:space-y-1.5 font-bold text-3xl sm:text-5xl md:text-6xl text-theme-200">
                <div>Fullstack </div>
                <div>Developer </div>
                <div className="whitespace-nowrap grayscale">in Vancouver 🇨🇦</div>
              </h1>
            </div>

          </div>

        </Container>

        <Container className="mt-8 sm:mt-0 relative">

          <div className="relative z-20 prose md:prose-xl prose-invert text-chrome-300">
          
            <div className="relative z-20">
              <h2 className="font-medium !mt-0">Teams I've worked with...</h2>
              <ul className="!pl-[.7em] !space-y-7">
                {[
                  { title: 'Fullstack Laravel Contractor (owner)', company: 'Polarize Technologies Inc.', tasks: 'Laravel, Livewire/AlpineJS, InertiaJS, Vue, React, TypeScript, TailwindCSS',  clients: [{name: 'Transistor.fm', href: 'https://transistor.fm'}, {name: 'EmailOctopus.com', href: 'https://emailoctopus.com'}, {name: 'New England Patriots', href: 'https://www.patriots.com'}]},
                  { title: 'Senior Fullstack Laravel Developer',   company: 'ScholarPath',                tasks: 'Laravel, Livewire/AlpineJS, TailwindCSS'},
                  { title: 'Head of Product',                      company: 'Userfeed by AdReform',       tasks: 'Marketing (Video/Social), Sales, Support, Ruby on Rails'},
                  { title: 'Frontend Developer',                   company: 'Glass Canvas',               tasks: 'React, Bootstrap CSS, Ruby on Rails, Google APIs'},
                  { title: 'Fullstack PHP & Digital Marketing',    company: 'PraiseCharts',               tasks: 'PHP, MySQL, WordPress, Silverstripe, AWS'},
                  { title: 'Fullstack PHP Developer',              company: 'Tryten',                     tasks: 'Magento, Custom, Developer and Digital Marketer'},
                  { title: 'WordPress Developer',                  company: 'Dazil',                      tasks: 'WordPress, Bootstrap CSS'},
                  { title: 'Podcast & Video Production (owner)',   company: 'Podmelon & Videomelon',      tasks: 'Podcast Production, Video Production, Graphic/Video FX', clients: [{name: 'The Good'},        {name: 'Made With Grit'}, {name: 'Building Astropad'},    {name: 'Failory Podcast'}]},
                  { title: 'Fullstack PHP Contractor (owner)',     company: 'Joshua Anderton Design',     tasks: 'WordPress, PHP, MySQL, Magento',                                  clients: [{name: 'Pinnacle Hotels'}, {name: 'Bazinga!'},       {name: 'Shirmar Construction'}, {name: 'Plazus'}]},
                ].map(item => (
                  <li key={item.title} className="space-y-2">
                    <div className="leading-none">{item.title}</div>
                    <div className="relative text-xs -mx-1 flex flex-wrap">
                      {item.tasks.split(',').map(task => (
                        <span className="rounded bg-chrome-800 font-mono text-theme-400 lowercase font-medium m-1 px-1 py-0.5">{task.trim()}</span>
                      ))}
                    </div>
                    <div className="text-base">
                      <span className="mr-1">at</span>
                      <span className="font-medium text-white">
                        {item.company}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              
              <h2 className="font-medium">Projects I've worked on...</h2>
              <ul className="!pl-[.75em] !space-y-7">
                {[
                  { title: 'Salestream.app',               description: 'Real-time sales and support via livestream',    stack: 'Laravel, InertiaJS, TailwindCSS',         href: 'https://salestream.app'},
                  { title: 'Meeps',                        description: 'Modern Membership Software',                    stack: 'Laravel, TailwindCSS, Livewire/AlpineJS', href: 'https://meeps.app',     disclaimer: () => <>Partnered with <a className="font-bold text-inherit hover:no-underline" target="_blank" href="https://twitter.com/mijustin">@mijustin</a></>},
                  { title: 'ProgBar by Meeps',             description: 'Share your goals and progress',                 stack: 'Laravel, TailwindCSS, Livewire/AlpineJS', href: 'https://progbar.co',    disclaimer: () => <>Partnered with <a className="font-bold text-inherit hover:no-underline" target="_blank" href="https://twitter.com/mijustin">@mijustin</a></>},
                  { title: 'Upscribe',                     description: 'Simple email marketing',                        stack: 'Laravel, TailwindCSS, Livewire/AlpineJS', href: 'https://upscribe.com',  disclaimer: () => <>Sold in 2020</>},
                  { title: 'Billingly',                    description: 'Dunning emails & SMS',                          stack: 'Laravel, TailwindCSS, Livewire/AlpineJS', href: 'https://billingly.com', disclaimer: () => <>Sold in 2019</>},
                  { title: 'Tiers',                        description: 'Pricing page builder and A/B testing for SaaS', stack: 'Laravel, TailwindCSS, Livewire/AlpineJS', href: null,                    disclaimer: () => <>Retired in 2019</>},
                  { title: 'Kids Learning App',            description: 'Coloring IOS app for kids',                     stack: 'IOS App',                                 href: null},
                  { title: '“Smelly Math” Kids Math Game', description: 'Kids math game and equation generator',         stack: 'IOS App',                                 href: null},
                ].map(item => (
                  <li key={item.title} className="space-y-2">

                    {(item.href || false) ? (
                      <a target="_blank" href={item.href} className="leading-none group font-medium no-underline">
                        <span className="text-white group-hover:text-theme-400 transition-colors duration-300 leading-none">{item.title}</span>
                        <Icon name="arrow-top-right-on-square" className="text-theme-800 transition-colors duration-300 group-hover:text-theme-400 inline relative -right-1 -top-1" sm />
                      </a>
                    ) : (
                      <span className="leading-none font-medium">{item.title}</span>
                    )}

                    <div className="!mt-1 leading-none text-base">{item.description}</div>

                    <div className="relative text-xs -mx-1 flex flex-wrap">
                      {item.stack.split(',').map(task => (
                        <span className="rounded bg-chrome-800 font-mono text-theme-400 lowercase font-medium m-1 px-1 py-0.5">{task.trim()}</span>
                      ))}
                    </div>
                    
                    {typeof item.disclaimer == 'function' && (
                      <div className="mt-2 font-bold text-chrome-600 text-xs">
                        <item.disclaimer />
                      </div>
                    )}

                  </li>
                ))}
                
              </ul>

            </div>
          </div>
        </Container>

      </main>

      <Container className="py-12">
        <div className="bg-chrome-900 rounded-2xl px-6 py-5 md:-mx-6 flex flex-col md:items-center md:flex-row space-y-3 md:space-y-0 md:space-x-8">
          <h4 className="font-medium text-lg text-white">Places you can find me:</h4>
          <a target="_blank" className="text-chrome-500 hover:text-chrome-50" href="https://twitter.com/joshuaanderton">Twitter</a>
          <a target="_blank" className="text-chrome-500 hover:text-chrome-50" href="https://www.linkedin.com/in/joshuaanderton">LinkedIn</a>
          <a target="_blank" className="text-chrome-500 hover:text-chrome-50" href="https://www.ramen.fm">Podcast</a>

          {/* <a target="_blank" className="text-chrome-500 hover:text-chrome-50" href="https://gettingtoramen.com/podcast">
            <h4 className="font-bold">Checked out the podcast?</h4>
            <Image src="https://images.transistor.fm/file/transistor/images/show/4088/medium_1567571248-artwork.jpg" className="rounded-lg w-24" />
            <p className="t">Listen in as I navigate the slow SaaS ramp of death while asking for help along the way from people like Justin Jackson, Matt Wensing, and others who have gone before me...</p>
          </a> */}
        </div>
      </Container>

    </div>
  )
}