<?php

namespace App\Events;

use App\Models\Todo;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class TodoCreated implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets;

    public Todo $todo;

    public function __construct(Todo $todo)
    {
        $this->todo = $todo;
    }

    public function broadcastWith()
    {
        return ['todo' => $this->todo];
    }

    public function broadcastOn()
    {
        return [new PresenceChannel('todos')];
    }
}