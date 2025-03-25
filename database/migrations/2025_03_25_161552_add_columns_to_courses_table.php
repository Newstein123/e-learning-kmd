<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('courses', function (Blueprint $table) {
            $table->boolean('has_certificate')->default(false);
            $table->integer('level')->default(0)->comment('0: beginner, 1: intermediate, 2: advanced');
            $table->string('language')->default('English');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('courses', function (Blueprint $table) {
            $table->dropColumn('has_certificate');
            $table->dropColumn('level');
            $table->dropColumn('language');
        });
    }
};
