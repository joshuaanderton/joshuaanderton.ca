<?php

namespace App\Broadcasting;

class TodosChannel
{
    /**
     * Create a new channel instance.
     */
    public function __construct()
    {
        // ...
    }

    /**
     * Authenticate the user's access to the channel.
     */
    public function join(): array|bool
    {
        return true;
    }
}