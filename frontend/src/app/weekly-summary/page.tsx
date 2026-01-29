'use client';

import PatientLayout from '@/components/Layout/PatientLayout';
import Card from '@/components/UI/Card';

/**
 * Weekly Summary Page
 *
 * This page is a placeholder for candidates to implement.
 * See FEATURE_REQUIREMENTS.md for the full specification.
 */

export default function WeeklySummaryPage() {
  return (
    <PatientLayout>
      <h1 className="page-title">Weekly Summary</h1>

      <Card>
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📊</div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Feature Coming Soon
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            This feature needs to be implemented. Check the FEATURE_REQUIREMENTS.md
            file for the full specification.
          </p>
          <div className="mt-6 p-4 bg-gray-50 rounded-lg text-left max-w-lg mx-auto">
            <h3 className="font-medium text-gray-700 mb-2">Requirements:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Backend: GET /api/patients/weekly-summary endpoint</li>
              <li>• Display daily calorie totals for 7 days</li>
              <li>• Show weight change for the week</li>
              <li>• Display logging streak (X/7 days)</li>
              <li>• Add date picker to select week</li>
              <li>• Download summary as JSON</li>
            </ul>
          </div>
        </div>
      </Card>
    </PatientLayout>
  );
}
