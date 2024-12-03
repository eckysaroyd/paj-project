<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class AuthController extends Controller
{
    public function login()
    {
        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'Accept' => 'application/json',
        ])->post(env('PAJ_API_URL') . '/v1/login', [
            'email' => env('PAJ_API_EMAIL'),
            'password' => env('PAJ_API_PASSWORD'),
        ]);

        // Log the response for debugging
        \Log::info('API Response:', ['status' => $response->status(), 'body' => $response->body()]);

        // Check if the response is successful
        if ($response->successful()) {
            // Look for the correct 'token' key inside the 'success' array
            $data = $response->json();
            if (isset($data['success']['token'])) {
                return response()->json(['token' => $data['success']['token']]);
            } else {
                return response()->json(['error' => 'Token not found in response'], 500);
            }
        } else {
            // Return error if authentication failed
            return response()->json(['error' => 'Authentication failed'], 401);
        }
    }
}
