<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Statistic extends Model
{
    protected $fillable = [
        'metric_name',
        'metric_key',
        'value',
        'date',
        'additional_data'
    ];
    
    protected $casts = [
        'value' => 'integer',
        'date' => 'date',
        'additional_data' => 'array'
    ];
    
    /**
     * Increment the value of a metric
     * 
     * @param string $key
     * @param int $amount
     * @return Statistic
     */
    public static function incrementMetric(string $key, int $amount = 1)
    {
        $metric = self::firstOrNew(['metric_key' => $key]);
        
        if (!$metric->exists) {
            $metric->metric_name = ucwords(str_replace('_', ' ', $key));
            $metric->value = 0;
        }
        
        $metric->value += $amount;
        $metric->save();
        
        return $metric;
    }
}
