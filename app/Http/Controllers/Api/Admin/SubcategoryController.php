<?php

namespace App\Http\Controllers\Api\Admin;

use App\Models\Api\Admin\Subcategory;
use Illuminate\Http\Request;
use App\Models\Api\Admin\Category;
use App\Http\Controllers\Controller;
use Validator;
use Illuminate\Support\Facades\DB;

class SubcategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [ 
            'category_id' => 'required', 
            'subcategory_name' => 'required', 
            'priority' => 'required', 
        ]);
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
        //dd($request->all());exit;
        $input = $request->all(); 
        $user = Subcategory::create($input); 
        if($user==true){
            return response()->json(['message'=>"Subcategory Added"],200); 
        } else {
            return response()->json(['message'=>"Subcategory Not Added"],400); 
        }

    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Subcategory  $subcategory
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
       $q=$request->search;
       //$resp =Subcategory::where('subcategory_name','like',"%$q%")->orderby("id","DESC")->paginate(7);

       // $resp = Subcategory::With('getCategoryRelation')->where('subcategory','like',"%$q%")->orderby("id","DESC")->paginate(7);
       //dd($resp);
       $resp = Category::join('subcategories','subcategories.category_id','=','categories.id')->where('subcategories.subcategory_name','like',"%$q%")->orderby("categories.id","DESC")->select('categories.category_name','subcategories.*')->paginate(7);
       if($resp!==""){
       return response($resp,200);
       }
       else{
        return response("null",400);
       }
    }

    public function SubCatview($id)
    {

       $resp = Subcategory::where('category_id',$id)->get();
       //dd($resp);
       //if($resp!==""){
       return response($resp,200);
       // }
       // else{
       //  return response("null",400);
       // }
    }

    public function subcategoryviewv2(){
        
       $response=array('menu_result'=>array());
        //$menu=Category::select('id','category_name')->get();
        $menu=DB::select('select id,category_name from categories');

        $menu_array=array();

        foreach($menu as $menu_response){
            $menu_id=$menu_response->id;
            
            foreach($menu_response as $key=>$val){
                $menu_array[$key]=$val;
            }
           //print_r($menu_array);exit;
           $menu_array['submenu_list']=array();
          // $submenu=Subcategory::select('id','category_id','subcategory_name')->where('category_id',$menu_id)->get();
           
           //$submenu=DB::table('subcategories')->select('id,category_id,subcategory_name')->where('category_id',$menu_id);
           $submenu=DB::select("select id,category_id,subcategory_name from subcategories where category_id='$menu_id'");

           $submenu_array=array();
           foreach($submenu as $submenu_response){
            $submenu_id=$submenu_response->id;

               foreach ($submenu_response as $subkey => $subvalue) {
                     $submenu_array[$subkey]=$subvalue;
               }

               $submenu_array['listsubmenu_list']=array();

                //$listsubmenu=Listsubcategory::where('subcategory_id',$submenu_id)->get();
                $listsubmenu=DB::select("select id,category_id,subcategory_id,listsubcategory_name from list_subcategories where subcategory_id='$submenu_id'");
                $listsubmenu_array=array();

                foreach($listsubmenu as $listsubmenu_response){
                    $listsubmenu_id=$listsubmenu_response->id;

                    foreach ($listsubmenu as $listkey => $listvalue) {
                        $listsubmenu_array[$listkey]=$listvalue;
                    }
                    array_push($submenu_array['listsubmenu_list'], $listsubmenu_array);
                }
                array_push($menu_array['submenu_list'], $submenu_array);

           }  
           array_push($response['menu_result'], $menu_array);    
        }
        // print_r($menu_array);
        return response()->json($response);
        //return $response;
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Subcategory  $subcategory
     * @return \Illuminate\Http\Response
     */
    public function edit(Subcategory $subcategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Subcategory  $subcategory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Subcategory $subcategory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Subcategory  $subcategory
     * @return \Illuminate\Http\Response
     */
    public function destroy(Subcategory $subcategory)
    {
        //
    }
}
