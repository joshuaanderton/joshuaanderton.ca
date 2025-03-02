import transistorLogo from './assets/transistor.svg?raw'
import headshot from './assets/headshot.png'
import clsx from 'clsx'

import applePodcastsIcon from './assets/apple-podcasts.svg?raw'
import blueskyIcon from './assets/bluesky.svg?raw'
import linkedinIcon from './assets/linkedin.svg?raw'
import xIcon from './assets/x.svg?raw'
// import andeRtonType from './assets/ande-rton.svg'

function App() {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      <div className="max-w-6xl">

        <div className="text-4xl lg:text-6xl leading-normal">
          <span className="font-serif italic text-[125%] text-black/20 leading-none block pb-4 sm:pb-0 sm:inline-block">Hola!</span> <span className="inline-block">I'm <span className="group hover:cursor-pointer"><img src={headshot} className="inline rounded-xl size-14 lg:size-18 relative -top-1.5 ring-4 ring-black/10 grayscale transition-all group-hover:grayscale-0" /> <span className="font-bold">Joshua Anderton</span></span>.</span>
          <br/>
          <span>Fullstack developer in Vancouver, </span>
          <br className="hidden md:block"/>
          <span>Marketing Engineer at</span> <a href="https://transistor.fm" target="_blank" className="block sm:inline-block sm:ml-3 group"><span className="size-14 lg:size-18 inline-flex rounded-xl group-hover:text-[#FBC75E] group-hover:bg-[#0B1824] transition-colors ring-4 ring-black/10 items-center justify-center [&_svg]:size-[70%] relative top-2" dangerouslySetInnerHTML={{ __html: transistorLogo }} /> Transistor.fm</a>
        </div>

        <nav className={clsx(
          'pt-24 flex gap-6',
          '[&_a]:size-14 md:[&_a]:size-18 [&_a]:flex [&_a]:items-center [&_a]:justify-center [&_a]:ring-2 [&_a]:ring-current [&_a]:text-center [&_a]:p-3 [&_a]:rounded-full [&_a]:transition-colors',
          '[&_svg]:size-[90%] [&_svg]:relative [&_svg]:top-0.5',
        )}>
          <a
            href="https://ramen.transistor.fm"
            target="_blank"
            className="hover:text-[#7223D8]"
            dangerouslySetInnerHTML={{ __html: applePodcastsIcon }}
          />

          <a
            href="https://twitter.com/joshuaanderton"
            target="_blank"
            className="hover:text-[#1D9BF0]"
            dangerouslySetInnerHTML={{ __html: xIcon }}
          />

          <a
            href="https://linkedin.com/in/joshuaanderton"
            target="_blank"
            className="hover:text-[#0B66C2]"
            dangerouslySetInnerHTML={{ __html: linkedinIcon }}
          />

          <a
            href="https://bsky.app/profile/joshuaanderton.bsky.social"
            target="_blank"
            className="hover:text-[#1283FE]"
            dangerouslySetInnerHTML={{ __html: blueskyIcon }}
          />

        </nav>

      </div>

    </div>
  )
}

export default App
