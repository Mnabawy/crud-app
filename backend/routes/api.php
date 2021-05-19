<?php

use App\Http\Controllers\EmployeeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// all employees
Route::get('employees', [EmployeeController::class , 'getEmployee']);


// specific employee
Route::get('employee/{id}', [EmployeeController::class, 'getEmployeeById']);

// Add Employee
Route::post('addEmployee', [EmployeeController::class, 'addEmployee']);

// update the employee
Route::put('updateEmployee/{id}',[EmployeeController::class,'updateEmployee']);


// delete Employee
Route::delete('deleteEmployee/{id}', [EmployeeController::class,'deleteEmployee']);