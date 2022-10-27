import React from 'preact/compat'
import { Head } from '@inertiajs/inertia-react'
import { Image, Container } from '@blazervel/ui/components'

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

            <h2 className="font-medium">Teams I've worked with</h2>
            <ul>
              {[
                { title: 'Fullstack Laravel Contractor (owner)', company: 'Polarize Technologies Inc.', tasks: 'Laravel, Livewire/AlpineJS, InertiaJS, Vue, React, TypeScript, TailwindCSS',  clients: [{name: 'Transistor.fm', href: 'https://transistor.fm'}, {name: 'EmailOctopus.com', href: 'https://emailoctopus.com'}, {name: 'New England Patriots', href: 'https://www.patriots.com'}]},
                { title: 'Senior Fullstack Laravel Developer',   company: 'ScholarPath',                tasks: 'Laravel, Livewire/AlpineJS, TailwindCSS'},
                { title: 'Head of Product',                      company: 'Userfeed by AdReform',       tasks: 'Marketing (Video, Social, etc.), Sales, Support, Fullstack Ruby on Rails Development'},
                { title: 'Frontend Developer',                   company: 'Glass Canvas',               tasks: 'React, Bootstrap CSS, Fullstack Ruby on Rails, Google APIs'},
                { title: 'Fullstack PHP & Digital Marketing',    company: 'PraiseCharts',               tasks: 'PHP, MySQL, WordPress, Silverstripe, AWS) '},
                { title: 'Fullstack PHP Developer',              company: 'Tryten',                     tasks: '(Magento, Custom, etc) Developer and Digital Marketer'},
                { title: 'WordPress Developer',                  company: 'Dazil',                      tasks: 'WordPress, Bootstrap CSS'},
                { title: 'Podcast & Video Production (owner)',   company: 'Podmelon & Videomelon',      tasks: 'Podcast Production, Video Production, Graphic & Video FX Design', clients: [{name: 'The Good'},        {name: 'Made With Grit'}, {name: 'Building Astropad'},    {name: 'Failory Podcast'}]},
                { title: 'Fullstack PHP Contractor (owner)',     company: 'Joshua Anderton Design',     tasks: 'WordPress, PHP, MySQL, Magento',                                  clients: [{name: 'Pinnacle Hotels'}, {name: 'Bazinga!'},       {name: 'Shirmar Construction'}, {name: 'Plazus'}]},
              ].map(item => (
                <li key={item.title}>
                  <div>
                    {item.title} ({item.skills})
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
            
            <h2 className="font-medium">Projects I've worked on</h2>
            <ul>
              {[
                { title: 'Salestream.app',               description: '', stack: 'Laravel, InertiaJS, TailwindCSS',         href: 'https://salestream.app'},
                { title: 'Meeps',                        description: '', stack: 'Laravel, TailwindCSS, Livewire/AlpineJS', href: 'https://progbar.co',    disclaimer: () => <>partnered with <a className="font-normal text-inherit hover:no-underline" target="_blank" href="https://twitter.com/mijustin">@mijustin</a></>},
                { title: 'ProgBar by Meeps',             description: '', stack: 'Laravel, TailwindCSS, Livewire/AlpineJS', href: 'https://twitter.com',   disclaimer: () => <>partnered with <a className="font-normal text-inherit hover:no-underline" target="_blank" href="https://twitter.com/mijustin">@mijustin</a></>},
                { title: 'Upscribe',                     description: '', stack: 'Laravel, TailwindCSS, Livewire/AlpineJS', href: 'https://upscribe.com',  disclaimer: () => <>sold</>},
                { title: 'Billingly',                    description: '', stack: 'Laravel, TailwindCSS, Livewire/AlpineJS', href: 'https://billingly.com', disclaimer: () => <>sold</>},
                { title: 'Tiers',                        description: '', stack: 'Laravel, TailwindCSS, Livewire/AlpineJS', href: null,                    disclaimer: () => <>retired</>},
                { title: 'Kids Learning App',            description: '', stack: 'IOS App',                                 href: null},
                { title: '“Smelly Math” Kids Math Game', description: '', stack: 'IOS App',                                 href: null},
              ].map(item => (
                <li key={item.title}>

                  {item.href ? (
                    <a target="_blank" href={item.href} className="font-medium text-white no-underline hover:underline">
                      {item.title}
                    </a>
                  ) : (
                    <span>{item.title}</span>
                  )}

                  {item.description}
                  
                  {item.disclaimer || false && (
                    <span className="text-chrome-600">(<item.disclaimer />)</span>
                  )}

                </li>
              ))}
              
              
              Share your goals and progress <span className="text-chrome-600">(partnered with <a className="font-normal text-inherit hover:no-underline" target="_blank" href="https://twitter.com/mijustin">@mijustin</a>)</span>
              
              Quality podcast editing
              
              Email marketing solution <span className="text-chrome-600">(sold)</span>
              
              Dunning emails &amp; SMS <span className="text-chrome-600">(sold)</span>
              
              Pricing page builder and A/B testing for SaaS <span className="text-chrome-600">(retired)</span>
              
              Built in Objective C &amp; Swift for iOS
              
              Built in Objective C for iOS
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