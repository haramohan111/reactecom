<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Models\User;
use Validator;
use Illuminate\Support\Facades\DB;

use Illuminate\Support\Facades\Hash;


class UserController extends Controller
{
    public function allUser(Request $request)
    {
       $q=$request->search;
       $user =User::where('name','like',"%$q%")->orderby("id","DESC")->paginate(15);
        // $user = User::when($r,function($query){
        // 	    $query->where('name','like',"%$r%");
        //       })->orderby("id","DESC")->paginate(7);
    	 return response($user,200);
    }

    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [ 
            'uname' => 'required|alpha|max:255', 
            'email' => 'required|email|unique:users', 
            'phone' => 'required|min:10|max:11|numeric'
        ],
        [
           'uname.required' => 'Name is required',
           'uname.alpha' => 'The name must only contain letters'
           
        ]);
        //dd($request->all());
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors(),'status'=>401]);            
        }else{
        //dd($request->all());exit;
        //$input = $request->all(); 
        $user = User::create(            [
            'name'=>$request->uname,
            'email'=>$request->email,
            'phone'=>$request->phone,
            'password'=>Hash::make('123123')
             ]); 
        if($user==true){
            return response()->json(['message'=>"User Added",'status'=>200]); 
        } else {
            return response()->json(['message'=>"User Not Added",'status'=>400]); 
        }
       }

    }

}
