<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title inertia>{{ config('app.name', 'Blazervel') }}</title>
    @blazervelHead
  </head>
  <body class="font-sans antialiased">
    @blazervel
  </body>
</html>
