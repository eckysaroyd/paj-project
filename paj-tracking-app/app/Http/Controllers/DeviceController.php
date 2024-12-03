<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class DeviceController extends Controller
{
    public function getDevices(Request $request)
    {
        $token = $request->header('Authorization');
        
        // Forward the request to the external API with the authorization token
        $response = Http::withToken($token)->withHeaders([
            'Accept' => 'application/json'
        ])->get(env('PAJ_API_URL') . '/device');
        
        return response()->json($response->json(), $response->status());
    }
    
    public function getDeviceTracking($id, Request $request)
    {
        $token = $request->header('Authorization');
        $response = Http::withToken($token)->get(env('PAJ_API_URL') . "/trackerdata/{$id}/last_points", [
            'lastPoints' => 50
        ]);
        return $response->json();
    }
    // public function getDeviceTracking($id, Request $request)
    // {
    //     $token = $request->header('Authorization');
    //     $response = Http::withToken($token)->get(env('PAJ_API_URL') . "/trackerdata/{$id}/last_points", [
    //         'lastPoints' => 50
    //     ]);
    //     return $response->json();
    // }
}
