<?php

use Blazervel\Feature\Action;
use Inertia\Inertia;

return new class extends Action
{
  public function handle()
  {
    return Inertia::render('Pages/JoshuaAnderton/Home');
  }
};