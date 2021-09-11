<?php

namespace App\Http\Controllers;

use acidjazz\metapi\MetApi;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;

use App\Models\Task;

class TasksController extends Controller
{
    use MetApi;

    /**
     * Endpoint getting tasks list
     */
    public function index(Request $request)
    {
        if ($request->has('completed')) {
            $tasks = Task::where('completed', true)->get();
        } else {
            $tasks = Task::all();
        }

        return $this->render($tasks);
    }

    /**
     * Endpoint to find a specified task from ID
     */
    public function find(Request $request, $id)
    {
        $task = Task::where('id', $id)->first();

        return $this->render($task);
    }

    /**
     * Endpoint to search a specified task from title
     */
    public function search(Request $request, $title)
    {
        $task = Task::where('title', 'LIKE', '%'.$title.'%')->get();

        return $this->render($task);
    }

    /**
     * Endpoint to create a task
     */
    public function store(Request $request)
    {
        $this
          ->option('title', 'required|string')
          ->option('description', 'nullable')
          ->verify();

        $task = Task::create([
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'completed' => $request->input('completed'),
        ]);

        return $this->render([
            'success' => 'true',
            'message' => 'Task created'
        ]);
    }

    /**
     * Endpoint to update a task
     */
    public function update(Request $request, $id)
    {
        $this
          ->option('id', 'required')
          ->option('title', 'required|string')
          ->option('description', 'nullable')
          ->verify();

        $task = Task::where('id', $id)->update([
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'completed' => $request->input('completed'),
        ]);

        return $this->render([
            'success' => 'true',
            'message' => 'Task edited'
        ]);
    }

    /**
     * Endpoint to destroy a task
     */
    public function destroy($id)
    {
        $task = Task::find($id);
        $task->delete();

        return $this->render([
            'success' => 'true',
            'message' => 'Task deleted'
        ]);
    }

    /**
     * Error response
     */
    public function error(): Response|JsonResponse
    {
        return $this->render(['forced_error' => $forced_error]);
    }
}
