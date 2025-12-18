import React, { useState } from 'react';
import { Button } from './ui/Button';
import { PageView } from '../App';

interface LoginPageProps {
  onNavigate?: (page: PageView) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate auth check against a specific demo account
    if (email === 'demo@centurim.com' && password === 'password') {
        alert('Login successful');
        setError('');
    } else {
        setError('User Not Detected.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-10 px-6 shadow-xl shadow-slate-200/50 border border-slate-100 sm:rounded-2xl sm:px-12">
            
            <div className="mb-10 text-center">
                 <div className="w-12 h-12 bg-[#0B1120] text-white rounded-xl flex items-center justify-center text-xl font-medium mx-auto mb-6 shadow-lg shadow-slate-900/20">C</div>
                 <h2 className="text-2xl font-medium text-[#0B1120] tracking-tight mb-2">Client Login</h2>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email" className="block text-lg font-medium text-slate-700 mb-2">Email Address</label>
                    <div className="mt-1">
                        <input 
                            id="email" 
                            name="email" 
                            type="email" 
                            autoComplete="email" 
                            required 
                            className="appearance-none block w-full px-4 h-12 border border-slate-200 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent text-base transition-all"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="block text-lg font-medium text-slate-700 mb-2">Password</label>
                    <div className="mt-1">
                        <input 
                            id="password" 
                            name="password" 
                            type="password" 
                            autoComplete="current-password" 
                            required 
                            className="appearance-none block w-full px-4 h-12 border border-slate-200 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent text-base transition-all"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>

                {error && (
                    <div className="rounded-lg bg-red-50 p-4 border border-red-100">
                        <div className="flex">
                            <div className="ml-3">
                                <h3 className="text-lg font-medium text-red-800">
                                    {error} 
                                    <button 
                                        type="button" 
                                        onClick={() => onNavigate?.('contact')} 
                                        className="ml-2 underline hover:text-red-900 cursor-pointer"
                                    >
                                        Sign Up
                                    </button>
                                </h3>
                            </div>
                        </div>
                    </div>
                )}

                <div>
                    <Button 
                        type="submit" 
                        variant="primary" 
                        className="w-full h-12 bg-[#0B1120] hover:bg-slate-800 shadow-lg text-base"
                    >
                        Sign In
                    </Button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};