<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    /**
     * Display a listing of the projects.
     */
    public function index()
    {
        $projects = Project::orderBy('order', 'asc')
            ->get();
            
        return Inertia::render('Projects/Index', [
            'projects' => $projects
        ]);
    }
    
    /**
     * Display the specified project.
     */
    public function show($id)
    {
        // Convert potential string ID to integer to ensure proper lookup
        $projectId = (int) $id;
        
        // Find the project with more detailed error handling
        try {
            $project = Project::findOrFail($projectId);
            
            // Return the project data to the view
            return Inertia::render('Projects/Show', [
                'project' => $project,
                'debug' => [
                    'id' => $id,
                    'projectId' => $projectId,
                    'exists' => true
                ]
            ]);
        } catch (\Exception $e) {
            // If project not found, return with error information
            return Inertia::render('Projects/Show', [
                'project' => null,
                'error' => 'Project not found',
                'debug' => [
                    'id' => $id,
                    'projectId' => $projectId,
                    'message' => $e->getMessage(),
                    'exists' => false
                ]
            ]);
        }
    }
}
