<?php

namespace App\Actions\Pages\TimothyPlomo;

use Inertia\Inertia;
use Blazervel\Actions\Action;

class Home extends Action
{
  public function handle()
  {
    return Inertia::render('Pages/TimothyPlomo/Home');
  }
}