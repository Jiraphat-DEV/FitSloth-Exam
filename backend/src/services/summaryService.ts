import { Op } from 'sequelize';
import { MealLog, Weight, FoodItem } from '../models';
import { WeeklySummaryData, DailyCalories } from '@fitsloth/shared';

/**
 * Summary Service
 * TODO: Implement weekly summary calculations for the feature implementation task
 */

/**
 * Get weekly summary for a patient
 * @param userId - User ID
 * @param startDate - Start date of the week (YYYY-MM-DD)
 * @returns Weekly summary data
 */
export const getWeeklySummary = async (
  userId: number,
  startDate: string
): Promise<WeeklySummaryData> => {
  // TODO: Implement weekly summary logic
  // 1. Calculate end date (startDate + 6 days = 7 days total)
  // 2. Query meal_logs for the date range
  // 3. Calculate daily calories for each of the 7 days
  // 4. Query weights for the date range
  // 5. Calculate weight change (end - start)
  // 6. Calculate logging stats (days with meals, total meals, streak)
  // 7. Return WeeklySummaryData object
  throw new Error('Not implemented');
};

/**
 * Validate date format (YYYY-MM-DD)
 */
export const isValidDateFormat = (date: string): boolean => {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(date)) return false;

  const parsed = new Date(date);
  return !isNaN(parsed.getTime());
};
