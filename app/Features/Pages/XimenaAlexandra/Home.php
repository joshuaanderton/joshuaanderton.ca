<?php

namespace App\Features\Pages\XimenaAlexandra;

use Inertia\Inertia;
use Blazervel\Feature\Action;

class Home extends Action
{
  public function handle()
  {
    return Inertia::render('Pages/XimenaAlexandra/Home');
  }
}