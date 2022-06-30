<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="bg-gradient-to-b from-stone-900 to-stone-700">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title inertia>{{ config('app.name', 'Blazervel') }}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      // tailwind.config = {}
    </script>
  </head>
  <body class="font-sans antialiased text-stone-600">

    <main class="mx-auto w-full max-w-3xl">
      
      <section id="hero">
        <h1 class="text-stone-700 p-0 mx-0 whitespace-nowrap mt-2 mb-5 text-8xl font-bold">
          Joshua Anderton
        </h1>
        <img
          src="https://p.gcp.recordunion.com/electronic-press-kit-service/v1/photos/featured/7f7fdb90-4d2d-4001-9421-554a00db8e6b/F1440X720"
          class="block w-auto max-w-full" />
      </section>

      <section class="mt-14">
        <h3 class="text-5xl font-bold pb-5">
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

      <!-- <section class="mt-14">
        <h3 class="text-5xl font-bold pb-5">
          Images
        </h3>
        <div
          class="flex justify-between"
          style="flex-flow: row wrap;"
        ></div>
      </section> -->

      <section class="mt-14">
        <h3 class="text-5xl font-bold pb-5">
          Social Media
        </h3>

        <div class="space-y-2">
          <a href="https://instagram.com/joshuaanderton" class="group flex items-center space-x-2 text-red-500 align-baseline break-words cursor-pointer box-border">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
            </svg>
            <span><span class="text-red-700 group-hover:text-red-500">instagram.com/</span>joshuaanderton</span>
          </a>

          <a href="https://open.spotify.com/artist/1LCg6vLopkJxOdrGxHOtNn" class="group flex items-center space-x-2 text-red-500 align-baseline break-words cursor-pointer box-border">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-spotify" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"/>
            </svg>
            <span><span class="text-red-700 group-hover:text-red-500">spotify.com/</span>joshuaanderton</span>
          </a>
        </div>

      </section>

      <section class="mt-14">
        <h3 class="text-5xl font-bold pb-5">
          Contact
        </h3>
        <div class="flex flex-col">
          <label
            for="name"
            class="block p-0 mx-0 mt-0 mb-8 align-baseline cursor-default box-border"
            style="font-weight: bold;"
          >
            Name
            <input
              type="text"
              id="name"
              value=""
              class="block p-5 mt-2 w-full h-16 font-sans text-lg font-normal leading-none rounded border border-stone-600 bg-transparent border-solid cursor-text box-border" />
          </label>
          
          <label
            for="email"
            class="block p-0 mx-0 mt-0 mb-8 align-baseline cursor-default box-border"
            style="font-weight: bold;"
          >
            Email address
            <input
              type="email"
              id="email"
              value=""
              class="block p-5 mt-2 w-full h-16 font-sans text-lg font-normal leading-none rounded border border-stone-600 bg-transparent border-solid cursor-text box-border" />
          </label>
          
          <label
            for="message"
            class="block p-0 mx-0 mt-0 mb-8 align-baseline cursor-default box-border"
            style="font-weight: bold;"
          >
            Message
            <textarea
              type="text"
              id="message"
              class="block p-5 mt-2 w-full font-sans text-lg font-normal leading-none whitespace-pre-wrap break-words rounded border border-stone-600 bg-transparent border-solid cursor-text box-border"
              style="height: 279px;"></textarea>
          </label>
          <div class="self-end">
            <button type="button" class="py-3 px-12 text-black bg-stone-500 font-bold rounded-full">
              Send
            </button>
          </div>
        </div>
      </section>

    </main>

    <footer class="pt-14"></footer>

  </body>
</html>
