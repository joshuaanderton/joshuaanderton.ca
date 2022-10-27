<?php

use Inertia\Inertia;
use Blazervel\Actions\Action;

return new class extends Action
{
  public function handle()
  {
    return Inertia::render('Pages/Polarize/Home');
  }
};