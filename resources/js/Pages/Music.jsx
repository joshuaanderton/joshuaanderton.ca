import React from 'preact/compat'

export default function () {
  return (
    <main className="mx-auto w-full max-w-3xl">
      
      <section>
        <h1 className="text-stone-700 p-0 mx-0 whitespace-nowrap mt-2 mb-5 text-8xl font-bold">
          Joshua Anderton
        </h1>
        <img
          src="https://p.gcp.recordunion.com/electronic-press-kit-service/v1/photos/featured/7f7fdb90-4d2d-4001-9421-554a00db8e6b/F1440X720"
          className="block w-auto max-w-full" />
      </section>

      <section className="mt-14">
        <h3 className="text-5xl font-bold pb-5">
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

      <section className="mt-14">
        <h3 className="text-5xl font-bold pb-5">
          Social Media
        </h3>

        <div className="space-y-2">
          <a target="_blank" href="https://instagram.com/joshuaanderton" className="group flex items-center space-x-2 text-red-500 align-baseline break-words cursor-pointer box-border">
            <i class="fa-brands fa-instagram"></i>
            <span><span className="text-red-700 group-hover:text-red-500">instagram.com/</span>joshuaanderton</span>
          </a>

          <a target="_blank" href="https://open.spotify.com/artist/1LCg6vLopkJxOdrGxHOtNn" className="group flex items-center space-x-2 text-red-500 align-baseline break-words cursor-pointer box-border">
            <i class="fa-brands fa-spotify"></i>
            <span><span className="text-red-700 group-hover:text-red-500">spotify.com/</span>joshuaanderton</span>
          </a>

          <a target="_blank" href="mailto:hey@joshuaanderton.ca" className="group flex items-center space-x-2 text-red-500 align-baseline break-words cursor-pointer box-border">
            <i className="fas fa-envelope"></i>
            <span><span className="text-red-700 group-hover:text-red-500">hey</span><i className="fa-light fa-at"></i>joshuaanderton.ca</span>
          </a>
        </div>

      </section>

      <div className="pt-14"></div>

    </main>
  )
}