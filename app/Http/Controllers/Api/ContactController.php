<?php

namespace App\Http\Controllers\Api;

use App\Models\Contact;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'phoneNumber' => 'required',
            'message' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        $Contact = Contact::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'phoneNumber' => $request->input('phoneNumber'),
            'message' => $request->input('message'),
        ]);
        return response()->json(['Contact' => $Contact], 200);
    }

    public function index()
    {
        $Contact = Contact::get();
        return response()->json(['Contact' => $Contact], 200);
    }

    public function destroy($id)
    {
        $Contact = Contact::findOrFail($id);
        $Contact->delete();

        return response()->json(['message' => 'Contact deleted successfully'], 200);
    }
}
