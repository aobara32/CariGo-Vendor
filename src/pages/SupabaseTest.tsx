import React, { useState } from 'react';
import { supabaseService } from '../services/supabaseService';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Alert, AlertDescription } from '../components/ui/alert';
import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import MerchantLayout from '../layouts/MerchantLayout';

const SupabaseTestPage = () => {
  const [testResults, setTestResults] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

      const runTests = async () => {
        setIsLoading(true);
        setTestResults(null);

        try {
          // 環境変数の状態を確認
          const envStatus = {
            supabaseUrl: !!import.meta.env.VITE_SUPABASE_URL,
            supabaseAnonKey: !!import.meta.env.VITE_SUPABASE_ANON_KEY,
            supabaseServiceRoleKey: !!import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY,
            apiBaseUrl: !!import.meta.env.VITE_API_BASE_URL
          };

          console.log('Environment variables status:', envStatus);
          console.log('Service Role Key (first 10 chars):', import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY?.substring(0, 10));
          console.log('Supabase URL:', import.meta.env.VITE_SUPABASE_URL);

          // 基本接続テスト
          const connectionTest = await supabaseService.testConnection();
          
          // vendor_applications INSERTテスト
          const insertTest = await supabaseService.testVendorApplicationInsert();

          // ストレージアップロードテスト
          const storageTest = await supabaseService.testStorageUpload();

          // 実際のフォーム送信テスト
          const formTest = await testActualFormSubmission();

          setTestResults({
            envStatus,
            connection: connectionTest,
            insert: insertTest,
            storage: storageTest,
            formTest: formTest
          });
        } catch (error) {
          setTestResults({
            error: (error as Error).message
          });
        } finally {
          setIsLoading(false);
        }
      };

      const testActualFormSubmission = async () => {
        try {
          console.log('Testing actual form submission...');
          
          const testData = {
            firstName: 'Test',
            lastName: 'User',
            email: 'test@example.com',
            phone: '+1234567890',
            businessName: 'Test Business',
            businessType: 'individual',
            registrationNumber: null,
            address: null,
            description: 'Test application',
            productCategory: 'test',
            averageSales: 0,
            freeNote1: '',
            freeNote2: '',
            freeNote3: ''
          };

          const result = await supabaseService.saveVendorApplication(testData as any);
          console.log('Form submission result:', result);
          
          return {
            success: result.success,
            error: result.error,
            method: 'Direct Supabase'
          };
        } catch (error) {
          console.error('Form submission test failed:', error);
          return {
            success: false,
            error: (error as Error).message,
            method: 'Direct Supabase'
          };
        }
      };

  const getStatusIcon = (success: boolean) => {
    return success ? (
      <CheckCircle2 className="w-5 h-5 text-green-500" />
    ) : (
      <XCircle className="w-5 h-5 text-red-500" />
    );
  };

  const getStatusColor = (success: boolean) => {
    return success ? 'text-green-600' : 'text-red-600';
  };

  return (
    <MerchantLayout>
      <div className="container mx-auto p-6 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="w-6 h-6" />
            Supabase RLS Test Page
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="text-muted-foreground mb-4">
              This page helps diagnose Row Level Security (RLS) issues with Supabase.
              Click the button below to run tests and see detailed results.
            </p>
            <Button onClick={runTests} disabled={isLoading}>
              {isLoading ? 'Running Tests...' : 'Run Tests'}
            </Button>
          </div>

          {testResults && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Test Results</h3>
              
              {testResults.error && (
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Test execution failed: {testResults.error}
                  </AlertDescription>
                </Alert>
              )}

              {testResults.envStatus && (
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Environment Variables Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center">
                          {testResults.envStatus.supabaseUrl ? '✓' : '✗'}
                        </span>
                        <span>VITE_SUPABASE_URL: {testResults.envStatus.supabaseUrl ? 'Set' : 'Not Set'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center">
                          {testResults.envStatus.supabaseAnonKey ? '✓' : '✗'}
                        </span>
                        <span>VITE_SUPABASE_ANON_KEY: {testResults.envStatus.supabaseAnonKey ? 'Set' : 'Not Set'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center">
                          {testResults.envStatus.supabaseServiceRoleKey ? '✓' : '✗'}
                        </span>
                        <span>VITE_SUPABASE_SERVICE_ROLE_KEY: {testResults.envStatus.supabaseServiceRoleKey ? 'Set' : 'Not Set'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center">
                          {testResults.envStatus.apiBaseUrl ? '✓' : '✗'}
                        </span>
                        <span>VITE_API_BASE_URL: {testResults.envStatus.apiBaseUrl ? 'Set' : 'Not Set'}</span>
                      </div>
                    </div>
                    {!testResults.envStatus.supabaseServiceRoleKey && (
                      <Alert className="mt-4">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>
                          <strong>Service Role Key is not set!</strong> Please add VITE_SUPABASE_SERVICE_ROLE_KEY to your .env.local file and restart the development server.
                        </AlertDescription>
                      </Alert>
                    )}
                  </CardContent>
                </Card>
              )}

              {testResults.connection && (
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-base">
                      {getStatusIcon(testResults.connection.success)}
                      Connection Test
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className={`font-medium ${getStatusColor(testResults.connection.success)}`}>
                      {testResults.connection.success ? 'PASSED' : 'FAILED'}
                    </div>
                    {testResults.connection.error && (
                      <div className="text-sm text-red-600 mt-2">
                        {testResults.connection.error}
                      </div>
                    )}
                    {testResults.connection.details && (
                      <div className="text-sm text-muted-foreground mt-2">
                        <div>Using Admin Client: {testResults.connection.details.isUsingAdminClient ? 'Yes' : 'No'}</div>
                        <div>Service Role Key Available: {testResults.connection.details.hasServiceRoleKey ? 'Yes' : 'No'}</div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}

                  {testResults.insert && (
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center gap-2 text-base">
                          {getStatusIcon(testResults.insert.success)}
                          vendor_applications INSERT Test
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className={`font-medium ${getStatusColor(testResults.insert.success)}`}>
                          {testResults.insert.success ? 'PASSED' : 'FAILED'}
                        </div>
                        {testResults.insert.error && (
                          <div className="text-sm text-red-600 mt-2">
                            {testResults.insert.error}
                          </div>
                        )}
                        {testResults.insert.details && (
                          <div className="text-sm text-muted-foreground mt-2">
                            <div>Using Admin Client: {testResults.insert.details.isUsingAdminClient ? 'Yes' : 'No'}</div>
                            <div>Service Role Key Available: {testResults.insert.details.hasServiceRoleKey ? 'Yes' : 'No'}</div>
                            {testResults.insert.details.suggestion && (
                              <div className="text-blue-600 mt-2">
                                💡 {testResults.insert.details.suggestion}
                              </div>
                            )}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )}

                  {testResults.storage && (
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center gap-2 text-base">
                          {getStatusIcon(testResults.storage.success)}
                          Storage Upload Test
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className={`font-medium ${getStatusColor(testResults.storage.success)}`}>
                          {testResults.storage.success ? 'PASSED' : 'FAILED'}
                        </div>
                        {testResults.storage.error && (
                          <div className="text-sm text-red-600 mt-2">
                            {testResults.storage.error}
                          </div>
                        )}
                        {testResults.storage.details && (
                          <div className="text-sm text-muted-foreground mt-2">
                            <div>Success: {testResults.storage.details.successCount}/{testResults.storage.details.totalCount} buckets</div>
                            <div className="mt-2">
                              {Object.entries(testResults.storage.details.results).map(([bucket, result]: [string, any]) => (
                                <div key={bucket} className="flex items-center gap-2">
                                  <span className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center">
                                    {result.success ? '✓' : '✗'}
                                  </span>
                                  <span>{bucket}: {result.success ? 'OK' : result.error}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )}

                  {testResults.formTest && (
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center gap-2 text-base">
                          {getStatusIcon(testResults.formTest.success)}
                          Actual Form Submission Test
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className={`font-medium ${getStatusColor(testResults.formTest.success)}`}>
                          {testResults.formTest.success ? 'PASSED' : 'FAILED'}
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Method: {testResults.formTest.method}
                        </div>
                        {testResults.formTest.error && (
                          <div className="text-sm text-red-600 mt-2">
                            {testResults.formTest.error}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )}

              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Next Steps:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>If INSERT test fails, set VITE_SUPABASE_SERVICE_ROLE_KEY in your .env.local file</li>
                    <li>Or run the SQL script in supabase-rls-policies.sql in your Supabase dashboard</li>
                    <li>Check browser console for detailed error logs</li>
                    <li><strong>Important:</strong> After setting environment variables, restart the development server (Ctrl+C then npm run dev)</li>
                  </ul>
                </AlertDescription>
              </Alert>
            </div>
          )}
        </CardContent>
      </Card>
      </div>
    </MerchantLayout>
  );
};

export default SupabaseTestPage;
