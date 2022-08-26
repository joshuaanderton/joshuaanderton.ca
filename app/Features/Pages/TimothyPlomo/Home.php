<?php

namespace App\Features\Pages\TimothyPlomo;

use Inertia\Inertia;
use Blazervel\Feature\Action;

class Home extends Action
{
  public function handle()
  {
    return Inertia::render('TimothyPlomo/Home');
  }
}