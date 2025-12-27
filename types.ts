import React from 'react';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface MetricData {
  name: string;
  value: number;
}