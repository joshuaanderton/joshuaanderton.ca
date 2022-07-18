<?php

use Inertia\Inertia;
use Blazervel\Feature\Action;

return new class extends Action
{
  public function handle()
  {
    return Inertia::render('Home');
  }
};