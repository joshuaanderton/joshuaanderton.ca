<?php

use Inertia\Inertia;

return new class
{
    public function __invoke()
    {
        return Inertia::render('Pages/JoshuaAnderton/Home');
    }
};