<?php

namespace App\Actions\Pages\XimenaAlexandra;

use Inertia\Inertia;
use Blazervel\Actions\Action;

class Home extends Action
{
  public function handle()
  {
    return Inertia::render('Pages/XimenaAlexandra/Home');
  }
}