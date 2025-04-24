<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use App\Mail\ContactFormMail;
use Illuminate\Validation\ValidationException; // Add this line

class ContactController extends Controller
{
    /**
     * Display the contact form
     */
    public function index()
    {
        return Inertia::render('Contact');
    }

    /**
     * Handle the contact form submission
     */
    public function submit(Request $request)
    {
        try {
            // Validate the form data with custom error messages
            $validated = $request->validate([
                'name' => 'required|string|min:2|max:100',
                'email' => 'required|email|max:100',
                'subject' => 'required|string|min:5|max:120',
                'message' => 'required|string|min:10|max:2000',
            ]);
            // Send email
            Mail::to('mail@alaaebada.com')->send(new ContactFormMail($validated));

            // Redirect back with success message
            return redirect()->back()->with('success', 'Your message has been sent successfully. Thank you!');
        } catch (ValidationException $e) {
            return back()->withErrors($e->errors())->withInput();
        }
    }
}
