"use client";

import { useState, useEffect } from "react";
import { Meal } from "./domain";
import { fakeMeals } from "./fake";

export function useMeals() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMeals = async () => {
    try {
      // Simulate API call with delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real implementation, you would use fetch or axios here
      // const response = await fetch('https://api.example.com/meals');
      // const data = await response.json();
      
      setMeals(fakeMeals);
    } catch (err) {
      setError('Failed to fetch meals');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  return {
    meals,
    loading,
    error,
  };
}