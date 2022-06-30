<?php

$host = parse_url(env('APP_URL'))['host'];

return [
  'music' => "music.{$host}",
];