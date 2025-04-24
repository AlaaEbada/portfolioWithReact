<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $projects = [
            [
                'title' => 'Modern Dashboard UI',
                'description' => 'A modern admin dashboard built with React, Tailwind CSS, and a powerful UI component library. This project includes features like advanced data visualization, responsive design, and a dark/light theme toggle.

The dashboard includes multiple interactive widgets, customizable layouts, and real-time data updates for an exceptional user experience.',
                'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop',
                'url' => 'https://example.com/dashboard',
                'github_url' => 'https://github.com/example/dashboard',
                'status' => 'completed',
                'order' => 1,
                'featured' => true,
            ],
            [
                'title' => 'E-Commerce Platform',
                'description' => 'A fully responsive e-commerce platform with product galleries, shopping cart functionality, and secure checkout process. This project was built using Laravel, React, and Stripe for payment processing.

This platform includes user authentication, product search, filtering, and comprehensive product management for administrators.',
                'image' => 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1470&auto=format&fit=crop',
                'url' => 'https://example.com/ecommerce',
                'github_url' => 'https://github.com/example/ecommerce',
                'status' => 'active',
                'order' => 2,
                'featured' => true,
            ],
            [
                'title' => 'Finance Tracking App',
                'description' => 'A personal finance tracking application that helps users manage their expenses, track income, and visualize spending habits. Built with Vue.js, Chart.js, and Firebase for real-time updates.

Features include budget planning, expense categorization, financial goal setting, and insightful spending analytics.',
                'image' => 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1470&auto=format&fit=crop',
                'url' => 'https://example.com/finance',
                'github_url' => 'https://github.com/example/finance',
                'status' => 'active',
                'order' => 3,
                'featured' => true,
            ],
            [
                'title' => 'Travel Blog Website',
                'description' => 'A travel blog with immersive photo galleries, interactive maps, and destination guides. The site features a clean, modern design with a focus on visual storytelling.

Built with Next.js, MongoDB, and AWS S3 for image storage, this project includes a custom CMS for content management.',
                'image' => 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1421&auto=format&fit=crop',
                'url' => 'https://example.com/travel',
                'github_url' => 'https://github.com/example/travel',
                'status' => 'on-hold',
                'order' => 4,
                'featured' => false,
            ],
            [
                'title' => 'Recipe Sharing Platform',
                'description' => 'A community-driven recipe sharing platform where users can discover, share, and save recipes. The application includes features like ingredient search, cooking timers, and meal planning tools.

Built with Laravel, Alpine.js, and Tailwind CSS, the site offers a seamless experience across devices.',
                'image' => 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=1426&auto=format&fit=crop',
                'url' => 'https://example.com/recipes',
                'github_url' => 'https://github.com/example/recipes',
                'status' => 'active',
                'order' => 5,
                'featured' => false,
            ],
            [
                'title' => 'Fitness Tracking App',
                'description' => 'A comprehensive fitness tracking application that helps users monitor workouts, track progress, and set health goals. The app includes workout libraries, progress charts, and personalized recommendations.

Developed with React Native for cross-platform functionality and Firebase for user authentication and data storage.',
                'image' => 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop',
                'url' => 'https://example.com/fitness',
                'github_url' => 'https://github.com/example/fitness',
                'status' => 'completed',
                'order' => 6,
                'featured' => true,
            ],
        ];
        
        foreach ($projects as $projectData) {
            Project::create($projectData);
        }
    }
}
