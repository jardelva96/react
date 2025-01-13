<?php

use App\Http\Controllers\DisciplinaController;

Route::get('/disciplinas', [DisciplinaController::class, 'index']);
Route::post('/disciplinas', [DisciplinaController::class, 'store']);
Route::put('/disciplinas/{id}', [DisciplinaController::class, 'update']);
Route::delete('/disciplinas/{id}', [DisciplinaController::class, 'destroy']);
Route::put('/disciplinas/{id}/nota', [DisciplinaController::class, 'addNota']);
