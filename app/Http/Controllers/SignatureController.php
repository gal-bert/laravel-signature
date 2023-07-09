<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SignatureController extends Controller
{
    public function index() {
        return view('signature');
    }

    public function preview(Request $request) {


        $data = [
            'employeeSignature' => $request->employeeSignature,
            'customerSignature' => $request->customerSignature
        ];

        return view('preview')->with($data);
    }
}
