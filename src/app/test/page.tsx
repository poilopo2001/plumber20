'use client';

import { useEffect, useState } from 'react';

export default function TestPage() {
  const [testResult, setTestResult] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const runTest = async () => {
      try {
        const response = await fetch('/api/test');
        const data = await response.json();
        setTestResult(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    runTest();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
          <h1 className="text-2xl font-bold mb-4">Test en cours...</h1>
          <p>Vérification des systèmes...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
          <h1 className="text-2xl font-bold mb-4 text-red-600">Erreur</h1>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4">Résultats du Test</h1>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Status</h2>
            <p className={testResult?.success ? 'text-green-600' : 'text-red-600'}>
              {testResult?.success ? 'Succès' : 'Échec'}
            </p>
            {!testResult?.success && testResult?.error && (
              <div className="mt-2 p-4 bg-red-50 text-red-700 rounded">
                <p className="font-semibold">Erreur:</p>
                <p>{testResult.error}</p>
                {testResult.errorDetails && (
                  <pre className="mt-2 text-sm overflow-x-auto">
                    {JSON.stringify(testResult.errorDetails, null, 2)}
                  </pre>
                )}
              </div>
            )}
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Contenu Généré</h2>
            <div className="bg-gray-50 p-4 rounded">
              <p>{testResult?.generatedContent}</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Document MongoDB</h2>
            <pre className="bg-gray-50 p-4 rounded overflow-x-auto">
              {JSON.stringify(testResult?.savedDocument, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
